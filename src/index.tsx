import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { MsalProvider } from './config/auth';
import { msalConfig } from './config/authConfig';

function MadLearning(): JSX.Element {
  return (
    <React.StrictMode>
      <MsalProvider
        config={msalConfig}>
        <App />
      </MsalProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<MadLearning />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
