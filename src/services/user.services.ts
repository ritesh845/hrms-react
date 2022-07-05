import { axiosGet } from "../axios/setupAxios";

const getUser = () => {
    return axiosGet("user");
}  

const UserService = {
    getUser
}

export default UserService;
