import React, {RefObject} from 'react';
import {
  BrowserRouter,
  Redirect, Route, Switch,
} from 'react-router-dom';

import { useIsAuthenticated } from '@serasa/common';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import FavoriteDishesPage from '../pages/FavoriteDishes';

export const routerRef: RefObject<BrowserRouter> = React.createRef<BrowserRouter>();

export const navigate = (path: string) => {
  // @ts-ignore
  routerRef.current?.history.push(path);
};

const Routes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Switch>
        <PrivateRoute path="/dishes">
          <FavoriteDishesPage />
        </PrivateRoute>
        <Route path="/login">
          {isAuthenticated ? <Redirect to="/dishes" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {isAuthenticated ? <Redirect to="/dishes" /> : <SignupPage />}
        </Route>
        <Route path="/">
          {isAuthenticated ? <Redirect to="/dishes" /> :  <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  )
};

export default Routes;