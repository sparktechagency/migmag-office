"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { imgUrl } from "@/utility/img/imgUrl";
import {
    useAllFollowingArtistQuery,
    useUnFollowMutation,

} from "@/app/api/authApi/authApi";
import { FollowedArtist } from "@/utility/type/authType";
import Swal from "sweetalert2";


const FollowingPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login"); // Redirect if no token
        }
    }, [router]);

    const { data, refetch } = useAllFollowingArtistQuery(undefined);
    const [unFollow] = useUnFollowMutation();

    const artistList: FollowedArtist[] = data?.data?.data || [];

 

    // Handle unfollow
    const handleUnfollow = async (id: number) => {
        try {
            const res = await unFollow({ id }).unwrap();
            Swal.fire({ position: "top-end", icon: "success", title: res?.message, showConfirmButton: false, timer: 1500 });
            refetch(); // Refresh list after deletion
        } catch (error) {
            console.error("Failed to unfollow artist:", error);
        }
    };

    return (
        <main className="p-4">
            <div>
                <h1 className="text-[#FFFFFF] text-lg font-medium mb-5">
                    Artists you&apos;re following{" "}
                    <span className="text-[#818080]">({artistList.length})</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ">
                {artistList.map((artistItem, index) => (
                    <div key={index} className="bg-[#333333] p-4 rounded-md relative">
                        <div className="flex items-center gap-x-5">
                            <div>
                                <Image
                                    src={`${imgUrl}/${artistItem.artist?.profile}`}
                                    alt={artistItem?.artist?.name}
                                    width={93}
                                    height={91}
                                    className="object-cover w-[93px] h-[95px] rounded-md"
                                />
                            </div>
                            <div>
                                <p className="text-[#818080] text-sm leading-6">
                                    {artistItem?.artist?.name}
                                </p>
                                <h1 className="text-[#FFFFFF] font-bold">
                                    {artistItem?.artist?.singer}
                                </h1>
                                <h1 className="text-[#FFFFFF] font-bold">
                                    {artistItem?.artist?.gender}
                                </h1>
                                <h1 className="text-[#FFFFFF] font-bold">
                                    {artistItem?.artist?.location}
                                </h1>
                            </div>
                        </div>

                        {/* Delete / Unfollow Button */}
                        <button
                            onClick={() => handleUnfollow(artistItem?.artist.id)}
                            className="absolute top-2 right-2 px-3 py-1 text-xs bg-yellow-600  text-white rounded cursor-pointer  "
                        >
                            Unfollow
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default FollowingPage;
