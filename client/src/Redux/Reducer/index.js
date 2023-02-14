/* eslint-disable no-unused-vars */
// import{
//     GET_ALL_CATEGORIES,
//     GET_ALL_NEWS,
//     GET_ALL_NEWS_BY_CATEGORY,
//     GET_ALL_NEWS_BY_ID,
//     ADD_NEWS, 
//     UPDATE_NEWS, //tener en cuenta
//     DELETE_NEWS, // tener en cuenta 
//     GET_ALL_USERS,
//     GET_ALL_VOLUNTEER,
//     COURSES_BY_VOLUNTEER,
//     ADD_COURSE,
//     UPDATE_COURSE, //tener en cuenta 
//     DELETE_COURSE, //tener en cuenta
//     GET_ALL_COURSES,
//     GET_ALL_COURSES_BY_ID,
//     GET_ALL_COURSES_BY_CATEGORY,
//     FILTERS
// } from '../Actions'

// const initialState = {
//     categories: [],
//     news: [],
//     loading: false,
//     error: null,
//     volunteer: [],
//     courses: [],
//     filters: []
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type){
//         case GET_ALL_CATEGORIES:
//             return {
//                 ...state,
//                 categories: action.payload
//             }
//         case GET_ALL_NEWS:    
//         return {
//             ...state,
//             news: action.payload
//         }
//         case GET_ALL_NEWS_BY_CATEGORY:
//             return {
//                 ...state,
//                 news: action.payload,
//                 categories: action.payload
//             }
//     default:
//         return state
//     }
// }
// export default rootReducer