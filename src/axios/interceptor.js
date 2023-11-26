import axios from "axios"
import { Modal } from "./error-modal"

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
    // console.log(error)
    if (error.response) {
        if (error.response.status === 401){
            alert("Вы не авторизованы");
            window.location.href = "/AutorizePage"    
        }
        console.error('Server Error:', error.response.status);
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    // if (error.response.status === 401){
    //     alert("Вы не авторизованы");
    //     window.location.href = "/AutorizePage"    
    // }
    const foo = () => { new Modal(error)}
    foo();
    return Promise.reject(error);
}
client.interceptors.response.use(SuccessInterceptor, ErrorInterceptor);