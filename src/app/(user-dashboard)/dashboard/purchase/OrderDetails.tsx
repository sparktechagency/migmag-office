"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Download } from "lucide-react";
import { useOrderDetailsQuery } from "@/app/api/authApi/authApi";
import { imgUrl } from "@/utility/img/imgUrl";
import { OrderItemDetails } from "@/utility/type/orderType";
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";
import { usePlayerStore } from "@/app/store/usePlayerStore";

interface OrderDetailsProps {
  orderId: number | string;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, onClose }) => {
  const { data, error, isLoading } = useOrderDetailsQuery(orderId);
  const songs: OrderItemDetails[] = data?.data;

  const player = usePlayerStore();

  const handleDownload = async (path: string, filename: string) => {
    try {
      const response = await fetch(`/songs/${path}`);
      if (!response.ok) throw new Error(`Failed to fetch file: ${response.status}`);

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename || "audio.mp3";
      link.click();

      setTimeout(() => URL.revokeObjectURL(link.href), 100);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleMidyDownload = async (path: string, filename: string) => {
    try {
      const response = await fetch(`/songs/${path}`);
      if (!response.ok) throw new Error(`Failed to fetch file: ${response.status}`);

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename || "audio.mp3";
      link.click();

      setTimeout(() => URL.revokeObjectURL(link.href), 100);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };












  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 w-[70%] mx-auto relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 cursor-pointer text-gray-700 text-xl"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      <h2 className="text-xl font-bold mb-4">Order #{orderId} Details</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-white bg-black rounded-md">
          <tbody>
            {songs?.map((item, i) => (
              <tr
                key={item.id}
                className={`${i % 2 === 0 ? "bg-black" : "bg-gray-900"}`}
              >
                {/* Album Art + Play */}
                <td className="px-4 py-2">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image
                      src={`${imgUrl}/${item.song?.song_poster}`}
                      alt={item.song?.title}
                      fill
                      className="object-cover rounded"
                    />
                    {/* ✅ Play button overlay */}
                    <button
                      onClick={() =>
                        player.setTrack({
                          id: item.song?.id,
                          title: item.song?.title,
                          name: item.song?.artist?.name,
                          song: `${imgUrl}/${item.song?.song}`,
                          song_poster: item.song?.song_poster,
                        })
                      }
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition rounded-md"
                    >
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          stroke="black"
                          className="w-4 h-4 ml-0.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3l14 9-14 9V3z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>

                {/* Song Info */}
                <td className="px-4 py-2 text-center">{item.song?.title}</td>
                <td className="px-4 py-2 text-center">{item.song?.artist?.name}</td>
                <td className="px-4 py-2 text-center">{item.song?.type?.name}</td>
                <td className="px-4 py-2 text-center">{item.song?.bpm}</td>
                <td className="px-4 py-2 text-center">{item.song?.key?.name}</td>
                <td className="px-4 py-2 text-center">{item.song?.gender}</td>

                {/* License */}
                <td className="px-4 py-2 text-center">
                  {item.song?.license?.name && (
                    <span className="bg-cyan-500 text-black font-semibold px-3 py-1 rounded-full">
                      {item.song?.license?.name}
                    </span>
                  )}
                </td>

                {/* Download */}
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleDownload(item.song?.song, `${item.song?.title}.mp3`)
                    }
                    className="w-8 h-8 flex items-center justify-center rounded-full btnColor transition"
                  >
                    <Download className="w-4 h-4 text-black cursor-pointer " />
                  </button>
                </td>
                {/* midi download  */}
                {
                  item?.is_midifile === 1 && (
                    <td className="px-4 py-2">
                      <button
                        onClick={() =>
                          handleMidyDownload(item.song?.midi_file, `${item.song?.title}.mp3`)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition"
                      >
                        {/* <Download className="w-4 h-4 text-black" />  */}
                        Midi Download
                      </button>
                    </td>

                  )
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Global Music Player */}
      <MusickPlayer />
    </div>
  );
};

export default OrderDetails;
