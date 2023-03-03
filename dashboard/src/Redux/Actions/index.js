import axios from "../../api/axios";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
export const GET_NEW_BY_ID = "GET_NEW_BY_ID";
export const GET_BLOG_BY_ID = "GET_BLOG_BY_ID";
export const GET_NEWS_BY_TITLE = "GET_NEWS_BY_TITLE";
export const GET_NEWS_BY_CATEGORY = "GET_NEWS_BY_CATEGORY";
export const GET_NEWS_BY_PROVINCE = "GET_NEWS_BY_PROVINCE";
export const GET_LOGIN = "GET_LOGIN";
export const ERROR = "ERROR";
export const RESET_FILTER = "RESET_FILTER";
export const GET_BLOGS_BY_TITLE = "GET_BLOGS_BY_TITLE";
export const GET_BLOGS_SORT_BY_DATE = "GET_BLOGS_SORT_BY_DATE";
export const RESET_PAGINATION = "RESET_PAGINATION";

export const getAllNews = (page, newsPerPage) => {
  return async function (dispatch) {
    const news = await axios.get(
      `http://localhost:3500/news?page=${page}&limit=${newsPerPage}`
    );
    if (news.data) {
      dispatch({ type: GET_ALL_NEWS, payload: news.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getAllBlogs = (page, blogsPerPage) => {
  return async function (dispatch) {
    const blogs = await axios.get(`http://localhost:3500/blog?page=${page}&limit=${blogsPerPage}`);
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
    const blogByTitle = await axios.get(
      `http://localhost:3500/blog/?title=${name}`
    );
    if (blogByTitle.data) {
      dispatch({ type: GET_BLOGS_BY_TITLE, payload: blogByTitle.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getNewsByCategory = (name) => {
  return async function (dispatch) {
    const newsByCategory = await axios.get(
      `http://localhost:3500/news?categoria=${name}`
    );
    if (newsByCategory.data) {
      dispatch({ type: GET_NEWS_BY_CATEGORY, payload: newsByCategory.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getNewsByProvince = (province) => {
  return async function (dispatch) {
    const newsByProvince = await axios.get(
      `http://localhost:3500/news?provinciaOLocacion=${province}`
    );
    if (newsByProvince.data) {
      dispatch({ type: GET_NEWS_BY_PROVINCE, payload: newsByProvince.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getBlogsSortByDate = (sort) => {
  return async function (dispatch) {
    const blogSort = await axios.get(`http://localhost:3500/blog?sort=${sort}`);
    if (blogSort.data) {
      dispatch({ type: GET_BLOGS_SORT_BY_DATE, payload: blogSort.data });
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

export const resetPagination = () => {
  return function (dispatch) {
    dispatch({ type: RESET_PAGINATION });
  };
};
