
import React from 'react'


import HireVocal from './HireVocal'

import UpdateFooter from "@/components/footer/UpdateFooter";

import Navbar from "@/components/navbar/Navbar";
import HireBanner from "@/app/(website)/hire/HireBanner";

export const metadata = {
    title: "Hire | Tunem",
    description: "Explore a wide range of professional vocals and cover vocals on Tunem. Hire talented artists or discover trending vocal samples to enhance your next track.",
};

const Page: React.FC = () => {



    return (
        <>


            <Navbar></Navbar>

            <HireBanner></HireBanner>



            {/* content  */}

            <HireVocal></HireVocal>


            {/* footer */}
            <div>
                <UpdateFooter></UpdateFooter>
            </div>
        </>
    )
}

export default Page
