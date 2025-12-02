
import ArtistLibraryBanner from "../artist-library/ArtistLibraryBanner";
import BrowseVocalFooter from "../cover-vocals/BrowseVocalFooter";
import BrowseVocalNavbar from "../cover-vocals/BrowseVocalNavbar";
import ArtistList from "./ArtistList";
import CtaSection from "@/components/cta/CtaSection";
export const metadata = {
    title: "ArtistList | Tunem",
    description: "Explore a wide range of professional vocals and cover vocals on Tunem. Hire talented artists or discover trending vocal samples to enhance your next track.",
};

const Page = () => {
    return (
        <div>
            <div className={` w-full `}>
                <div className=' bg-[#000000] '>
                    <div>
                        {/* navbar  */}

                        <BrowseVocalNavbar></BrowseVocalNavbar>

                        {/* website content  */}

                        <div className={``}>
                            <ArtistLibraryBanner></ArtistLibraryBanner>
                        </div>
                        <ArtistList />

                        <section className="lg:mb-16 mb-10">
                            <CtaSection></CtaSection>
                        </section>

                        {/* footer  */}
                        <BrowseVocalFooter></BrowseVocalFooter>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Page
