import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import MaxWidth from "@/components/max-width/MaxWidth";
import CtaSection from '@/components/cta/CtaSection';
import { imgUrl } from "@/utility/img/imgUrl";
import { useTopArtistListQuery } from '@/app/api/websiteApi/websiteApi';



type FilterType = {
    gender: string,
    language: string,
    latest: string,

};


// CtaSection

const BrowseArtist = () => {

    const { data } = useTopArtistListQuery();
    const artistList = data?.data?.data ?? [];


    const genderRef = useRef<HTMLDivElement>(null);
    const languageRef = useRef<HTMLDivElement>(null);
    const latestRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(8);





    // Gender  start
    const gender: string[] = ["male", "female"];


    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [openGender, setOpenGender] = useState<boolean>(false);

    function toggleGender(genderValue: string): void {
        const newGender = selectedGender.includes(genderValue)
            ? selectedGender.filter((g) => g !== genderValue)
            : [...selectedGender, genderValue];

        setSelectedGender((prev) =>
            prev.includes(genderValue) ? prev.filter((i) => i !== genderValue) : [...prev, genderValue]
        );


        setSelectedGender(newGender);
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


    // language start


    const language: string[] = [
        "Rock",
        "Pop",
        "Jazz",
        "Classical",
        "Hip Hop",
        "Electronic",
        "Country",
        "Reggae",
        "Blues",
        "Folk",
    ];


    const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
    const [openLanguage, setOpenLanguage] = useState<boolean>(false);

    function toggleType(type: string): void {
        let newType: string[];
        if (selectedLanguage.includes(type)) {
            newType = selectedLanguage.filter((g) => g !== type);
        } else {
            newType = [...selectedLanguage, type];
        }
        setSelectedLanguage((prev) =>
            prev.includes(type) ? prev.filter((i) => i !== type) : [...prev, type]
        );
        setSelectedLanguage(newType); // ✅ Corrected here
        setOpenLanguage(false); // dropdown close
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


    // Language end


    // Latest  start
    const latest: number[] = [5, 10, 15, 20, 30];
    const [selectLatest, setSelectedLatest] = useState<number | null>(null);
    const [openLatest, setOpenLatest] = useState<boolean>(false);

    function toggleLatest(latestValue: number): void {
        setSelectedLatest(latestValue); // সরাসরি value set করবো
        setOpenLatest(false); // dropdown বন্ধ
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


    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState<FilterType>({
        gender: "",
        language: "",
        latest: "",
    });




    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (key: keyof FilterType, value: number | string) => {


        setFilter((prev) => ({ ...prev, [key]: value }));
    };




    const filteredArtists = artistList.filter((artist) => {

        const matchGender =
            !filter.gender || artist.gender?.toLowerCase() === filter.gender.toLowerCase();

        const matchLanguage =
            !filter.language || artist.language?.toLowerCase() === filter.language.toLowerCase();

        // latest কে শুধু "limit number of artists" হিসেবে ব্যবহার করবো
        const matchSearch =
            !searchTerm ||
            artist.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artist.singer?.toLowerCase().includes(searchTerm.toLowerCase());

        return matchGender && matchLanguage && matchSearch;
    });

    // latest value থাকলে সেটাই use হবে, নাহলে visibleCount use হবে
    const limit = filter.latest ? Number(filter.latest) : visibleCount;




    const clearSearch = () => {
        setSearchTerm("");
        setFilter({ gender: "", language: "", latest: "" });
        setSelectedGender([]);
        setSelectedLanguage([]);
        setSelectedLatest(null);
    };



    return (
        <>
            <MaxWidth>
                <div className=" mt-16 mx-auto lg:mb-16 mb-8    ">
                    <div className=' mt-12 mb-6 '>
                        <div className=' border border-white '></div>
                    </div>
                    <div className=' flex md:flex-row lg:flex-row flex-col justify-between items-center mb-11  '>
                        <div className='flex-1'>
                            <h1 className=' lg:text-3xl md:text-2xl font-bold leading-9 text-white '>Browse <span
                                className=' text-[#818080] '>Artists</span></h1>
                        </div>

                        <div className='  flex-1 lg:flex flex-col md:flex-row gap-14 relative   '>
                            <div className='   '>
                                <button onClick={clearSearch}
                                    className='  border-none text-[#FFFFFF] text-lg underline mt-4  cursor-pointer   '>Clear
                                    filters
                                </button>
                            </div>

                        </div>
                    </div>


                    <div
                        className="  hidden lg:grid lg:gap-4 lg:grid-cols-4  xl:flex  2xl:flex items-center justify-between gap-x-4   max-w-[1539px]  mx-auto   mb-6  ">


                        <div className="relative   ">

                            <input
                                className="border border-white focus:outline-0  py-2.5 md:w-[250px] w-[150px]  rounded-2xl text-white px-14 bg-transparent placeholder-gray-400 placeholder:text-[16px] placeholder:ml-3.5  "
                                placeholder="SEARCH"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white" />
                        </div>


                        {/* Gender */}

                        <div className="relative w-full " ref={genderRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenGender(!openGender)}
                            >
                                {openGender ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                )}

                                <span className="w-28 text-white md:text-lg  ">
                                    {selectedGender.length > 0 ? <>Selected {selectedGender.length}</> : "Gender"}
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


                        {/* Language  */}


                        <div className="relative w-full " ref={languageRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLanguage(!openLanguage)}
                            >
                                {openLanguage ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                )}

                                <span className="w-28 text-white md:text-lg   ">
                                    {selectedLanguage.length > 0 ? <>Selected {selectedLanguage.length}</> : "Language"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLanguage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {language.map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedLanguage.includes(item)}
                                                    onChange={(e) => {
                                                        toggleType(item); // ✅ Efficient toggle
                                                        handleFilterChange("language", e.target.checked ? item : "");
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg  ">{item}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* latest  */}


                        <div className="relative w-full" ref={latestRef}>
                            <button
                                type="button"
                                className="bg-[#201F1F] relative text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                                onClick={() => setOpenLatest(!openLatest)}
                            >
                                {openLatest ? (
                                    <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                ) : (
                                    <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                                )}

                                <span className="w-28 text-white md:text-lg">
                                    {selectLatest ? `Selected ${selectLatest}` : "Latest"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openLatest && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                        style={{ top: "calc(100% + 0.5rem)" }}
                                    >
                                        {latest.map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="latest"
                                                    checked={selectLatest === item}
                                                    onChange={() => {
                                                        toggleLatest(item); // একটাই value রাখবে
                                                        handleFilterChange("latest", item);
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg">{item}</span>
                                            </label>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                    </div>


                    {/* artist list  */}


                    <div className="mt-6 lg:mt-14 grid lg:grid-cols-3 sm:grid-cols-2 gap-x-10 grid-cols-1 gap-12">
                        {filteredArtists.slice(0, limit).map((singer) => (
                            <div key={singer.id}
                                className="transition-transform duration-300 hover:-translate-y-1 mx-auto">
                                <Link href={`/singer-profile/${singer.id}`}>
                                    <div className="w-full max-w-[300px] rounded-md gap-x-12 p-5 bg-[#222222]">
                                        <Image
                                            src={`${imgUrl}/${singer.profile}`}
                                            width={340}
                                            height={219}
                                            alt={`${singer.name} Image`}
                                            className="object-cover w-[300px] h-[219px] rounded-md"
                                        />

                                        <div className="flex flex-row items-center justify-between mt-3.5">
                                            <h1 className="text-white text-lg leading-6">{singer.name}</h1>

                                        </div>

                                        <div className="mt-2">
                                            <p className="text-[#818080] text-lg leading-6">{singer.singer}</p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-[#818080] text-lg leading-6">English</p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-[#818080] text-lg leading-6">Male</p>
                                        </div>


                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>


                    <div>

                        <div className="mt-14 mb-20 flex justify-center">
                            {Array.isArray(data?.data?.data) && visibleCount < data.data.data.length && (
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 8)}
                                    className="rounded-2xl border border-white text-white text-sm px-4 py-2 lg:px-6 lg:py-3  cursor-pointer  transition"
                                >
                                    LOAD MORE ARTISTS
                                </button>
                            )}
                        </div>


                    </div>

                    <div>

                    </div>


                    {/* Want to hire our singers? */}


                </div>
            </MaxWidth>
            <CtaSection></CtaSection>

        </>
    );
};

export default BrowseArtist;


