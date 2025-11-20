"use client";

import React, {useEffect, useRef, useState} from "react";
import {FaPlay, FaPause} from "react-icons/fa";
import {imgUrl} from "@/utility/img/imgUrl";
import { SongDetailsApiResponse } from "@/utility/type/websiteApiType";

const CustomAudioPlayer = ({data}: { data: SongDetailsApiResponse }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current; 
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        const audio = audioRef.current; 
        if (audio) {
            audio.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const updateTime = () => {
        const audio = audioRef.current; 
        if (audio) {
            setCurrentTime(audio.currentTime);
        }
    };

    useEffect(() => {
        const audio = audioRef.current; 
        if (!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);


    






    return (
        <div>
            <audio
                ref={audioRef}
                src={`${imgUrl}/${data?.data?.song}`}
                onTimeUpdate={updateTime}
            />

            {/* Play/Pause + Seek Bar */}
            <div className="flex items-center justify-between mb-4 gap-4">
                <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-white shadow hover:bg-gray-200 cursor-pointer transition"
                >
                    {isPlaying ? (
                        <FaPause size={20} className="text-gray-700"/>
                    ) : (
                        <FaPlay size={20} className="text-gray-700"/>
                    )}
                </button>

                {/* Seek Bar */}
                <div className="relative w-full h-2 rounded-full bg-gray-200 overflow-hidden group">
                    <div
                        className={`absolute top-0 left-0 h-full rounded-full transition-all duration-300 ${
                            isPlaying ? "bg-[#ff5e57]" : "bg-gray-400"
                        }`}
                        style={{width: `${(currentTime / duration) * 100}%`}}
                    ></div>

                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        step="0.1"
                        onChange={handleSeek}
                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomAudioPlayer;


