import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFontLoader from 'webfontloader';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

import './index.css';
import App from './components/App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { history } from './middlewares/history';
import AuthorizedOnly from './hoc/AuthorizedOnly';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <div>
        <Route exact path="/" component={ AuthorizedOnly()(App) } />
        <Route path="/login" component={ Login } />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
