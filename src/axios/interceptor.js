import axios from "axios"
import { Modal } from "../modal"

export const client = axios.create(
)

const checkTokenInterceptor = (config) => {
    const token = sessionStorage.getItem("tokenKey")
    if (token) {
     config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

client.interceptors.request.use(checkTokenInterceptor);

const SuccessInterceptor = (response) => {
    return response
};

const ErrorInterceptor = (error) => {
    console.log(error)
    if (error.response.status === 401){
        window.location.href = "/AutorizePage"    
    }
    const foo = () => { new Modal(error)}
    foo();
    return Promise.reject(error);
}
client.interceptors.response.use(SuccessInterceptor, ErrorInterceptor);