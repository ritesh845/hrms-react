export interface UserModel {
    id:Number,
    name:String,
    email:String,
    mobile:String | null,
    gender?:String | null,
    age?:Number | null,
    dob?:Date | null,
    photo?:String | null,
    status:String,
    createdAt?:DateTime,
    updatedAt?:DateTime
}
