import { act } from "react-dom/test-utils";
import { Reducer } from "redux";
import { UserModel } from './../../models/user.d';
import {AuthActionType} from './auth.action'
import { authState } from './auth.type'

export const initialState :authState = {
    isAuthenticated :false,
    user:{},
    token:''
};

export const authReducer: Reducer<authState> =  (state = initialState,action) => {
    switch (action.type){
        case AuthActionType.LOGIN_SUCCESS :{
            return { ...state, isAuthenticated: true,user:action.payload.user,token:action.payload.token };
        }
        default: {
            return state;
        }
    }
}