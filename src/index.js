import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './config/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
