import { UserModel } from './../../models/user.d';

export enum AuthActionType {
    LOGIN_SUCCESS  = "LOGIN_SUCCESS",
    LOGIN_REQUEST  = "LOGIN_REQUEST",
    LOGIN_FAILURE  = "LOGIN_FAILURE",
    LOGOUT  = "LOGOUT"
}


export const AuthActionCreators = {
    loginSuccess: (user:UserModel,token:String) => ({ type: AuthActionType.LOGIN_SUCCESS, payload: {user,token}})
}