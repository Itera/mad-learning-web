
import * as React from 'react';
import { useState, useEffect, useContext, ReactNode } from 'react';
import * as msal from '@azure/msal-browser';
import { AccountInfo } from '@azure/msal-browser';
import { loginRequest, tokenRequest, silentRequest } from './authConfig';

const ua = window.navigator.userAgent;
const msie = ua.indexOf('MSIE ');
const msie11 = ua.indexOf('Trident/');
const msedge = ua.indexOf('Edge/');
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;

export let authToken: msal.AuthenticationResult | null = null;

type MsalContextProps = {
    isAuthenticated: boolean,
    user: msal.AccountInfo | undefined,
    token: msal.AuthenticationResult | undefined,
    apiToken: msal.AuthenticationResult | undefined,
    loading: boolean,
    popupOpen: boolean,
    loginError: boolean
};

type MsalProviderProps = {
    children: ReactNode,
    config: any,
}

export const MsalContext = React.createContext<MsalContextProps>({
    isAuthenticated: false,
    user: undefined,
    token: undefined,
    apiToken: undefined,
    loading: true,
    popupOpen: false,
    loginError: false
});
export const useMsal = () => useContext(MsalContext);
export const MsalProvider = ({
    children,
    config
}: MsalProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AccountInfo>();
    const [token, setToken] = useState<msal.AuthenticationResult>();
    const [apiToken, setApiToken] = useState<msal.AuthenticationResult>();
    const [publicClient] = useState<msal.PublicClientApplication>(new msal.PublicClientApplication(config));
    const [loading, setLoading] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [loginError, setLoginError] = useState(false);

    let loggingIn = false;

    useEffect(() => {
        publicClient.handleRedirectPromise().then(handleResponse).catch(error => {
            console.log(error);
            setLoginError(error);
        });

        const gotAccount = getAccount();

        if (gotAccount) {
            console.log('has accounts', gotAccount);
            setUser(gotAccount);
            setIsAuthenticated(true);

            getToken().then(apiToken => {
                console.log('apiToken', apiToken);
                setApiToken(apiToken!);
                authToken = apiToken!;
            });
        }
        else if (!loading && !loggingIn) {
            console.log('login', loginRequest);
            login(loginRequest, 'loginRedirect');
        }
    }, []);

    const handleResponse = (response: msal.AuthenticationResult | null) => {
        console.log('auth result', response);

        const gotAccount = getAccount();

        if (response) {
            console.log('has accounts', gotAccount);
            setUser(gotAccount);
            setIsAuthenticated(true);
            setLoading(false);
            loggingIn = false;
            if(response.accessToken) {
              setToken(response);
            }
        } else {
            if (gotAccount) {
                console.log('has accounts', gotAccount);
                setUser(gotAccount);
                setIsAuthenticated(true);
                setLoading(false);
                loggingIn = false;
            }
        }
    }

    const getAccount = (): AccountInfo | undefined => {
        if (publicClient.getAllAccounts() && publicClient.getAllAccounts().length > 0)
            return publicClient.getAllAccounts()[0];

        return undefined;
    }

    const login = async (loginRequest: any, method: any) => {
        if (loggingIn)
            return;
        
        loggingIn = true;

        const signInType = (isIE || isEdge) ? 'loginRedirect' : method;
        if (signInType === 'loginPopup') {
            setPopupOpen(true);

            try {
                await publicClient!.loginPopup(loginRequest);

                const gotAccount = getAccount();
                if (gotAccount) {
                    setUser(gotAccount);
                    setIsAuthenticated(true);

                    getToken().then(apiToken => {
                        console.log('apiToken', apiToken);
                        setApiToken(apiToken!);
                        authToken = apiToken!;
                    });
                }
            } catch (error) {
                console.log(error);
                setLoginError(error);
            } finally {
                setPopupOpen(false);
                loggingIn = false;
            }
        } else if (signInType === 'loginRedirect') {
            setLoading(true);

            try {
                await publicClient!.loginRedirect(loginRequest);

                getToken().then(apiToken => {
                    console.log('apiToken', apiToken);
                    setApiToken(apiToken!);
                    authToken = apiToken!;
                });
            } catch (err) {
                console.error(err);
            }
        }
    }

    const logout = () => {
        publicClient!.logout();
    }

    const getToken = async () => {
        const gotAccount = getAccount();
        silentRequest.account = gotAccount!;

        if (!gotAccount)
        {
            console.error('No user!');
            return undefined;
        }

        try {
            return await publicClient.acquireTokenSilent(silentRequest);
        } catch (err) {
            console.warn("silent token acquisition fails. acquiring token using interactive method", err);
            if (err) {
                const gotAccount = getAccount();
                tokenRequest.account = gotAccount!;

                try {
                    
                } catch (err) {

                }
                await publicClient.acquireTokenPopup(tokenRequest)
                    .then(handleResponse)
                    .catch(error => {
                        console.error(error);
                    });
                    
                return authToken!;
            } else {
                console.warn(err);   
            }
        }
    }

    return (
        <MsalContext.Provider
            value={{
                isAuthenticated,
                user,
                token,
                apiToken,
                loading,
                popupOpen,
                loginError
            }}
        >
            {children}
        </MsalContext.Provider>
    );
};
