import axios from "axios";
const BASE_URL = "http://localhost:3500" || process.env.REACT_APP_API;

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})