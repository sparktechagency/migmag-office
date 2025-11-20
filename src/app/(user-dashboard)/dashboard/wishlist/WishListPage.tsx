'use client';

import { useEffect, useState } from 'react';
import { FaPlay, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { imgUrl } from '@/utility/img/imgUrl';
import { MusickPlayer } from '@/components/musick-player/MusickPlayer';
import { useRemoveWishMutation, useTotalWishListQuery } from '@/app/api/authApi/authApi';
import Swal from 'sweetalert2';
import { WishlistItem } from '@/utility/type/authType';
import { usePlayerStore } from '@/app/store/usePlayerStore';

// License types
type LicenseType = 'PREMIUM' | 'NON-EXCLUSIVE' | 'EXCLUSIVE' | string;



// License Badge Component
const LicenseBadge = ({ type }: { type: LicenseType }) => {
    const colorMap: Record<Exclude<LicenseType, string>, string> = {
        PREMIUM: 'bg-cyan-500 text-white px-6 py-2',
        'NON-EXCLUSIVE': 'bg-gray-600 text-white px-6 py-2',
        EXCLUSIVE: 'bg-lime-500 text-black px-6 py-2',
    };

    return (
        <span
            className={`text-xs rounded-full font-semibold ${colorMap[type as keyof typeof colorMap] || 'bg-gray-400 text-white px-6 py-2'
                }`}
        >
            {type}
        </span>
    );
};

const WishListPage: React.FC = () => {
    const router = useRouter();
    const { data, refetch } = useTotalWishListQuery(undefined);
    const [tracks, setTracks] = useState<WishlistItem[]>([]);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    useEffect(() => {
        if (data?.data?.data) {
            setTracks(data.data.data);
        }
    }, [data]);


    async function downloadAudio(url: string, title: string = 'audio') {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `${title}.mp3`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Download failed:', error);
        }
    }


    const [removeWish] = useRemoveWishMutation();

    const handleRemoveWish = async (id: number) => {
        const songId = id;
        try {
            const res = await removeWish({ songId }).unwrap();
            Swal.fire({ position: "top-end", icon: "success", title: res?.message, showConfirmButton: false, timer: 1500 });
            refetch(); // Refresh list after deletion
        } catch (error) {
            console.error("Failed to unfollow artist:", error);
        }
    }

    const player = usePlayerStore();




    return (
        <div className="">
            <div className="text-white">
                {/* Large screen view */}
                <div className="space-y-4 hidden xl:block">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-12 items-center gap-4 p-4 rounded-md shadow ${index % 2 === 0 ? 'bg-black' : 'bg-gray-800'
                                }`}
                        >
                            {/* Image + Play */}
                            <div className="relative col-span-1 mt-6 w-[93px] h-[91px]">
                                <Image
                                    src={`${imgUrl}/${track?.song?.song_poster}`}
                                    alt={track?.song?.title}
                                    className="object-cover rounded-md w-full -mt-5 h-full"
                                    width={93}
                                    height={91}
                                />
                                <button
                                    onClick={() =>
                                        player.setTrack({
                                            id: track?.id,
                                            title: track.song?.title,
                                            name: track.song?.artist?.name,
                                            song: `${imgUrl}/${track.song?.song}`,
                                            song_poster: track.song?.song_poster,
                                        })
                                    }
                                    className="absolute cursor-pointer top-0 left-0 w-12 h-12 mt-2 ml-6 rounded-full bg-opacity-40 border border-[#E7F056] hover:bg-opacity-60 flex items-center justify-center transition"
                                >
                                    <FaPlay className="text-[#E7F056]" />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="text-left col-span-2 font-bold text-base">{track?.song?.title}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.artist?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.genre?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.bpm} BPM</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.key?.name}</div>
                            <div className="text-left col-span-1 text-base">{track?.song?.gender}</div>

                            {/* License */}
                            <div className="col-span-2 text-left">
                                <LicenseBadge type={track?.song?.license?.name} />
                            </div>

                            {/* Download */}
                            {/* <div className="col-span-1 flex justify-start">
                                <button
                                    onClick={() =>
                                        downloadAudio(`${imgUrl}/${track?.song?.song}`, track?.song?.title)
                                    }
                                    className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                >
                                    <FaDownload />
                                </button>
                            </div> */}
                            <div className="col-span-1 flex justify-start">
                                <button
                                    onClick={() => { handleRemoveWish(track?.song_id) }}

                                    className="h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer px-4 "
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small device view */}
                <div className="space-y-4 block xl:hidden">
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-md shadow ${index % 2 === 0 ? 'bg-black' : 'bg-gray-800'}`}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={`${imgUrl}/${track?.song?.song_poster}` || '/images/default.jpg'}
                                        alt={track?.song?.title}
                                        className="object-cover rounded-md"
                                        fill
                                    />
                                    <button

                                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-md"
                                    >
                                        <FaPlay className="text-[#E7F056] w-10 h-10 p-2 border-2 border-amber-300 rounded-full" />
                                    </button>
                                </div>

                                <div className="font-bold text-left">{track?.song?.title}</div>
                                <div className="text-left">{track?.song?.artist?.name}</div>

                                <div className="text-white text-base flex flex-wrap items-center gap-x-8 gap-y-3">
                                    <div>{track?.song?.genre?.name}</div>
                                    <div>{track?.song?.bpm}</div>
                                    <div>{track?.song?.key?.name}</div>
                                    <div>{track?.song?.gender}</div>
                                    <LicenseBadge type={track?.song?.license?.name} />
                                    <button
                                        onClick={() =>
                                            downloadAudio(`${imgUrl}/${track?.song?.song}`, track?.song?.title)
                                        }
                                        className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                    >
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Music Player Modal */}

            <MusickPlayer />

        </div>
    );
};

export default WishListPage;
