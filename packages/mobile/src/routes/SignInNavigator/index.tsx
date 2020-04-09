import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import LoginScreen from '../../screens/Login';
import CreateAccountScreen from '../../screens/CreateAccount';

export type SignInStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
};

const SignInStack = createStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
  return (
    <SignInStack.Navigator
      initialRouteName="Login"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <SignInStack.Screen name="Login" component={LoginScreen} />
      <SignInStack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </SignInStack.Navigator>
  );
};

export default SignInNavigator;
