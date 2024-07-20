import jwt from "jsonwebtoken";
import 'dotenv/config';

const secret=process.env.JwtSecret;

export const authenticate = (req,res,next)=>{
    try{
        const {token} = req.body;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        else{
            const decodedData = jwt.verify(token,secret);
            if(decodedData){
                next();
            }
            else{
                return res.status(401).json({message:"Unauthorized"});
            }
        }
    }catch(e){
         console.log("in catch");
        console.error(`Error: ${e.message}`);
    }
}