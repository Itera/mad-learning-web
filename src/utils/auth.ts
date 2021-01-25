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
  private _tokenPromise: Promise<void>;
  private _tokenPromiseResolver: () => void;

  private loginPromise: Promise<void> | null = null;
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

    // console.log('starting auth provider');

    const initPromises: Promise<void>[] = [];

    this._tokenPromiseResolver = () => {};
    this._tokenPromise = new Promise<void>(r => this._tokenPromiseResolver = r);

    initPromises.push(
      this.publicClient.handleRedirectPromise()
        .then(r => this.handleRedirectResponse(r, null))
        .catch(e => this.handleRedirectResponse(null, e))
    );

    const account = this.getActiveAccount();

    if (account) {
      // console.log('found cached account', account);
      this._account = account;
    }

    initPromises.push(
      (async () => {
        if (this.loginPromise) await this.loginPromise;
        this.loginPromise = this.login(loginRequest);
        await this.loginPromise;
      })()
    );

    this.initPromise = Promise.all(initPromises);
  }

  private handleRedirectResponse(
    response: AuthenticationResult | null,
    err: Error | null
  ) {
    if (response?.state === API_TOKEN_STATE)
    {
      this.handleApiTokenResponse(response, err);
    }
    else 
    {
      this.handleLoginTokenResponse(response, err);
    }
  }

  private handleLoginTokenResponse(
    response: AuthenticationResult | null,
    err: Error | null
  ) {
    if (err) {
      console.error('login error', err);
      return;
    }

    // console.log('login result', response);

    const account = this.getActiveAccount();

    if (response) {
      // console.log('login success, has response', account);
      this._account = account;
      this._token = response;
      this._tokenPromiseResolver();
    } else {
      if (account) {
        // console.log('has accounts', account);
        this._account = account;
      }
    }
  }

  private handleApiTokenResponse(
    response: AuthenticationResult | null,
    err: Error | null
  ) {
    if (err) {
      console.error('api token error', err);
      return;
    }

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

  private async login(loginRequest: RedirectRequest) {
    if (this.isAuthenticated()) {
      return;
    }

    try {
      let request = this.createRequestWithLoginHint(loginRequest);
  
      if (request instanceof Error) {
        throw new InteractionRequiredAuthError('cant_create_request');
      }

      const response = await this.publicClient.ssoSilent(request);
      this.handleRedirectResponse(response, null);
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
    if (this.loginPromise) await this.loginPromise;
    await this._tokenPromise;

    let request = this.createRequestWithActiveAccount(silentRequest);

    if (request instanceof Error) {
      console.error(request);
      return null;
    }

    let response: AuthenticationResult | null = null;
    try {
      response = await this.publicClient.acquireTokenSilent(request);
      this.handleApiTokenResponse(response, null);
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
