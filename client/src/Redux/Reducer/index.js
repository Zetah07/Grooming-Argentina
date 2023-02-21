/* eslint-disable no-unused-vars */
import { GET_ALL_NEWS, GET_NEW_BY_ID, GET_LOGIN, ERROR } from "../Actions";

const initialState = {
  news: [],
  newID: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, news: action.payload };
    case GET_NEW_BY_ID:
      return { ...state, newID: action.payload };
    case GET_LOGIN:
      return { ...state, user: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
