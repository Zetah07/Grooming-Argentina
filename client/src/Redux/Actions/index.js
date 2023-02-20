import axios from "axios";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const GET_NEW_BY_ID = "GET_NEW_BY_ID";
export const GET_LOGIN = "GET_LOGIN";
export const ERROR = "ERROR";

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

export const getNewByID = (id) => {
  console.log(id)
  return async function (dispatch) {
    const newID = await axios.get(`http://localhost:3500/news/?id=${id}`);
    if (newID.data) {
      dispatch({ type: GET_NEW_BY_ID, payload: newID.data });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const getLogin = () => {
  return async function (dispatch) {
    const user = await axios.post("/auth/login");
    if (user.data.user) {
      dispatch({ type: GET_LOGIN, payload: user.data.user });
    } else {
      dispatch({ type: ERROR });
    }
  };
};

export const setError = () => {
  return { type: ERROR };
};
