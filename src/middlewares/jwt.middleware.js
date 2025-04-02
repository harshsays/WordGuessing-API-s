import jwt from "jsonwebtoken";

const jwtAuth=async(req,res,next)=>{
    const token =req.headers.authorization;
    if(!token){
       return res.status(401).json({success:false,message:"Unauthorized User. Please Login First"});
    }
    try{
    const data=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req._id=data._id;
    return next();

    }catch(err){
        console.log("Erro at JWT middleware: "+err.message);
        return res.status(401).json({success:false,message:"Please login again"});
    }

}

export {jwtAuth};