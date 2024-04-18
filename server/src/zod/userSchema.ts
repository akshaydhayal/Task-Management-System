import {z} from "zod";

export const signUpInputValidate=z.object({
    name:z.string().min(5,"name should be mini 5 characters").max(30),
    email:z.string().email(),
    profile_image:z.string().url(),
    password:z.string().min(6)
})

export const signInInputValidate=z.object({
    email:z.string().email(),
    password:z.string()
})