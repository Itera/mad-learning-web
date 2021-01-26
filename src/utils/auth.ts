import {
  AuthenticationResult,
  BrowserAuthError,
  BrowserAuthErrorMessage,
  Configuration,
  PublicClientApplication,
  RedirectRequest,
  SilentRequest,
  SsoSilentRequest,
} from '@azure/msal-browser';
import { AccountInfo, InteractionRequiredAuthError } from '@azure/msal-browser';
import {
  loginRequest,
  tokenRequest,
  silentRequest,
  msalConfig,
  API_TOKEN_STATE,
} from '../config/authConfig';

class AuthProvider {
  private publicClient: PublicClientApplication;

  private _account: AccountInfo | null = null;
  private _token: AuthenticationResult | null = null;

  private _apiTokenFromRedirect: AuthenticationResult | null = null;

  private initPromise: Promise<void[]>;

  isAuthenticated() {
    return this._token && this._token.expiresOn > new Date();
  }

  get account() {
    return this._account;
  }

  get accountName(): { firstName: string, lastName: string } {
    const account = this._account;

    if (!account)
      throw new Error('Not logged in, cant get name');
    
    const parts = (account.name ?? '').split(' ');

    return {
      firstName: parts.slice(0, -1).join(' '),
      lastName: parts.slice(-1).join(' '),
    };
  }

  get token() {
    return this._token;
  }

  constructor(config: Configuration) {
    this.publicClient = new PublicClientApplication(config);

    const initPromises: Promise<void>[] = [];

    // With msal-browser, everything starts with handleRedirectPromise when using a redirect flow
    // It can resolve with the following cases (it parses the hash pushed to the url from the redirect flow):
    // 1. AuthenticatedResult has value - this means we have been redirected back to the app from the MS login app (login, consent)
    //   1.1 AuthenticatedResult.state contains the LOGIN constant values defined in this app,
    //       (used to identify which flow we are inside since we use redirect flow for both login and API access token)
    //       - in this case we can just store the account and token information in local fields and this flow is done
    //   1.2 AuthenticatedResult.state contains the API constant
    //       - we need to cache the token from the redirect so that we don't request a new one immediately
    // 2. AuthenticatedResult is null
    //   2.1 Account is null
    //       - i.e. we are not logged in for this browser session, redirect to MS login
    //   2.2 Account is not null
    //       - we are logged in to the current session, try to do ssoLogin, and if that fails with InteractionRequiredAuthError,
    //         redirect to MS login to get consent screen
    initPromises.push(
      this.publicClient.handleRedirectPromise()
        .then(r => this.handleRedirectResponse(r, null))
        .catch(e => this.handleRedirectResponse(null, e))
    );

    this.initPromise = Promise.all(initPromises);
  }

  private async handleRedirectResponse(
    response: AuthenticationResult | null,
    err: Error | null
  ) {
    if (err) {
      console.error('login error', err);
      return;
    }

    if (response) {
      // Just got back from login/token redirect
      if (response.state === API_TOKEN_STATE) {
        this.handleApiTokenResponse(response);
        this._apiTokenFromRedirect = response;
      } else {
        this.handleLoginTokenResponse(response);
      }
    } else {
      const account = this.getActiveAccount();
      if (!account) {
        await this.publicClient.loginRedirect(loginRequest);
      } else  {
        this._account = account;
        await this.loginSso(loginRequest);
      }
    }
    
    console.log('handleRedirectResponse');
  }

  private handleLoginTokenResponse(response: AuthenticationResult | null) {
    // console.log('login result', response);

    const account = this.getActiveAccount();

    if (response) {
      // console.log('login success, has response', account);
      this._account = response.account;
      this._token = response;
    } else {
      if (account) {
        // console.log('has accounts', account);
        this._account = account;
      }
    }
  }

  private handleApiTokenResponse(response: AuthenticationResult | null) {
    // console.log('api token result', response);

    if (response) {
      if (!response.accessToken) {
        console.error(
          'api token failed, got response but no accessToken field'
        );
      }
    } else {
      console.error('api token failed, null response but no error');
    }
  }

  private getActiveAccount(): AccountInfo | null {
    const allAccounts = this.publicClient.getAllAccounts();

    if (allAccounts?.length) return allAccounts[0];

    return null;
  }

  private async loginSso(loginRequest: RedirectRequest) {
    try {
      let request = this.createRequestWithLoginHint(loginRequest);
  
      if (request instanceof Error) {
        throw new InteractionRequiredAuthError('cant_create_request');
      }

      const response = await this.publicClient.ssoSilent(request);
      this.handleLoginTokenResponse(response);
    } catch (err) {
      if (err instanceof InteractionRequiredAuthError) {
        try {
          await this.publicClient.loginRedirect(loginRequest);
        } catch (err) {
          if (err instanceof BrowserAuthError && (err as BrowserAuthError).errorCode === BrowserAuthErrorMessage.interactionInProgress.code) {
            console.warn('Tried to issue login via redirect while interaction was in progress, this should be fixed in the future');
          } else {
            console.error(err);
          }
        }
      } else {
        console.error(err);
      }
    }
  }

  private logout() {
    this.publicClient!.logout();
  }

  private createRequestWithActiveAccount(
    request: SilentRequest
  ): SilentRequest | Error {
    const account = this.getActiveAccount();
    if (!account) return new Error('No user, isnt logged in');
    return Object.assign({}, request, { account: account });
  }

  private createRequestWithLoginHint(
    request: SsoSilentRequest | RedirectRequest
  ): SsoSilentRequest | Error {
    const account = this.getActiveAccount();
    if (!account) return new Error('No user, isnt logged in');
    return Object.assign({}, request, { loginHint: account.username });
  }

  async getApiToken(): Promise<AuthenticationResult | null> {
    await this.initPromise;

    console.log('getApiToken');

    if (this._apiTokenFromRedirect) {
      if (this._apiTokenFromRedirect.expiresOn > new Date()) {
        console.log('cached api token');
        return this._apiTokenFromRedirect;
      } else {
        this._apiTokenFromRedirect = null;
      }
    }

    let request = this.createRequestWithActiveAccount(silentRequest);

    if (request instanceof Error) {
      console.error(request);
      return null;
    }

    let response: AuthenticationResult | null = null;
    try {
      response = await this.publicClient.acquireTokenSilent(request);
      this.handleApiTokenResponse(response);
    } catch (err) {
      if (err instanceof InteractionRequiredAuthError) {
        console.warn(
          'silent token acquisition fails. acquiring token using interactive method',
          err
        );

        request = this.createRequestWithActiveAccount(tokenRequest);
        if (request instanceof Error) {
          console.error(request);
          return null;
        }

        await this.publicClient.acquireTokenRedirect(request);
        return null;
        // try {
        //   // console.log('acquireTokenPopup');
        //   response = await this.publicClient.acquireTokenPopup(request);
        //   // console.log('done with acquireTokenPopup, success')
        //   this.handleApiTokenResponse(response, null);
        // } catch (err) {
        //   // console.log('done with acquireTokenPopup, fail', err)
        //   this.handleApiTokenResponse(null, err);
        // }
      } else {
        console.error('unknown error getting api token', err);
      }
    }

    return response;
  }
}

export const AuthProviderInstance = new AuthProvider(msalConfig);
