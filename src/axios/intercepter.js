import { API_URL } from "../config"
import axios from "axios"

const api = axios.create({
    baseURL: API_URL,
})

const checkTokenInterceptor = (config) => {
    const token = sessionStorage.getItem("tokenKey")
    if (token) {
     config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

api.interceptors.request.use(checkTokenInterceptor);

const responseSuccessInterceptor = (response) => {
    const data = response.data;
     if (!data._meta.success) {
      return { error: data.result };
     }
     return { response: data };
}

const networkErrorInterceptor = (error) => {
    const responseError = error?.response?.data;
    return { error: responseError || error };
}

api.interceptors.response.use(responseSuccessInterceptor, networkErrorInterceptor)