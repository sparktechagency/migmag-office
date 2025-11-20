"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { imgUrl } from "@/utility/img/imgUrl";
import { useTotalWishListQuery, useTotalFollowListQuery, useUserProfileQuery } from "@/app/api/authApi/authApi";


const Sidebar: React.FC = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    const handleSignOut = () => {
        localStorage.removeItem("token");
        router.push("/"); // Navigate first
        window.location.reload(); // Then reload if needed
    };

    const { data } = useTotalWishListQuery(undefined);
    const { data: followData } = useTotalFollowListQuery(undefined);
    const artistList = followData?.data?.data.length || [];

    const totalWishList = data?.data?.data.length || [];

    const navItems = [
        { label: "Dashboard", href: "/dashboard", badge: null },
        { label: "My Purchases", href: "/dashboard/purchase", badge: null },
        { label: "Following", href: "/dashboard/following", badge: artistList },
        { label: "Wishlist", href: "/dashboard/wishlist", badge: totalWishList },
        { label: "Support", href: "/dashboard/support", badge: null },
        { label: "Account", href: "/dashboard/account", badge: null },
    ];

    // user profile

    const { data: userProfile } = useUserProfileQuery(undefined);

    const userData = userProfile?.data;

   



    return (
        <>
            {/* Hamburger button - visible only on mobile */}
            <button
                className="fixed  left-4 z-50 2xl:hidden p-2 cursor-pointer rounded-md text-white bg-gray-800"
                onClick={() => setIsOpen(true)}
                aria-label="Open sidebar menu"
            >
                {!isOpen && <HiMenu size={24} />}
            </button>

            {/* Overlay when sidebar is open on mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 cursor-pointer bg-black bg-opacity-50 z-40 2xl:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-16 left-0 2xl:top-32 2xl:left-10 bg-[#2C2C2C] text-white w-64 p-4 flex flex-col justify-between
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full 2xl:translate-x-0"}
        `}
            >
                {/* Mobile header with close button */}
                <div className="flex justify-between items-center mb-8 2xl:hidden">
                    <h2 className="text-lg font-semibold">
                        Welcome back
                        <br />
                        {
                            userData?.full_name
                        }
                    </h2>
                    <button
                        className="p-2 rounded-md cursor-pointer text-white bg-gray-800"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close sidebar menu"
                    >
                        <HiX size={24} />
                    </button>
                </div>

                {/* Desktop header */}
                <div className="hidden 2xl:block mb-8">
                    <h2 className="text-lg font-semibold">
                        <Link href={"/"}>
                            Welcome back
                            <br />
                            {
                                userData?.full_name
                            }
                        </Link>
                    </h2>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 overflow-y-auto">
                    {navItems.map(({ label, href, badge }) => {
                        const isActive = pathName === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className="relative block pl-2.5 pr-2 py-2"
                                onClick={handleLinkClick}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[30px] w-[4px] btnColor rounded" />
                                )}
                                <div className="ml-2 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-5">
                                        <div className="w-[30px] h-[30px] bg-white rounded-full" />
                                        <span
                                            className={`text-lg ${isActive ? "btnTextColor font-bold" : "text-white"
                                                }`}
                                        >
                                            {label}
                                        </span>
                                    </div>
                                    {badge !== null && (
                                        <span className="bg-black text-sm text-white px-2 py-0.5 rounded-md font-medium">
                                            {badge}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* User info */}
                <div className="text-center mt-auto">
                    <div className="w-[70px] h-[70px] mx-auto rounded-full bg-white mb-2" >
                        <Image src={`${imgUrl}/${userData?.avatar}`} alt={`${userData?.full_name}`} className={` rounded-full w-[70px] h-[70px]  `} width={500} height={400} />
                    </div>
                    <p className="font-medium text-lg">{userData?.full_name}</p>
                    <p onClick={handleSignOut} className="text-sm text-[#818080] mt-1 cursor-pointer hover:underline">
                        Sign out
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

