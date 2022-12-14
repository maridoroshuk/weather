import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';
import App from '@components/App';
import GlobalStyles from './index.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
);
