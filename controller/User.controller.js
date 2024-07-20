import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../model/Admin.js"
import 'dotenv/config';

const secret=process.env.JwtSecret;

export const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await Admin.findOne({email});
        if(user){
            const isPasswordCorrect = await bcrypt.compare(password,user.password);
            if(isPasswordCorrect){
                const token = jwt.sign({email:user.email,id:user._id},secret,{expiresIn:"90d"});
                res.cookie('token',token).status(200).json({message:"Login successful",token});
            }
            else{
                res.status(400).json({message:"Invalid credentials"});
            }
        }
        else{
            res.status(404).json({message:"Invalid credentials"});
        }
    }catch(e){
        console.error(`Error: ${e.message}`);
    }
}
export const resetPassword = async (req,res)=>{
    try{
        const {email} = req.params;
        const {password,otp} = req.body;
        const user = await Admin.findOne({email});
        if(user && otp=='9319168997'){
            const hashedPassword = await bcrypt.hash(password,12);
            user.password = hashedPassword;
            await user.save();
            res.status(200).json({message:"Password reset successful"});
        }
        else{
            res.status(404).json({message:"Invalid credentials"});
        }
    }catch(e){
        console.error(`Error: ${e.message}`);
    }
}


