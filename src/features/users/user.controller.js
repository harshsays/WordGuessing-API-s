import { ApplicationError } from "../../error Handler/errorHandling.js";
import { userRepository } from "./user.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
class userController{
    
    constructor(){

    }

  
    signUp=async(req,res,next)=>{
        try{
            const {name,email,password}=req.body;
            const hashpassword=await bcrypt.hash(password,10);
            const user=await userRepository.signUp(name,email,hashpassword);
            return res.status(201).json({success:true,message:"User has been signup Successfully"});
        }catch(err){
                console.log("User Controller Error:" + err.message);
                next(err);
        }
    }

    signIn=async(req,res,next)=>{
        try{
            const {email,password}=req.body;
            const user =await userRepository.findByEmail(email);
            if(user==null){
                throw new ApplicationError(401,"Email is wrong");
            }
            const passwordExistence=await bcrypt.compare(password,user.password);    
            if(!passwordExistence){
                throw new ApplicationError(401,"Password is wrong");
            }   

            const token = jwt.sign(
                {
                _id:user._id.toString()
                },
                process.env.JWT_SECRET_KEY,
               {
                expiresIn:"1h"
               }
        )
            res.status(200).json({success:true,token:token});

        }catch(err){
            console.log("User Controller Error:" + err.message);
            next(err);
        }

    }

    logOut=async(req,res,next)=>{
        try{

        }catch(err){

        }


    }
}


export {userController};