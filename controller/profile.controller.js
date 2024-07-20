import profile from "../model/profile.model.js";

export const getProfile = async (req,res)=>{
    try{
        const existingProfile = await profile.find();
        if(existingProfile) return res.status(200).json(existingProfile[0]);
        else return res.status(404).json({message: "Profile not found"});
    }catch(e){
        res.status(404).json({message: e.message});
    }
}
export const updateProfile = async (req,res)=>{
    try{
        const id= req.params.id;
        const {name,email,profile_picture,leetcode_username,gitHub_username,skills,description,resume,intro} = req.body;
            const updatedProfile = await profile.findOneAndUpdate({_id:id},{
                name,
                email,
                profile_picture,
                leetcode_username,
                gitHub_username,
                skills,
                description,
                resume,
                intro
            },{new: true});
            res.status(201).json({message: "Profile updated successfully", updatedProfile});
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}