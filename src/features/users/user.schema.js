import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String,required:[true,"Please enter the name"]},
    email:{type:String,required:[true,"Please enter the Email"],unique:true},
    password:{type:String,minlength:[10,"Should be atleast 10 characters"],required:[true,"Please enter the password"]},
    wordsGuessed:{type:Number,default:0,min:0}
})

export {userSchema}