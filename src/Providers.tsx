import React, { ReactNode } from 'react';
import { ThemeProvider } from './hooks/theme';
import theme from './config/theme';

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
      <ThemeProvider options={theme}>{children}</ThemeProvider>
  );
}

export default Providers;
