import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectToMongoDb=async()=>{
    try{
       await mongoose.connect(process.env.DB_URL);
       console.log("Database has been connected successfully");

    }catch(err){
        console.log(err.message);
        console.log("Some prblem while connecting to the Database");
    }
}


export {connectToMongoDb};