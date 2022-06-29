import { UserModel } from './../../models/user.d';

export interface IAuthType {
  isLogin:Boolean,
  user:UserModel
}
