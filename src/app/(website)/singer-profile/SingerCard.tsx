"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imgUrl } from "@/utility/img/imgUrl";
import { usePlayerStore } from "@/app/store/usePlayerStore";

interface ArtistCardProps {
    id: number;
    name: string;
    slug: string;
    singer: string;
    singer_writer: string;
    cover_song: string;
    location: string;
    description: string;
    profile: string;
    gender: string;
    language: string;
    price: string;
    is_wishlisted: number;
    is_followed: number;
    is_topartist: number;
    created_at: string;
    updated_at: string;
}
// interface Track {
//     id: number;
//     title: string;
//     artist: { name: string };
//     price: string;
//     song: string;
//     song_poster: string;
// }

const SingerCard: React.FC<{ artist: ArtistCardProps }> = ({ artist }) => {
    console.log("singer card data is", artist)



    const player = usePlayerStore();


    const handlePlayTrack = () => {
        player.setTrack({
            id: artist.id,
            title: artist.name,
            name: artist.name,
            song: `${imgUrl}/${artist.cover_song}`,
            song_poster: artist.profile,
        });
    };





    return (
        <div>
            {/* ----------- Desktop View ----------- */}
            <div className="hidden md:block">
                <div className="flex items-center justify-between p-4 border-b py-6  transition-colors duration-200 gap-4">
                    {/* Left */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex flex-row items-center gap-x-3 w-[70%]">
                            <Link href={`/singer-profile/${artist.slug}`}>
                                <Image
                                    src={`${imgUrl}/${artist.profile}`}
                                    alt={artist.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full w-16 h-16"
                                />
                            </Link>
                            <div className="truncate">
                                <h3 className="font-semibold md:text-lg text-xs text-black truncate">
                                    {artist.name}
                                </h3>
                                <div className={`flex item-center gap-x-2  `} >
                                    <p className="md:text-sm text-xs text-black truncate underline underline-offset-4 ">
                                        {artist.singer}
                                    </p>
                                    <p className="md:text-sm text-xs text-black truncate underline underline-offset-4 ">Songwriter</p>
                                </div>
                            </div>
                        </div>

                        {/* Play button */}
                        <div>
                            <button
                                onClick={handlePlayTrack}
                                className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full btnColor text-black"
                            >
                                ▶
                            </button>
                        </div>
                    </div>

                    {/* Middle (progress bar area placeholder) */}
                    <div className="flex-1 flex items-center justify-center gap-3"></div>

                    {/* Right */}
                    <div className="flex items-center gap-x-6 flex-1 justify-end min-w-0">
                        <h1 className="text-black md:font-semibold text-xs md:text-xl">
                            ${artist.price}
                        </h1>
                        <Link href={`/hire-from/${artist.slug}`}>
                            <button className="text-black btnColor md:px-4 md:py-2 py-1 md:text-[16px] text-xs px-2 rounded-md cursor-pointer">
                                Hire Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ----------- Mobile View ----------- */}
            <div className="md:hidden block">
                <div className="flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Link href={`/singer-profile/${artist.slug}`}>
                                <Image
                                    src={`${imgUrl}/${artist.profile}`}
                                    alt={artist.name}
                                    width={2000}
                                    height={2000}
                                    className="rounded-full w-16 h-16"
                                />
                            </Link>
                        </div>

                        <div>
                            <div>
                                <button
                                    onClick={() => handlePlayTrack
                                    }
                                    className="w-4 h-4 p-2 cursor-pointer flex items-center justify-center rounded-full btnTextColor "
                                >
                                    ▶
                                </button>
                            </div>
                        </div>

                        <div className={` `} >
                            <h3 className="text-black font-medium">{artist.name}</h3>
                            <div className={` flex item-center gap-x-2 `} >
                                <p className="text-black text-sm underline underline-offset-4">{artist.singer}</p>
                                <h1 className={`text-black text-sm underline underline-offset-4`} >Songwriter</h1>
                            </div>
                        </div>
                    </div>

                    <Link href={`/hire-from/${artist.slug}`}>
                        <svg
                            className="text-gray-400 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default SingerCard;
