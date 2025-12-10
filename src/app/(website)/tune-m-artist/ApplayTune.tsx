import Image from 'next/image';
import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const ApplayTune: React.FC = () => {
    return (
        <MaxWidth>
            <div className='mx-auto mb-16'>
                <div className='flex lg:flex-row-reverse flex-col items-center justify-between relative lg:gap-5'>

                    {/* Left side */}
                    <div className="   " >
                        <Image
                            src={"/update-image/tuneM-Artist/banner/artistBgBanner.png"}
                            className='object-cover rounded-lg block mx-auto my-1 '
                            width={800}
                            height={800}
                            alt='Artist Banner'
                        />
                    </div>

                    {/* Right side */}
                    <div className=" h-auto    " >
                        <div className='max-w-[570px]'>
                            <h1 className='text-white leading-9  text-xl font-bold headerColor'>
                                Become Part Of The TuneM Artist Squad
                            </h1>
                        </div>

                        <div className='max-w-[698px] lg:mt-5 mt-3'>
                            <h1 className='lg:text-lg textColor leading-6 font-thin'>
                                We handle the promotion. We bring the work. You get paid.
                            </h1>
                            <span className='lg:text-lg textColor leading-6 font-thin my-2 block'>
                                At TuneM, you don’t need to chase gigs, clients or spend time promoting yourself.
                            </span>
                            <span className='lg:text-lg textColor leading-6 font-thin'>
                                We advertise your voice, match you with serious vocal projects, and guarantee payment upon approved delivery.
                            </span>
                            <span className='lg:text-xl text-lg headerColor font-bold leading-6 my-6 block'>
                                At TuneM, we bring the work to you - so you can focus on what you do best.
                            </span>
                        </div>

                        <div className="max-w-[700px] mx-auto lg:mt-6 mt-4 space-y-3">
                            {/* Feature 1 */}
                            <div className='flex flex-row gap-5 items-start'>
                                <div className='lg:w-[120px] lg:h-[120px] w-[100px] h-[100px] rounded-full overflow-hidden'>
                                    <Image
                                        src={"/update-image/tuneM-Artist/logo/network.png"}
                                        alt={"Network"}
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="transition duration-300 w-full">
                                    <h1 className="lg:text-xl text-[16px] font-bold">
                                        Your Voice, Our Network
                                    </h1>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        We connect your talent with our trusted network and consistently match you with vocal projects tailored to your voice without the need to search for work yourself.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className='flex flex-row gap-5 items-start'>
                                <div className='lg:w-[120px] lg:h-[120px] w-[100px] h-[100px] rounded-full overflow-hidden'>
                                    <Image
                                        src={"/update-image/tuneM-Artist/logo/mike.png"}
                                        alt={"Mike"}
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="transition duration-300 w-full">
                                    <p className="lg:text-xl text-[16px] font-bold mb-2">
                                        We Market Your Talent
                                    </p>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        While you create, we actively market your talent connecting your voice with the right opportunities through our network.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className='flex flex-row gap-5 items-start'>
                                <div className='lg:w-[120px] lg:h-[120px] w-[100px] h-[100px] rounded-full overflow-hidden'>
                                    <Image
                                        src={"/update-image/tuneM-Artist/logo/microphone.png"}
                                        alt={"Microphone"}
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="transition duration-300 w-full">
                                    <p className="text-[#000000] font-bold lg:text-xl mb-4">
                                        Ongoing Vocal Opportunities
                                    </p>
                                    <p className="textColor font-light mt-2 lg:text-lg text-sm leading-7">
                                        Once you&apos;re part of TuneM, we continuously match your voice with projects aligned to your style and strengths ensuring steady, ongoing opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaxWidth>
    );
};

export default ApplayTune;
