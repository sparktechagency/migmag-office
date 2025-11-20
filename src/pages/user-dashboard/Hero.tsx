"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import UserPurchases from './UserPurchases';
// import ResentSearch from './ResentSearch';
import { imgUrl } from '@/utility/img/imgUrl';
import { ArtistRelation, User } from '@/utility/type/authType';
import axios from 'axios';


const Hero: React.FC = () => {
    const [artistList, setArtistList] = useState<ArtistRelation[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    interface Order {
        id: number;
        order_number: string;
        status: string;
        total_amount: string;
        user: User;
    }
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [orders, setOrders] = useState<Order[]>([]); // array of orders

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const fetchUserOrders = async () => {
            try {
                const response = await axios.get(`${url}/user-orders`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // assuming the API returns { data: Order[] }
                setOrders(response.data?.data?.data || []);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUserOrders();
    }, [url]);



    useEffect(() => {
        const fetchArtists = async () => {
            try {
                setIsLoading(true);
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_BASE_URL}/follow`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        },
                    }
                );

                const data: ArtistRelation[] = response.data?.data?.data ?? [];
                setArtistList(data);
            } catch (err) {
                console.error("Failed to fetch following artists:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArtists();
    }, []);

    const totalArtist = artistList.length;

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="p-4">
            {/* Top Icon */}
            <div className="mb-4">
                <span>
                    <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 15.7676H5.72728C5.59497 15.7676 5.52881 15.7676 5.47135 15.7692C3.51875 15.8254 1.89228 17.2836 1.62415 19.2185C1.61626 19.2755 1.60906 19.3412 1.59467 19.4728L1.53547 20.014C1.26629 22.4746 3.41674 24.5143 5.8597 24.1155V24.1155C7.67037 23.82 9 22.2557 9 20.4211V5.93177C9 4.38709 9 3.61475 9.44265 3.06539C9.8853 2.51604 10.64 2.35178 12.1493 2.02328L14.7041 1.46724C14.8378 1.43814 14.9046 1.42359 14.9431 1.46115C14.9816 1.49871 14.9688 1.5659 14.9431 1.70027L14.0237 6.50238C14.0122 6.56265 14.0064 6.59279 13.9867 6.61391C13.9669 6.63503 13.9372 6.64278 13.8778 6.65829L9 7.93227"
                            stroke="white" strokeWidth="2"
                        />
                    </svg>
                </span>
            </div>

            {/* comment  */}

            {/* Main Flex Section */}
            <div className="flex flex-col gap-6 2xl:flex-row justify-between">
                {/* Left Section: Stats Cards */}
                <div className="flex flex-col md:flex-row gap-6 lg:max-w-[895px]">
                    {/* Card 1 */}
                    <div className=" btnColor  w-full md:w-[271px] rounded-md p-6">
                        <h1 className="text-[#222222] text-[23px] leading-6 font-bold">
                            All-time tracks downloaded by you.
                        </h1>
                        <h1 className="text-[#222222] text-8xl mt-6 mb-14">{orders?.length > 0 ? <>{orders?.length}</> : <>0</>}</h1>
                        <div className="flex justify-end">
                            <div className="flex gap-x-3 items-center">
                                <p className="text-[#222222] text-sm">View Services</p>
                                <div className="bg-[#222222] cursor-pointer w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#333333] w-full md:w-[271px] rounded-md p-6 flex flex-col justify-between">
                        <h1 className="text-[#222222] text-[23px] leading-6 font-bold">
                            No on-going projects at the moment?
                        </h1>
                        <div className="flex justify-end mt-10 md:mt-[146px]">
                            <div className="flex gap-x-3 items-center">
                                <p className="text-white text-sm">View Services</p>
                                <div className=" btnColor  cursor-pointer w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#333333] w-full md:w-[271px] rounded-md p-6"></div>
                </div>

                {/* Right Section: Followed Artist */}
                <div className="bg-[#333333] rounded-md p-6 md:p-8 w-full space-y-10">
                    <h1 className="text-white text-lg mb-4">
                        Artists you are following <span className="btnTextColor">({totalArtist})</span>
                    </h1>
                    {artistList.slice(0, 3).map((song) => (
                        <div key={song.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <Image
                                src={`${imgUrl}/${song.artist?.profile}`}
                                width={200}
                                height={200}
                                alt="Artist"
                                className="h-20 w-20 rounded-md"
                            />
                            <div className="flex-1">
                                <h2 className="text-sm text-[#818080] leading-6">{song.artist?.name}</h2>
                                <h1 className="text-base font-bold underline text-white">{song.artist?.singer}</h1>
                                <h1 className="text-base font-bold text-white">{song.artist?.gender}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="2xl:max-w-[860px] w-full">
                {/* <UserPurchases /> */}
                {/* <ResentSearch /> */}
            </div>
        </div>
    );
};

export default Hero;
