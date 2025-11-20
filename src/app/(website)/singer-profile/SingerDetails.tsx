"use client"


import React, { useState, Fragment, Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import MaxWidth from "@/components/max-width/MaxWidth";
import { FiSend } from "react-icons/fi";
import CtaSection from '@/components/cta/CtaSection';
import { imgUrl } from "@/utility/img/imgUrl";
import MoreSinger from "@/app/(website)/singer-profile/MoreSinger";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useArtistDetailsQuery } from '@/app/api/websiteApi/websiteApi';
import { useAddFollowMutation } from '@/app/api/authApi/authApi';
// import dynamic from 'next/dynamic';
import { MusickPlayer } from '@/components/musick-player/MusickPlayer';
import { usePlayerStore } from '@/app/store/usePlayerStore';



type SingerDetailsProps = {
    slug: string;
};

// interface Track {
//     id: number;
//     title: string;
//     artist: { name: string };
//     price: string;
//     song: string;
//     song_poster: string;
// }


const SingerDetails: React.FC<SingerDetailsProps> = ({ slug }) => {


    const router = useRouter();

    const [chatOpen, setChatOpen] = useState(false);

    const toggleModal = () => setChatOpen(!chatOpen);


    const { data, refetch } = useArtistDetailsQuery({ slug });


    const [addFollow] = useAddFollowMutation()

    // const [unFollow] = useUnFollowMutation()

    const artistData = data?.data?.artist;
    const songs = data?.data?.songs ?? [];
    const id: number | undefined = artistData?.id

    console.log("sing is", songs)




    const handleFollow = async () => {
        try {
            const res = await addFollow({ id }).unwrap(); // ✅ pass as object

            if (res?.success) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res.message,
                    showConfirmButton: true,
                    timer: 1500,
                });
            }
        } catch (err) {

            const error = err as FetchBaseQueryError | SerializedError;

            // Check if it's a FetchBaseQueryError
            if ('status' in error) {
                const data = error.data as { message?: string } | undefined;

                if (error.status === 400) {
                    Swal.fire({
                        icon: "warning",
                        text: data?.message || "Something went wrong.",
                        showConfirmButton: true,
                        position: "top-end",
                    });
                }

                if (error.status === 401) {
                    Swal.fire({
                        icon: "warning",
                        title: "Unauthorized",
                        text: data?.message || "Please log in to follow.",
                        confirmButtonText: "Login",
                    }).then(() => {
                        router.push("/login");
                    });
                }

                if (error.status === 500) {
                    router.push("/login");
                }
            } else {
                // SerializedError fallback
                console.error("Unexpected error:", error);
            }
        }
    };
    // const handleUnFollow = async () => {
    //     try {
    //         const res = await unFollow({ id }).unwrap(); // ✅ pass id as object

    //         if (res?.success) {
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: res.message,
    //                 showConfirmButton: true,
    //                 timer: 1500,
    //             });
    //         }
    //     } catch (err) {
    //         const error = err as FetchBaseQueryError | SerializedError;

    //         if ('status' in error) {
    //             const data = error.data as { message?: string; statusCode?: number } | undefined;

    //             if (error.status === 400) {
    //                 Swal.fire({
    //                     icon: "warning",
    //                     text: data?.message || "Something went wrong.",
    //                     showConfirmButton: true,
    //                     position: "top-end",
    //                 });
    //             }

    //             if (error.status === 401) {
    //                 Swal.fire({
    //                     icon: "warning",
    //                     title: "Unauthorized",
    //                     text: data?.message || "Please log in to follow.",
    //                     confirmButtonText: "Login",
    //                 }).then(() => {
    //                     router.push("/login");
    //                 });
    //             }

    //             if (error.status === 500 || data?.statusCode === 500) {
    //                 router.push("/login");
    //             }
    //         } else {
    //             console.error("Unexpected error:", error);
    //         }
    //     }
    // };





    const player = usePlayerStore();









    return (
        <div className=' md:mt-20 mt-8   '>
            <MaxWidth>
                {/* profile image  */}
                <div
                    className=' flex flex-col lg:flex-row items-center  lg:items-stretch justify-between '>
                    {/* left section  */}
                    <div>
                        <div className=' flex flex-col lg:flex-row items-center lg:gap-x-10 '>
                            {/* image  */}
                            <div className="w-40 h-40">
                                <Image
                                    src={`${imgUrl}/${artistData?.profile}`}
                                    className="mx-auto rounded-full w-36 h-36 "
                                    width={160} // should match w-40 (40*4)
                                    height={160} // should match h-40
                                    alt="Singer Image"
                                />
                            </div>
                            {/* description  */}
                            <div>
                                <h1 className=' text-xl mt-3 lg:mt-0 lg:text-2xl headerColor leading-9 '>{artistData?.name}</h1>
                                <div className='lg:mt-3 mt-1.5 text-white text-xl lg:space-x-4 space-x-3 '>
                                    <button
                                        className=' bg-[#E7F0FB] font-bold textColor cursor-pointer px-3 py-1 rounded-2xl text-sm '>
                                        {/* {
                                            artistData?.singer
                                        } */}
                                        <p>
                                            Singer</p>
                                    </button>
                                    <button
                                        className=' bg-[#FBEBFF]  font-bold textColor cursor-pointer px-3 py-1 rounded-2xl  text-sm '>
                                        {/* {
                                            artistData?.singer_writer
                                        } */}
                                        <p>Songwriter</p>

                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* right section  */}
                    <div className={` mt-4 md:mt-0 `}>

                        <div
                            className=' textColor   flex  justify-center gap-x-3.5 space-y-3 lg:space-y-6  '>
                            <div>

                                <button
                                    onClick={handleFollow}
                                    className=' flex cursor-pointer  items-center gap-x-1  text-sm    px-2   border border-black rounded-2xl '>
                                    <span>
                                        <svg width="27" height="25" viewBox="0 0 27 27" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M18 15.75C19.4918 15.75 20.9226 16.3426 21.9775 17.3975C23.0324 18.4524 23.625 19.8832 23.625 21.375V23.625C23.625 23.9234 23.5065 24.2095 23.2955 24.4205C23.0845 24.6315 22.7984 24.75 22.5 24.75C22.2016 24.75 21.9155 24.6315 21.7045 24.4205C21.4935 24.2095 21.375 23.9234 21.375 23.625V21.375C21.375 20.4799 21.0194 19.6214 20.3865 18.9885C19.7536 18.3556 18.8951 18 18 18H9C8.10489 18 7.24645 18.3556 6.61351 18.9885C5.98058 19.6214 5.625 20.4799 5.625 21.375V23.625C5.625 23.9234 5.50647 24.2095 5.29549 24.4205C5.08452 24.6315 4.79837 24.75 4.5 24.75C4.20163 24.75 3.91548 24.6315 3.7045 24.4205C3.49353 24.2095 3.375 23.9234 3.375 23.625V21.375C3.375 19.8832 3.96763 18.4524 5.02252 17.3975C6.07742 16.3426 7.50816 15.75 9 15.75H18ZM24.0907 10.2161C24.2927 10.0122 24.565 9.89321 24.8519 9.88348C25.1387 9.87375 25.4184 9.97402 25.6338 10.1638C25.8491 10.3535 25.9838 10.6184 26.0102 10.9042C26.0367 11.19 25.9529 11.4751 25.776 11.7011L25.6815 11.808L22.5 14.9895C22.3063 15.1832 22.0485 15.2996 21.7751 15.3168C21.5017 15.3339 21.2315 15.2508 21.015 15.0829L20.9093 14.9895L19.3185 13.3988C19.1146 13.1968 18.9956 12.9245 18.9859 12.6376C18.9761 12.3508 19.0764 12.0711 19.2661 11.8557C19.4559 11.6404 19.7208 11.5057 20.0066 11.4793C20.2924 11.4528 20.5775 11.5366 20.8035 11.7135L20.9093 11.8069L21.7046 12.6034L24.0907 10.2161ZM13.5 2.25C14.9918 2.25 16.4226 2.84263 17.4775 3.89752C18.5324 4.95242 19.125 6.38316 19.125 7.875C19.125 9.36684 18.5324 10.7976 17.4775 11.8525C16.4226 12.9074 14.9918 13.5 13.5 13.5C12.0082 13.5 10.5774 12.9074 9.52252 11.8525C8.46763 10.7976 7.875 9.36684 7.875 7.875C7.875 6.38316 8.46763 4.95242 9.52252 3.89752C10.5774 2.84263 12.0082 2.25 13.5 2.25ZM13.5 4.5C13.0568 4.5 12.6179 4.5873 12.2084 4.75691C11.799 4.92652 11.4269 5.17512 11.1135 5.48851C10.8001 5.80191 10.5515 6.17397 10.3819 6.58344C10.2123 6.99292 10.125 7.43179 10.125 7.875C10.125 8.31821 10.2123 8.75708 10.3819 9.16656C10.5515 9.57603 10.8001 9.94809 11.1135 10.2615C11.4269 10.5749 11.799 10.8235 12.2084 10.9931C12.6179 11.1627 13.0568 11.25 13.5 11.25C14.3951 11.25 15.2536 10.8944 15.8865 10.2615C16.5194 9.62855 16.875 8.77011 16.875 7.875C16.875 6.97989 16.5194 6.12145 15.8865 5.48851C15.2536 4.85558 14.3951 4.5 13.5 4.5Z"
                                                fill="#222222" />
                                        </svg>
                                    </span>
                                    Follow
                                </button>
                            </div>

                            <div>
                                <Link href={"/hire"}>
                                    <button
                                        className=' flex cursor-pointer  items-center gap-x-1  text-sm    px-2   border border-black rounded-2xl '>
                                        <span>
                                            <svg width="27" height="27" viewBox="0 0 35 35" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.75 18.9583V7.79163C8.75 7.55592 8.75 7.43807 8.82322 7.36485C8.89645 7.29163 9.0143 7.29163 9.25 7.29163H15.4236C15.7243 7.29163 15.8747 7.29163 15.9955 7.3663C16.1163 7.44098 16.1836 7.57545 16.3181 7.84441L17.2236 9.65551C17.3581 9.92446 17.4253 10.0589 17.5462 10.1336C17.667 10.2083 17.8173 10.2083 18.118 10.2083H25.75C25.9857 10.2083 26.1036 10.2083 26.1768 10.2815C26.25 10.3547 26.25 10.4726 26.25 10.7083V21.375C26.25 21.6107 26.25 21.7285 26.1768 21.8017C26.1036 21.875 25.9857 21.875 25.75 21.875H18.118C17.8173 21.875 17.667 21.875 17.5462 21.8003C17.4253 21.7256 17.3581 21.5911 17.2236 21.3222L16.3181 19.5111C16.1836 19.2421 16.1163 19.1076 15.9955 19.033C15.8747 18.9583 15.7243 18.9583 15.4236 18.9583H8.75ZM8.75 18.9583V27.7083"
                                                    stroke="#222222" strokeLinecap="round" />
                                            </svg>


                                        </span>
                                        HIRE NOW
                                    </button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>


                {/* singer vocal  */}


                <div className="max-w-[1539px] mx-auto px-4  pt-4 lg:pt-10">
                    <h1 className="headerColor text-xl lg:text-3xl font-bold">Available <span
                        className='  '>Vocals</span></h1>

                    <div className="w-full max-w-4xl mx-auto mt-2 flex flex-col gap-4">
                        {songs.length > 0 ? (
                            songs.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-md shadow p-4"
                                >
                                    {/* Left: Image & Play */}
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <Link href={`/music-details/${item.id}`}>
                                            <Image
                                                src={`${imgUrl}/${item?.song_poster}`}
                                                alt={item.title || "Album Cover"}
                                                className="w-14 h-14 object-cover rounded"
                                                width={56}
                                                height={56}
                                            />
                                        </Link>
                                        <button

                                            onClick={() =>
                                                player.setTrack({
                                                    id: item.id,
                                                    title: item?.artist.name,
                                                    name: item?.artist.name,
                                                    song: `${imgUrl}/${item?.artist.cover_song}`,
                                                    song_poster: item.song_poster,
                                                })
                                            }
                                            className="w-0 h-0 border-l-[10px] cursor-pointer border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                                        <div>
                                            <p className="font-semibold text-sm">{item.title || "Untitled"}</p>
                                            <p className="text-xs textColor">
                                                {item?.artist.name || "Unknown"} · {item.bpm || "N/A"} BPM
                                                · {item.key?.name || "N/A"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Middle: Genre and License */}
                                    <div
                                        className="flex flex-wrap sm:flex-nowrap items-center gap-x-24 text-sm textColor w-full sm:w-auto justify-start sm:justify-center">
                                        <span>{item?.type.name || "Genre"}</span>
                                        <span>{item.license?.name || "License"}</span>
                                    </div>

                                    {/* Right: Price and Button */}
                                    <div
                                        className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                        <Link href="/checkout">
                                            <button
                                                className="btnColor text-black text-sm font-semibold px-4 py-1 rounded">
                                                ${item.price || 0}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No songs found.</p>
                        )}
                    </div>


                </div>


                {/* More Singers */}





                {/* contact us browse vocal section  */}

                <div
                    className=' flex flex-col lg:flex-row justify-between items-center px-4 lg:space-y-0 space-y-4 lg:gap-x-11 mt-6 lg:mt-[66px] '>
                </div>


                <div className=' mt-16 px-4 '>

                    <div className=' border border-[#000000] '></div>
                    <div
                        className=' flex lg:flex-row flex-col items-center justify-between relative lg:gap-5 lg:mt-16 mt-6   '>

                        <div className={`w-full`}>
                            <Image src={"/update-image/singer-details/banner/banner.png"}
                                className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={804}
                                alt='....' />
                        </div>
                        {/* right side  */}
                        <div className={`w-full`}>
                            <div className=' max-w-[411px] '>
                                <h1 className=' text-2xl lg:text-[35px] font-bold headerColor leading-9 '>
                                    Your Vocal Includes
                                </h1>
                            </div>

                            <div className=' max-w-[478px] mt-3 '>
                                <h1 className=' lg:text-lg textColor leading-6 font-thin '>

                                </h1>
                            </div>


                            <div className="max-w-[700px] mx-auto">
                                {/* Item 1 */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center md:text-start">
                                    <div className="w-full lg:w-[100px] lg:h-[110px] flex justify-center lg:justify-start">
                                        <Image
                                            src="/update-image/singer-details/icon/1.png"
                                            alt="Mic Icon"
                                            width={150}
                                            height={157}
                                            className="h-20 w-20 object-cover"
                                        />
                                    </div>
                                    <div className="w-full transition duration-300">
                                        <p className="headerColor font-bold text-lg lg:text-xl">
                                            1. WET + DRY Vocals
                                        </p>
                                        <p className="textColor font-light mt-2 lg:mt-4 text-base lg:text-lg leading-7">
                                            A fully mixed version (with FX) plus 3 raw takes ready to drop into any
                                            project.
                                        </p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center md:text-start mt-6">
                                    <div className="w-full lg:w-[100px] lg:h-[110px] flex justify-center lg:justify-start">
                                        <Image
                                            src="/update-image/singer-details/icon/2.png"
                                            alt="Mic Icon"
                                            width={150}
                                            height={157}
                                            className="h-20 w-20 object-cover"
                                        />
                                    </div>
                                    <div className="w-full transition duration-300">
                                        <p className="headerColor font-bold text-lg lg:text-xl">
                                            2. Lyrics + License
                                        </p>
                                        <p className="textColor font-light mt-2 lg:mt-4 text-base lg:text-lg leading-7">
                                            Includes a lyrics PDF and a <span className="font-bold">secure agreement</span> confirming your rights and
                                            ownership.
                                        </p>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center md:text-start mt-6">
                                    <div className="w-full lg:w-[100px] lg:h-[110px] flex justify-center lg:justify-start">
                                        <Image
                                            src="/update-image/singer-details/icon/3.png"
                                            alt="Mic Icon"
                                            width={150}
                                            height={157}
                                            className="h-20 w-20 object-cover"
                                        />
                                    </div>
                                    <div className="w-full transition duration-300">
                                        <p className="headerColor font-bold text-lg lg:text-xl">
                                            3. 24bit WAV Files
                                        </p>
                                        <p className="textColor font-light mt-2 lg:mt-4 text-base lg:text-lg leading-7">
                                            Top-quality audio in professional format clean, clear, and
                                            production-ready.
                                        </p>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>


                </div>


                {/* Card Section */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-8 lg:mt-[59px] mb-6 md:mb-10 lg:mb-20">
                    {/* Card 1 */}
                    <div className="p-5 rounded-md text-[#000000] border shadow">
                        <div className="flex justify-center">
                            <div className="lg:w-[100px] lg:h-[100px] mx-auto rounded-full">
                                <Image
                                    src="/images/singer/royalty.png"
                                    alt="Royalty Free"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-xl lg:text-3xl headerColor leading-9 font-bold text-center mt-4">
                            100% Royalty-Free
                        </h1>
                        <div className="mt-4 textColor lg:text-lg text-center leading-6">
                            <p>
                                Use your vocal anywhere release-ready and yours to keep, with full royalty rights.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-5 rounded-md text-[#000000] border shadow">
                        <div className="flex justify-center">
                            <div className="lg:w-[100px] lg:h-[100px] mx-auto rounded-full">
                                <Image
                                    src="/images/singer/3.png"
                                    alt="Everything You Need"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-xl lg:text-3xl headerColor leading-9 font-bold text-center mt-4">
                            Everything You Need
                        </h1>
                        <div className="mt-4 textColor lg:text-lg text-center leading-6">
                            <p>
                                Includes dry & wet stems, secure license, and invoice delivered instantly. MIDI
                                available separately.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-5 rounded-md text-[#000000] border shadow">
                        <div className="flex justify-center">
                            <div className="lg:w-[100px] lg:h-[100px] mx-auto rounded-full">
                                <Image
                                    src="/images/singer/2.png"
                                    alt="Trusted Quality"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-xl lg:text-3xl headerColor leading-9 font-bold text-center mt-4">
                            Trusted Quality, No Surprises
                        </h1>
                        <div className="mt-4 textColor lg:text-lg text-center leading-6">
                            <p>Every vocal is reviewed for clarity, tone, and performance</p>
                        </div>
                    </div>
                </div>



                <Suspense fallback={<h1>Loading.... </h1>}>
                    <MoreSinger></MoreSinger>
                </Suspense>


            </MaxWidth>
            <>
                <CtaSection></CtaSection>
            </>

            {/* Modal */}
            {chatOpen && (
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="bg-white w-[40%] rounded-2xl shadow-xl relative p-4">
                        {/* Close Button */}
                        <button
                            onClick={toggleModal}
                            className="absolute cursor-pointer top-2 right-3 text-xl text-gray-500"
                        >
                            &times;
                        </button>

                        {/* Chat bubble */}
                        <div className="flex justify-center mb-3">
                            <div className="bg-gray-100 text-sm px-4 py-2 rounded-2xl max-w-[80%]">
                                Hi, I will be available soon! Check back later 😊
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex flex-col  gap-3 mt-6">
                            <Image
                                src="/images/artist-library/artist/artist-1.png" // 👈 update to your image path
                                alt="User"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm text-gray-500">Send a message to</p>
                                <h2 className="text-lg font-semibold">Summer</h2>
                                <p className="text-xs text-green-600 mt-1">
                                    ✅ Get a reply within 24 hours
                                </p>
                            </div>
                        </div>

                        {/* Message Input */}
                        <Link href={`/artist-library/1/artist-message`}>
                            <div
                                className=" mt-6 flex justify-center items-center gap-x-4 cursor-pointer  rounded-full  ">
                                <input
                                    type="text"

                                    placeholder="Type a message"
                                    className=" w-[70%] border px-6 py-2.5 rounded-full cursor-pointer  outline-none text-sm"
                                />
                                <FiSend className="text-gray-500" size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            )}


            <div  >
                {/* ✅ Modal Music Player */}

                <MusickPlayer

                />
            </div>





        </div>
    )
}

export default SingerDetails


