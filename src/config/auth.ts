import { MsalAuthProvider, LoginType } from 'react-aad-msal';

type MsalParams = ConstructorParameters<typeof MsalAuthProvider>;

const config: MsalParams[0] = {
  auth: {
    authority: 'https://login.microsoftonline.com/common',
    clientId: '<YOUR APPLICATION ID>',
    redirectUri: '<OPTIONAL REDIRECT URI>',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

const authenticationParameters: MsalParams[1] = {
  scopes: [
    '<property (i.e. user.read)>',
    'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>',
  ],
};

const options: MsalParams[2] = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + '/auth.html',
};

export default new MsalAuthProvider(config, authenticationParameters, options);
