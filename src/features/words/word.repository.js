import mongoose from "mongoose";
import { wordSchema } from "./word.schema.js";

const wordModel=mongoose.model("Words",wordSchema);
class wordRepository{

    static async givingWord(difficulty){
        try{
            const count = await wordModel.countDocuments({difficulty}); // Get total document count
            const randomIndex = Math.floor(Math.random() * count); // Generate random index
            console.log(randomIndex)
            const word = await wordModel.findOne({difficulty}).skip(randomIndex); // Skip to that index
            return word;
        }catch(err){
            console.log("Error at word Repository");
            throw new Error(err.message);
        }
    }
}


export {wordRepository,wordModel};