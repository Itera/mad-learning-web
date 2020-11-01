import React, { ReactNode } from 'react';
import { AzureAD } from 'react-aad-msal';

import { ThemeProvider } from './hooks/theme';
import authProvider from './config/auth';
import theme from './config/theme';

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      <ThemeProvider options={theme}>{children}</ThemeProvider>
    </AzureAD>
  );
}

export default Providers;
