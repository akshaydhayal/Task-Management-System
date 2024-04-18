import mongoose from "mongoose";

export async function dbConnect(){
    const mongoUrl=process.env.MONGO_URL;
    if(mongoUrl){
        await mongoose.connect(mongoUrl,{dbName:'tasks'});
    }else{
        console.log("Give correct mongoose link")
    }
    console.log("mongoose connected!!");
}