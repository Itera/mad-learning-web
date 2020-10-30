// authProvider.js
import {MsalAuthProvider, LoginType} from 'react-aad-msal';

// Msal Configurations
const config = {
    auth: {
        authority: 'https://login.microsoftonline.com/common',
        clientId: '<YOUR APPLICATION ID>',
        redirectUri: '<OPTIONAL REDIRECT URI>'
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
};

// Authenication Parameters
const authenticationParameters = {
    scopes: [
        '<property (i.e. user.read)>', 
        'https://<your-tenant-name>.onmicrosoft.com/<your-application-name>/<scope (i.e. demo.read)>'
    ]  
}

// Options
const options = {
    loginType: LoginType.Popup,
    tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)
