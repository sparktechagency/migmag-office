import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const HireBanner = () => {
    return (
        <>
            <div
                className="bg-contain bg-center bg-no-repeat py-12 h-[80vh] md:block hidden   "
                style={{
                    backgroundImage: "url('/update-image/hire/banner/hire-banner-image.png')",
                }}
            >
                <MaxWidth>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Side */}
                        <div className="w-full lg:max-w-[40%] text-white">
                            <h1 className="text-2xl lg:text-5xl font-bold text-black ">Hire Singers</h1>

                            <p className="text-xl lg:text-2xl my-6 text-black  max-w-[90%]">
                                Create your perfect vocal with world-class singers—curated for today&apos;s top producers.
                            </p>

                            <button
                                className="text-xl text-[#00401A] font-medium bg-[#F0F9F4] shadow-md px-5 py-3 rounded-md my-4">
                                Certified 100% Royalty Free
                            </button>

                            <div className="my-6">
                                <Link className={'cursor-pointer'} href="/artist-list">
                                    <button
                                        className="text-xl cursor-pointer font-medium bg-[#82B6DA] text-white shadow-md px-5 py-3 rounded-md">
                                        Browse Artists
                                    </button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex gap-1 text-[#FFC803]">
                                    {Array(5).fill(0).map((_, i) => (
                                        <FaStar key={i} size={20} />
                                    ))}
                                </div>
                                <p className="text-xl font-semibold">4.8 Star Rating</p>
                            </div>
                        </div>


                    </div>
                </MaxWidth>
            </div>
            <div
                className="bg-contain bg-center bg-no-repeat py-12  md:hidden block   "

            >
                <MaxWidth>
                    <div className="flex flex-col lg:flex-row items-center justify-between ">
                        {/* Left Side */}
                        <div className="w-full lg:max-w-[40%] text-white">
                            <h1 className="text-2xl lg:text-5xl font-bold text-black ">Hire Singers</h1>

                            <p className="text-xl lg:text-2xl my-6 text-black  max-w-[90%]">
                                Create your perfect vocal with world-class singers—curated for today&apos;s top producers.
                            </p>

                            <button
                                className="text-xl text-[#00401A] font-medium bg-[#F0F9F4] shadow-md px-5 py-3 rounded-md my-4">
                                Certified 100% Royalty Free
                            </button>

                            <div className="my-6">
                                <Link className={'cursor-pointer'} href="/artist-list">
                                    <button
                                        className="text-xl cursor-pointer font-medium bg-[#82B6DA] text-white shadow-md px-5 py-3 rounded-md">
                                        Browse Artists
                                    </button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex gap-1 text-[#FFC803]">
                                    {Array(5).fill(0).map((_, i) => (
                                        <FaStar key={i} size={20} />
                                    ))}
                                </div>
                                <p className="text-xl font-semibold">4.8 Star Rating</p>
                            </div>
                        </div>


                    </div>
                </MaxWidth>
            </div>
        </>
    );
};

export default HireBanner;
