import { Request, Response } from 'express';
import { User } from '../models/user.model'; 
import mongoose from "mongoose";
import { signUpInputValidate } from '../zod/userSchema';

export async function createUser(req:Request,res:Response){
    try{
        const parsedInput=signUpInputValidate.safeParse(req.body);
        if(!parsedInput.success){
            return res.status(401).json({error:parsedInput.error});
        }
        const {name,email,profile_image,tasks,password}=req.body;
        const user=new User({name,email,profile_image,tasks,password});
        await user.save();
        res.status(201).json({msg:'User created',user});
    }catch(error){
        console.log("error in create User controller"+error);
        res.status(501).json({error:"Internal Server error"});
    }
}

export async function getUser(req:Request,res:Response){
    try{
        const users=await User.find({});
        res.status(201).json(users);
    }catch(error){
        console.log("error in getUser contoller"+error);
        res.status(501).json({error:"Internal server error"});
    }
}