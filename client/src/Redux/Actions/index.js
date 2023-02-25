import axios from "axios";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
export const GET_NEW_BY_ID = "GET_NEW_BY_ID";
export const GET_BLOG_BY_ID = "GET_BLOG_BY_ID";
export const GET_NEWS_BY_TITLE = "GET_NEWS_BY_TITLE";
export const GET_LOGIN = "GET_LOGIN";
export const ERROR = "ERROR";
export const RESET_FILTER = "RESET_FILTER";
export const GET_BLOGS_BY_TITLE = "GET_BLOGS_BY_TITLE";

export const getAllNews = () => {
  return async function (dispatch) {
    const news = await axios.get("http://localhost:3500/news/");
    if (news.data) {
      dispatch({ type: GET_ALL_NEWS, payload: news.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getAllBlogs = () => {
  return async function (dispatch) {
    const blogs = await axios.get("http://localhost:3500/blog/");
    if (blogs.data) {
      dispatch({ type: GET_ALL_BLOGS, payload: blogs.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getNewByID = (id) => {
  return async function (dispatch) {
    const newID = await axios.get(`http://localhost:3500/news/?id=${id}`);
    if (newID.data) {
      dispatch({ type: GET_NEW_BY_ID, payload: newID.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getBlogByID = (id) => {
  return async function (dispatch) {
    const blogId = await axios.get(`http://localhost:3500/blog/${id}`);
    if (blogId.data) {
      dispatch({ type: GET_BLOG_BY_ID, payload: blogId.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getNewsByTitle = (name) => {
  return async function (dispatch) {
    const newsByTitle = await axios.get(
      `http://localhost:3500/news/?name=${name}`
    );
    if (newsByTitle.data) {
      dispatch({ type: GET_NEWS_BY_TITLE, payload: newsByTitle.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getBlogByTitle = (name) => {
  return async function (dispatch) {
    const blogByTitle = await axios.get(`http://localhost:3500/blog/?title=${name}`);
    if (blogByTitle.data) {
      dispatch({ type: GET_BLOGS_BY_TITLE, payload: blogByTitle.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getLogin = () => {
  return async function (dispatch) {
    const user = await axios.post("http://localhost:3500/auth/login");
    if (user.data) {
      dispatch({ type: GET_LOGIN, payload: user.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const setError = () => {
  return { type: ERROR };
};

export const resetFilter = () => {
  return function (dispatch) {
    dispatch({ type: RESET_FILTER });
  };
};
