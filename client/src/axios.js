import axios from 'axios';

//axios instance to base url
const instance = axios.create({
    baseURL: "http://localhost:3000/api"
});

export default instance;