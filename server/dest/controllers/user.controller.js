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
exports.getUser = exports.createUser = void 0;
const user_model_1 = require("../models/user.model");
const userSchema_1 = require("../zod/userSchema");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedInput = userSchema_1.signUpInputValidate.safeParse(req.body);
            if (!parsedInput.success) {
                return res.status(401).json({ error: parsedInput.error });
            }
            const { name, email, profile_image, tasks, password } = req.body;
            const user = new user_model_1.User({ name, email, profile_image, tasks, password });
            yield user.save();
            res.status(201).json({ msg: 'User created', user });
        }
        catch (error) {
            console.log("error in create User controller" + error);
            res.status(501).json({ error: "Internal Server error" });
        }
    });
}
exports.createUser = createUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_model_1.User.find({});
            res.status(201).json(users);
        }
        catch (error) {
            console.log("error in getUser contoller" + error);
            res.status(501).json({ error: "Internal server error" });
        }
    });
}
exports.getUser = getUser;
