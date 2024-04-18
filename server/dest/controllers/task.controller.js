"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const task_model_1 = require("../models/task.model");
const taskSchema_1 = require("../zod/taskSchema");
function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tasks = yield task_model_1.Task.find({});
            res.status(201).json(tasks);
        }
        catch (error) {
            console.log("error in getTask controller" + error);
            res.status(501).json({ error: "Internal server error" });
        }
    });
}
exports.getTasks = getTasks;
function createTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedInput = taskSchema_1.taskCreateInputValidate.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(401).json({ error: parsedInput.error });
            }
            const task = new task_model_1.Task(parsedInput.data);
            yield task.save();
            res.status(201).json({ msg: "Task created", task });
        }
        catch (error) {
            console.log("error in createTask controller" + error);
            res.status(501).json({ error: "Internal server error" });
        }
    });
}
exports.createTask = createTask;
function updateTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedInput = taskSchema_1.taskUpdateInputValidate.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(401).json({ error: parsedInput.error });
            }
            const task = yield task_model_1.Task.findOne({ _id: req.params.taskid });
            if (task) {
                const task = yield task_model_1.Task.updateOne({ _id: req.params.taskid }, parsedInput.data);
                res.status(201).json({ msg: "Task updated", task });
            }
            else {
                res.status(401).json({ error: "Task does not exist" });
            }
        }
        catch (error) {
            console.log("error in updateTask controller" + error);
            res.status(501).json({ error: "Internal server error" });
        }
    });
}
exports.updateTask = updateTask;
function deleteTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const parsedInput=taskUpdateInputValidate.safeParse(req.body);
            // if(!parsedInput.success){
            //     return res.status(401).json({error:parsedInput.error});
            // }
            const task = yield task_model_1.Task.findOne({ _id: req.params.taskid });
            if (task) {
                const task = yield task_model_1.Task.deleteOne({ _id: req.params.taskid });
                // const task=await Task.updateOne({_id:req.params.taskid},parsedInput.data);
                res.status(201).json({ msg: "Task deleted", task });
            }
            else {
                res.status(401).json({ error: "Task does not exist" });
            }
        }
        catch (error) {
            console.log("error in updateTask controller" + error);
            res.status(501).json({ error: "Internal server error" });
        }
    });
}
exports.deleteTask = deleteTask;
