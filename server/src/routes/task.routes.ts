import express from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller";

const router=express.Router();

router.get("/",getTasks);
router.post("/create",createTask);
router.put("/:taskid",updateTask);
router.delete("/:taskid",deleteTask);

export default router;