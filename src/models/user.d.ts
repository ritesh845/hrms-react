export interface UserModel {
    id:Number,
    name:String,
    mobile:String | null,
    otp?:String,
    emailVerifyAt?:DateTime,
    createdAt?:DateTime,
    updatedAt?:DateTime
}
