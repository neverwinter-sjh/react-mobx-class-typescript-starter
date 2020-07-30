import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import Store from './stores/index';
import App from './App';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  store: new Store(),
  routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider store={stores.store} routing={stores.routing}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
