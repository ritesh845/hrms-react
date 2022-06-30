import axios from 'axios';

// import { setResponse } from "../redux/notification/notification.action";
const setupAxios = (store:any) => {
  axios.interceptors.request.use((request:any) => {
    const {
      auth: { token },
    } = store.getState();
    if (token) {
      request.headers.Authorization = `JWT ${token}`;
    }
    return request;
  });
  axios.interceptors.response.use(
    (res) => {
      const { toast, message, response_type } = res.data;
      if (toast) {
        console.log(res)
      }
      return res;
    },
    (e) => {
      console.log(e);
    }
  );
};

export default setupAxios;

export const axiosGet = (url:String) => {
  return axios.get(`${process.env.REACT_APP_API_URI}${url}`);
};

export const axiosPost = (url:String, data:any) => {
  return axios.post(`${process.env.REACT_APP_API_URI}${url}`, data);
};

export const axiosPut = (url:String,  data:any) => {
  return axios.put(`${process.env.REACT_APP_API_URI}${url}`, data);
};

export const axiosDelete = (url:String) => {
  return axios.delete(`${process.env.REACT_APP_API_URI}${url}`);
};
