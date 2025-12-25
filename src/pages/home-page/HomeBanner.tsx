import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MaxWidth from "@/components/max-width/MaxWidth";


const HomeBanner: React.FC = () => {
    return (
        <div className={"bg-[linear-gradient(90deg,rgba(233,244,254,1)_0%,rgba(249,253,255,1)_50%,rgba(238,248,255,1)_100%)]"} >
            <MaxWidth>
                <div className=' pt-8 lg:pt-10 pb-10   '>
                    <div className="flex flex-col-reverse lg:flex-row  justify-between gap-x-10 lg:gap-0">
                        {/* Left Side */}
                        <div className="  text-center lg:text-left flex-1 lg:w-[20%] w-full ">
                            <h1
                                className={`lg:text-[40px] text-xl font-bold headerColor uppercase   `}>
                                ROYALTY-FREE VOCALS READY FOR RELEASE
                                {/* Royalty-Free Vocals Ready for Release */}
                            </h1>
                            <p
                                className="textColor lg:text-2xl text-lg  mt-4 md:mt-8 ">
                                Used by producers. Trusted by labels.
                            </p>

                            <p className={`textColor lg:text-2xl text-lg`} >
                                Chosen by music tech leaders worldwide
                            </p>


                            <div className="mt-8 md:mt-12">
                                <Link href="/vocals" passHref>
                                    <button
                                        className="cursor-pointer border btnColor text-black rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]  ">
                                        BROWSE VOCALS
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex justify-center lg:justify-end flex-1 lg:w-[90%] w-full ">
                            <Image
                                src="/images/logo/update-hero.svg"
                                alt="banner-image"
                                width={2000}
                                height={530}
                                className=" w-full   rounded-2xl  "
                            />
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default HomeBanner