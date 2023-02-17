// import axios from "axios";

// export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
// export const GET_ALL_NEWS = "GET_ALL_NEWS";
// export const GET_ALL_NEWS_BY_CATEGORY = "GET_ALL_NEWS_BY_CATEGORY";
// export const GET_ALL_NEWS_BY_ID = "GET_ALL_NEWS_BY_ID";
// export const ADD_NEWS = "ADD_NEWS";
// export const UPDATE_NEWS = "UPDATE_NEWS";
// export const DELETE_NEWS = "DELETE_NEWS";
// export const GET_ALL_USERS = "GET_ALL_USERS";
// export const GET_ALL_VOLUNTEER = "GET_ALL_VOLUNTEER";
// export const COURSES_BY_VOLUNTEER = "COURSES_BY_VOLUNTEER";
// export const ADD_COURSE = "ADD_COURSE";
// export const UPDATE_COURSE = "UPDATE_COURSE";
// export const DELETE_COURSE = "DELETE_COURSE";
// export const GET_ALL_COURSES = "GET_ALL_COURSES";
// export const GET_ALL_COURSES_BY_ID = "GET_ALL_COURSES_BY_ID";
// export const GET_ALL_COURSES_BY_CATEGORY = "GET_ALL_COURSES_BY_CATEGORY";
// export const FILTERS = "FILTERS";

import axios from 'axios';
export const GET_ALL_NEWS = "GET_ALL_NEWS";

export const getAllNews = () => {
    return async function (dispatch) {
        const news = await axios.get('http://localhost:3500/news/');
        dispatch({ type: GET_ALL_NEWS, payload: news.data.docs })
    }
};