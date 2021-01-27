import {
  Configuration,
  RedirectRequest,
  SilentRequest,
} from '@azure/msal-browser';
import { getEnvironmentVariables } from 'src/utils/env';

const env = getEnvironmentVariables();

const webClientId = env.webClientId;
const tenantId = env.tenantId;
const apiClientId = env.apiClientId;
const webUrl = env.webUrl;

export const msalConfig: Configuration = {
  auth: {
    clientId: webClientId,
    authority: `https://login.microsoft.com/${tenantId}`,
    redirectUri: webUrl,
  },
  cache: {
    cacheLocation: 'localStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
  },
};

export const LOGIN_STATE = 'login';

export const loginRequest: RedirectRequest = {
  scopes: ['openid', 'profile'],
  account: null!,
  state: LOGIN_STATE,
};

const apiScope = `api://${apiClientId}/.default`;

export const API_TOKEN_STATE = 'api-token';

export const tokenRequest: SilentRequest & { state?: string } = {
  scopes: [apiScope],
  forceRefresh: false,
  account: null!,
  state: API_TOKEN_STATE,
};

export const silentRequest: SilentRequest & { state?: string } = {
  scopes: ['openid', 'profile', apiScope],
  account: null!,
  state: API_TOKEN_STATE,
};
