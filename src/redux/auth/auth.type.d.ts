import { UserModel } from './../../models/user.d';

export interface authState {
  isAuthenticated:Boolean,
  token:String,
  user:UserModel | {}
}