import mongoose from "mongoose";
const schema = mongoose.Schema;

const projectSchema = new schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: {type: Array, required: true },
    features: { type: Array, required: true },
    date: { type: String, required: true },
    github: { type: String, required: true },
    demo: { type: String, required: true },
    image: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;