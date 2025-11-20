import Image from 'next/image';
import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner = () => {
    return (
        <div className=" lg:py-16">
            <MaxWidth>
                <div className="flex flex-col lg:flex-row justify-between  ">
                    {/* Left Side */}
                    <div className="text-white w-full max-w-2xl ">
                        <h1 className="text-4xl lg:text-5xl font-bold  mb-6">
                            Studio-Quality Vocals Ready to Use
                        </h1>
                        <p className="text-lg lg:text-xl font-medium text-gray-200 leading-relaxed">
                            Royalty-free vocals by leading singers & songwriters
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="w-full max-w-4xl ">
                        <Image
                            src="/update-image/vocal/banner/vocal-banner.png"
                            width={1000}
                            height={1000}
                            alt="Browse Vocal Banner"
                            className="w-full h-auto object-contain rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default BrowseVocalBanner;
