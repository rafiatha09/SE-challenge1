import { ActionTypes } from "./postAction";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
