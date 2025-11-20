
import Link from "next/link";
import ArtistLibraryBanner from "../artist-library/ArtistLibraryBanner";
import BrowseVocalFooter from "../cover-vocals/BrowseVocalFooter";
import BrowseVocalNavbar from "../cover-vocals/BrowseVocalNavbar";
import ArtistList from "./ArtistList";
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
                            <div
                                className="  bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 mt-16 relative overflow-hidden"
                            >
                                {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div> */}

                                <div className="relative lg:mt-20 mt-10 z-10 text-center">
                                    <h1 className="text-white  font-bold lg:text-3xl text-lg">
                                        Become a TuneM Artist.
                                    </h1>
                                    <p className="text-white leading-6 lg:text-xl font-thin max-w-[482px] mx-auto mt-3 lg:mt-9">
                                        We work with talented singers and songwriters ready to take their voice further.
                                        Expand your audience, get discovered, and join our global music network.
                                    </p>
                                    <Link href="/tune-m-artist">
                                        <button className="cursor-pointer text-black btnColor   text-sm px-4 py-2  rounded-2xl mx-auto mt-4 lg:mt-12">
                                            GET STARTED
                                        </button>
                                    </Link>
                                </div>
                            </div>
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
