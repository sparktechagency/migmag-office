"use client";
import JSZip from "jszip";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Download } from "lucide-react";
import { useOrderDetailsQuery } from "@/app/api/authApi/authApi";
import { imgUrl } from "@/utility/img/imgUrl";
import { OrderItemDetails } from "@/utility/type/orderType";
import { MusickPlayer } from "@/components/musick-player/MusickPlayer";
import { usePlayerStore } from "@/app/store/usePlayerStore";
import Link from "next/link";


interface OrderDetailsProps {
  orderId: number | string;
  onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, onClose }) => {
  const { data, error, isLoading } = useOrderDetailsQuery(orderId);
  const songs: OrderItemDetails[] = data?.data;

  const player = usePlayerStore();

  // ===================== DOWNLOAD ALL FILES =====================
  const handleDownloadAllFiles = async (
    folderName: string,
    song: OrderItemDetails["song"]
  ) => {
    try {
      const zip = new JSZip();

      // main song folder
      const mainFolder = zip.folder(folderName);
      if (!mainFolder) return;

      // sub folders
      const midiFolder = mainFolder.folder("midi_files");
      const webVocalFolder = mainFolder.folder("web_vocals");
      const dryVocalFolder = mainFolder.folder("dry_vocals");

      // helper function
      const fetchAndAdd = async (
        folder: JSZip | null,
        path: string,
        filename: string
      ) => {
        console.log("path is", path);
        if (!folder) return;
        const res = await fetch(`/songs/${path}`); // ✅ proxy
        if (!res.ok) throw new Error(`Failed: ${path}`);
        const blob = await res.blob();
        folder.file(filename, blob);
      };



      // 🎵 main song
      if (song?.song) {
        await fetchAndAdd(
          mainFolder,
          song.song,
          `${song.title}.mp3`
        );
      }

      // 🎹 midi files
      if (song?.midi_file) {
        const midiFiles = JSON.parse(song.midi_file) as string[];
        for (let i = 0; i < midiFiles.length; i++) {
          await fetchAndAdd(
            midiFolder,
            midiFiles[i],
            `${song.title}_midi_${i + 1}.mid`
          );
        }
      }

      // 🎤 web vocals
      if (song?.web_vocals) {
        const webVocals = JSON.parse(song.web_vocals) as string[];
        for (let i = 0; i < webVocals.length; i++) {
          await fetchAndAdd(
            webVocalFolder,
            webVocals[i],
            `${song.title}_web_vocal_${i + 1}.mp3`
          );
        }
      }

      // 🎧 dry vocals
      if (song?.dry_vocals) {
        const dryVocals = JSON.parse(song.dry_vocals) as string[];
        for (let i = 0; i < dryVocals.length; i++) {
          await fetchAndAdd(
            dryVocalFolder,
            dryVocals[i],
            `${song.title}_dry_vocal_${i + 1}.mp3`
          );
        }
      }

      // 📦 generate zip
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `${folderName}.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Folder download failed:", error);
    }
  };




  // const downloadSongAsZip = async (folderName: string, songUrl: string) => {
  //   try {
  //     const zip = new JSZip();
  //     const mainFolder = zip.folder(folderName);
  //     if (!mainFolder) return;

  //     // ✅ extract path for rewrite
  //     const path = songUrl.split("api.tunem.com/")[1];
  //     if (!path) throw new Error("Invalid song URL");

  //     const res = await fetch(`/songs/${path}`);
  //     if (!res.ok) throw new Error("Song fetch failed");

  //     const blob = await res.blob();

  //     // Extract filename
  //     const fileName = path.split("/").pop() || "song.mp3";
  //     mainFolder.file(fileName, blob);

  //     const zipBlob = await zip.generateAsync({ type: "blob" });

  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(zipBlob);
  //     link.download = `${folderName}.zip`;
  //     link.click();
  //     URL.revokeObjectURL(link.href);

  //   } catch (err) {
  //     console.error("Folder download failed:", err);
  //   }
  // };


  const downloadSongAsZip = async (folderName: string, songUrl: string) => {
    try {
      const zip = new JSZip();
      const mainFolder = zip.folder(folderName);
      if (!mainFolder) return;

      // Fetch the song
      const res = await fetch(`/songs/${songUrl}`);
      if (!res.ok) throw new Error("Song fetch failed");

      const blob = await res.blob();

      // Extract filename from URL
      const fileName = songUrl.split("/").pop() || "song.mp3";

      // Add song to folder
      mainFolder.file(fileName, blob);

      // Generate ZIP
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // Download ZIP
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `${folderName}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

    } catch (err) {
      console.error("Folder download failed:", err);
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

                <td className="px-4 py-2 text-center">{item.is_midifile == 1 ? <Link target="_blank" href={`${imgUrl}/${item?.song?.lyrics}`} >Lyrics</Link> : ""}</td>


                {/* Download All */}


                {
                  item?.is_midifile == 1 ? <>
                    <td className="px-6">
                      <button
                        onClick={() => handleDownloadAllFiles(item.song?.title, item.song)}
                        className="w-8 h-8 flex items-center justify-center rounded-full btnColor transition"
                      >
                        <Download className="w-4 h-4 text-black cursor-pointer" />
                      </button>
                    </td>
                  </> : <>
                    <td className="px-6">
                      <button
                        onClick={() =>
                          downloadSongAsZip(
                            item.song?.title || "Music",
                            item.song?.song
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full btnColor transition"
                      >
                        <Download className="w-4 h-4 text-black cursor-pointer" />
                      </button>
                    </td>
                  </>
                }




              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Global Music Player */}
      <MusickPlayer />
    </div>
  );
};

export default OrderDetails;
