import BrowseVocalBanner from './BrowseVocalBanner'
import BrowseMusickVocalSlider from './BrowseMusickVocalSlider';
import BrowseAllVocal from './BrowseAllVocal'
import BrowseVocalFooter from "@/app/(website)/cover-vocals/BrowseVocalFooter";
import VocalNavbar from './VocalNavbar';
// ✅ Add this metadata block
export const metadata = {
    title: "Browse Vocals | Tunem",
    description: "Explore a wide range of professional vocals and cover vocals on Tunem. Hire talented artists or discover trending vocal samples to enhance your next track.",
};

const Page: React.FC = () => {





    return (
        <div className=' bg-[#000000] '>
            {/* navbar  */}

            <VocalNavbar />

            {/* browse vocal content  */}
            <div className='  '>
                <BrowseVocalBanner />
            </div>


            <div>
                <BrowseMusickVocalSlider />
            </div>
            <div className=' pb-12 '>
                <BrowseAllVocal />
            </div>


            {/* footer  */}

            <BrowseVocalFooter></BrowseVocalFooter>

        </div>
    )
}

export default Page

