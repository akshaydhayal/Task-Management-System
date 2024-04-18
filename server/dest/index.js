"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./db/dbConnect");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', user_routes_1.default);
app.use('/api/taskS', task_routes_1.default);
const port = process.env.PORT;
(0, dbConnect_1.dbConnect)();
app.listen(port, () => {
    console.log(`server is running at portj ${port}`);
});
