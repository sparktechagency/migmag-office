"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { CiPause1 } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Volume2, Volume1, VolumeX, X } from "lucide-react";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
import { imgUrl } from "@/utility/img/imgUrl";
// import { useAddWishListMutation } from "@/app/api/authApi/authApi";
import { useLazyViewSongQuery } from "@/app/api/websiteApi/websiteApi";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { usePlayerStore } from "@/app/store/usePlayerStore";

export function MusickPlayer() {
  const { show, currentTrack, hidePlayer } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef<HTMLDivElement>(null);

  // const router = useRouter();
  // const [addWishList] = useAddWishListMutation();
  const [trigger] = useLazyViewSongQuery();

  // Play new track
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;
    audio.pause();
    audio.load();

    const playNewSong = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        trigger(Number(currentTrack.id));
      } catch (err) {
        return err;
      }
    };

    playNewSong();
    setCurrentTime(0);
    setDuration(0);
  }, [currentTrack, trigger]);


  // Update time and duration
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateTime = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const setAudioDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) setDuration(audio.duration);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isDragging, currentTrack]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current.play();
      setIsPlaying(true);
      // if (currentTrack) trigger(Number(currentTrack.id));
    }
  };


  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (playerRef.current && !playerRef.current.contains(event.target as Node)) {
  //       hidePlayer(); // auto close
  //     }
  //   }

  //   if (show) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [show, hidePlayer]);







  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;
    if (!duration || duration === 0) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    let newTime = (clickX / rect.width) * duration;
    newTime = Math.max(0, Math.min(duration, newTime));

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const startDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener("pointermove", onDrag);
    document.addEventListener("pointerup", stopDrag);
  };

  const onDrag = (e: PointerEvent) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(rect.width, x));
    const newTime = (x / rect.width) * duration;
    setCurrentTime(newTime);
  };

  const stopDrag = () => {
    if (audioRef.current) audioRef.current.currentTime = currentTime;
    setIsDragging(false);
    document.removeEventListener("pointermove", onDrag);
    document.removeEventListener("pointerup", stopDrag);
  };

  // const handleAddToWishlist = async () => {
  //   if (!currentTrack) return;
  //   try {
  //     const res = await addWishList({ songId: currentTrack.id }).unwrap();
  //     if (res) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: res?.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   } catch (err) {
  //     const error = err as FetchBaseQueryError & { data?: { message?: string } };
  //     if (error.status === 401) router.push("/login");
  //     Swal.fire({
  //       position: "top",
  //       icon: "error",
  //       title: error?.data?.message || "Something went wrong",
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });
  //   }
  // };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  if (!show || !currentTrack) return null;

  // musick player automatic close 














  return (
    <div className="h-52 mx-auto">
      <AnimatePresence>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          ref={playerRef}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 mx-auto z-50 bg-[#1b1b1b] px-4 py-4 shadow-xl border-t-2 border-[#FFBD00] rounded-t-xl"
        >
          {/* Close Button */}
          <button
            onClick={hidePlayer}
            className="absolute top-3 cursor-pointer right-3 text-white hover:text-red-500"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row item-center gap-3 text-white">
            {/* Track Info + Play */}
            <div className="md:w-[20%] w-full flex items-center gap-3 min-w-[200px]">
              <div className="w-14 h-14 relative rounded-full overflow-hidden">
                <Image
                  src={`${imgUrl}/${currentTrack.song_poster}`}
                  alt={currentTrack.title}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{currentTrack.title}</h3>
                <p className="text-xs text-gray-400">{currentTrack.name}</p>
              </div>
              <button
                onClick={togglePlay}
                className="text-[#FFBD00] hover:scale-110 transition cursor-pointer "
              >
                {isPlaying ? <CiPause1 size={24} /> : <FiPlay size={24} />}
              </button>
              <Heart
                // onClick={handleAddToWishlist}
                className="cursor-pointer hover:text-red-500 ml-2"
              />
            </div>

            {/* Progress + Volume */}
            <div className="md:w-[80%] mt-2.5 w-full flex items-center gap-4">
              {/* Progress */}
              <div
                ref={progressRef}
                className="relative flex-1 h-2 bg-gray-700 rounded cursor-pointer"
                onPointerDown={startDrag}
                onClick={handleSeek}
              >
                <div
                  className="h-2 btnColor rounded"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 btnColor rounded-full cursor-grab shadow-lg"
                  style={{ left: `calc(${progress}% - 8px)` }}
                />
              </div>
              <span className="text-xs w-10 text-right">{formatTime(currentTime)}</span>
              <span className="text-xs w-12 text-left">{formatTime(duration - currentTime)}</span>

              {/* Volume */}
              <div className="flex items-center gap-2 w-28">
                <button onClick={() => setVolume(volume > 0 ? 0 : 1)} className="text-white">
                  {volume === 0 ? <VolumeX /> : volume < 0.5 ? <Volume1 /> : <Volume2 />}
                </button>
                <div
                  className="relative flex-1 h-2 bg-gray-700 rounded cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const newVol = (e.clientX - rect.left) / rect.width;
                    setVolume(Math.min(Math.max(newVol, 0), 1));
                  }}
                >
                  <div
                    className="absolute h-2 btnColor rounded"
                    style={{ width: `${volume * 100}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 btnColor rounded-full shadow-lg cursor-grab"
                    style={{ left: `calc(${volume * 100}% - 8px)` }}
                  />
                </div>
              </div>

              <audio ref={audioRef} src={currentTrack.song} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
