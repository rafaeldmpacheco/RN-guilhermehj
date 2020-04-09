import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router';
import { useIsAuthenticated } from '@serasa/common';


const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
