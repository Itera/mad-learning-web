import React, { useLayoutEffect } from 'react';
import { Router } from '@reach/router';

import AppWrapper from './components/AppWrapper';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyle';
import Providers from './Providers';
import routes from './config/routes';

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <AppWrapper>
        <main>
          <Router>
            <ScrollToTopHack path="/">
              {routes.map(({ path, component: Component }) => (
                <Component key={path} path={path} />
              ))}
            </ScrollToTopHack>
          </Router>
        </main>
      </AppWrapper>
    </Providers>
  );
}

/*
 * Due to accessibility reasons, reach-router will focus on the destination
 * page's content after a navigation. However, a side-effect of the focus
 * operation is to scroll to the focused content, which is an unexpected
 * behavior for users relying on visuals. To fix this issue, without breaking
 * the accessibility functionality, we must manually scroll to the top of the
 * page after each navigation.
 *
 * For more details, see:
 * - https://github.com/reach/router/issues/242; and
 * - https://stackoverflow.com/a/56996986.
 */
function ScrollToTopHack({ location, children }: any) {
  useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
}

export default App;
