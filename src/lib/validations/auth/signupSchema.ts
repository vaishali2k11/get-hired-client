import { z } from "zod";

// Step 1 schema: email, phone, password, rememberMe
export const signupStepOneSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  phone_no: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[@$!%*?&#]/, "Must contain at least one special character"),
  rememberMe: z.boolean().optional(), // ✅ keep optional here
});

export type SignupStepOneData = z.infer<typeof signupStepOneSchema>;

// Step 2 schema: first & last name
export const signupStepTwoSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
});

export type SignupStepTwoData = z.infer<typeof signupStepTwoSchema>;

// ✅ Final payload schema for backend (exclude rememberMe)
export const signupCombineSchema = signupStepOneSchema
  .omit({ rememberMe: true }) // ✅ remove before sending
  .merge(signupStepTwoSchema);

export type SignupCombineData = z.infer<typeof signupCombineSchema>;
