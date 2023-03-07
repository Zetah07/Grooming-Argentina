import axios from "axios";
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
export const ACTIVE_FILTER = "ACTIVE_FILTER";
export const RESET_PAGINATION = "RESET_PAGINATION";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const getAllNews = (page, newsPerPage, name, category, province) => {
  return async function (dispatch) {
    let news = {};
    if (!name && !category && !province) {
      news = await axios.get(`/news?page=${page}&limit=${newsPerPage}`);
    } else if (name) {
      news = await axios.get(
        `/news?page=${page}&limit=${newsPerPage}&name=${name}`
      );
    } else if (category) {
      news = await axios.get(
        `/news?page=${page}&limit=${newsPerPage}&categoria=${category}`
      );
    } else if (province) {
      news = await axios.get(
        `/news?page=${page}&limit=${newsPerPage}&provinciaOLocacion=${province}`
      );
    }
    if (news.data) {
      dispatch({ type: GET_ALL_NEWS, payload: news.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getAllBlogs = (page, blogsPerPage, title, sort) => {
  return async function (dispatch) {
    let blogs = {};
    if (!title && !sort) {
      blogs = await axios.get(`/blog?page=${page}&limit=${blogsPerPage}`);
    } else if (title) {
      blogs = await axios.get(
        `/blog?page=${page}&limit=${blogsPerPage}&title=${title}`
      );
    } else if (sort) {
      blogs = await axios.get(
        `/blog?page=${page}&limit=${blogsPerPage}&sort=${sort}`
      );
    }
    if (blogs.data) {
      dispatch({ type: GET_ALL_BLOGS, payload: blogs.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getNewByID = (id) => {
  return async function (dispatch) {
    const newID = await axios.get(`/news/?id=${id}`);
    if (newID.data) {
      dispatch({ type: GET_NEW_BY_ID, payload: newID.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getBlogByID = (id) => {
  return async function (dispatch) {
    const blogId = await axios.get(`/blog/${id}`);
    if (blogId.data) {
      dispatch({ type: GET_BLOG_BY_ID, payload: blogId.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getLogin = () => {
  return async function (dispatch) {
    const user = await axios.post("/auth/login");
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

export const activeFilter = () => {
  return function (dispatch) {
    dispatch({ type: ACTIVE_FILTER });
  };
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

export const getCategories = () => {
  return async function (dispatch) {
    const categories = await axios.get(`/category`);
    if (categories.data) {
      dispatch({ type: GET_CATEGORIES, payload: categories.data.categories });
    } else {
      dispatch({ type: ERROR });
    }
  };
};
