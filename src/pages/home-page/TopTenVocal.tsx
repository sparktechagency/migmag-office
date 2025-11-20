'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import MaxWidth from "@/components/max-width/MaxWidth";
import axios from "axios";
import { usePlayerStore } from '@/app/store/usePlayerStore';

interface Artist {
  id: number;
  name: string;
  slug: string;
}

interface Track {
  id: number;
  title: string;
  artist: Artist;
  price: string;
  song: string;
  song_poster: string;
  slug: string;
  license: {
    name: string;
  };
}

const TopTenVocal: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const player = usePlayerStore();

  useEffect(() => {
    const fetchTrendingVocals = async () => {
      try {
        const res = await axios.get(`${url}/song`);
        if (res.data.success) {
          setTracks(res.data?.data?.data.slice(0, 10));
        } else {
          setError("Failed to load data");
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchTrendingVocals();
  }, [url]);

  const handlePlayTrack = (track: Track) => {
    player.setTrack({
      id: track.id,
      title: track.title,
      name: track.artist.name,
      song_poster: track.song_poster,
      song: track.song.startsWith("https") ? track.song : `${imgUrl}/${track.song}`,
    });
  };

  const midpoint = Math.ceil(tracks.length / 2);
  const leftItems = tracks.slice(0, midpoint);
  const rightItems = tracks.slice(midpoint);

  const renderCard = (item: Track, index: number) => {
    const imagePath = `${imgUrl}/${item.song_poster}`;
    return (
      <div key={item.id}>
        <div className="border-b hover:bg-gray-100 flex flex-col lg:flex-row items-center justify-between gap-y-2 lg:gap-y-0 lg:py-2 py-3 px-10 my-2 rounded-lg max-w-[713px] transition-all duration-300 cursor-pointer">
          <h1 className="text-3xl headerColor">{index + 1}</h1>

          <Link href={`/music-details/${item.id}`}>
            <Image
              src={imagePath}
              alt={item.title}
              width={100}
              height={100}
              className="w-20 h-20 rounded-xl"
            />
          </Link>

          <button onClick={() => handlePlayTrack(item)} className="flex justify-center items-center">
            <FaPlay className="text-black text-2xl cursor-pointer" />
          </button>

          <div className="flex flex-col">
            <Link href={`/singer-profile/${item.artist.slug}`}>
              <h3 className="text-lg font-bold leading-6 hover:underline headerColor">
                {item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}
              </h3>
            </Link>

            <p className="text-lg font-bold flex flex-col gap-x-2.5 leading-6 textColor">
              <Link href={`/singer-profile/${item.artist.slug}`}>
                {item.artist.name.length > 10 ? item.artist.name.slice(0, 10) + "..." : item.artist.name}
              </Link>
              <div className="flex justify-center items-center gap-x-3">
                <span>{item?.license?.name}</span>
                <span>${item?.price}</span>
              </div>
            </p>
          </div>

          <button className="w-[112px] rounded-2xl text-lg py-1 text-black btnColor">
            <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>Get Vocal</Link>
          </button>
        </div>
      </div>
    );
  };

  return (
    <MaxWidth>
      <div className="hidden md:block">
        <div className="mx-auto mb-10">
          <div className="border border-black" />
          <h2 className="mt-7 text-2xl lg:text-4xl font-semibold headerColor">Top 10 Vocals</h2>

          {loading && <p className="text-gray-400 mt-4">Loading...</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full">
            <div className="flex flex-col">{leftItems.map((item, i) => renderCard(item, i))}</div>
            <div className="flex flex-col mt-4 md:mt-0">{rightItems.map((item, i) => renderCard(item, i + midpoint))}</div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default TopTenVocal;
