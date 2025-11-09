import { z } from "zod";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export const LoginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
