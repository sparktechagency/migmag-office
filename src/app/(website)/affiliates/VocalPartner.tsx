import React from 'react';
import { Check } from "lucide-react";
import MaxWidth from "@/components/max-width/MaxWidth";
import Link from "next/link";
const VocalPartner: React.FC = () => {
    return (
        <div className={` mt-8 lg:mt-20 mb-4 lg:mb-8 `} >
            <MaxWidth>
                <div className="max-w-4xl  mx-auto ">
                    <div>
                        <h1 className={`text-center headerColor lg:text-4xl text-2xl font-semibold  `}>Join the TuneM Affiliate Program</h1>
                    </div>
                    <div className=" mt-5">
                        <Link href = {`/affiliate-area`}>
                        <button
                            className={`block mx-auto lg:mt-14 mt-8 px-6 py-2 text-sm text-[16px]  btnColor text-black rounded-md cursor-pointer  `}>Apply Now
                        </button>
                        </Link>
                    </div>
                    <div className={`flex md:flex-row flex-col items-center gap-x-3 justify-center mt-7 `}>
                        <span className={`flex items-center gap-x-2 `}> <Check /> <h1 className={`lg:text-xl text-lg`}>Fast Payments </h1> </span>
                        <span className={`flex items-center gap-x-2 `}> <Check /> <h1 className={`lg:text-xl text-lg`}>High Earning Potential</h1> </span>
                        <span className={`flex items-center gap-x-2 `}> <Check /> <h1 className={`lg:text-xl text-lg`}>Trusted Worldwide</h1> </span>
                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default VocalPartner;