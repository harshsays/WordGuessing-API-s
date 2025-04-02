import { wordRepository } from "./word.repository.js";


class wordController{
      givingword=async(req,res,next)=>{
        try{
            const difficulty=req.body.difficulty;
            const word=await wordRepository.givingWord(difficulty);
            res.status(200).json({success:true,Details:word});

        }catch(err){
            console.log("Error at word Controller :" +err.message);
            next(err);
        }


    }

}

export {wordController}