import * as msal from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '{web-client-id}',
        authority: 'https://login.microsoft.com/{tenant-id}}',
        redirectUri: 'http://localhost:3000',
    },
    cache: {
        cacheLocation: 'localStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to 'true' if you are having issues on IE11 or Edge
    }
};

export const loginRequest: msal.SilentRequest = {
    scopes: ['openid', 'profile', 'offline_access'],
    forceRefresh: false,
    account: null!,
};

export const tokenRequest: msal.SilentRequest = {
    scopes: ['api://{api-client-id}}/.default'],
    forceRefresh: false,
    account: null!,
};

export const silentRequest: msal.SilentRequest = {
    scopes: ['openid', 'profile', 'api://{api-client-id}/.default'],
    forceRefresh: false,
    account: null!,
}