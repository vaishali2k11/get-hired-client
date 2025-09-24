"use server";

import { SignInSchemaData, signinSchema } from "@/lib/validations/auth/signinSchema";

export async function signinAction(formData: SignInSchemaData) {
  const parsed = signinSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, message: parsed.error.message };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    });

    
    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message };
    }
    const parsedData = await res.json();

    return { success: true, userData: parsedData.user, message: parsedData.message};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return { success: false, message: err.message || "Server error" };
  }
}
