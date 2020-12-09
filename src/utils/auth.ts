import {
  AuthenticationResult,
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
} from '../config/authConfig';

class AuthProvider {
  private publicClient: PublicClientApplication;

  private _account: AccountInfo | null = null;
  private _token: AuthenticationResult | null = null;

  private loginPromise: Promise<void> | null = null;
  private initPromise: Promise<void[]>;

  get isAuthenticated() {
    return this._token && this._token.expiresOn > new Date();
  }

  get account() {
    return this._account;
  }

  get token() {
    return this._token;
  }

  constructor(config: Configuration) {
    this.publicClient = new PublicClientApplication(config);

    console.log('starting auth provider');

    const initPromises: Promise<void>[] = [];

    initPromises.push(
      (async (publicClient: PublicClientApplication) => {
        try {
          const response = await publicClient.handleRedirectPromise();
          this.handleLoginResponse(response, null);
        } catch (err) {
          this.handleLoginResponse(null, err);
        }
      })(this.publicClient)
    );

    const account = this.getActiveAccount();

    if (account) {
      console.log('found cached account', account);
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

  private handleLoginResponse(
    response: AuthenticationResult | null,
    err: Error | null
  ) {
    if (err) {
      console.error('login error', err);
      return;
    }

    console.log('login result', response);

    const account = this.getActiveAccount();

    if (response) {
      console.log('login success, has response', account);
      this._account = account;
      this._token = response;
    } else {
      if (account) {
        console.log('has accounts', account);
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

    console.log('api token result', response);

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
    if (this.isAuthenticated) {
      return;
    }

    let request = this.createRequestWithLoginHint(loginRequest);

    if (request instanceof Error) {
      console.error(request);
      return;
    }

    try {
      const response = await this.publicClient.ssoSilent(request);
      this.handleLoginResponse(response, null);
    } catch (err) {
      if (err instanceof InteractionRequiredAuthError) {
        try {
          await this.publicClient.loginRedirect(loginRequest);
        } catch (err) {
          console.error(err);
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

        try {
          response = await this.publicClient.acquireTokenPopup(request);
          this.handleApiTokenResponse(response, null);
        } catch (err) {
          this.handleApiTokenResponse(null, err);
        }
      } else {
        console.error('unknown error getting api token', err);
      }
    }

    return response;
  }
}

export const AuthProviderInstance = new AuthProvider(msalConfig);
