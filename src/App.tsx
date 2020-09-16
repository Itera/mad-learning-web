import React from 'react';
import { Router } from '@reach/router';

import NavMenu from './components/NavMenu';
import routes from './config/routes';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
