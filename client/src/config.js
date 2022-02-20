import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://crud-app-login.herokuapp.com"
})