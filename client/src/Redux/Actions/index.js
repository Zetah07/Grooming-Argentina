import axios from "axios";
export const GET_ALL_NEWS = "GET_ALL_NEWS";
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
