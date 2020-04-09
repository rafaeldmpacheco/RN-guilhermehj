export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILED = 'CREATE_ACCOUNT_FAILED';

export interface CreateAccountRequestAction {
  type: typeof CREATE_ACCOUNT_REQUEST;
  payload: {
    username: string;
    password: string;
  };
}

export interface CreateAccountSuccessAction {
  type: typeof CREATE_ACCOUNT_SUCCESS;
}

export interface CreateAccountFailedAction {
  type: typeof CREATE_ACCOUNT_FAILED;
  payload: {
    error: Error;
  };
}

export interface AuthRequestAction {
  type: typeof AUTH_REQUEST;
  payload: {
    username: string;
    password: string;
  };
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
}

export interface AuthFailedAction {
  type: typeof AUTH_FAILED;
  payload: {
    error: Error;
  };
}

export interface AuthLogoutAction {
  type: typeof AUTH_LOGOUT;
}

export const createAccountRequestAction = (
  username: string,
  password: string
): CreateAccountRequestAction => ({
  type: CREATE_ACCOUNT_REQUEST,
  payload: {
    username,
    password,
  },
});

export const createAccountSuccessAction = (): CreateAccountSuccessAction => ({
  type: CREATE_ACCOUNT_SUCCESS,
});

export const createAccountFailedAction = (error: Error): CreateAccountFailedAction => ({
  type: CREATE_ACCOUNT_FAILED,
  payload: {
    error,
  },
});


export const authRequestAction = (
  username: string,
  password: string
): AuthRequestAction => ({
  type: AUTH_REQUEST,
  payload: {
    username,
    password,
  },
});

export const authSuccessAction = (): AuthSuccessAction => ({
  type: AUTH_SUCCESS,
});

export const authFailedAction = (error: Error): AuthFailedAction => ({
  type: AUTH_FAILED,
  payload: {
    error,
  },
});

export const authLogoutAction = (): AuthLogoutAction => ({
  type: AUTH_LOGOUT,
});

export type AuthAction =
  | AuthRequestAction
  | AuthSuccessAction
  | AuthFailedAction
  | AuthLogoutAction
  | CreateAccountSuccessAction
  | CreateAccountRequestAction
  | CreateAccountFailedAction;

export interface AuthState {
  authenticated: boolean;
  error: Error | null;
  loading: boolean;
}

export const AUTH_INITIAL_STATE = {
  authenticated: false,
  error: null,
  loading: false,
};

const authenticationReducer = (
  state: AuthState = AUTH_INITIAL_STATE,
  action: AuthAction
) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        authenticated: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
      };
    case AUTH_FAILED:
      const { error } = action.payload;
      return {
        ...state,
        error,
        authenticated: false,
      };
    case AUTH_LOGOUT:
      return AUTH_INITIAL_STATE;
    default:
      return state;
  }
};

export default authenticationReducer;
