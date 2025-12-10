/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useArtistListApiQuery } from "@/app/api/websiteApi/websiteApi";

import SingerCard from "./SingerCard";
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";


export default function SingerList() {
    const { data } = useArtistListApiQuery(undefined);
    const artistData = data?.data?.data || [];



    return (
        <>
            <div className="w-full max-w-6xl mx-auto my-14 space-y-6     ">
                {artistData.slice(0, 3).map((artist: any, i: number) => (
                    <SingerCard
                        key={i}
                        artist={artist}
                        index={i}

                    />
                ))}
            </div>
            <MusickPlayer />
        </>
    );
}
