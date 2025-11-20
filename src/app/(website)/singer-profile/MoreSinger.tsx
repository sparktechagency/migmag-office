"use client";

import { GrNext } from "react-icons/gr";
import SingerList from "./SingerList";
import Link from "next/link";



export default function MoreSinger() {






  return (
    <div className={"px-4 my-6 "} >
      <div className="flex item-center justify-between " >
        <h1 className={"my-6 font-bold lg:text-3xl text-lg  "} >More Singer</h1>
        <Link href="/artist-list" className=" hover:underline flex items-center gap-x-2  font-medium  " >SEE ALL <span><GrNext /></span></Link>
      </div>

      <div>
        <SingerList></SingerList>
      </div>



    </div>
  );
}
