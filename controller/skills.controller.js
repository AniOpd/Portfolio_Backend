import Skills from '../model/Skills.model.js';

export const getSkills = async (req,res)=>{
    try{
        const skills = await Skills.find();
        res.status(200).json(skills);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createSkill = async (req,res)=>{
    const {name, proficiency} = req.body;
    const existingSkill= await Skills.findOne({name});
    const newSkill = new Skills({name, proficiency});
    try{
        if(existingSkill===null){
            await newSkill.save();
            res.status(201).json({message:'Skill Added Succesfully'});
        }else{
            res.status(401).json({message:'Skill Already Added'});
        }
       
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateSkill = async (req,res)=>{
    const {id} = req.params;
    const {name, proficiency} = req.body;
    try{
        const updatedSkill = {name, proficiency};
        await Skills.findByIdAndUpdate(id, updatedSkill, {new: true});
        res.json(await Skills.findById(id));
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}