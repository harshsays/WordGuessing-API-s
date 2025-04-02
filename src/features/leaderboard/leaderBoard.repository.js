import { ApplicationError } from "../../error Handler/errorHandling.js";
import { userModel } from "../users/user.repository.js";

class LeaderBoardRepository{

    static getLeaders=async()=>{
        try{
            const topUsers = await userModel.find({},{password:0,email:0,_id:0}).sort({wordsGuessed:-1}).limit(10);
            return topUsers;
        }catch(err){
            console.log("Error at Leader Board Repository :"+err.message);
            throw new Error(err.message);
        }

    }

}

export {LeaderBoardRepository}