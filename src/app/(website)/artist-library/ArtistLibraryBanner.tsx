import Image from 'next/image'
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const ArtistLibraryBanner = () => {
    return (
        <div className=' mx-auto mt-8 '>
            <MaxWidth>
                <div className=' '>
                    <div className='  flex flex-col lg:flex-row justify-between '>
                        {/* left side  */}
                        <div className=' max-w-2xl text-white '>
                            <div
                                className={`  max-w-[633px] lg:text-[60px] text-4xl `}>
                                <h1>TuneM Artists
                                </h1>

                            </div>

                            <div>
                                <h1 className='lg:text-xl text-lg font-semibold btnTextColor ' >
                                    Top voices, ready to work.
                                </h1>
                            </div>
                            <div
                                className=' max-w-[436px] mt-3 lg:mt-10 text-lg leading-6 '>
                                <p>
                                    Stream vocals, hire talent, or start a custom project.
                                </p>
                                <p>
                                </p>
                            </div>

                            {/* <div
                                 className=' flex gap-3.5 lg:gap-12 items-center mb-6 lg:mt-[68px] mt-8 '>
                                <Link className=' cursor-pointer ' href={"/contact"}>
                                    <button
                                        className=' cursor-pointer text-[#E7F056] text-[15px] border border-[#E7F056] rounded-2xl px-4 py-2  '>CONTACT
                                        US
                                    </button>
                                </Link>
                            </div> */}
                        </div>
                        {/* right side  */}
                        <div className={`mt-4
                        `} >
                            <Image
                                src="/images/artist/artist-banner.png"
                                width={772}
                                height={478}
                                alt="Browse Vocal Banner"
                                className='  rounded  '
                            />

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default ArtistLibraryBanner
