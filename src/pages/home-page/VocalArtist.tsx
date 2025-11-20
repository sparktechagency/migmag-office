"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "/update-image/home-page/spotify/spotify2.png",
    "/update-image/home-page/spotify/spotify1.png",
    "/update-image/home-page/spotify/spotify3.png",
    "/update-image/home-page/spotify/spotify4.png",
];

const VocalArtist = () => {
    const [current, setCurrent] = useState(0);

    // Auto slide every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    const handlePrev = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 2 : prev - 2
        );
    };

    const handleNext = () => {
        setCurrent((prev) =>
            prev >= images.length - 2 ? 0 : prev + 2
        );
    };

    return (
        <div className="mx-auto max-w-[1116px]">
            <h1 className="lg:text-[70px] md:text-4xl text-2xl font-thin lg:mt-32 md:mt-20 mt-7 headerColor">
                “LOVE TUNEM - GREAT CHOICE AND EVEN BETTER SERVICE”
            </h1>
            <p className="mt-2 text-lg font-medium textColor">
                Mantas Stinson (Lithuania HQ Label Manager)
            </p>

            {/* Desktop: All images in row */}
            <div className="hidden md:flex justify-center items-center gap-6 my-10">
                {images.map((src, idx) => (
                    <Image
                        key={idx}
                        src={src}
                        alt="logo"
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                ))}
            </div>

            {/* Mobile: Slider */}
            <div className="relative md:hidden w-full overflow-hidden my-10">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 50}%)` }}
                >
                    {images.map((src, idx) => (
                        <div key={idx} className="w-1/2 flex-shrink-0 p-2">
                            <Image
                                src={src}
                                alt="logo"
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Prev Button */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                    <FaChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default VocalArtist;
