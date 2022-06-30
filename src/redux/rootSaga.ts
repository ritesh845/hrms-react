import { all, fork } from "redux-saga/effects";
import authSagas from "./auth/auth.saga";

export function* rootSaga() {
  yield all([fork(
    authSagas)]);
}