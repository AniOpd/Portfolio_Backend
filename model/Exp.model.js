import mongoose from "mongoose";
const schema = mongoose.Schema;

const expSchema = new schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    description: { type: String, required: true },
});

const Exp = mongoose.model("Exp", expSchema);
export default Exp;