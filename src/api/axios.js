import axios from "axios";
import process from "process";

const API = axios.create({
    baseURL : process.env.REACT_APP_API_BASE_URL, withCredentials: false,
    headers:{
        'Content-Type':'application/json'
    },
});

export default API;