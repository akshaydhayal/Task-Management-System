"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../controllers/task.controller");
const router = express_1.default.Router();
router.get("/", task_controller_1.getTasks);
router.post("/create", task_controller_1.createTask);
router.put("/:taskid", task_controller_1.updateTask);
router.delete("/:taskid", task_controller_1.deleteTask);
exports.default = router;
