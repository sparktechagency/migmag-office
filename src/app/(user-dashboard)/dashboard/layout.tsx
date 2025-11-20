"use client";

import React, { useEffect} from 'react'
import {usePathname} from 'next/navigation'
import Sidebar from "@/components/sidebar/Sidebar";

const Layout = ({children}: { children: React.ReactNode }) => {

    const pathname = usePathname()


    useEffect(() => {
        // setDrawerOpen(false)
    }, [pathname])
    return (
        <div className=' bg-[#222222] z-50  '>
            <main className=" bg-[#222222] w-full  min-h-screen relative">
                <div  className=' fixed top-0 w-full   '>
                    

                </div>
                {/* Sidebar toggle button is inside Sidebar component (fixed) */}

                <div className="2xl:flex 2xl:gap-x-20  ">
                    <div  className=" w-[270px] px-4">
                        <Sidebar/>
                    </div>

                    <div  className="w-full p-8 ">
                        {children}
                    </div>
                </div>

                {/* On mobile, Sidebar handles its own fixed positioning and toggle */}
            </main>


        </div>
    );
};

export default Layout;

