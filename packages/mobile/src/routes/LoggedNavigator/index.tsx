import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteDishesScreen from '../../screens/FavoriteDishes';

export type SignInStackParamList = {
  Dashboard: undefined;
};

const LoggedDrawer = createDrawerNavigator<SignInStackParamList>();

const LoggedNavigator = () => {
  return (
    <LoggedDrawer.Navigator
      initialRouteName="Dashboard"
      overlayColor="transparent"
      drawerStyle={{
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        overflow: 'visible',
      }}
    >
      <LoggedDrawer.Screen
        name="Dashboard"
        component={FavoriteDishesScreen}
      />
    </LoggedDrawer.Navigator>
  );
};

export default LoggedNavigator;
