import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import createSagaMiddleWare from 'redux-saga';

import { reducers } from '@serasa/common';
import MainNavigator from './routes/MainNavigator';
import { navigationRef } from './routes';
import { sagaEffects } from './saga';

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagaEffects);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;