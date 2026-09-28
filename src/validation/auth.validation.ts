import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().optional(),
  email: z.string().optional(),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  full_name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  confirm_password: z.string().optional(),
  terms: z.boolean().optional(),
  role: z.string().optional(),
  phone: z.string().optional(),
  avatar: z.any().optional(),
});
