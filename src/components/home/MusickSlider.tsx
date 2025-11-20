'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPlay } from 'react-icons/fi';
import MaxWidth from '@/components/max-width/MaxWidth';
import { imgUrl } from '@/utility/img/imgUrl';
import axios from "axios";
import { MusickPlayer } from '@/components/musick-player/MusickPlayer';
import { usePlayerStore } from '@/app/store/usePlayerStore';

interface Artist {
    name: string;
    slug: string;
}

interface Track {
    id: number;
    slug: string;
    title: string;
    artist: Artist;
    song_poster: string;
    song: string;
    price: string;
}


// musick slider page /

export default function MusicSlider() {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const player = usePlayerStore();
    const sliderRef = useRef<HTMLDivElement>(null);

    const url = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        const fetchTrendingVocals = async () => {
            try {
                const res = await axios.get(`${url}/song`);
                setTracks(res.data?.data?.data);
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    console.error(err.response?.data || err.message);
                    setError(err.response?.data?.message || err.message);
                } else {
                    console.error(err);
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchTrendingVocals();
    }, [url]);

    const slideWidth = 240;

    const handlePlayTrack = (track: Track) => {
        player.setTrack({
            id: track.id,
            title: track.title,
            name: track.artist.name,
            song_poster: track.song_poster,
            song: `${imgUrl}/${track.song}`,
        });
    };

    return (
        <main className="mt-8 lg:mt-20">
            <MaxWidth>
                <h1 className="headerColor text-2xl lg:text-4xl font-semibold mx-auto mb-6">
                    Latest Trending Vocals
                </h1>

                {loading && <p className="text-center text-gray-400 mt-6">Loading...</p>}
                {error && <p className="text-center text-red-500 mt-6">{error}</p>}

                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="overflow-hidden"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex gap-4" style={{ width: `${tracks.length * slideWidth}px` }}>
                            {tracks.slice(0, 5).map((item) => (
                                <div key={item.id} className="min-w-[220px] max-w-[220px] flex-shrink-0 cursor-pointer">
                                    <div className="relative w-full h-[215px] overflow-hidden">
                                        <Image
                                            src={`${imgUrl}/${item.song_poster}`}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="object-cover w-[300px] h-[300px]"
                                        />
                                        <button
                                            onClick={() => handlePlayTrack(item)}
                                            className="w-[50px] h-[50px] rounded-full bg-black bg-opacity-70 flex justify-center items-center cursor-pointer absolute bottom-4 right-4 z-10"
                                        >
                                            <FiPlay className="btnTextColor" size={24} />
                                        </button>
                                    </div>
                                    <Link href={`/music-details/${item.id}`}>
                                        <h3 className="text-xs headerColor font-bold mt-3 hover:underline">
                                            {item.title.slice(0, 15)}...
                                        </h3>
                                    </Link>
                                    <div className="flex gap-x-6">
                                        <Link href={`/singer-profile/${item.artist.slug}`}>
                                            <p className="textColor text-xs font-bold hover:underline">
                                                {item.artist.name.slice(0, 15)}
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:mt-[68px] mt-5">
                    <h1 className="text-xl textColor text-center px-4 lg:px-0">
                        Updated every Friday with new royalty-free vocals curated for music producers looking to
                        elevate their sound and stand out.
                    </h1>
                </div>

                <div className="mt-4 md:mt-12">
                    <Link href="/vocals">
                        <button className="cursor-pointer block mx-auto border btnColor text-black rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]">
                            BROWSE VOCALS
                        </button>
                    </Link>
                </div>
            </MaxWidth>

            {/* Musick Player Modal */}
            <MusickPlayer />
        </main>
    );
}
