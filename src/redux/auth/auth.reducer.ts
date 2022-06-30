import { Reducer } from "redux";
import {authActionType} from './auth.action'
import { authState } from './auth.type'

export const initialState :authState = {
    isAuthenticated :false,
    user:{},
    token:''
};

export const authReducer: Reducer<authState> =  (state = initialState,action) => {
    switch (action.type){
        case authActionType.LOGIN_SUCCESS :{
            return { ...state, isAuthenticated: true,user:action.payload.user,token:action.payload.token };
        }
        case authActionType.LOGOUT :{
            return { ...state, isAuthenticated: false,user:{},token:'' };
        }
        default: {
            return state;
        }
    }
}