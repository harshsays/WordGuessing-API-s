import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { connectToMongoDb } from "./src/config/mongoose.js";
import { userRouter } from "./src/features/users/user.router.js";
import { wordRouter } from "./src/features/words/word.router.js";
import { jwtAuth } from "./src/middlewares/jwt.middleware.js";
import { ApplicationError } from "./src/error Handler/errorHandling.js";
import { leaderBoardRouter } from "./src/features/leaderboard/leaderBoard.router.js";

const server= express();
server.use(cors());
dotenv.config();

server.use(express.urlencoded({"extended":true}));
server.use(express.json());

server.use("/api/user",userRouter);
server.use("/api/word",jwtAuth,wordRouter);
server.use("/api/leaderboard",leaderBoardRouter);

server.use((req,res,next)=>{
    res.status(404).json({success:false,message:"Api does'nt exist"});
});

server.use((err,req,res,next)=>{
    if(err instanceof ApplicationError){
        return res.status(err.status).json({success:false,message:err.message});
    }
    return res.status(500).json({success:false,message:"Internal Server Error"});
})

server.listen(1000,()=>{
    console.log("server is listening at the port number 1000");
    connectToMongoDb();
})
