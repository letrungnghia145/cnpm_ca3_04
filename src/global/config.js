import axios from 'axios'
export const AxiosAPI = axios.create();
const jwt = localStorage.getItem('token')

AxiosAPI.interceptors.request.use((config) => {
    if (jwt) {
        config.headers["Authorization"] = `Bearer ${jwt}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
})
