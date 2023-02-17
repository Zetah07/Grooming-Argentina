/* eslint-disable no-unused-vars */
import { GET_ALL_NEWS, GET_LOGIN, ERROR } from "../Actions";

const initialState = {
  news: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, news: action.payload };
    case GET_LOGIN:
      return { ...state, user: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
