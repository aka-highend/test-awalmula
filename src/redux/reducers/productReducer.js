import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [],
  // categories: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { 
        ...state,
        products: payload
        // categories: payload
      };
    default:
      return state;
  }
};