import {z} from "zod"

export const accountSchema =z.object({
    name:z.string().min(1,"Name is required"),
    type:z.enum(["CURRENT","SAVINGS"]),
    BALANCE:z.string().min(1, "Initial balance is require"),
    isDefault: z.boolean().default(false)


});