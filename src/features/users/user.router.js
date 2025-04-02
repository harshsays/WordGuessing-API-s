import express from "express";
import { userController } from "./user.controller.js";

const userRouter=express.Router();
const userControl=new userController();

/*
      #&* ------> Signup
      $*& ------> Signin
      %@# ------> Logout

*/

userRouter.post("/&*",userControl.signUp);
userRouter.post("/*&",userControl.signIn);
userRouter.post("/%@",userControl.logOut);

export{userRouter};