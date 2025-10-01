import { z } from 'zod';

export const registerSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  name: z.string().min(1, { message: "name cannot be empty" }),
  password: z.string().min(8, { message: "password cannot be null/empty" })
});

export const loginShcema = z.object({
  email: z.email({ message: "invalid email address" }),
  password: z.string().min(8, { message: "passowrd cannot be null/empty"}) 
});

export type LoginInput = z.infer<typeof loginShcema>
export type RegisterInput = z.infer<typeof registerSchema>
