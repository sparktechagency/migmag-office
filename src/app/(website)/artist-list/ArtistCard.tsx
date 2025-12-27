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
  location?: string;
  description?: string;
  profile: string;
  gender?: string;
  language?: string;
  price: string;
  is_wishlisted?: number;
  is_followed?: number;
  is_topartist?: number;
  created_at?: string;
  updated_at?: string;
}

const ArtistCard: React.FC<{ artist: ArtistCardProps, index: number }> = ({ artist, index }) => {
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
    <>
      <div>
        {/* ----------- Desktop View ----------- */}
        <div className={`hidden md:flex items-center p-4  py-6  transition-colors duration-200 gap-4 ${index % 2 == 0 ? "bg-[#201F1F]" : "bg-[#000000]"} `}>
          {/* Left */}
          <div className="flex items-center gap-3 flex-1 ">
            <Link href={`/singer-profile/${artist.slug}`}>
              <Image
                src={`${imgUrl}/${artist.profile}`}
                alt={artist.name}
                width={50}
                height={50}
                className="rounded-full w-16 h-16 object-cover "
              />
            </Link>
            <div>
              {/* Play Button */}
              <button
                onClick={handlePlayTrack}
                className="flex items-center justify-center  text-white cursor-pointer "
              >
                ▶
              </button>

            </div>
            <div className="truncate flex flex-row  ">
              <div>
                <Link href={`/singer-profile/${artist.slug}`} >
                  <h3 className="text-sm font-semibold text-white">
                    {artist.name}
                  </h3>
                </Link>
                <div className={`flex flex-row item-center gap-x-2 text-xs   `} >
                  <p className="text-sm font-semibold text-white">
                    {"Singer"}
                  </p>
                  <p className={`mt-0.5 textColor `} >•</p>
                  <p className={`text-sm font-semibold text-white    `} >Songwriter</p>
                </div>
                <div>

                </div>
              </div>

            </div>
            <p className={`text-sm textColor ml-[27%] `} > {artist?.language} </p>
          </div>


          <div className="flex items-center gap-x-6 flex-1 justify-between ">

            <p className={`text-sm textColor w-[50%] `} > {artist?.gender} </p>
            <h1 className="textColor text-xs  w-[30%] ">
              ${artist.price}
            </h1>
            <Link className={` w-[30%] `} href={`/hire-from/${artist.slug}`}>
              <button className="text-black btnColor md:px-4 md:py-2 py-1  text-xs px-2 rounded-md cursor-pointer">
                Hire Now
              </button>
            </Link>
          </div>


          {/* Price & Hire */}
          {/* <div className="flex items-center gap-x-6 flex-1 justify-end min-w-0">
            
          </div> */}



        </div>

        {/* ----------- Mobile View ----------- */}


        <div className="md:hidden flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center space-x-4">

            {/* IMAGE + CENTER PLAY BUTTON */}
            <div className="relative w-12 h-12">
              <Link href={`/singer-profile/${artist.slug}`}>
                <Image
                  src={`${imgUrl}/${artist.profile}`}
                  alt={artist.name}
                  width={50}
                  height={50}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </Link>

              {/* Play Button Centered */}
              <button
                onClick={handlePlayTrack}
                className="absolute inset-0 m-auto w-8 h-8 flex items-center justify-center 
                   rounded-full  text-white"
              >
                ▶
              </button>
            </div>

            {/* TEXT */}
            <div className="flex flex-col">
              <Link href={`/singer-profile/${artist.slug}`} >
                <h3 className="text-white font-medium">{artist.name}</h3>
              </Link>
              <p className="text-white font-medium">{'Singer'} • Songwriter</p>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <div className="flex items-center gap-4">
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
                />
              </svg>
            </Link>
          </div>
        </div>


      </div>

    </>
  );
};

export default ArtistCard;
