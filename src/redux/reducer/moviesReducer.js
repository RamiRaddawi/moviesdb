import { AllMOVIES } from "../types/moviesTypes";

const initValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data, pageCount: action.pages };

    default:
      return state;
  }
};
