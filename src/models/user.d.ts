export interface UserModel {
    id:Number,
    name:String,
    mobile:String | null,
    otp?:String,
    gender?:String,
    age?:Number,
    dob?:Date,
    status:String,
    emailVerifyAt?:DateTime,
    createdAt?:DateTime,
    updatedAt?:DateTime
}
