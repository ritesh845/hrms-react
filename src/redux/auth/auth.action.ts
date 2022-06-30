import { ILoginFormData } from './../../types/auth.types';


import { UserModel } from './../../models/user.d';

export enum authActionType {
    LOGIN_SUCCESS  = "LOGIN_SUCCESS",
    LOGIN_REQUEST  = "LOGIN_REQUEST",
    LOGIN_FAILURE  = "LOGIN_FAILURE",
    LOGOUT  = "LOGOUT"
}


// export const authActionCreators = {
//     loginSuccess: (user:UserModel,token:String) => ({ type: authActionType.LOGIN_SUCCESS, payload: {user,token}}),
//     logout: () => ({type: authActionType.LOGOUT})
// }
export const loginRequest = (loginData:ILoginFormData) => ({
    type : authActionType.LOGIN_REQUEST,payload:loginData
})
export const loginSuccess =  (user:UserModel,token:String) => ({ type: authActionType.LOGIN_SUCCESS, payload: {user,token}});
export const logout  = () => ({type: authActionType.LOGOUT})