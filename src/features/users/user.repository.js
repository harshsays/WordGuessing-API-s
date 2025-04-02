import { ApplicationError } from "../../error Handler/errorHandling.js";
import { userSchema } from "./user.schema.js";
import mongoose from "mongoose";

const userModel=mongoose.model("Users",userSchema);

class userRepository{
    
    static async signUp(name,email,password){
        try{
            const user= new userModel({name,email,password});
            const answer=await user.save();
        }catch(err){

            if (err instanceof mongoose.Error.ValidationError) {
                console.log(err.message);
                throw new ApplicationError(400, err.message);
            } else if (err.code === 11000) { // Handle duplicate key error (e.g., email already exists)
                console.log("Duplicate key error: " + err.message);
                throw new ApplicationError(409, "Email already in use");
            } else {
                console.log(err.message);
                throw new ApplicationError(500, "Internal Server Error");
            }

        }

    }

   static async findByEmail(email){
    try{
        const user=await userModel.findOne({email:email});
        return user;
    }catch(err){
        console.log("Find by email error: " + err.message);
        throw new Error(err.message);
    }

   }

    static async logOut(){
        try{

        }catch(err){

        }

    }
}

export {userRepository,userModel};