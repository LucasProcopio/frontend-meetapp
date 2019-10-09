import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';

import { store } from './store';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
      <ToastContainer position="top-center" autoClose={2800} />
    </Provider>
  );
}

export default App;
