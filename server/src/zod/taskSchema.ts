import {z} from "zod";

export const taskCreateInputValidate=z.object({
    title:z.string().min(6,"minimum task title should be 6 characters long").max(50),
    description:z.string().min(10).max(400),
})

const taskCompleteSchema=z.object({
    title:z.string().min(6,"minimum task title should be 6 characters long").max(50),
    description:z.string().min(10).max(400),
    completed:z.boolean()
})

export const taskUpdateInputValidate=taskCompleteSchema.partial();