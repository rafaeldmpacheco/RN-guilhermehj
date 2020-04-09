import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import createSagaMiddleWare from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from '@serasa/common';
import 'react-toastify/dist/ReactToastify.css';

import { sagaEffects } from './saga';
import Routes, { routerRef } from './routes';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagaEffects);

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  body {
    #root {
      height: 100%;
      width: 100%;
    }
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Titillium Web', sans-serif;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Router ref={routerRef}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
