import { z } from 'zod';

export const registerSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  name: z.string().min(1, { message: "name cannot be empty" }),
});
