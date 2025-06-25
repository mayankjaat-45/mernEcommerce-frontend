import axios from "axios";
import process from "process";

const API = axios.create({
    baseURL : 'https://mernecommerce-backend-ml42.onrender.com', withCredentials: false,
    headers:{
        'Content-Type':'application/json'
    },
});

export default API;
