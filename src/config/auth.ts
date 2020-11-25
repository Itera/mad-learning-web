import { ComponentType, FunctionComponent } from 'react';
import { AccessTokenResponse } from 'react-aad-msal/dist/typings/AccessTokenResponse';
import {
  LoginType,
  MsalAuthProvider,
  withAuthentication,
} from 'react-aad-msal';

type MsalParams = ConstructorParameters<typeof MsalAuthProvider>;

const config: MsalParams[0] = {
  auth: {
    authority: 'https://login.microsoft.com/<tenant_id>',
    clientId: '<client_id>',
    redirectUri: 'http://localhost:3000/#',
    validateAuthority: true, // false when B2C
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};

const authenticationParameters: MsalParams[1] = {
  scopes: ['openid', '<application_id_uri>'],
};

const options: MsalParams[2] = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin,
};

const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);

export default class Authentication {
  static secure(Component: ComponentType<any>): FunctionComponent {
    return withAuthentication(Component, {
      provider: authProvider,
      forceLogin: true,
    });
  }

  static getToken(): Promise<AccessTokenResponse> {
    return authProvider.getAccessToken();
  }

  static logout(): void {
    return authProvider.logout();
  }
}
