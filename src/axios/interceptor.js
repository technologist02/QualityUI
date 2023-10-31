import axios from "axios"

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
    if (error.response.status === 401){
        window.location.href = "/Autorization"    
    }
    return Promise.reject(error);
}
client.interceptors.response.use(SuccessInterceptor, ErrorInterceptor);