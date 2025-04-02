import mongoose from "mongoose";

const wordSchema= new mongoose.Schema({
    word:{type:String,required :true,unique:true},
    suggestion:{type:String,minlength:[20,"suggestion should be minimun 10 letters"]},
    difficulty:{type:String,enum:["easy","medium","hard"],required:true}
})

wordSchema.index({difficulty:1});

export {wordSchema}