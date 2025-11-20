"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import MaxWidth from "@/components/max-width/MaxWidth";
import TrustBoxWidget from "./TrustBoxWidget";

type Review = {
    name: string;
    avatar: string;
    rating: number;
    review: string;
};

const reviews: Review[] = [
    {
        name: "Manda",
        avatar: "/update-image/home-page/Reviews/Manda.jpg",
        rating: 5,
        review:
            "Everything I’ve used so far has been studio-quality and effortless to work with. Instantly adds that polished, professional edge.",
    },
    {
        name: "CF1",
        avatar: "/update-image/home-page/Reviews/CF1.jpg",
        rating: 5,
        review:
            "I’ve released tracks using their vocals the quality delivered, and the support team was fast and helpful. I’ll definitely be coming back.",
    },
    {
        name: "Thvndex",
        avatar: "/update-image/home-page/Reviews/Thvndex.jpg",
        rating: 5,
        review:
            "Simple licensing, smooth checkout, and outstanding vocal quality. One of the easiest and most reliable platforms I’ve worked with.",
    },
    {
        name: "Paul Aristo",
        avatar: "/update-image/home-page/Reviews/Paul Aristo.jpg",
        rating: 5,
        review:
            "These vocals have that big-label energy the kind of sound you hear at festivals or on top-charting records. Truly next-level",
    },
    {
        name: "Julius Arth",
        avatar: "/update-image/home-page/Reviews/Julius Arth.png",
        rating: 5,
        review:
            "You don’t hear the same vocals floating around everywhere that’s what sets this apart. It’s a real advantage when you want your track to stand out.",
    },

];

const Review: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if (width < 480) {
                // Extra small devices (very small phones)
                setVisibleSlides(1);
            } else if (width >= 480 && width < 768) {
                // Small devices (phones)
                setVisibleSlides(1);
            } else if (width >= 768 && width < 1024) {
                // Medium devices (tablets)
                setVisibleSlides(2);
            } else if (width >= 1024 && width < 1280) {
                // Large devices (small laptops)
                setVisibleSlides(3);
            } else {
                // Extra large devices (desktops and larger)
                setVisibleSlides(3);
            }
        }

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = reviews.length - visibleSlides;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const totalBullets = maxIndex + 1;

    return (
        <MaxWidth>
            <div className="relative   mx-auto pb-12 ">
                <div className="mb-8">
                    <h1 className="text-2xl lg:text-4xl font-bold headerColor ">Reviews</h1>
                    <p className="lg:text-xl text-lg mt-2 textColor ">4.7 Stars – 200+ Reviews</p>
                </div>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
                    >
                        {reviews.map((review, i) => (
                            <div key={i} className={`min-w-[${100 / visibleSlides}%] px-10`}
                                style={{ minWidth: `${100 / visibleSlides}%` }}>
                                <div className="bg-white border rounded-xl shadow p-6 h-full flex flex-col">
                                    <div className="flex items-start justify-between">
                                        <div className={"flex items-center gap-4 mb-4"}>
                                            <div>
                                                <Image
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full w-12 h-12 object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm headerColor ">{review.name}</p>
                                                {/*<p className="text-yellow-400 text-sm ">{`★`.repeat(review.rating)}</p>*/}
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={"/images/badge/badge.png"} width={12} height={12} alt={"badge"}
                                                className="rounded-full w-4 h-4 mt-1.5 object-cover" />
                                        </div>

                                    </div>
                                    <p className="textColor text-sm flex-grow">{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 top-[45%] -translate-y-1/2 bg-white   cursor-pointer  disabled:opacity-50"
                    aria-label="Previous"
                >
                    <GrPrevious size={30} className={`font-bold`} />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 top-[45%] -translate-y-1/2 bg-white  cursor-pointer   disabled:opacity-50"
                    aria-label="Next"
                >
                    <GrNext size={30} className={`font-bold`} />
                </button>

                {/* Pagination Bullets */}
                <div className="flex justify-center mt-6 space-x-3">
                    {[...Array(totalBullets)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${i === currentIndex ? "bg-yellow-400" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <div className={`lg:mt-6 mt-3 `} >
                    <TrustBoxWidget />
                </div>
            </div>
        </MaxWidth>
    );
};

export default Review;
