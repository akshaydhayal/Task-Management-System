"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskUpdateInputValidate = exports.taskCreateInputValidate = void 0;
const zod_1 = require("zod");
exports.taskCreateInputValidate = zod_1.z.object({
    title: zod_1.z.string().min(6, "minimum task title should be 6 characters long").max(50),
    description: zod_1.z.string().min(10).max(400),
});
const taskCompleteSchema = zod_1.z.object({
    title: zod_1.z.string().min(6, "minimum task title should be 6 characters long").max(50),
    description: zod_1.z.string().min(10).max(400),
    completed: zod_1.z.boolean()
});
exports.taskUpdateInputValidate = taskCompleteSchema.partial();
