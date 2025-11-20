"use client"


import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import MaxWidth from "@/components/max-width/MaxWidth";

import Swal, { SweetAlertIcon, SweetAlertPosition } from "sweetalert2";
import { useResendOtpMutation, useUserOtpVerifyMutation } from "@/app/api/authApi/authApi";

const ForgetOtpVerify: React.FC = () => {
    const [resendOtp] = useResendOtpMutation();
    const [registerOtpVerify, { isLoading }] = useUserOtpVerifyMutation();
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const router = useRouter();

    const searchParams = useSearchParams();
    const email = searchParams?.get("email") ?? "";

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (!/^[0-9]?$/.test(element.value)) return; // only digits
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.value && element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prev = e.currentTarget.previousSibling as HTMLInputElement;
            prev?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const paste = e.clipboardData.getData("text").slice(0, 6);
        if (!/^\d+$/.test(paste)) return;
        const newOtp = paste.split("").slice(0, 6);
        setOtp([...newOtp, ...new Array(6 - newOtp.length).fill("")].slice(0, 6));
    };

    const payload = { email, otp: otp.join("") };

    // ✅ Resend OTP
    const sendOtp = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email) {
            console.warn("Email is missing, cannot resend OTP.");
            return;
        }

        try {
            const res = await resendOtp({ email }).unwrap(); // ensure payload matches API type
            if (res.success) {
                Swal.fire({
                    position: "top" as SweetAlertPosition,
                    icon: "success" as SweetAlertIcon,
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error: unknown) {
            console.error("Resending OTP failed:", error);
            let errorMessage = "Resend OTP failed.";
            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message: string }).message);
            }
            Swal.fire({
                position: "top" as SweetAlertPosition,
                icon: "error" as SweetAlertIcon,
                title: errorMessage,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    // ✅ Verify OTP
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                position: "top" as SweetAlertPosition,
                icon: "error" as SweetAlertIcon,
                title: "Email is missing.",
                showConfirmButton: false,
                timer: 2000,
            });
            return;
        }

        try {
            const res = await registerOtpVerify(payload).unwrap();
            if (res.success) {
                localStorage.setItem("forget-token", res.data.token);
                Swal.fire({
                    position: "top" as SweetAlertPosition,
                    icon: "success" as SweetAlertIcon,
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push("/set-new-password");
                setOtp(["", "", "", "", "", ""]);
            }
        } catch (error: unknown) {
            let errorMessage = "OTP verification failed.";
            if (error && typeof error === "object" && "message" in error) {
                errorMessage = String((error as { message: string }).message);
            }
            Swal.fire({
                position: "top" as SweetAlertPosition,
                icon: "error" as SweetAlertIcon,
                title: errorMessage,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };

    return (
        <div className="min-h-screen">
            <MaxWidth>
                <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-[7%] space-y-6 md:space-y-0 md:space-x-6 lg:space-x-6 md:px-0">
                    <div className="w-full md:w-auto lg:w-[484px] p-6 rounded-3xl bg-white shadow-md">
                        <div>
                            <h1 className="headerColor font-semibold lg:text-[40px] text-center text-2xl md:text-3xl">
                                Verify OTP
                            </h1>
                            <p className="text-center mt-2 textColor font-thin text-sm md:text-base">
                                We have sent 6 digit code to {email || "your email"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} >
                            <div className="flex justify-between items-center mt-[10%] space-x-1 md:space-x-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onPaste={handlePaste}
                                        className="w-10 h-12 rounded-2xl text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ))}
                            </div>

                            <div className="flex justify-end mt-2 my-2 ">
                                <button
                                    onClick={sendOtp}
                                    className="headerColor cursor-pointer text-sm font-semibold"
                                >
                                    Send again
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full cursor-pointer font-bold flex justify-center items-center gap-2 text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl transition hover:opacity-90 disabled:opacity-60"
                            >
                                {isLoading ? "Loading..." : "Verify OTP"}
                            </button>
                        </form>
                    </div>

                    {/* <div className="w-full md:w-auto lg:w-[717px] lg:h-[478px] flex justify-center items-center">
                        <Image
                            src="/images/home-page/otpVerifyImg.png"
                            width={717}
                            height={478}
                            alt="OTP Verification"
                            className="max-w-full h-auto"
                        />
                    </div> */}
                </div>
            </MaxWidth>
        </div>
    );
};

export default ForgetOtpVerify;
