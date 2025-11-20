"use client";

import React, { useEffect, useState } from "react";
import { imgUrl } from "@/utility/img/imgUrl";
import Image from "next/image";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";
import axios from "axios";
import { Artist } from "@/utility/type/websiteApiType";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { usePlayerStore } from "@/app/store/usePlayerStore";

interface Track {
    id: number;
    title: string;
    artist?: { name: string };
    price?: string;
    song: string;
    song_poster: string;
}

const ArtistList: React.FC = () => {
    const [topArtists, setTopArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    const [visibleSlides, setVisibleSlides] = useState(3);

    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const player = usePlayerStore();

    // Play Track
    const handlePlayTrack = (track: Track) => {
        player.setTrack({
            id: track.id,
            title: track.title,
            name: track.artist?.name || track.title,
            song_poster: track.song_poster,
            song: track.song.startsWith("http")
                ? track.song
                : `${imgUrl}/${track.song}`,
        });
    };



    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 480) {
                // Extra small devices (mobile phones)
                setVisibleSlides(1);
            } else if (width >= 480 && width < 768) {
                // Small devices (large phones)
                setVisibleSlides(1);
            } else if (width >= 768 && width < 1024) {
                // Medium devices (tablets)
                setVisibleSlides(2);
            } else if (width >= 1024 && width < 1280) {
                // Large devices (small laptops)
                setVisibleSlides(3);
            } else {
                // Extra large devices (desktops and up)
                setVisibleSlides(4);
            }
        };

        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Fetch Artists
    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await axios.get(`${url}/artist`);
                const artists: Artist[] = response.data.data.data.slice(0, 15);
                setTopArtists(artists);
            } catch (err) {
                const message = err instanceof Error ? err.message : String(err);
                setError(`Failed to load artists: ${message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchArtists();
    }, [url]);

    // Auto Slide
    useEffect(() => {
        if (topArtists.length <= visibleSlides) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev >= topArtists.length - visibleSlides ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [topArtists, visibleSlides]);

    const maxIndex = topArtists.length - visibleSlides;
    const nextSlide = () => currentIndex < maxIndex && setCurrentIndex(i => i + 1);
    const prevSlide = () => currentIndex > 0 && setCurrentIndex(i => i - 1);
    const totalBullets = maxIndex + 1;


    if (loading) return <div className="text-center py-10 text-white">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="bg-[url('/images/home-page/artist/artistBgImg.png')] bg-no-repeat bg-cover bg-center px-4 w-full">
            <MaxWidth>
                <div className="pb-2 mx-auto">
                    <h1 className="text-black text-2xl lg:text-4xl font-semibold lg:pt-9 pt-3 mx-auto">
                        Top Artists
                    </h1>

                    <div className="relative w-full overflow-hidden mt-6">

                        {/* TRACK */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
                        >
                            {topArtists.map((artist) => (
                                <div
                                    key={artist.id}
                                    className="flex-shrink-0 flex justify-center"
                                    style={{ minWidth: `${100 / visibleSlides}%` }}
                                >
                                    <div className="p-3 rounded-lg w-full flex flex-col items-center justify-between">
                                        <div className="relative flex justify-center items-center group">
                                            <Image
                                                src={
                                                    artist.profile.startsWith("http")
                                                        ? artist.profile
                                                        : `${imgUrl}/${artist.profile}`
                                                }
                                                width={800}
                                                height={800}
                                                alt={artist.name}
                                                className="lg:h-[150px] lg:w-[150px] w-[100px] h-[100px] rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />

                                            <Play
                                                onClick={() =>
                                                    handlePlayTrack({
                                                        id: artist.id,
                                                        title: artist.name,
                                                        song: artist.cover_song,
                                                        song_poster: artist.profile,
                                                    })
                                                }
                                                className="absolute text-[#FFBD00] w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                            />
                                        </div>

                                        <div className="mt-3 text-center">
                                            <Link
                                                href={`/singer-profile/${artist.slug}`}
                                                className="flex items-center gap-x-2"
                                            >
                                                <h1 className="headerColor text-lg font-semibold hover:underline">
                                                    {artist.name}
                                                </h1>
                                                <Image
                                                    src={`/images/badge/badge.png`}
                                                    width={300}
                                                    height={300}
                                                    alt="badge"
                                                    className="w-4 h-4 mt-1"
                                                />
                                            </Link>

                                            <h1 className="text-[15px] text-[#504E4E]">
                                                Singer - Songwriter
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* LEFT BUTTON */}
                        <button
                            onClick={prevSlide}
                            className="absolute lg:top-1/3 top-[22%] left-2 cursor-pointer transform -translate-y-1/2 bg-black/40 p-1 lg:p-2 rounded-full text-white"
                        >
                            <ChevronLeft />
                        </button>

                        {/* RIGHT BUTTON */}
                        <button
                            onClick={nextSlide}
                            className="absolute lg:top-1/3 top-[22%] right-2 cursor-pointer transform -translate-y-1/2 bg-black/40 p-1 lg:p-2 rounded-full text-white"
                        >
                            <ChevronRight />
                        </button>

                        {/* DOTS */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {Array.from({ length: totalBullets }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${i === currentIndex ? "btnColor" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default ArtistList;
