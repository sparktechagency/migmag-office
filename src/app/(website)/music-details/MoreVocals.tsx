'use client';

import MaxWidth from '@/components/max-width/MaxWidth';
import Image from 'next/image';
import Link from "next/link";
import { imgUrl } from "@/utility/img/imgUrl";
import React from "react";
import { useArtistDetailsQuery } from '@/app/api/websiteApi/websiteApi';





const MoreVocals = ({ id }: { id: string }) => {
    const slug = id;
    const { data } = useArtistDetailsQuery({ slug });

    const songs = data?.data?.songs ?? [];
    return (
        <MaxWidth>
            <div className="w-full max-w-4xl mx-auto mt-2 flex flex-col gap-4">
                {songs.length > 0 ? (
                    songs.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-md shadow p-4"
                        >
                            {/* Left: Image & Play */}
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <Link href={`/music-details/${item.id}`}>
                                    <Image
                                        src={`${imgUrl}/${item?.song_poster}`}
                                        alt={item.title || "Album Cover"}
                                        className="w-14 h-14 object-cover rounded"
                                        width={56}
                                        height={56}
                                    />
                                </Link>
                                <button
                                    className="w-0 h-0 border-l-[10px] cursor-pointer border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                                <div>
                                    <p className="font-semibold text-sm">{item.title || "Untitled"}</p>
                                    <p className="text-xs textColor">
                                        {item?.artist.name || "Unknown"} · {item.bpm || "N/A"} BPM
                                        · {item.key?.name || "N/A"}
                                    </p>
                                </div>
                            </div>

                            {/* Middle: Genre and License */}
                            <div
                                className="flex flex-wrap sm:flex-nowrap items-center gap-x-24 text-sm textColor w-full sm:w-auto justify-start sm:justify-center">
                                <span>{item?.type.name || "Genre"}</span>
                                <span>{item.license?.name || "License"}</span>
                            </div>

                            {/* Right: Price and Button */}
                            <div
                                className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                <Link href="/checkout">
                                    <button
                                        className="bg-[#E7F056] cursor-pointer text-black text-sm font-semibold px-4 py-1 rounded">
                                        ${item.price || 0}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No songs found.</p>
                )}
            </div>
        </MaxWidth>
    );
};

export default MoreVocals;

