import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useIsAuthenticated } from '@serasa/common';

import LoggedNavigator from '../LoggedNavigator';
import SignInNavigator from '../SignInNavigator';
import ModalScreen from '../../screens/Modal';

export type MainStackParamList = {
  SignIn: undefined;
  Logged: undefined;
  Modal: {
    text: string;
    duration?: number;
    fallbackRoute?: string;
    type: 'success' | 'error' | 'warning'
  };
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <MainStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
      mode="modal"
      headerMode="none"
    >
      {!isAuthenticated && <MainStack.Screen name="SignIn" component={SignInNavigator} />}
      {isAuthenticated && <MainStack.Screen name="Logged" component={LoggedNavigator} />}
      <MainStack.Screen name="Modal" component={ModalScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
