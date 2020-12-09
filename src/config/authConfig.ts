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

export const loginRequest: RedirectRequest = {
  scopes: ['openid', 'profile', 'offline_access'],
  account: null!,
};

const apiScope = `api://${apiClientId}/.default`;

export const tokenRequest: SilentRequest = {
  scopes: [apiScope],
  forceRefresh: false,
  account: null!,
};

export const silentRequest: SilentRequest = {
  scopes: ['openid', 'profile', apiScope],
  forceRefresh: false,
  account: null!,
};
