import { z } from "zod";

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export const LoginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
export const SignupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });
