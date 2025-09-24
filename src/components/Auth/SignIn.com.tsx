
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchemaData, signinSchema } from "@/lib/validations/auth/signinSchema";
// import { signinAction } from "@/app/(auth)/signin/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInComp() {
    const {
        register: register,
        handleSubmit: handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchemaData>({
        resolver: zodResolver(signinSchema),
    });
    const router = useRouter();

    const onSubmit = async (data: SignInSchemaData) => {
        try {
            // const result = await signinAction(data);
            router.push(`/dashboard/vaishali_rathore`)
            // if(result.success) {
            // }
        } catch (error) {
            console.log('error:', error)
        }
    }

    return (
        <>
            <nav className="w-full h-[73.5px] bg-[#f3f2f0]">
                <section className="mx-auto flex w-[1100px] py-[10px] items-center justify-between">
                    <div className="text-[24px] w-[140px] h-auto"><img src="/primary-logo.png" alt="primary-logo" /></div>
                    <div>
                        <div className="space-x-[10px]">
                            <button className="border-[1px] cursor-pointer border-blue-500 rounded-[30px] px-[30px] h-[50px]">
                                <Link href={`/signup`}>
                                    Join up
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </nav>
            <main className="flex flex-col w-full bg-[#f3f2f0] h-[calc(100vh-74px)]">
                <section className="mt-[60px] w-full">
                    <p className=" flex justify-center items-center text-[40px] leading-[40px]">Make the most of your professional life</p>
                    <div className="w-[400px] mx-auto mt-[20px] px-[20px] py-[30px] bg-white rounded-lg shadow-md">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="">
                                <span className="text-[22px] font-[500]">Sign In</span>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email">Password</label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label>Remember me</label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#0a66c2] text-white py-2 rounded-[50px] hover:bg-[#004182] cursor-pointer"
                            >
                                {isSubmitting ? "Signing up..." : "Join"}
                            </button>
                        </form>

                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-600">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <p className="text-center">Don&apos;t have account on getHired? <Link className="text-[#0a66c2]" href={`/signup`}>Join now</Link></p>
                    </div>
                </section>
            </main>

        </>
    );
}
