"use client";

import { useState } from "react";
import MonthlyPlans from "./MonthlyPlan";
import YearlyPlans from "./YearlyPlansa";
import MaxWidth from "@/components/max-width/MaxWidth";


export default function MemberShip() {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

    return (
        <MaxWidth>
            <div className=" mt-10 ">
                <div className={"flex flex-col md:flex-row justify-between "} >
                    <div className=" w-full md:max-w-[40%]  " >
                        <h2 className="text-2xl font-semibold text-gray-800">Choose your plan</h2>
                        <p className="text-gray-500 mt-2 ">
                            Try for free and upgrade to access our subscription-only voices and more features. Cancel anytime.

                        </p>
                    </div>

                    {/* Tabs */}
                    <div className={` md:block hidden `} >
                        <div className="mt-6 md:mt-0 flex items-center h-12 bg-gray-100 rounded-full  justify-end  px-6 gap-x-5 relative   ">
                            <div>
                                <button
                                    onClick={() => setActiveTab("monthly")}
                                    className={` cursor-pointer px-6 py-2 text-sm font-medium rounded-full ${activeTab === "monthly" ? "bg-white shadow text-black" : "text-gray-500"
                                        }`}
                                >
                                    Monthly
                                    {activeTab === "monthly" && (
                                        <span className="absolute -top-6 right-0 bg-blue-500 text-white   text-[10px] px-2 py-0.5 rounded-full border  ">
                                            2 MONTHS FREE
                                        </span>
                                    )}
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setActiveTab("yearly")}
                                    className={` cursor-pointer px-6 py-2 text-sm font-medium rounded-full relative ${activeTab === "yearly" ? "bg-white shadow text-black" : "text-gray-500"
                                        }`}
                                >
                                    Yearly
                                    {activeTab === "yearly" && (
                                        <span className="absolute -top-6 right-0 bg-blue-500 text-white   text-[10px] px-2 py-0.5 rounded-full">
                                            2 MONTHS FREE
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* small device  */}


                    {/* Tabs */}
                    <div className="md:hidden block w-fit flex justify-end">
                        <div className="mt-6 md:mt-0 flex items-center h-12 bg-gray-100 rounded-full justify-end px-2 gap-x-2 relative">
                            {/* Monthly Tab */}
                            <button
                                onClick={() => setActiveTab("monthly")}
                                className={`relative cursor-pointer px-6 py-2 text-sm font-medium rounded-full transition ${activeTab === "monthly"
                                    ? "bg-white shadow text-black"
                                    : "text-gray-500"
                                    }`}
                            >
                                Monthly
                                {activeTab === "monthly" && (
                                    <span className="absolute -top-6 right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full border">
                                        2 MONTHS FREE
                                    </span>
                                )}
                            </button>

                            {/* Yearly Tab */}
                            <button
                                onClick={() => setActiveTab("yearly")}
                                className={`relative cursor-pointer px-6 py-2 text-sm font-medium rounded-full transition ${activeTab === "yearly"
                                    ? "bg-white shadow text-black"
                                    : "text-gray-500"
                                    }`}
                            >
                                Yearly
                                {activeTab === "yearly" && (
                                    <span className="absolute -top-6 right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full border">
                                        2 MONTHS FREE
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>



                </div>
                {/* Content */}
                <div className="mt-10   ">
                    {activeTab === "monthly" ? <MonthlyPlans /> : <YearlyPlans />}
                </div>
            </div>
        </MaxWidth>
    );
}
