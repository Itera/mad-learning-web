import React from 'react';
import { Router } from '@reach/router';

import AppWrapper from './components/AppWrapper';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyle';
import Providers from './Providers';
import routes from './config/routes';

import { useMsal } from "./config/auth";

function App() {
  const { loading,  popupOpen } = useMsal();

  if (loading || popupOpen) {
    return <div>Loading...</div>;
  }

  return (
    <Providers>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <AppWrapper>
        <main>
          <Router>
            {routes.map(({ path, component: Component }) => (
              <Component key={path} path={path} />
            ))}
          </Router>
        </main>
      </AppWrapper>
    </Providers>
  );
}

export default App;
