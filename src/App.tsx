import React from 'react';
import { Router } from '@reach/router';

import AppWrapper from './components/AppWrapper';
import GlobalStyle from './GlobalStyle';
import NavMenu from './components/NavMenu';
import routes from './config/routes';

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <h1>Mad Learning</h1>
      <header>
        <NavMenu />
      </header>
      <main>
        <Router>
          {routes.map(({ path, component: Component }) => (
            <Component key={path} path={path} />
          ))}
        </Router>
      </main>
    </AppWrapper>
  );
}

export default App;
