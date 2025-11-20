"use client";

import { useState } from "react";
import LoginForm from "@/app/(authentication)/login/LoginFrom";
import RegisterFrom from "@/app/(authentication)/login/RegisterFrom";


const AuthPage = () => {
    const [activeForm, setActiveForm] = useState<"login" | "register">("login");

    return (
        <div className="min-h-screen bg-gray-100 px-4 pt-20 relative">
            {/* Top-Right Login/Register Buttons */}
            <div className="fixed top-4 right-4 z-50 flex border border-gray-300 rounded-md overflow-hidden">
                <button
                    onClick={() => setActiveForm("login")}
                    className={`px-4 py-2 transition font-medium ${
                        activeForm === "login"
                            ? "bg-blue-600 text-white border-b-4 border-blue-800"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Login
                </button>
                <button
                    onClick={() => setActiveForm("register")}
                    className={`px-4 py-2 transition font-medium ${
                        activeForm === "register"
                            ? "bg-blue-600 text-white border-b-4 border-blue-800"
                            : "bg-gray-200 text-gray-700"
                    }`}
                >
                    Register
                </button>
            </div>

            {/* Centered Form */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-6">
                    {activeForm === "login" && <LoginForm />}
                    {activeForm === "register" && <RegisterFrom />}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
