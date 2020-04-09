import { useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { favoriteDishesRequestAction,  DishesState } from "../ducks/dishes";

interface State {
  dishes: DishesState,
}

const useDishesState = () => {
  return useSelector((state: State) => state.dishes);
};

export const useDishesHandlers = () => {
  const dispatch = useDispatch();
  const retrieveDishes = useCallback(() => {
    dispatch(favoriteDishesRequestAction());
  },[]);

  return  {
    retrieveDishes,
  };
};

export const useDishes = () => {
  const state = useDishesState();
  return state.dishes || [];
};

export const useDishesError = () => {
  const state = useDishesState();
  return state.error;
};

