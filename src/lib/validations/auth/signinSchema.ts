
import { z } from "zod";

// Step 1 schema: email, phone, password, rememberMe
export const signinSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[@$!%*?&#]/, "Must contain at least one special character"),
  rememberMe: z.boolean().optional(), // ✅ keep optional here
});

export type SignInSchemaData = z.infer<typeof signinSchema>;