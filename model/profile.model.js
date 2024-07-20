import mongoose from "mongoose";

const schema = mongoose.Schema;

const profileSchema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profile_picture:{
        type:String,
    },
    leetcode_username:{
        type:String,
    },
    gitHub_username:{
        type:String,
    },
    skills:{
        type:[String],
    },
    description:{
        type:[String]
    },
    resume:{
        type:String,
    },
    intro:{
        type:String,
    }
})

const Profile = mongoose.model('profile',profileSchema);
export default Profile;