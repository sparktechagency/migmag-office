'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Info,
    Share2,
    Heart,

    MessageCircle,
    Copy,
    X, Facebook, Twitter,
    BadgeCheck
} from 'lucide-react'

import { imgUrl } from "@/utility/img/imgUrl";
import Swal from "sweetalert2";
import AudioPlay from "@/app/(website)/music-details/[id]/AudioPlay";
import { useRouter } from "next/navigation";
import { useSongDetailsQuery } from '@/app/api/websiteApi/websiteApi';
import { useAddWishListMutation } from '@/app/api/authApi/authApi';

interface Artist {
    name?: string;
    gender?: string;
}

interface Genre {
    name?: string;
}

interface Key {
    name?: string;
}

interface License {
    name?: string;
}

interface SongData {
    id: number;
    title: string;
    artist?: Artist;
    bpm?: number;
    genre?: Genre;
    key?: Key;
    license?: License;
    price: number | string;
    song_poster?: string;
}

interface DataWrapper {
    data: SongData;
}




const MusickDetails = ({ id }: { id: string }) => {
    const [showModal, setShowModal] = useState(false);
    const songId = Number(id);


    const { data, refetch } = useSongDetailsQuery({ songId });

    const router = useRouter()
    const [addWishList] = useAddWishListMutation();







    const handleAddToWishlist = async () => {
        try {
            const res = await addWishList({ songId }).unwrap();

            if (res) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res?.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (err: unknown) {
            // Define ApiError type for error handling
            type ApiError = {
                status?: number;
                data?: {
                    message?: string;
                };
            };
            const error = err as ApiError;

            // Example: If your API sends 401 for unauthenticated users
            if (error.status === 401) {
                router.push("/login");
            }

            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error?.data?.message || "This song already exists in wishlist",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    // const removeFromWishlist = async () => {
    //     try {
    //         const res = await removeWish({ songId }).unwrap(); // ✅ pass object
    //         if (res) {
    //             refetch();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: res?.message,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         router.push("/login");
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "error",
    //             title: "Something went wrong",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // };




    const shareUrl =
        typeof window !== 'undefined'
            ? window.location.href
            : 'https://example.com'

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
    };



    interface CartItem {
        id: number;
        title: string;
        name: string; // artist name
        gender?: string;
        bpm?: string | number;
        genre?: string;
        key?: string;
        license?: string;
        price: number;
        image?: string;
    }

    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage once
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsed: unknown = JSON.parse(cartData);

                if (Array.isArray(parsed)) {
                    const parsedCart: CartItem[] = parsed.map((item: unknown) => {
                        if (typeof item === "object" && item !== null) {
                            const cartItem = item as CartItem;
                            return { ...cartItem, price: Number(cartItem.price) }; // ensure price is number
                        }
                        throw new Error("Invalid item in cart");
                    });

                    setCart(parsedCart);
                }
            } catch (error) {
                console.error("Failed to parse cart:", error);
            }
        }
    }, []);

    const handleAddToCart = (data: DataWrapper) => {
        // ✅ Check token
        const token = localStorage.getItem("token");
        if (!token) {
            // Redirect to login if no token
            window.location.href = "/login";
            return;
        }

        if (!data?.data?.id || !data?.data?.title || !data?.data?.price) {
            return alert("Invalid song data");
        }

        const cartItem: CartItem = {
            id: data.data.id,
            title: data.data.title,
            name: data.data.artist?.name || "",
            gender: data.data.artist?.gender,
            bpm: data.data.bpm,
            genre: data.data.genre?.name,
            key: data.data.key?.name,
            license: data.data.license?.name,
            price: Number(data.data.price),
            image: data.data.song_poster,
        };

        // Prevent duplicates
        const alreadyInCart = cart.some((item) => item.id === cartItem.id);

        if (!alreadyInCart) {
            const updatedCart = [...cart, cartItem];
            setCart(updatedCart); // ✅ update React state
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // persist in localStorage

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Song added to cart successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Song already added to cart",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };


    const basePrice = Number(data?.data?.price) || 0;
    const finalPrice = isChecked ? basePrice + 15 : basePrice;


    return (
        <>
            {/* Main Music Card */}
            <div className="w-full max-w-6xl mx-auto bg-white rounded-md p-4 shadow-md relative">
                {/* Top Right Icons */}
                <div className="absolute top-4 right-4 flex gap-4 text-gray-400 z-10">
                    <>
                        <Heart
                            onClick={() => handleAddToWishlist()}
                            className="cursor-pointer hover:text-red-500 transition"
                        />

                    </>

                    <Share2
                        className="cursor-pointer hover:text-blue-500 transition"
                        onClick={() => setShowModal(true)}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6 mt-10  ">
                    {/* Left - Image */}
                    <div className="relative w-full lg:w-[40%] h-72 sm:h-80 md:h-96 mx-auto">
                        <Image
                            src={` ${imgUrl}/${data?.data?.song_poster} `}
                            alt="Open Your Eyes"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{data?.data?.title}</h2>

                        <div className="flex items-center text-sm text-gray-500 gap-2 mt-1 flex-wrap">

                            <span>{data?.data?.artist?.name}</span>
                            <span>•</span>
                            <span>{data?.data?.bpm} BPM</span>
                            <span>•</span>
                            <span>{data?.data?.key?.name}</span>
                            <span>•</span>
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{data?.data?.license?.name}</span>
                            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                                {data?.data?.artist?.language}
                            </span>
                            <span className=' bg-blue-100 text-blue-600 px-1 py-0.5 rounded text-xs flex gap-x-1 item-center ' > <span> <BadgeCheck size={14} className={"text-xs"} /> </span>  Human-Made</span>
                        </div>

                        {/* Play Button */}
                        {/*<div className="my-4">*/}
                        {/*    <FaPlay size={30} className="cursor-pointer text-gray-700 hover:text-black transition"/>*/}
                        {/*</div>*/}

                        {data && <AudioPlay data={data} />}

                        <div className="space-y-2">
                            {/* Checkbox */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="stems"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 cursor-pointer "
                                />
                                <label htmlFor="stems" className="cursor-pointer">
                                    Add stems & midi files +$15
                                </label>
                            </div>

                            {/* Price */}
                            <p className="text-lg font-semibold">{finalPrice}$</p>
                        </div>

                        {/* Info Text */}
                        <div className="text-sm text-gray-500 flex items-center gap-1 my-2 ">
                            <Info className="w-4 h-4" />
                            <span>Only available to subscribed users</span>
                        </div>

                        {/* Credit Section */}
                        <div className="mt-2">
                            <p className="text-black font-semibold">1 Credit</p>
                            <p className="text-sm text-gray-500">Includes</p>
                            <div className="flex gap-2 mt-1 flex-wrap">
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                    WET Vocals
                                </span>
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    3x DRY Vocals Takes
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}

                        {
                            isChecked && data ? (
                                <div className="mt-4 flex gap-4">
                                    <Link href={`/checkout?price=${finalPrice}&songId=${data?.data?.id}&isMiddy=${1}`}>
                                        <button
                                            className="px-4 py-2 rounded btnColor text-sm font-semibold cursor-pointer"
                                        >
                                            Buy now & Download With Middy File
                                        </button>
                                    </Link>

                                    {/* <button
                                        onClick={() => data && handleAddToCart(data as DataWrapper)}
                                        className="border border-blue-600 text-blue-600 px-4 py-2 cursor-pointer text-sm rounded hover:bg-blue-50"
                                    >
                                        Add To Cart
                                    </button> */}
                                </div>
                            ) : (
                                <>
                                    <div className="mt-4 flex gap-4">
                                        <Link href={`/checkout?price=${data?.data?.price}&songId=${data?.data?.id}&isMiddy=${0}`}>
                                            <button
                                                className="px-4 py-2 rounded btnColor text-sm font-semibold cursor-pointer"
                                            >
                                                Buy now & Download
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => data && handleAddToCart(data as DataWrapper)}
                                            className="border border-blue-600 text-blue-600 px-4 py-2 cursor-pointer text-sm rounded hover:bg-blue-50"
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </>
                            )
                        }





                    </div>
                </div>
            </div>


            {/* Share Modal */
            }
            {
                showModal && (
                    <div
                        className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md px-6 py-5 w-[95%] max-w-md">
                        {/* Close Button */}
                        <button onClick={() => setShowModal(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-black cursor-pointer ">
                            <X size={18} />
                        </button>

                        {/* Modal Heading */}
                        <h3 className="text-xl font-bold text-center mb-1">Share this vocal</h3>
                        <p className="text-sm text-gray-500 text-center mb-5">
                            Inspire people by sharing this vocal
                        </p>

                        {/* Share Buttons */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#3b5998] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                            >
                                <Facebook size={16} />
                                Facebook
                            </a>

                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#1da1f2] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                            >
                                <Twitter size={16} />
                                Twitter
                            </a>

                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25d366] hover:brightness-110 text-white text-sm px-4 py-2 rounded-md"
                            >
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>

                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md"
                            >
                                <Copy size={16} />
                                Copy link
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MusickDetails

