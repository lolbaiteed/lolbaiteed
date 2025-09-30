import { z } from 'zod';

export const registerSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  name: z.string().min(1, { message: "name cannot be empty" }),
  passwdHash: z.string().min(64, { message: "password hash cannot be null/empty" }).max(191, { message: "password hash is too large" })
});
