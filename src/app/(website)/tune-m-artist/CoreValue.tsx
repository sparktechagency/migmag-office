import Link from 'next/link'
import React from 'react'

const CoreValue: React.FC = () => {
    return (
        <div className='  mx-auto '>
            <div 
                 className="bg-[url('/images/home-page/tunemImg.png')] mb-10  bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                <div className="relative z-10">
                    <h1 className="text-center text-[#E7F056] font-bold lg:text-lg">
                        TUNEM FOR ARTISTS
                    </h1>
                    <div className="mx-auto mt-5 lg:mt-16">
                        <h1 
                            className="text-center lg:text-7xl text-3xl text-white font-thin">
                            GROW YOUR <br/>
                            REACH & AUDIENCE
                        </h1>
                    </div>
                    <div className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                        <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                            Whether you want to promote your own song, increase revenue or reach a
                            wider audience, artists always benefit from our artists-first approach.
                        </p>
                    </div>
                    <div>
                        <button
                            className="text-[#E7F056]   px-4 py-1 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                            <Link href={""}>APPLY NOW</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValue
