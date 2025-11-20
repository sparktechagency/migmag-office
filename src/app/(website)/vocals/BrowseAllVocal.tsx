"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa6";
import MaxWidth from "@/components/max-width/MaxWidth";
import { useAllGenreQuery, useAllKeyQuery, useArtistListApiQuery, useBrowseCoverVocalApiQuery } from '@/app/api/websiteApi/websiteApi';
import { ArtistList, Song } from '@/utility/type/websiteApiType';
import { imgUrl } from '@/utility/img/imgUrl';
import { usePlayerStore } from '@/app/store/usePlayerStore';













const BrowseAllVocal = () => {












    const genreRef = useRef<HTMLDivElement>(null);
    const bpmRef = useRef<HTMLDivElement>(null);
    const keyRef = useRef<HTMLDivElement>(null);
    const genderRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);
    const latestRef = useRef<HTMLDivElement>(null);


    // Genre

    const { data: genres } = useAllGenreQuery(undefined);
    const genreData = genres?.data || [];


    const [open, setOpen] = useState<boolean>(false);
    const [selectGenre, setSelectGenre] = useState<string[]>([]);

    function toggleGenre(genre: string): void {
        if (selectGenre.includes(genre)) {
            setSelectGenre([]); // Deselect if already selected
        } else {
            setSelectGenre([genre]); // Replace with the new selected genre
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // BPM  start


    const bpm: number[] | string[] = [60, 80, 100, 120, 140, 160];


    const [selectedBPM, setSelectedBPM] = useState<number[]>([]);
    const [openBPM, setOpenBPM] = useState<boolean>(false);

    console.log(selectedBPM)



    const minBPM = Math.min(...bpm);
    const maxBPM = Math.max(...bpm);

    const [minValue, setMinValue] = useState(minBPM);
    const [maxValue, setMaxValue] = useState(maxBPM);

    const rangeWidth = 100; // in percent

    const getPercent = (value: number) =>
        ((value - minBPM) / (maxBPM - minBPM)) * rangeWidth;

    const getTrackBackground = () => {
        const minPercent = getPercent(minValue);
        const maxPercent = getPercent(maxValue);
        return `linear-gradient(to right, white 0%, white ${minPercent}%, yellow ${minPercent}%, yellow ${maxPercent}%, white ${maxPercent}%, white 100%)`;
    };


    // BPM  end


    // Key  start
    const { data: keys } = useAllKeyQuery(undefined);

    const keyData = keys?.data || [];



    const [selectedKey, setSelectedKey] = useState<string[]>([]);
    const [openKey, setOpenKey] = useState<boolean>(false);

    function toggleKey(keyValue: string): void {
        // Single selection: deselect if selected, else replace with the new one
        if (selectedKey.includes(keyValue)) {
            setSelectedKey([]);
        } else {
            setSelectedKey([keyValue]);
        }
        setOpenKey(false); // Close dropdown


    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (keyRef.current && !keyRef.current.contains(event.target as Node)) {
                setOpenKey(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Key end


    // Gender  start
    const gender: string[] = ["male", "female"];
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [openGender, setOpenGender] = useState<boolean>(false);

    function toggleGender(genderValue: string): void {
        if (selectedGender.includes(genderValue)) {
            setSelectedGender([]); // Unselect if already selected
        } else {
            setSelectedGender([genderValue]); // Only one gender selected at a time
        }
        setOpenGender(false); // Close dropdown
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genderRef.current && !genderRef.current.contains(event.target as Node)) {
                setOpenGender(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // Gender end




    // language  start
    const { data } = useArtistListApiQuery(undefined);
    const artistData: ArtistList[] = data?.data?.data || [];



    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
    const [openLanguage, setOpenLanguage] = useState<boolean>(false);

    function toggleLanguage(languageValue: string): void {
        // Single selection: deselect if selected, else replace with the new one
        if (selectedLanguage.includes(languageValue)) {
            setSelectedLanguage([]);
        } else {
            setSelectedLanguage([languageValue]);
        }
        setOpenLanguage(false); // Close dropdown


    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
                setOpenLanguage(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // language end








    // Latest  start
    const latest: number[] = [5, 10, 20, 30, 40, 50];


    const [selectLatest, setselectLatest] = useState<number[]>([]);
    const [openLatest, setOpenLatest] = useState<boolean>(false);

    function toggleLatest(latestValue: number): void {
        if (selectLatest.includes(latestValue)) {
            // Deselect
            setselectLatest([]);
            handleFilterChange("latest", ""); // Reset filter to empty
        } else {
            // Select single value
            setselectLatest([latestValue]);
            handleFilterChange("latest", latestValue); // Set filter as number
        }

        setOpenLatest(false);
        setOpenKey(false); // Close other dropdown if needed
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (latestRef.current && !latestRef.current.contains(event.target as Node)) {
                setOpenLatest(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Latest end


    const [filter, setFilter] = useState<FilterState>({
        gender: "",
        language: "",
        latest: "",  // empty initially
        bpm: [],
        key: "",
        genre: "",
        license: "",
        type: ""
    });

    const [globalSearch, setGlobalSearch] = useState<string>('');



    const { data: browseVocalData } = useBrowseCoverVocalApiQuery({
        filter: {
            gender: filter.gender,
            language: filter.language,
            latest: filter.latest,
            bpm: filter.bpm,
            key: filter.key,
            genre: filter.genre,
            license: filter.license,
            type: filter.type,
        },
        globalSearch,
    });









    const [tracks, setTracks] = useState<Song[]>([]);

    // Log API response (raw)


    // Update `data` state only when API data changes
    useEffect(() => {
        if (browseVocalData?.data?.data) {
            setTracks(browseVocalData.data.data as Song[]);
        }
    }, [browseVocalData]);












    interface FilterState {
        gender: string;
        language: string;
        latest: number | ""; // ✅ number or empty string for unselected
        bpm: number[];       // range
        key: string;
        genre: string;
        license: string;
        type: string;

    }


    const handleFilterChange = (
        key: keyof FilterState,
        value: string | number | number[]
    ) => {


        setFilter((prev) => ({
            ...prev,
            [key]: value,
        }));
    };






    const [visibleData, setVisibleData] = useState(10)




    const initialFilter: FilterState = {
        gender: "",
        language: "",
        latest: "",
        bpm: [],
        key: "",
        genre: "",
        license: "",
        type: ""

    };



    // Clear Search
    const clearSearch = () => {
        // Reset filter object
        setFilter(initialFilter);

        // Reset selection states
        setSelectedGender([]);
        setSelectGenre([]);
        setSelectedKey([]);
        setSelectedBPM([]);
        setselectLatest([]);
        setSelectedLanguage([]);

        // Reset search inputs
        setGlobalSearch("");
    };

    // interface Track {
    //     id: number;
    //     title: string;
    //     artist: { name: string };
    //     price: string;
    //     song: string;
    //     song_poster: string;
    // }





    // Scroll handler to load more
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            setVisibleData((prev) => prev + 5); // load next 5 tracks
        }
    };


    const player = usePlayerStore();






    return (
        <>
            <MaxWidth>
                <div className="  mx-auto   ">
                    <div className=' mt-12 mb-6 '>
                        <div className=' border border-white '></div>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center lg:mb-11 mb-4 lg:gap-14'>
                        {/* Title Section */}
                        <div className='flex-1 w-full'>
                            <h1 className='lg:text-3xl md:text-2xl text-xl font-bold leading-9 text-white'>
                                <span className='text-[#818080]'>Vocals</span>
                            </h1>
                        </div>

                        {/* Clear Filters Button */}
                        <div className='w-full md:w-auto text-center mt-6 md:text-right'>
                            <button
                                onClick={clearSearch}
                                className='text-white text-lg underline mt-12 md:mt-0 cursor-pointer'
                            >
                                Clear filters
                            </button>
                        </div>

                        {/* Search Input Section */}
                        <div className="relative w-full md:w-[300px] lg:w-[400px]">
                            <input
                                className="w-full border border-white focus:outline-0 py-2.5 rounded-2xl text-white pl-10 pr-6 bg-transparent placeholder-gray-400 placeholder:text-[16px]"
                                placeholder="SEARCH"
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)} // ✅ Update state
                            />
                            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white w-5 h-5" />
                        </div>


                    </div>


                    <div
                        className=" hidden md:flex lg:gap-4 lg:grid-cols-4  xl:flex  2xl:flex items-center justify-between gap-x-4   max-w-[1539px]  mx-auto     mb-6  ">


                        {/* BPM */}

                        <div className="relative w-full  " ref={bpmRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenBPM(!openBPM)}
                            >
                                {openBPM ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    BPM
                                </span>
                            </button>

                            <AnimatePresence>
                                {openBPM && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
                                    >
                                        <div
                                            ref={bpmRef}
                                            className="bg-[#201F1F]  rounded-2xl p-6 w-[25%]  max-h-[80vh] overflow-auto"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-white text-xl font-semibold">Filter By BPM</h2>
                                                <button onClick={() => setOpenBPM(false)}
                                                    className="cursor-pointer text-white text-2xl">×
                                                </button>
                                            </div>

                                            <div className="flex flex-col   gap-6">


                                                <div className="flex flex-col items-center gap-4">
                                                    {/* Selected BPM and Range Input */}
                                                    <div className="relative w-[80%] pt-8">
                                                        {/* Number Labels */}
                                                        <div
                                                            className="absolute  -top-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(minValue)}% - 20px)` }}
                                                        >
                                                            {minValue.toFixed(2)}
                                                        </div>
                                                        <div
                                                            className="absolute  -top-4  -ml-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(maxValue)}% - 20px)` }}
                                                        >
                                                            {maxValue.toFixed(2)}
                                                        </div>

                                                        {/* Track */}
                                                        <div
                                                            className="w-full h-2 rounded-full"
                                                            style={{ background: getTrackBackground() }}
                                                        />

                                                        {/* Left Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={minValue}
                                                            onChange={(e) => {
                                                                const val = Math.min(Number(e.target.value), maxValue - 1);
                                                                setMinValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />

                                                        {/* Right Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={maxValue}
                                                            onChange={(e) => {
                                                                const val = Math.max(Number(e.target.value), minValue + 1);
                                                                setMaxValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="flex justify-center items-center gap-4 w-full">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBPM([]); // or default value
                                                                handleFilterChange("bpm", "");
                                                                setOpenBPM(false)
                                                            }}
                                                            className="bg-gray-700 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition"
                                                        >
                                                            Reset
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                handleFilterChange("bpm", [minValue, maxValue]); // ✅ now valid
                                                                setSelectedBPM([minValue, maxValue]);
                                                                setOpenBPM(false);
                                                            }}
                                                            className="bg-[#E7F056] cursor-pointer  px-4 py-1 font-semibold rounded-lg transition"
                                                        >
                                                            Filter
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/*key start */}


                        <div className="relative w-full " ref={keyRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenKey(!openKey)}
                            >
                                {/* Icon on RIGHT side */}
                                {openKey ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectedKey.length > 0 ? <>{selectedKey}</> : "Key"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openKey && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 scrollbar-custom bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {
                                            keyData.map((key, index) => (
                                                <label
                                                    key={index}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedKey.includes(key?.name)}
                                                        onChange={(e) => {
                                                            toggleKey(key?.name);
                                                            handleFilterChange("key", e.target.checked ? key?.id : "");
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-3 h-3"
                                                    />
                                                    <span className="text-white md:text-sm">{key.name}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/*genre start */}



                        <div className="relative w-full " ref={genreRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpen(!open)}
                            >
                                {/* Icon on RIGHT side */}
                                {open ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectGenre.length > 0 ? <>{selectGenre}</> : "Genre"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 scrollbar-custom rounded-2xl w-full max-h-44 overflow-auto  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {genreData.map((genre) => (
                                            <label
                                                key={genre.id}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectGenre.includes(genre?.name)}
                                                    onChange={(e) => {
                                                        toggleGenre(genre?.name);
                                                        handleFilterChange('genre', e.target.checked ? genre?.name : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-3 h-3"
                                                />
                                                <span className="text-white md:text-sm   ">{genre?.name}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* Gender */}

                        <div className="relative w-full " ref={genderRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenGender(!openGender)}
                            >
                                {openGender ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg  ">
                                    {selectedGender.length > 0 ? <>{selectedGender}</> : "Gender"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openGender && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 scrollbar-custom rounded-2xl w-full max-h-44 overflow-auto  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {gender.map((gender) => (
                                            <label
                                                key={gender}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedGender.includes(gender)}
                                                    onChange={(e) => {
                                                        toggleGender(gender);
                                                        handleFilterChange('gender', e.target.checked ? gender : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-3 h-3"
                                                />
                                                <span className="text-white md:text-sm ">{gender}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* language */}

                        <div className="relative w-full " ref={languageRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLanguage(!openLanguage)}
                            >
                                {openLanguage ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg  ">
                                    {selectedLanguage.length > 0 ? <>{selectedLanguage}</> : "language"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLanguage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 scrollbar-custom rounded-2xl w-full max-h-44 overflow-auto  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {artistData.map((artist) => (
                                            <label
                                                key={artist.id}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedLanguage.includes(artist.language)}
                                                    onChange={(e) => {
                                                        toggleLanguage(artist.language);
                                                        handleFilterChange('language', e.target.checked ? artist.id : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-3 h-3"
                                                />
                                                <span className="text-white md:text-sm ">{artist.language}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>





                        {/* latest  */}


                        <div className="relative w-full " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    {selectLatest.length > 0 ? <>{selectLatest}</> : "Latest"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLatest && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl scrollbar-custom w-full max-h-44 overflow-auto  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {
                                            latest.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectLatest.includes(item)}
                                                        onChange={(e) => {
                                                            toggleLatest(item);
                                                            handleFilterChange('latest', e.target.checked ? item : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-3 h-3"
                                                    />
                                                    <span className="text-white md:text-sm  ">{item}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>



                    </div>



                    {/* wrapper — keeps the old horizontal-scroll safety net */}
                    <div
                        className="max-h-[600px] overflow-y-scroll no-scrollbar space-y-4 hidden md:block"
                        onScroll={handleScroll}
                    >
                        {tracks.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item?.id}
                                className={`cursor-pointer flex items-center rounded-md ${i % 2 === 0 ? "bg-[#201F1F]" : "bg-[#000000]"
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 px-4 py-3 rounded shadow-sm transition-all">
                                    {/* Left: Cover and Play */}
                                    <div className="flex items-center gap-3 w-full md:max-w-[300px]">
                                        <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0">
                                            <Link href={`/music-details/${item?.id}`}>
                                                <Image
                                                    src={`${imgUrl}/${item?.song_poster}`}
                                                    alt={item?.title}
                                                    fill
                                                    className="rounded"
                                                />
                                            </Link>
                                        </div>
                                        <button className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-500">
                                            <FaPlay
                                                onClick={() =>
                                                    player.setTrack({
                                                        id: item.id,
                                                        title: item.title,
                                                        name: item.artist.name,
                                                        song: `${imgUrl}/${item.song}`,
                                                        song_poster: item.song_poster,
                                                    })
                                                }
                                                size={28}
                                                className="text-white cursor-pointer"
                                            />
                                        </button>
                                        <div className="flex flex-col">
                                            <Link href={`/music-details/${item?.id}`}><h3 className="text-sm font-semibold text-white hover:underline ">{item?.title}</h3></Link>
                                            <p className="text-xs textColor">
                                                <Link className={`hover:underline`} href={`/singer-profile/${item?.artist?.slug}`}>
                                                    {item?.artist?.name}
                                                </Link>
                                                ・ {item?.bpm} BPM ・ {item?.key?.name}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center: Genre and License */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-10 w-full md:w-[400px] text-sm textColor">
                                        <p>{item?.genre?.name || "N/A"}</p>
                                        <p>{item?.license?.name || "N/A"}</p>
                                    </div>

                                    {/* Right: Price and Button */}
                                    <div className="flex items-center justify-between gap-4 w-full md:w-auto">
                                        <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>
                                            <p className="text-sm text-white font-semibold">${item?.price}</p>
                                        </Link>
                                        <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>
                                            <button className="px-4 py-1  cursor-pointer text-black btnColor text-sm font-medium rounded">
                                                Get Vocal
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>








                    {/*small device */}





                    <div className={"flex flex-wrap gap-x-2 gap-y-4 md:hidden   "} >
                        {/* BPM */}

                        <div className="relative w-[30%]   " ref={bpmRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenBPM(!openBPM)}
                            >
                                {openBPM ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    BPM
                                </span>
                            </button>

                            <AnimatePresence>
                                {openBPM && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50  "
                                    >
                                        <div
                                            ref={bpmRef}
                                            className="bg-[#201F1F]  rounded-2xl p-6  w-full overflow-auto"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-white text-xl font-semibold">Filter By BPM</h2>
                                                <button onClick={() => setOpenBPM(false)}
                                                    className="cursor-pointer text-white text-2xl">×
                                                </button>
                                            </div>

                                            <div className="flex flex-col   gap-6">


                                                <div className="flex flex-col items-center gap-4 w-full  ">
                                                    {/* Selected BPM and Range Input */}
                                                    <div className="relative w-[80%] pt-8">
                                                        {/* Number Labels */}
                                                        <div
                                                            className="absolute  -top-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(minValue)}% - 20px)` }}
                                                        >
                                                            {minValue.toFixed(2)}
                                                        </div>
                                                        <div
                                                            className="absolute  -top-4  -ml-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                            style={{ left: `calc(${getPercent(maxValue)}% - 20px)` }}
                                                        >
                                                            {maxValue.toFixed(2)}
                                                        </div>

                                                        {/* Track */}
                                                        <div
                                                            className="w-full h-2 rounded-full"
                                                            style={{ background: getTrackBackground() }}
                                                        />

                                                        {/* Left Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={minValue}
                                                            onChange={(e) => {
                                                                const val = Math.min(Number(e.target.value), maxValue - 1);
                                                                setMinValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />

                                                        {/* Right Thumb */}
                                                        <input
                                                            type="range"
                                                            min={minBPM}
                                                            max={maxBPM}
                                                            value={maxValue}
                                                            onChange={(e) => {
                                                                const val = Math.max(Number(e.target.value), minValue + 1);
                                                                setMaxValue(val);
                                                            }}
                                                            className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                        />
                                                    </div>

                                                    {/* Buttons */}
                                                    <div className="flex justify-center items-center gap-4 w-full">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedBPM([]); // or default value
                                                                handleFilterChange("bpm", "");
                                                                setOpenBPM(false)
                                                            }}
                                                            className="bg-gray-700 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition"
                                                        >
                                                            Reset
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                handleFilterChange("bpm", [minValue, maxValue]); // ✅ now valid
                                                                setSelectedBPM([minValue, maxValue]);
                                                                setOpenBPM(false);
                                                            }}
                                                            className="bg-[#E7F056] cursor-pointer text-black px-4 py-1 font-semibold rounded-lg transition"
                                                        >
                                                            Filter
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/*key start */}


                        <div className="relative w-[30%]  " ref={keyRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenKey(!openKey)}
                            >
                                {/* Icon on RIGHT side */}
                                {openKey ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectedKey.length > 0 ? <>{selectedKey}</> : "Key"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openKey && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-[100%]  max-h-44 overflow-auto scrollbar-custom border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {
                                            keyData.map((key, index) => (
                                                <label
                                                    key={index}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedKey.includes(key?.name)}
                                                        onChange={(e) => {
                                                            toggleKey(key?.name);
                                                            handleFilterChange("key", e.target.checked ? key?.id : "");
                                                        }}
                                                        className="mr-3 accent-indigo-500 md:w-5 md:h-5 w-4 h-4"
                                                    />
                                                    <span className="text-white md:text-lg">{key.name}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/*genre start */}



                        <div className="relative w-[35%] " ref={genreRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] text-white md:px-5 px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpen(!open)}
                            >
                                {/* Icon on RIGHT side */}
                                {open ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                {/* Only show selected count */}
                                <span className="w-28 text-white md:text-lg ">
                                    {selectGenre.length > 0 ? <>{selectGenre}</> : "Genre"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 scrollbar-custom  overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                    >
                                        {genreData.map((genre) => (
                                            <label
                                                key={genre.id}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectGenre.includes(genre?.name)}
                                                    onChange={(e) => {
                                                        toggleGenre(genre?.name);
                                                        handleFilterChange('genre', e.target.checked ? genre?.name : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 md:w-5 md:h-5 w-4 h-4"
                                                />
                                                <span className="text-white md:text-lg   ">{genre?.name}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* Gender */}

                        <div className="relative w-[35%] " ref={genderRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenGender(!openGender)}
                            >
                                {openGender ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg  ">
                                    {selectedGender.length > 0 ? <>{selectedGender}</> : "Gender"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openGender && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {gender.map((gender) => (
                                            <label
                                                key={gender}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedGender.includes(gender)}
                                                    onChange={(e) => {
                                                        toggleGender(gender);
                                                        handleFilterChange('gender', e.target.checked ? gender : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg ">{gender}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* latest  */}


                        <div className="relative w-[35%]  " ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-2 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-4" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    {selectLatest.length > 0 ? <>{selectLatest}</> : "Latest"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLatest && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl  w-[100%]  max-h-44 overflow-auto scrollbar-custom  shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {
                                            latest.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectLatest.includes(item)}
                                                        onChange={(e) => {
                                                            toggleLatest(item);
                                                            handleFilterChange('latest', e.target.checked ? item : '');
                                                        }}
                                                        className="mr-3 accent-indigo-500 w-5 h-5"
                                                    />
                                                    <span className="text-white md:text-lg  ">{item}</span>
                                                </label>
                                            ))
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>


                    <div className="    space-y-4 block md:hidden mt-8  ">
                        {tracks.slice(0, visibleData).map((item, i) => (
                            <motion.div
                                key={item?.id}
                                className={`cursor-pointer flex items-center rounded-md ${i % 2 === 0 ? 'bg-[#201F1F]' : 'bg-[#000000]'
                                    }`}
                            >
                                <div className="flex items-center justify-between w-full max-w-md p-2 border-b">
                                    {/* Left Section */}
                                    <div className="flex items-center gap-1">
                                        <span className="text-lg font-medium text-white ">{i + 1}</span>
                                        <Link href={`/music-details/${item?.id}`}>
                                            <Image
                                                src={`${imgUrl}/${item?.song_poster}`}
                                                alt={"fdsfsdadf"}
                                                width={2000}
                                                height={2000}
                                                className="rounded w-12 h-12 "
                                            />
                                        </Link>
                                        <button className="w-6 h-6 flex items-center justify-center text-white hover:text-blue-500">
                                            <FaPlay
                                                onClick={() =>
                                                    player.setTrack({
                                                        id: item.id,
                                                        title: item.title,
                                                        name: item.artist.name,
                                                        song: `${imgUrl}/${item.song}`,
                                                        song_poster: item.song_poster,
                                                    })
                                                }
                                                size={20}
                                                className="text-white cursor-pointer"
                                            />
                                        </button>
                                        <div className="flex flex-col">
                                            <Link className={` text-white hover:underline text-[10px] `} href={`/singer-profile/${item?.artist?.slug}`}>
                                                {item?.artist?.name}
                                            </Link>{" "}
                                            <p className="text-[10px] text-white">
                                                {item?.artist?.gender} <span className="text-white font-medium">${item?.price}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Section */}
                                    <Link href={`/checkout?price=${item.price}&songId=${item.id}`}>
                                        <button className="px-4 py-1  cursor-pointer text-black btnColor text-[10px] font-medium rounded">
                                            Get Vocal
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>














                    <div className='  mt-14 mb-20 flex flex-row justify-center '>

                        <div >
                            {
                                visibleData < tracks.length && (
                                    <button onClick={() => {
                                        setVisibleData(prev => prev + 10)
                                    }}
                                        className=' mt-4 lg:mt-0 rounded-2xl border border-white text-white px-6 py-3 text-lg cursor-pointer   '>LOAD
                                        MORE VOCALS</button>
                                )
                            }
                        </div>
                    </div>
                </div>


                <div  >

                </div>

            </MaxWidth>
            <section className="lg:mb-16 mb-10">
                <div
                    className="  bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 mt-16 relative overflow-hidden"
                >
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div> */}

                    <div className="relative lg:mt-20 mt-10 z-10 text-center">
                        <h1 className="text-white  font-bold lg:text-3xl text-lg">
                            Become a TuneM Artist.
                        </h1>
                        <p className="text-white leading-6 lg:text-xl font-thin max-w-[482px] mx-auto mt-3 lg:mt-9">
                            We work with talented singers and songwriters ready to take their voice further.
                            Expand your audience, get discovered, and join our global music network.
                        </p>
                        <Link href="/tune-m-artist">
                            <button className="cursor-pointer text-black btnColor   text-sm px-4 py-2  rounded-2xl mx-auto mt-4 lg:mt-12">
                                GET STARTED
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrowseAllVocal;



