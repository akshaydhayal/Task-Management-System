import express from "express";
import { createUser, getUser } from "../controllers/user.controller";

const router=express.Router();

router.post("/signup",createUser);
router.get("/",getUser);
export default router;