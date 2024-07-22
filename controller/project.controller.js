import project from '../model/Project.model.js';

export const getProjects = async (req,res)=>{
    try{
        const projects = await project.find();
        res.status(200).json(projects);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPorject = async (req,res)=>{
    try{
        const {id}=req.body;
        const project = await project.findById(id);
        res.status(200).json(project);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createProject = async (req,res)=>{
    const {title, description, techStack, features, date, github, demo, image} = req.body;
    const newProject = new project({title, description, techStack, features, date, github, demo, image});
    try{
        await newProject.save();
        res.status(201).json({message: 'Project created successfully'});
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateProject = async (req,res)=>{
    const {id} = req.params;
    const {title, description, techStack, features, date, github, demo, image} = req.body;
    try{
        const updatedProject = {title, description, techStack, features, date, github, demo, image};
        await project.findByIdAndUpdate(id, updatedProject, {new: true});
        res.json(updatedProject);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}