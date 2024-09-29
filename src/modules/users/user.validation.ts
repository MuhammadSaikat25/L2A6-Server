import z from "zod";

export const userCreateValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().optional(),
    phone: z.string().optional(),
    image: z.string().optional(),
    role: z.enum(["admin", "user"]).optional(),
    address: z.string().optional(),
  }),
});
