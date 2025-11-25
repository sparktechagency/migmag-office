"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import MaxWidth from "@/components/max-width/MaxWidth";
import RegisterFrom from "@/app/(authentication)/login/RegisterFrom";
import LoginForm from "@/app/(authentication)/login/LoginFrom";
import Image from "next/image";

const LoginPage: React.FC = () => {
    const [activeForm, setActiveForm] = useState<"login" | "register">("login");

    return (
        <div className="bg-gradient-to-br from-[#0C1520] via-[#101A26] to-[#0C1520] text-white  pb-10">
            <MaxWidth>
                <div className="flex lg:flex-row flex-col justify-between items-center   gap-10 pt-10 pb-10">
                    {/* ✅ Completely Static Left Side */}

                    <div className="lg:w-1/2 px-4">
                        <div>
                            <Link href={"/"}>
                                <Image src={"/images/logo/white-logo.svg"} alt={"logo"} width={200} height={400}
                                    className={` mb-10 `} />
                            </Link>
                        </div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Get <span className="btnTextColor">Vocals</span>
                            <br />
                            That <span className="btnTextColor">Stand</span> Out
                        </h1>
                        <p className="text-xl mt-6 text-gray-300">
                            Work With Elite Singers Across the World
                        </p>
                    </div>

                    {/* ✅ Right Side */}
                    <div className="lg:w-1/2 w-full   mt-10  max-w-md px-4">
                        {/* Toggle Buttons */}
                        <div className="flex justify-center mb-6 rounded-md overflow-hidden shadow-lg">
                            <button
                                onClick={() => setActiveForm("login")}
                                className={`w-1/2 cursor-pointer py-2 font-semibold transition-all duration-300 ${activeForm === "login"
                                    ? "btnColor text-black"
                                    : "bg-gray-800 text-white hover:bg-gray-700"
                                    }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setActiveForm("register")}
                                className={`w-1/2 cursor-pointer py-2 font-semibold transition-all duration-300 ${activeForm === "register"
                                    ? "btnColor text-black"
                                    : "bg-gray-800 text-white hover:bg-gray-700"
                                    }`}
                            >
                                Register
                            </button>
                        </div>

                        {/* ✅ Fixed height and animated only inner form */}
                        <div className="relative bg-[#13181E] rounded-xl p-6 shadow-xl  h-[700px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                {activeForm === "login" ? (
                                    <motion.div
                                        key="login"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        <LoginForm />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="register"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        <RegisterFrom />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm mt-20 px-4">
                    <Link href="/">
                        <Image
                            src="/images/logo/white-logo.svg"
                            alt="logo"
                            width={200}
                            height={400}
                            className=""
                        />
                    </Link>

                    <Link href="/refund-policy" className="text-white hover:btnTextColor transition">
                        Refund Policy
                    </Link>

                    <Link href="/privacy-policy" className="text-white hover:btnTextColor transition">
                        Privacy Policy
                    </Link>

                    <Link href="/term&condiction" className="text-white hover:btnTextColor transition">
                        Terms & Conditions
                    </Link>
                </div>
            </MaxWidth>
        </div>
    );
};

export default LoginPage;
