

import React from 'react'
import BrowseVocalBanner from './BrowseVocalBanner'
import BrowseVocalMarque from './BrowseVocalMarque'
import BrowseAllVocal from './BrowseAllVocal'
import BrowseVocalNavbar from "@/app/(website)/cover-vocals/BrowseVocalNavbar";
import BrowseVocalFooter from './BrowseVocalFooter';
import BrowseMusickVocalSlider from "@/app/(website)/vocals/BrowseMusickVocalSlider";

export const metadata = {
    title: "Cover Vocals | Tunem",
    description: "Explore a wide range of professional vocals and cover vocals on Tunem. Hire talented artists or discover trending vocal samples to enhance your next track.",
};


const Page: React.FC = () => {


    return (
        <div className='  bg-[#000000] '>
            {/* navbar  */}
            <BrowseVocalNavbar></BrowseVocalNavbar>


            <div className={``} >
                {/* browse vocal content  */}
                <div className=' mt-8    '>
                    <BrowseVocalBanner />
                </div>
                <div>
                    <BrowseVocalMarque />
                </div>

                <div>

                    <BrowseMusickVocalSlider></BrowseMusickVocalSlider>

                </div>
                <div className=' pb-12 '>
                    <BrowseAllVocal />
                </div>
            </div>


            {/* footer  */}

            <BrowseVocalFooter></BrowseVocalFooter>

        </div>
    )
}

export default Page 
