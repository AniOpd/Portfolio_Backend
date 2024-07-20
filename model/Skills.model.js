import mongoose from "mongoose";
const schema = mongoose.Schema;

const skillsSchema = new schema({
    name: { type: String, required: true },
    proficiency: { type: Number, required: true },
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;