import React from 'react';
import { Router } from '@reach/router';

import AppWrapper from './components/AppWrapper';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/NavMenu';
import Providers from './Providers';
import routes from './config/routes';

function App() {
  return (
    <Providers>
      <AppWrapper>
        <GlobalStyle />
        <header>
          <Navbar />
        </header>
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
