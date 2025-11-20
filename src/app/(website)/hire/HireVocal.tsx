"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import { GrNext, GrPrevious } from 'react-icons/gr';

const HireVocal: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    // Hard-coded 5 images
    const totalImages = 5;

    // Auto slide every 3 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev + 2 >= totalImages ? 0 : prev + 2
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 2 < 0 ? totalImages - 2 : prev - 2));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 2 >= totalImages ? 0 : prev + 2));
    };


    return (
        <div className=' '>
            <MaxWidth>
                <h1 className=' text-center lg:mt-14 md:mt-7 mt-4 headerColor lg:text-3xl text-lg  font-bold  '>Our
                    Artists Recorded for</h1>
                <div className={" hidden md:block "} >
                    <div className="flex flex-col  sm:flex-row justify-between items-center gap-4 mx-auto mt-4">
                        <div className="w-full sm:w-auto flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/logo-1.png"
                                alt="logo"
                                width={145}
                                height={70}
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-auto flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/sponser-1.png"
                                alt="logo"
                                width={200}
                                height={90}
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-auto flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/sponser-3.png"
                                alt="logo"
                                width={175}
                                height={85}
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-auto flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/sponser-2.png"
                                alt="logo"
                                width={175}
                                height={85}
                                className="object-cover"
                            />
                        </div>

                        <div className="w-full sm:w-auto flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/sponser-4.png"
                                alt="logo"
                                width={120}
                                height={70}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>


                <div className="relative w-full block md:hidden my-6 overflow-hidden">
                    {/* Slider Track */}
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {/* Slide 1 */}
                        <div className="flex-shrink-0 w-full flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/logo-1.png"
                                alt="logo-1"
                                width={130}
                                height={30}
                                className="object-cover w-36"
                            />
                        </div>

                        {/* Slide 2 */}
                        <div className="flex-shrink-0 w-full flex justify-center">
                            <Image
                                src="/update-image/sponser-logo/sponser-1.png"
                                alt="logo-2"
                                width={200}
                                height={90}
                                className="object-cover w-36"
                            />
                        </div>

                        {/* Slide 3 */}
                        <div className="flex-shrink-0 w-full flex justify-center  ">
                            <Image
                                src="/update-image/sponser-logo/sponser-3.png"
                                alt="logo-3"
                                width={2000}
                                height={85}
                                className="object-cover w-64"
                            />
                        </div>

                        {/* Slide 4 */}
                        <div className="flex-shrink-0 w-full flex justify-center  ">
                            <Image
                                src="/update-image/sponser-logo/sponser-2.png"
                                alt="logo-4"
                                width={2000}
                                height={85}
                                className="object-cover w-64"
                            />
                        </div>

                        {/* Slide 5 */}
                        <div className="flex-shrink-0 w-full flex justify-center  ">
                            <Image
                                src="/update-image/sponser-logo/sponser-4.png"
                                alt="logo-5"
                                width={2000}
                                height={70}
                                className="object-cover w-52   "
                            />
                        </div>
                    </div>

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous"
                        className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
                    >
                        <GrPrevious size={20} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next"
                        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
                    >
                        <GrNext size={20} />
                    </button>
                </div>

                <div className=' max-w-[1449px] mx-auto my-1 '>
                    <div
                        className=' flex lg:flex-row flex-col items-center justify-between relative lg:gap-8 lg:mt-40 '>
                        {/*<div>*/}
                        {/*    <p className=' lg:rotate-90 textColor lg:text-lg lg:absolute lg:top-14 lg:-ml-20   '>JUST*/}
                        {/*        FOR YOU</p>*/}
                        {/*</div>*/}
                        {/* left side  */}
                        <div>
                            <Image src={"/update-image/hire/banner/banner2.png"}
                                className=' object-cover rounded-lg block mx-auto my-1  ' width={652} height={754}
                                alt='....' />
                        </div>
                        {/* right side  */}
                        <div>
                            <div className=' max-w-[411px] '>
                                <h1 className=' text-2xl lg:text-[35px] font-bold headerColor leading-9 '>
                                    How It Works?
                                </h1>
                            </div>

                            <div className=' max-w-[478px] lg:mt-4 mt-3 '>

                            </div>


                            <div className="max-w-[700px] mx-auto mt-4   space-y-3 ">
                                <div className=' flex flex-row gap-5 mt-2  items-start  '>
                                    <div className=' lg:w-[107px] lg:h-[107px]  '>
                                        <Image src={"/update-image/hire/icon/man.png"} alt={"logo1"} width={200}
                                            height={200} className={`object-cover w-20 h-20  `} />
                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">1. Choose a Singer</p>
                                        <p className="textColor font-light mt-2 lg:text-lg leading-7">
                                            Browse our curated roster of professional vocalists, handpicked for quality,
                                            tone, and versatility. From pop to soul, EDM to indie, select a voice that
                                            fits your sound. Multilingual options available.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5   items-start  '>
                                    <div className=' lg:w-[107px] lg:h-[107px]  '>
                                        <Image src={"/update-image/hire/icon/man-2.png"} alt={"logo1"} width={200}
                                            height={200} className={`object-cover  w-20 h-20 `} />
                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">2. Share Your Idea</p>
                                        <p className="textColor font-light  lg:text-lg leading-7">
                                            Send us your reference track, lyrics, or creative direction. Whether
                                            it&apos;s a melody you’ve written or just a vibe you’re chasing, we’ll align
                                            the vocal to your vision.
                                        </p>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5  items-start  '>
                                    <div className=' lg:w-[107px] lg:h-[107px]  '>
                                        <Image src={"/update-image/hire/icon/man-3.png"} alt={"logo1"} width={200}
                                            height={200} className={`object-cover w-20 h-20 `} />
                                    </div>
                                    <div className=" transition duration-300 w-full ">
                                        <p className="headerColor font-bold lg:text-xl ">3. We Deliver the Vocal</p>
                                        <p className="textColor font-light  lg:text-lg leading-7">
                                            Receive a fully recorded, studio-quality vocal. including wet (with FX) and
                                            dry stems. Delivered fast, fully licensed, and ready to drop straight into
                                            your DAW.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className=' lg:mt-14 md:mt-8 mt-5 '>
                        <Link href={"/tune-m-artist"}>
                            <button
                                className=' cursor-pointer  block mx-auto  text-[#000000] border border-[#000000] rounded-2xl px-3 md:px-3 py-1.5 md:py-2 text-[15px]  '>GET
                                STARTED
                            </button>
                        </Link>
                    </div>


                    <div className="">


                        {/* Card Section */}
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-[59px] mb-6 md:mb-10 lg:mb-20">
                            {/* Card 1 */}
                            <div className="p-5 rounded-md shadow bg-white">
                                <div className="flex justify-center">
                                    <Image
                                        src="/update-image/hire/icon/hire-1.png"
                                        alt="Trusted Talent"
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-xl lg:text-3xl text-center font-bold headerColor leading-9 mt-4">
                                    Work with Trusted Talent
                                </h2>
                                <p className="mt-3 textColor text-center text-base lg:text-lg leading-6">
                                    Our singers are hand-selected for their vocal ability, professionalism, and track
                                    record.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-5 rounded-md shadow bg-white">
                                <div className="flex justify-center">
                                    <Image
                                        src="/update-image/hire/icon/hire-2.png"
                                        alt="Secure and Verified"
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-xl lg:text-3xl text-center font-bold headerColor leading-9 mt-4 h-20 flex items-center justify-center">
                                    Secure and Verified
                                </h2>
                                <p className="textColor text-center text-base lg:text-lg leading-6">
                                    TuneM is built for trust with protected payments, verified artists, and real
                                    customer feedback.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-5 rounded-md shadow bg-white">
                                <div className="flex justify-center">
                                    <Image
                                        src="/update-image/hire/icon/hire-3.png"
                                        alt="Delivered Fast"
                                        width={150}
                                        height={150}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="text-xl lg:text-3xl text-center font-bold headerColor leading-9 mt-4 h-20 flex items-center justify-center">
                                    Delivered Within 3–10 Days
                                </h2>
                                <p className="textColor text-center text-base lg:text-lg leading-6">
                                    Our vocalists deliver your custom vocals within 3–10 days, often sooner.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default HireVocal
