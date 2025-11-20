"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MaxWidth from "@/components/max-width/MaxWidth";
import { imgUrl } from "@/utility/img/imgUrl";
import axios from "axios";
import { usePlayerStore } from "@/app/store/usePlayerStore"; // <-- use store
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";

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

export default function MusicSlider() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const player = usePlayerStore(); // <-- store

  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchTrendingVocals = async () => {
      try {
        const res = await axios.get(`${url}/song`);
        setTracks(res.data?.data?.data);
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

    fetchTrendingVocals();
  }, [url]);

  const handlePlayTrack = (track: Track) => {

    player.setTrack({
      id: track.id,
      title: track.title,
      name: track.artist.name,
      song: `${imgUrl}/${track.song}`,
      song_poster: track.song_poster,
    });
  };




  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <main className="mt-8 lg:mt-16">
        <MaxWidth>
          {loading && <p className="text-center text-gray-400 mt-6">Loading...</p>}
          {error && <p className="text-center text-red-500 mt-6">{error}</p>}

          <div className="relative overflow-hidden hidden lg:block  ">
            <div className="flex gap-4" ref={sliderRef}>
              {tracks.slice(0, 5).map((item) => (
                <div key={item.id} className="min-w-[220px] flex-shrink-0 cursor-pointer">
                  <div className="relative w-full h-[215px] overflow-hidden">
                    <Image
                      src={`${imgUrl}/${item.song_poster}`}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="object-cover w-[200px] h-[200px]"
                    />
                    <button
                      onClick={() => handlePlayTrack(item)}
                      className="w-[50px] h-[50px] rounded-full cursor-pointer bg-black bg-opacity-70 flex justify-center items-center absolute bottom-4 right-4 z-10"
                    >
                      <FiPlay className="btnTextColor  " size={24} />
                    </button>
                  </div>
                  <Link href={`/music-details/${item.id}`}>
                    <h3 className="text-xs textColor font-bold mt-3 hover:underline">
                      {item.title.slice(0, 15)}...
                    </h3>
                  </Link>
                  <Link href={`/singer-profile/${item.artist.slug}`}>
                    <p className="textColor text-xs font-bold hover:underline">
                      {item.artist.name.slice(0, 15)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>



          {/* Slider Wrapper */}
          <div className="relative overflow-hidden md:hidden ">

            {/* Mobile Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 rounded-full md:hidden"
              disabled={currentIndex === 0}
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Mobile Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 text-white p-2 rounded-full md:hidden"
              disabled={currentIndex === tracks.length - 1}
            >
              <FiChevronRight size={20} />
            </button>

            {/* Slider Items */}
            <div
              className="flex gap-4 transition-transform duration-500"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {tracks.map((item) => (
                <div key={item.id} className="min-w-full md:min-w-[250px] flex-shrink-0 px-4 ">
                  <div className="relative w-full h-[260px] overflow-hidden">
                    <Image
                      src={`${imgUrl}/${item.song_poster}`}
                      alt={item.title}
                      width={500}
                      height={500}
                      className=" w-[300px] h-[300px]"
                    />

                    <button
                      onClick={() => handlePlayTrack(item)}
                      className="w-[50px] h-[50px] rounded-full cursor-pointer bg-black bg-opacity-70 flex justify-center items-center absolute bottom-4 right-4 z-10"
                    >
                      <FiPlay className="btnTextColor" size={24} />
                    </button>
                  </div>

                  <Link href={`/music-details/${item.id}`}>
                    <h3 className="text-xs textColor font-bold mt-3 hover:underline">
                      {item.title.slice(0, 15)}...
                    </h3>
                  </Link>

                  <Link href={`/singer-profile/${item.artist.slug}`}>
                    <p className="textColor text-xs font-bold hover:underline">
                      {item.artist.name.slice(0, 15)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-12">
            <Link href="/vocals">
              <button className="cursor-pointer block mx-auto border bg-black text-white rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]">
                BROWSE VOCALS
              </button>
            </Link>
          </div>
        </MaxWidth>
      </main>




      <MusickPlayer />



    </>
  );
}
