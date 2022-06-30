import { authReducer } from './auth/auth.reducer';
import { combineReducers } from 'redux'

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "exam-portal",
    storage,
    whitelist: ["auth", "notification", "question", "exam", "questionPalette"],
  };
  
const appReducer =  combineReducers({
    auth : authReducer
})


const rootReducer = (state:any, action:any) => {
    if (action.type === "LOGOUT") {
      state = undefined;
    }
    return appReducer(state, action);
  };

export default persistReducer(persistConfig, rootReducer);