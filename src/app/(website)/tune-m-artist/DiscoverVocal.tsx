import Image from 'next/image';
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";

const DiscoverVocal: React.FC = () => {
    return (
        <div  className='  mx-auto  '>
            <MaxWidth>
                <div
                    className=' flex lg:flex-row flex-col items-center justify-between relative  lg:gap-3'>

                    {/* left side  */}
                    <div className='   '>
                        <Image src={"/update-image/tuneM-Artist/banner/work-banner.png"}
                               className=' object-cover rounded-lg block border w-full mx-auto lg:my-1 ' width={802} height={854}
                               alt='....'/>
                    </div>
                    {/* right side  */}
                    <div className=''>
                        <div className='  '>
                            <h1 className=' text-2xl lg:text-[35px] font-bold headerColor leading-9 '>
                                Work With TuneM in 3 Simple Steps
                            </h1>
                        </div>

                        <div className=' max-w-[478px] lg:mt-3 mt-3 '>
                            <h1 className=' lg:text-lg textColor leading-6 font-thin '>
                                Join our curated roster of vocalists — we handle promotion, match you with projects that suit your style, and guarantee payment for every approved delivery.
                            </h1>
                        </div>


                        <div className="mx-auto mt-7 space-y-3 ">
                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=" transition duration-300 w-full ">
                                    <p className="headerColor font-bold lg:text-xl mb-2">1. Apply to Join</p>
                                    <p className="textColor font-light  lg:text-lg leading-7">
                                        Submit your profile and a few vocal samples. If accepted, you’ll be added to our roster of professional singers.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=" transition duration-300 w-full ">
                                    <p className="headerColor  font-bold lg:text-xl mb-2">
                                        2. Receive Vocal Requests
                                        </p>
                                    <p className="textColor   font-light  lg:text-lg leading-7">
                                        We’ll assign you vocal projects based on your voice and style — no need to look for work. Just focus on recording.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  '>
                                <div className=" transition duration-300 w-full ">
                                    <p className="headerColor  font-bold lg:text-xl mb-2">
                                        3. Get Paid. No Fees.
                                    </p>
                                    <p className="textColor  font-light  lg:text-lg leading-7">
                                        You earn for each vocal project you complete. No fees, fast payouts we handle the rest.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </MaxWidth>
        </div>
    )
}

export default DiscoverVocal;
