'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { FaCartArrowDown } from "react-icons/fa";
import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";
import { imgUrl } from "@/utility/img/imgUrl";
import { UserProfile } from '@/utility/type/authType'
import axios from 'axios'



const Navbar: React.FC = () => {



  interface Track {
    id: number;
    title: string;
    name: string;
    genre: string;
    bpm: string;
    key: string;
    gender: 'Male' | 'Female';
    license: 'PREMIUM' | 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    price: number; // make sure price is number
    image: string;
    audioUrl: string;
  }

  const [token, setToken] = useState<string | null>(null);

  const [cart, setCart] = useState<Track[]>([]);


  // ✅ Load cart from localStorage once
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      try {
        // First parse as unknown
        const parsed: unknown = JSON.parse(cartData);

        // Ensure it’s an array
        if (Array.isArray(parsed)) {
          const parsedCart: Track[] = parsed.map((item: unknown) => {
            // Type guard to ensure object
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




  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);




  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

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

  // Auto-close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  const [userData, setUserData] = useState<UserProfile | null>(null);
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchUserProfile = async () => {

      const storedToken = localStorage.getItem("token");
      if (!storedToken) return;

      const res = await axios.get<{ success: boolean; data: UserProfile; message: string }>(
        `${url}/profile`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      if (res.data.success) {
        setUserData(res.data.data);
      }




    };

    fetchUserProfile();
  }, [url]);




  return (
    <div className={`   z-50 `}>
      <MaxWidth>
        <>
          <div
            className='flex items-center justify-between   py-7   mx-auto '>
            {/* Logo */}
            {/* <Link href="/">

              <Image src={"/update-image/logo/tunem-white.png"} width={700} height={700} alt={"logo"} className={``} />

            </Link> */}
            <Link className='' href="/">
              <Image src={"/update-image/logo/update-logo.svg"} width={700} height={700} alt={"logo"} className={` w-40 h-10 `} />


            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden cursor-pointer ">
              <button onClick={toggleDrawer}>
                <FiMenu size={23} className={`text-black cursor-pointer `} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row items-center gap-x-12">
              <ul className="flex items-center gap-x-8 text-lg">
                <li className="relative group">
                  {/* parent link */}
                  <span className={`cursor-pointer`}>
                    Vocals
                  </span>

                  {/* ▼ smooth dropdown */}
                  <ul
                    className="
                                            absolute left-0 top-full w-40 rounded-lg bg-white shadow-lg border border-gray-300 z-50
                                            overflow-hidden                        /* keeps content clipped during scale */
                                            opacity-0 translate-y-2 pointer-events-none
                                            group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                                            transition-all duration-300 ease-out
    "
                  >
                    <li className="px-4 py-2 hover:bg-gray-100 text-center ">
                      <Link
                        className={`${pathname === "/vocals" ? " btnTextColor " : "text-black"}`}
                        href="/vocals">
                        Vocals
                      </Link>
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-100 text-center ">
                      <Link
                        className={` ${pathname === "/cover-vocals" ? " btnTextColor " : "text-black"} `}
                        href="/cover-vocals">
                        Cover Vocals
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link
                    className={` ${pathname === "/artist-list" ? " btnTextColor " : "text-black"} `}
                    href="/ai-matcher">
                    AI Matcher
                  </Link>
                </li> */}


                <li>
                  <Link
                    className={` ${pathname === "/artist-list" ? "text-[#FFBD00]" : "text-black"} `}
                    href="/artist-list">Artists
                  </Link></li>
                <li><Link className={` ${pathname === "/hire" ? " btnTextColor " : "text-black"} `}
                  href="/hire">Hire</Link></li>
              </ul>

              <div className="relative">
                <Link href="/cart">
                  <div
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative">
                    <span className="text-white">
                      {/* Cart Icon SVG */}
                      <FaCartArrowDown className={`  btnTextColor  `} />
                    </span>
                    <span
                      className="absolute -top-1 -right-1 btnColor text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
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
            className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4 flex justify-between items-center border-b">
              <span className="text-lg font-bold">
                <Link href="/">
                  <Image src={"/update-image/logo/update-logo.svg"} width={700} height={700} alt={"logo"} className={` w-40 h-10 `} />

                </Link>
              </span>
              <button onClick={toggleDrawer}>
                <FiX size={24} className={`cursor-pointer`} />
              </button>
            </div>
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <Link className={`${pathname === "/vocals" ? " btnTextColor " : " text-black "}`}
                  href="/vocals">
                  Vocals
                </Link>
              </li>
              <li>
                <Link
                  className={` -ml-1 ${pathname === "/cover-vocals" ? " btnTextColor " : " text-black "}`}
                  href="/cover-vocals">
                  Cover Vocals
                </Link>
              </li>
              {/* <li>
                <Link
                  className={`${pathname === "/ai-matcher" ? "text-[#FFBD00]" : " text-black "}`}
                  href="/ai-matcher">
                  AI Matcher
                </Link>
              </li> */}
              <li>
                <Link
                  className={`${pathname === "/artist-list" ? " btnTextColor " : " text-black "}`}
                  href="/artist-list">Artists</Link></li>
              <li><Link className={`${pathname === "/hire" ? " btnTextColor " : " text-black "}`}
                href="/hire">Hire</Link></li>
              <li><Link className={` ${pathname === "/cart" ? "    " : "text-black"}`}
                href="/cart">Cart ({cart.length})</Link></li>
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
            </ul>
          </div>
        </>
      </MaxWidth>
    </div>
  )
}

export default Navbar


