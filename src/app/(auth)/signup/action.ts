"use server";

import { signupCombineSchema, SignupCombineData } from "@/lib/validations/auth/signupSchema";

export async function signupAction(formData: SignupCombineData) {
  const parsed = signupCombineSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, message: parsed.error.message };
  }

  try {
      console.log('process.env.NEXT_PUBLIC_BACKEND_URL:', process.env.NEXT_PUBLIC_BACKEND_URL+'/auth/signup')
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data), // ✅ rememberMe not included here
      cache: "no-store",
    });

    console.log('res:', res)
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message };
    }

    return { success: true, message: "Signup successful" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { success: false, message: err.message || "Server error" };
  }
}
