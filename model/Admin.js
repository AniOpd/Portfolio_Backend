import mongoose from "mongoose";

const schema = mongoose.Schema;

const adminSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Admin = mongoose.model('Admin',adminSchema);

export default Admin;