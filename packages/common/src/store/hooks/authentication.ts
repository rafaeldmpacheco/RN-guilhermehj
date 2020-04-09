import { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";

import {
  authLogoutAction,
  authRequestAction,
  createAccountRequestAction,
  AuthState as AuthState
} from '../ducks/authentication';

interface State {
  auth: AuthState,
}

const useAuthState = () => {
  return useSelector((state: State) => state.auth);
};

export const useAuthHandlers = () => {
  const dispatch = useDispatch();
  const login = useCallback((username, password) => {
    dispatch(authRequestAction(username, password));
  },[]);

  const createAccount = useCallback((username, password) => {
    dispatch(createAccountRequestAction(username, password))
  },[]);

  return  {
    login,
    createAccount,
  };
};

export const useIsAuthenticated = () => {
  const state = useAuthState();
  return state.authenticated;
};

export const useAuthError = () => {
  return useSelector((state: State) => state.auth.error);
};

export const useLogoutHandler = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(authLogoutAction())
  },[]);
};
