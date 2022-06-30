import { all, call, put, takeLatest } from "redux-saga/effects";
import AuthService from '../../services/auth.services';
import { authActionType,loginSuccess } from "./auth.action";


export function* loginRequest({ payload }:any) {
     console.log("res",payload);
//   try {
//     const {
//         data: { data },
//       } = yield AuthService.login(payload);
//       console.log("res",payload);
//         // yield put(loginSuccess(data.user,data.token));
//   } catch (err) {
//     console.log("errer")
//     // yield put(signInFailure(err));
//   }
}

export function* onLogin() {
 
  yield takeLatest(authActionType.LOGIN_REQUEST, loginRequest);
}

export default function* authSagas() {
  yield all([call(onLogin)]);
}
