"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStepOneSchema, SignupStepOneData, signupStepTwoSchema, SignupStepTwoData } from "@/lib/validations/auth/signupSchema";
import { signupAction } from "@/app/(auth)/signup/action";
import Link from "next/link";

export default function SignUpComp() {
    const [stepOneFormData, setStepOneFormData] = useState<SignupStepOneData>();
    const [doOpenNameForm, setDoOpenNameForm] = useState(false);

    const {
        register: stepOneFormRegister,
        handleSubmit: stepOneFormHandleSubmit,
        formState: { errors: stepOneFormErrors, isSubmitting: stepOneFormIsSubmitting },
    } = useForm<SignupStepOneData>({
        resolver: zodResolver(signupStepOneSchema),
    });

    const {
        register: stepTwoFormRegister,
        handleSubmit: stepTwoFormHandleSubmit,
        formState: { errors: stepTwoFormErrors, isSubmitting: stepTwoFormIsSubmitting },
    } = useForm<SignupStepTwoData>({
        resolver: zodResolver(signupStepTwoSchema),
    });

    const stepOneFormOnSubmit = async (data: SignupStepOneData) => {
        setStepOneFormData(data);
        setDoOpenNameForm(true);
    };

    const stepTwoFormOnSubmit = async (data: SignupStepTwoData) => {
        if (!stepOneFormData) return;

        // Extract rememberMe
        const { rememberMe, ...stepOneWithoutRemember } = stepOneFormData;

        const payload = {
            ...stepOneWithoutRemember,
            ...data,
        };

        await signupAction(payload);

        // ✅ Handle rememberMe on frontend only
        if (rememberMe) {
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("rememberMe");
        }
    };



    return (
        <>
            <nav className="w-full h-[73.5px] bg-[#f3f2f0]">
                <section className="mx-auto flex w-[1100px] py-[10px] items-center justify-between">
                    <div className="text-[24px] w-[140px] h-auto"><img src="/primary-logo.png" alt="primary-logo" /></div>
                    {!doOpenNameForm && (
                        <div>
                            <div className="space-x-[10px]">
                                <button className="border-[1px] cursor-pointer border-blue-500 rounded-[30px] px-[30px] h-[50px]">
                                    <Link href={`/signin`}>
                                        Sign in
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </nav>
            <main className="flex flex-col w-full bg-[#f3f2f0] min-h-[calc(100vh-74px)]">
                {!doOpenNameForm && (
                    <section className="mt-[20px] mb-[20px] w-full">
                        <p className="flex justify-center items-center text-[40px] leading-[40px]">Make the most of your professional life</p>
                        <div className="w-[370px] mx-auto mt-[20px] px-[20px] py-[15px] bg-white rounded-lg shadow-md">
                            <form onSubmit={stepOneFormHandleSubmit(stepOneFormOnSubmit)} className="space-y-2">
                                <div>
                                    <span className="text-[22px] font-[500]">Sign Up</span>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        {...stepOneFormRegister("email")}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                    />
                                    {stepOneFormErrors.email && (
                                        <p className="text-red-500 text-sm">{stepOneFormErrors.email.message}</p>
                                    )}
                                </div>

                                <label htmlFor="phoneNo">Phone number</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    {...stepOneFormRegister("phone_no")}
                                    maxLength={10}
                                    onKeyDown={(e) => {
                                        if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "Tab") {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                />
                                {stepOneFormErrors.phone_no && (
                                    <p className="text-red-500 text-sm">{stepOneFormErrors.phone_no.message}</p>
                                )}

                                <div>
                                    <label htmlFor="email">Password</label>
                                    <input
                                        type="password"
                                        {...stepOneFormRegister("password")}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                    />
                                    {stepOneFormErrors.password && (
                                        <p className="text-red-500 text-sm">{stepOneFormErrors.password.message}</p>
                                    )}
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <label>Remember me</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={stepOneFormIsSubmitting}
                                    className="w-full bg-[#0a66c2] text-white py-2 rounded-[50px] hover:bg-[#004182] cursor-pointer"
                                >
                                    {stepOneFormIsSubmitting ? "Signing up..." : "Join"}
                                </button>
                            </form>

                            <div className="flex items-center my-4">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-4 text-gray-600">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <p className="text-center">Already on getHired? <Link className="text-[#0a66c2]" href={`/signin`}>Sign in</Link></p>
                        </div>
                    </section>
                )}

                {doOpenNameForm && (
                    <section className="mt-[10px] w-full">
                        <p className=" flex justify-center items-center text-[40px] leading-[40px]">Make the most of your professional life</p>
                        <div className="w-[400px] mx-auto mt-[20px] px-[20px] py-[30px] bg-white rounded-lg shadow-md">
                            <form onSubmit={stepTwoFormHandleSubmit(stepTwoFormOnSubmit)} className="space-y-4">
                                <div>
                                    <label htmlFor="name">First name</label>
                                    <input
                                        type="text"
                                        {...stepTwoFormRegister("first_name")}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                    />
                                    {stepTwoFormErrors.first_name && (
                                        <p className="text-red-500 text-sm">{stepTwoFormErrors.first_name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email">Last name</label>
                                    <input
                                        type="text"
                                        {...stepTwoFormRegister("last_name")}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                    />
                                    {stepTwoFormErrors.last_name && (
                                        <p className="text-red-500 text-sm">{stepTwoFormErrors.last_name.message}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={stepTwoFormIsSubmitting}
                                    className="w-full bg-[#0a66c2] text-white py-2 rounded-[50px] hover:bg-[#004182] cursor-pointer"
                                >
                                    {stepTwoFormIsSubmitting ? "Signing up..." : "Continue"}
                                </button>
                            </form>

                            <div className="flex items-center my-4">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-4 text-gray-600">or</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <p className="text-center">Already on getHired? <Link className="text-[#0a66c2]" href={`/signin`}>Sign in</Link></p>
                        </div>
                    </section>
                )}
            </main>

        </>
    );
}
