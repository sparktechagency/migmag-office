'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { GrNext, GrPrevious } from 'react-icons/gr';
import MaxWidth from '@/components/max-width/MaxWidth';

type Review = {
    name: string;
    avatar: string;
    rating: number;
    review: string;
    date: string;
};

const reviews: Review[] = [
    {
        name: 'Manda',
        avatar: '/update-image/home-page/Reviews/Manda.jpg',
        rating: 5,
        review:
            'Everything I’ve used so far has been studio-quality and effortless to work with. Instantly adds that polished, professional edge.',
        date: '2024-12-18',
    },
    {
        name: 'CF1',
        avatar: '/update-image/home-page/Reviews/CF1.jpg',
        rating: 5,
        review:
            'I’ve released tracks using their vocals the quality delivered, and the support team was fast and helpful. I’ll definitely be coming back.',
        date: '2024-11-10',
    },
    {
        name: 'Thvndex',
        avatar: '/update-image/home-page/Reviews/Thvndex.jpg',
        rating: 5,
        review:
            'Simple licensing, smooth checkout, and outstanding vocal quality. One of the easiest and most reliable platforms I’ve worked with.',
        date: '2025-01-02',
    },
    {
        name: 'Paul Aristo',
        avatar: '/update-image/home-page/Reviews/Paul Aristo.jpg',
        rating: 5,
        review:
            'These vocals have that big-label energy the kind of sound you hear at festivals or on top-charting records. Truly next-level',
        date: '2024-09-26',
    },
    {
        name: 'Julius Arth',
        avatar: '/update-image/home-page/Reviews/Julius Arth.png',
        rating: 5,
        review:
            'You don’t hear the same vocals floating around everywhere that’s what sets this apart. It’s a real advantage when you want your track to stand out.',
        date: '2025-02-14',
    },
];

const MusicReview: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const maxIndex = reviews.length - visibleSlides;

    // Handle responsive slides
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) setVisibleSlides(1);
            else if (width < 768) setVisibleSlides(2);
            else setVisibleSlides(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide setup
    const startAutoSlide = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 3000);
    }, [maxIndex]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoSlide]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        startAutoSlide();
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        startAutoSlide();
    };

    return (
        <MaxWidth>
            <div className="relative mx-auto bg-[#F6F6F6] my-12 py-8 px-4 overflow-hidden rounded-2xl">
                <div className="mb-8">
                    <h1 className="text-2xl lg:text-4xl font-bold headerColor">Charles&apos;s Reviews</h1>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
                    >
                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className="px-4"
                                style={{ minWidth: `${100 / visibleSlides}%` }}
                            >
                                <div className="bg-white border rounded-xl shadow p-6 h-full flex flex-col">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image
                                                src={review.avatar}
                                                alt={review.name}
                                                width={48}
                                                height={48}
                                                className="rounded-full w-12 h-12 object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-sm headerColor">{review.name}</p>
                                                <p className="text-gray-400 text-xs">
                                                    {new Date(review.date).toLocaleDateString()}
                                                </p>
                                                <p className="text-yellow-400 text-sm">
                                                    {'★'.repeat(review.rating)}
                                                    {'☆'.repeat(5 - review.rating)}
                                                </p>
                                            </div>
                                        </div>
                                        <Image
                                            src="/images/badge/badge.png"
                                            width={12}
                                            height={12}
                                            alt="badge"
                                            className="rounded-full w-4 h-4 mt-1.5 object-cover"
                                        />
                                    </div>
                                    <p className="textColor text-sm flex-grow">{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-[60%] -translate-y-1/2 cursor-pointer disabled:opacity-50"
                    disabled={reviews.length <= visibleSlides}
                    aria-label="Previous"
                >
                    <GrPrevious size={30} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-[60%] -translate-y-1/2 cursor-pointer disabled:opacity-50"
                    disabled={reviews.length <= visibleSlides}
                    aria-label="Next"
                >
                    <GrNext size={30} />
                </button>
            </div>
        </MaxWidth>
    );
};

export default MusicReview;
