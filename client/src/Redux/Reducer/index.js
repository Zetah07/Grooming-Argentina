/* eslint-disable no-unused-vars */
import {
  GET_ALL_NEWS,
  GET_ALL_BLOGS,
  GET_NEW_BY_ID,
  GET_BLOG_BY_ID,
  GET_NEWS_BY_TITLE,
  GET_BLOGS_BY_TITLE,
  GET_LOGIN,
  ERROR,
  RESET_FILTER,
} from "../Actions";

const initialState = {
  news: [],
  newID: [],
  blogs: [],
  blogId: [],
  filter: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, news: action.payload, filter: true };
    case GET_ALL_BLOGS:
      return { ...state, blogs: action.payload, filter: true };
    case GET_NEW_BY_ID:
      return { ...state, newID: action.payload };
    case GET_BLOG_BY_ID:
      return { ...state, blogId: action.payload };
    case GET_NEWS_BY_TITLE:
      return { ...state, news: action.payload, filter: true };
    case GET_BLOGS_BY_TITLE:
      return { ...state, blogs: action.payload, filter: true };
    case GET_LOGIN:
      return { ...state, user: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case RESET_FILTER:
      return { ...state, filter: false }
    default:
      return { ...state };
  }
};

export default rootReducer;
