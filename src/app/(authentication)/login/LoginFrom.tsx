"use client";

import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Swal from "sweetalert2";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useUserLoginMutation } from "@/app/api/authApi/authApi";


const LoginForm: React.FC = () => {
    const [userLogin, { isLoading }] = useUserLoginMutation();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const { email, password } = formData;
    const payload = {
        email,
        password,
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await userLogin(payload).unwrap();

            if (res.success) {
                // Save token before navigation
                localStorage.setItem("token", res.data.token);

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Reset form
                setFormData({
                    email: "",
                    password: "",
                });

                // Navigate after short delay to allow Swal to show
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1500);
            }

        } catch (err) {

            const error = err as FetchBaseQueryError & { data?: { message?: string } };

            Swal.fire({
                position: "top",
                icon: "error",
                title: error?.data?.message || "Something went wrong",
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };


    return (
        <div className="flex flex-col items-center  ">
            <div className="max-w-[384px] p-1 shadow-md ">
                <div className="bg-[#13181E]  rounded-3xl">
                    <div>
                        <h1 className="text-white text-center text-2xl lg:text-[40px] font-semibold">
                            Welcome!
                        </h1>
                        <p className="mt-2 text-white text-lg text-center">
                            Please login with valid information for create account.
                        </p>
                    </div>

                    <div className="mt-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Email Field */}
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="mb-2 font-semibold text-[16px] block text-white"
                                >
                                    Email
                                </label>
                                <span className="absolute left-3 top-[44px]">
                                    <MdEmail className="text-white mt-0.5 text-xl" />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                    value={email}
                                    onChange={handleChange}
                                    className="w-full py-3 placeholder:text-[#fff] text-white border shadow-2xl placeholder:text-[16px] px-10 rounded-lg bg-[#13171E] focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <label
                                    htmlFor="password"
                                    className="mb-2 text-white font-semibold text-[16px] block"
                                >
                                    Password
                                </label>
                                <span className="absolute left-3 top-[43px]">
                                    <MdLock className="text-white mt-1 text-xl" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChange}
                                    className="w-full py-3 placeholder:text-[#fff] text-white placeholder:text-[16px] px-10 rounded-lg border shadow-2xl bg-[#13171E] focus:outline-none"
                                    required
                                />
                                <div
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible className="mt-9 text-lg text-white" />
                                    ) : (
                                        <AiOutlineEye className="mt-9 text-lg text-white" />
                                    )}
                                </div>
                            </div>

                            {/* Remember Me & Forgot */}
                            <div
                                className="flex items-center lg:flex-row md:flex-row flex-col space-y-1.5 justify-between space-x-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        onChange={handleChange}
                                        className="w-4 h-4 appearance-none mt-1.5 bg-black checked:bg-white border border-gray-300 rounded-sm cursor-pointer"
                                    />
                                    <span className="text-[#fff] mt-1.5 text-sm font-thin">
                                        Remember me
                                    </span>
                                </label>
                                <Link href="/verify-email" className="text-[#fff] text-sm font-bold">
                                    Forget password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full cursor-pointer font-bold text-[#3A3A3A] btnColor text-xl py-3 px-9 rounded-2xl transition mt-4 "
                            >
                                {isLoading ? (
                                    <>
                                        <span>
                                            Submitting...
                                        </span>
                                    </>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </form>


                    </div>
                </div>
            </div>

            {/* Terms Text */}
            <div className="max-w-[384px] mt-4 px-4">
                <span className="text-white text-[15px] font-thin">
                    By joining you confirm that you accept TuneM’s{" "}
                    <Link href="/term&condiction" className="text-[#05377D]">
                        Terms & Conditions
                    </Link>{" "}
                    and agree to receive occasional Emails.
                </span>
            </div>
        </div>
    );
};

export default LoginForm;
