export const FAVORITE_DISHES_REQUEST = 'FAVORITE_DISHES_REQUEST';
export const FAVORITE_DISHES_SUCCESS = 'FAVORITE_DISHES_SUCCESS';
export const FAVORITE_DISHES_FAILED = 'FAVORITE_DISHES_FAILED';

export interface Dish {
  image: string;
  description: string;
}

export interface FavoriteDishesRequestAction {
  type: typeof FAVORITE_DISHES_REQUEST;
}

export interface FavoriteDishesSuccessAction {
  type: typeof FAVORITE_DISHES_SUCCESS;
  payload: {
    dishes: Dish[],
  }
}

export interface FavoriteDishesFailedAction {
  type: typeof FAVORITE_DISHES_FAILED;
  payload: {
    error: Error;
  };
}

export const favoriteDishesRequestAction = (): FavoriteDishesRequestAction => ({
  type: FAVORITE_DISHES_REQUEST,
});

export const favoriteDishesSuccessAction = (
  dishes: Dish[]
): FavoriteDishesSuccessAction => ({
  type: FAVORITE_DISHES_SUCCESS,
  payload: {
    dishes,
  }
});

export const favoriteDishesFailedAction = (error: Error): FavoriteDishesFailedAction => ({
  type: FAVORITE_DISHES_FAILED,
  payload: {
    error,
  },
});


type Action =
  | FavoriteDishesRequestAction
  | FavoriteDishesSuccessAction
  | FavoriteDishesFailedAction;

export interface DishesState {
  dishes: Dish[];
  error: Error | null;
  loading: boolean;
}

const INITIAL_STATE = {
  dishes: [],
  error: null,
  loading: false,
};

const dishesReducer = (
  state: DishesState = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case FAVORITE_DISHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAVORITE_DISHES_SUCCESS: {
      const { dishes } = action.payload;
      return {
        ...state,
        dishes,
        loading: false,
      };
    }
    case FAVORITE_DISHES_FAILED:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};

export default dishesReducer;
