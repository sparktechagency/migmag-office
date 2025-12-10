import Image from "next/image";
import React from "react";
import MaxWidth from "@/components/max-width/MaxWidth";

const BrowseVocalBanner: React.FC = () => {
  return (
    <MaxWidth>
      <div className="lg:py-10 md:block hidden ">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Side */}
          <div className="text-white w-full lg:w-1/2">
            <h1 className="text-4xl btnTextColor lg:text-6xl font-bold leading-tight lg:leading-[4.5rem] mb-6">
              Cover Songs
            </h1>
            <p className="text-lg lg:text-xl font-medium leading-relaxed text-white/90 mb-8 max-w-lg">
              Pro cover vocals, ready to use. Secure your license and release
              with confidence.
            </p>

            {/* Logos Row */}
            <div className="flex items-center ">
              <Image
                src="/update-image/cover-vocal/banner/logo-3.png"
                width={200}
                height={200}
                alt="Logo 3"
                className="bg-contain md:w-40 md:h-40 w-28 h-28  "
              />
              <Image
                src="/update-image/cover-vocal/banner/logo-2.png"
                width={200}
                height={200}
                alt="Logo 2"
                className="bg-contain lg:w-40 lg:h-40 w-28 h-28 "
              />

              <Image
                src="/update-image/cover-vocal/banner/logo-1.png"
                width={200}
                height={200}
                alt="Logo 1"
                className="bg-contain lg:w-40 lg:h-40 w-28 h-28  "
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg ">
            <Image
              src="/update-image/cover-vocal/banner/vocalBanner.jpg"
              alt="Main Banner"
              width={600}
              height={800}
              className="h-auto   w-[100%]  "
              priority
            />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default BrowseVocalBanner;
