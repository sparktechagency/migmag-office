"use client";

import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useUserLoginMutation } from "@/app/api/authApi/authApi";


// lgon page 


const LoginForm: React.FC = () => {
    const [userLogin, { isLoading }] = useUserLoginMutation();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    // Real-time error states
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Email validation
        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailError(emailRegex.test(value) ? "" : "Invalid email address");
        }

        // Password validation
        if (name === "password") {
            const uppercase = /[A-Z]/;
            const lowercase = /[a-z]/;
            const number = /[0-9]/;

            if (!value) {
                setPasswordError("Password cannot be empty");
            } else if (!uppercase.test(value)) {
                setPasswordError("Password must contain at least one uppercase letter");
            } else if (!lowercase.test(value)) {
                setPasswordError("Password must contain at least one lowercase letter");
            } else if (!number.test(value)) {
                setPasswordError("Password must contain at least one number");
            } else if (value.length < 8) {
                setPasswordError("Password must be at least 8 characters long");
            } else {
                setPasswordError(""); // No errors
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailError || passwordError) return; // prevent submit if errors exist

        try {
            const res = await userLogin(formData).unwrap();

            if (res.success) {
                localStorage.setItem("token", res.data.token);

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setFormData({ email: "", password: "" });

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

    const { email, password } = formData;

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-[384px] p-1 shadow-md">
                <div className="bg-[#13181E] rounded-3xl p-6">
                    <h1 className="text-white text-center text-2xl lg:text-[40px] font-semibold">
                        Welcome!
                    </h1>
                    <p className="mt-2 text-white text-lg text-center">
                        Please login with valid information to access your account.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        {/* Email */}
                        <div className="relative">
                            <label htmlFor="email" className="mb-2 font-semibold text-[16px] block text-white">
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
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="mb-2 text-white font-semibold text-[16px] block">
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
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading || emailError !== "" || passwordError !== ""}
                            className="w-full cursor-pointer font-bold text-[#3A3A3A] btnColor text-xl py-3 px-9 rounded-2xl transition mt-4"
                        >
                            {isLoading ? "Submitting..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
