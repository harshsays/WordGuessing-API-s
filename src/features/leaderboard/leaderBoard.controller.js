import { LeaderBoardRepository } from "./leaderBoard.repository.js";
class LeaderBoardController{

    static getLeaders=async(req,res,next)=>{
        try{
            const users=await LeaderBoardRepository.getLeaders();
            res.status(200).json({success:true,userList:users});
        }catch(err){
            console.log("Error At Leader Board Controller :"+err.message);
            next(err);

        }

    }
}

export {LeaderBoardController};