"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation'

import { FaCartArrowDown } from "react-icons/fa";

import MaxWidth from "@/components/max-width/MaxWidth";

import Image from "next/image";
import { imgUrl } from "@/utility/img/imgUrl";
import { UserProfile } from '@/utility/type/authType'
import axios, { AxiosError } from 'axios'

const VocalNavbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const pathname = usePathname();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
    }, []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen)

    // Auto-close drawer on screen resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setDrawerOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [cart, setCart] = useState<Track[]>([]);

    // Auto-close drawer on route change
    useEffect(() => {
        setDrawerOpen(false)
    }, [pathname])

    interface Track {
        id: number;
        title: string;
        artist: {
            id: number;
            name: string;
        };
        price: number;
        song: string;
        song_poster: string;
    }

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsed: unknown = JSON.parse(cartData);

                if (Array.isArray(parsed)) {
                    const parsedCart: Track[] = parsed.map((item: unknown) => {
                        if (typeof item === "object" && item !== null) {
                            const t = item as Track;
                            return { ...t, price: Number(t.price) }; // ensure price is number
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



    const [userData, setUserData] = useState<UserProfile | null>(null);
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get<{ success: boolean; data: UserProfile; message: string }>(
                    `${url}/profile`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.data.success) {
                    setUserData(res.data.data);
                }
            } catch (err) {
                const error = err as AxiosError<{ message: string }>;
                console.error("Failed to fetch user profile:", error.response?.data?.message || error.message);
            }
        };

        fetchUserProfile();
    }, [url, token]);
    return (
        <div>
            <>
                <MaxWidth>
                    <div className="  mx-auto    bg-opacity-90 py-7 ">
                        <div className='flex items-center justify-between  mx-auto '>
                            {/* Logo */}

                            <Link href="/">
                                <Image
                                    src="/images/logo/black-logo.png"
                                    width={200}
                                    height={5000}
                                    alt="logo"
                                    className=" w-32 "
                                />
                            </Link>


                            {/* Mobile Menu Button */}
                            <div className="lg:hidden">
                                <button onClick={toggleDrawer}>
                                    <FiMenu size={23} className='text-white cursor-pointer ' />
                                </button>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex flex-row items-center gap-x-12">
                                <ul className="flex items-center gap-x-8 text-lg">
                                    <li className="relative group">
                                        {/* parent link */}
                                        <span className={`text-white`}>
                                            Vocals
                                        </span>

                                        {/* ▼ smooth dropdown */}
                                        <ul
                                            className="
                                                absolute left-0 top-full w-44 rounded-lg bg-white shadow-lg border border-gray-300 z-50
                                                overflow-hidden                        /* keeps content clipped during scale */
                                                opacity-0 translate-y-2 pointer-events-none
                                                group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                                transition-all duration-300 ease-out
    "
                                        >
                                            <li className="px-4 py-2 text-center hover:bg-gray-100">
                                                <Link className="text-black" href="/vocals">
                                                    Vocals
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2  text-center hover:bg-gray-100">
                                                <Link className="text-black" href="/cover-vocals">
                                                    Cover Vocals
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        {/* <Link
                    className={` ${pathname === "/ai-matcher" ? " btnTextColor " : "text-white"} `}
                    href="/ai-matcher">
                    AI Matcher
                  </Link> */}
                                    </li>
                                    <li><Link
                                        className={`${pathname === "/artist-list" ? "text-[#FFBD00]" : "text-white"}`}
                                        href="/artist-list">Artist</Link></li>
                                    <li>
                                        <Link
                                            className={`${pathname === "/hire" ? "text-[#FFBD00]" : "text-white"}`}
                                            data-artist-library="true"
                                            href="/hire"
                                        >
                                            Hire
                                        </Link>
                                    </li>
                                </ul>

                                <div className="relative">
                                    <Link href="/cart">
                                        <div
                                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative">
                                            <span className="text-white">
                                                {/* Cart Icon SVG */}
                                                <FaCartArrowDown className={` text-black `} />
                                            </span>
                                            <span
                                                className="absolute -top-1 -right-1 bg-[#FFBD00] text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                                {
                                                    cart.length
                                                }
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                <div className={"  "}>
                                    {
                                        token && (
                                            <Link href="/dashboard">
                                                <Image
                                                    src={`${imgUrl}/${userData?.avatar}`}
                                                    alt={userData?.full_name || "User Avatar"}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full cursor-pointer border w-14 h-14  "
                                                />
                                            </Link>
                                        )
                                    }
                                    {
                                        !token && (
                                            <Link href="/login">
                                                <button
                                                    className="bg-black text-white px-6 py-2 cursor-pointer rounded-full font-medium hover:bg-gray-900">
                                                    Log in
                                                </button>
                                            </Link>
                                        )
                                    }
                                </div>
                            </nav>
                        </div>

                        {/* Backdrop for Drawer */}
                        {drawerOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={toggleDrawer}></div>
                        )}

                        {/* Mobile Drawer */}
                        <div
                            className={`fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="p-4 flex justify-between items-center border-b">
                                <span className="text-lg font-bold">
                                    <Link href="/">
                                        <Image
                                            src="/images/logo/black-logo.png"
                                            width={200}
                                            height={5000}
                                            alt="logo"
                                            className=" w-32 "
                                        />

                                    </Link>
                                </span>
                                <button onClick={toggleDrawer}>
                                    <FiX size={24} className='text-white cursor-pointer ' />
                                </button>
                            </div>
                            <ul className="flex flex-col p-4 gap-4">
                                <li>
                                    <Link
                                        href="/vocals"
                                        className={` ${pathname === "/vocals" ? "text-[#FFBD00]  " : "text-white"}`}
                                    >
                                        Vocals
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/cover-vocals"
                                        className={` ${pathname === "/cover-vocals" ? "text-[#FFBD00]  " : "text-white"}`}
                                    >
                                        Cover Vocals
                                    </Link>
                                </li>
                                <li><Link
                                    className={` ${pathname === "/artist-list" ? "text-[#FFBD00]  " : "text-white"}`}
                                    href="/artist-list">Artist</Link></li>
                                <li><Link className={` ${pathname === "/hire" ? "text-[#FFBD00]  " : "text-white"}`}
                                    href="/hire">Hire</Link></li>
                                <li><Link className={` ${pathname === "/cart" ? "text-[#FFBD00]  " : "text-white"}`}
                                    href="/cart">Cart ({
                                        cart.length
                                    })</Link></li>
                                <li>
                                    <div className={"  "}>
                                        {
                                            token && (
                                                <Link href="/dashboard">
                                                    <Image
                                                        src={`${imgUrl}/${userData?.avatar}`}
                                                        alt={userData?.full_name || "User Avatar"}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full cursor-pointer border w-14 h-14  "
                                                    />
                                                </Link>
                                            )
                                        }
                                        {
                                            !token && (
                                                <Link href="/login">
                                                    <button
                                                        className="bg-black text-white px-6 py-2 cursor-pointer rounded-full font-medium hover:bg-gray-900">
                                                        Log in
                                                    </button>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </MaxWidth>
            </>
        </div>
    )
}

export default VocalNavbar