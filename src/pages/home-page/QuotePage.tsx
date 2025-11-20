import React from 'react'
import Image from "next/image";

const QuotePage: React.FC = () => {
    return (
        <div>
            <section className="bg-white lg:mt-20 mt-10 max-w-[1539px] mx-auto lg:px-0 px-4  ">


                {/* Intro */}
                <h2 className="text-2xl headerColor text-center lg:text-4xl font-bold  mb-4">
                    We’ve got you covered – Tired of Overused Vocals?
                </h2>
                <p className="text-lg textColor text-center mb-12">
                    Browse and purchase top-quality vocals created by the best singers in the music industry. Every
                    vocal on TuneM is
                    rare, limited, and our library is refreshed regularly—use them to create original music you can
                    release.
                </p>

                {/* Product tiers */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3  mx-auto">
                    {/* Exclusive */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold headerColor flex flex-row items-center   mb-2">
                            Exclusive Vocals <span> <Image src={"/update-image/home-page/quote/exclusiveLogo.png"} alt={"..."} width={30} height={30} className={"object-cover w-full  "} />  </span>  <span className="text-sm">(1 of 1)</span>
                        </h3>
                        <p className="textColor lg:text-xl text-sm mb-3">
                            One buyer only. Sold once, never resold. Full ownership. 100% royalty-free.
                        </p>

                    </div>

                    {/* Premium */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold headerColor flex flex-row items-center   mb-2">
                            Premium Vocals<Image src={"/update-image/home-page/quote/exclusiveLogo.png"} height={30} width={30} className={"object-cover  "} alt={"..."} />  <span className="text-sm">(5 Copies)</span>
                        </h3>
                        <p className="textColor lg:text-xl text-sm mb-3">
                            Limited to just 5 producers. High-quality, rare vocals with minimal competition.
                        </p>

                    </div>

                    {/* Limited */}
                    <div className="border border-gray-300 rounded-xl p-6 shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold headerColor mb-2 flex flex-row items-center  ">
                            Limited Vocals <Image src={"/update-image/home-page/quote/limitedLogo.png"} height={30} width={30} className={"object-cover  "} alt={"..."} /> <span className="text-sm">(20 Copies)</span>
                        </h3>
                        <p className="textColor lg:text-xl text-sm mb-3">
                            Budget-friendly and unique. Capped at 20 downloads to keep your sound original.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuotePage;
