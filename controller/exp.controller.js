import Exp from "../model/Exp.model.js";

export const getExp = async (req,res)=>{
    try{
        const exp = await Exp.find();
        res.status(200).json(exp);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createExp = async (req,res)=>{
    const {title, company, location, startDate, endDate, description} = req.body;
    const newExp = new Exp({title, company, location, startDate, endDate, description});
    try{
        await newExp.save();
        res.status(201).json({newExp,message:"Experience added successfully"});
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateExp = async (req,res)=>{
    const {id} = req.params;
    const {title, company, location, startDate, endDate, description} = req.body;
    try{
        const updatedExp = {title, company, location, startDate, endDate, description};
        await Exp.findByIdAndUpdate(id, updatedExp, {new: true});
        res.json({updatedExp,message:"update Successfull"}).status(200);
    }catch(e){
        res.status(409).json({message: e.message});
    }
}