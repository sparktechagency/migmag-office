"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import MaxWidth from "@/components/max-width/MaxWidth";

type Review = {
    avatar: string;
};

const reviews: Review[] = [
    { avatar: "/images/affiliates/avatar/img1.png" },
    { avatar: "/images/affiliates/avatar/img2.png" },
    { avatar: "/images/affiliates/avatar/img3.png" },
    { avatar: "/images/affiliates/avatar/img4.webp" },
    { avatar: "/images/affiliates/avatar/img5.png" },
];

const ReviewSlider: React.FC = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 480px)": {
                slides: { perView: 3, spacing: 16 },
            },
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 24 },
            },
        },
    });

    return (
        <MaxWidth>
            <div className=" mx-auto  lg:mt-14 mt-7 " >
                <div className=" text-center">
                    <h1 className=" lg:text-lg text-sm headerColor font-bold">Trusted by Creators, Artists & Companies Around the World</h1>
                </div>

                <div ref={sliderRef} className="keen-slider">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="keen-slider__slide flex justify-center items-center  p-6"
                        >
                            <Image
                                src={review.avatar}
                                alt={`Reviewer ${index + 1}`}
                                width={120}
                                height={120}
                                className=" object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidth>
    );
};

export default ReviewSlider;
