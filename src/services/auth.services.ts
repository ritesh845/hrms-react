import { axiosPost } from "../axios/setupAxios";
import { ILoginFormData } from "../types/auth.types";

const login = (data:ILoginFormData) => {
    return axiosPost("login", data);
}  

const AuthService = {
    login
}

export default AuthService;

// API.defaults.headers.common['Authorization'] = AUTH_TOKEN;
