import dotenv  from 'dotenv';
import express from "express";
import { dbConnect } from './db/dbConnect';
import userRouter from "./routes/user.routes";
import taskRouter from "./routes/task.routes";

dotenv.config();
const app=express();

app.use(express.json());
app.use('/api/users',userRouter);
app.use('/api/taskS',taskRouter);

const port=process.env.PORT;
dbConnect();
app.listen(port,()=>{
    console.log(`server is running at portj ${port}`);
})