import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile_image:{type:String},
    tasks:[ {type:mongoose.Schema.Types.ObjectId,ref:'Task',default:[]}]
})

export const User=mongoose.models.User || mongoose.model('User',userSchema);