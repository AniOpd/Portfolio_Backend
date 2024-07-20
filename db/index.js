import mongoose from "mongoose";

const Uri=process.env.MONGO_URI;
const connectDB = async ()=>{
    try{
         await mongoose.connect(Uri)
        .then(()=>console.log('MongoDB connected'))
        .catch((err)=>console.error(`Error: ${err.message}`));
    }catch(e){
        console.error(`Error: ${e.message}`);
    }
}

connectDB();

export default connectDB;

