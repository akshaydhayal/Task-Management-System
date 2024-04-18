import { Request, Response } from "express";
import { Task } from "../models/task.model";
import { taskCreateInputValidate, taskUpdateInputValidate } from "../zod/taskSchema";


export async function getTasks(req:Request, res:Response){
    try{
        const tasks=await Task.find({});
        res.status(201).json(tasks);
    }catch(error){
        console.log("error in getTask controller"+error);
        res.status(501).json({error:"Internal server error"});
    }
}


export async function createTask(req:Request,res:Response){
    try{
        const parsedInput=taskCreateInputValidate.safeParse(req.body);
        if(!parsedInput.success){
            return res.status(401).json({error:parsedInput.error});
        }
        const task=new Task(parsedInput.data);
        await task.save();
        res.status(201).json({msg:"Task created",task});
    }catch(error){
        console.log("error in createTask controller"+error);
        res.status(501).json({error:"Internal server error"});
    }
}


export async function updateTask(req:Request,res:Response){
    try{
        const parsedInput=taskUpdateInputValidate.safeParse(req.body);
        if(!parsedInput.success){
            return res.status(401).json({error:parsedInput.error});
        }
        const task=await Task.findOne({_id:req.params.taskid});
        if(task){
            const task=await Task.updateOne({_id:req.params.taskid},parsedInput.data);
            res.status(201).json({msg:"Task updated",task});
        }else{
            res.status(401).json({error:"Task does not exist"});
        }
    }catch(error){
        console.log("error in updateTask controller"+error);
        res.status(501).json({error:"Internal server error"});
    }
}



export async function deleteTask(req:Request,res:Response){
    try{
        // const parsedInput=taskUpdateInputValidate.safeParse(req.body);
        // if(!parsedInput.success){
        //     return res.status(401).json({error:parsedInput.error});
        // }
        const task=await Task.findOne({_id:req.params.taskid});
        if(task){
            const task=await Task.deleteOne({_id:req.params.taskid});
            // const task=await Task.updateOne({_id:req.params.taskid},parsedInput.data);
            res.status(201).json({msg:"Task deleted",task});
        }else{
            res.status(401).json({error:"Task does not exist"});
        }
    }catch(error){
        console.log("error in updateTask controller"+error);
        res.status(501).json({error:"Internal server error"});
    }
}
