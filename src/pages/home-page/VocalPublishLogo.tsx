// components/VocalPublishLogo.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import MaxWidth from "@/components/max-width/MaxWidth";
import { GrNext, GrPrevious } from 'react-icons/gr';

const VocalPublishLogo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hard-coded 5 images
  const totalImages = 5;

  // Auto slide every 3 seconds
  useEffect(() => {
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
    <MaxWidth>
      <div className=" hidden  md:block   ">
        <h1 className="text-center headerColor lg:text-4xl text-2xl font-semibold">
          {/*TuneM Vocals Featured In*/}
        </h1>
        <div className="flex md:flex-row flex-col   justify-between items-center gap-4 mx-auto mt-4">
          <div>
            <Image
              src="/update-image/sponser-logo/logo-1.png"
              alt="logo"
              width={130}
              height={30}
              className="object-cover w-36 "
            />
          </div>

          <div>
            <Image
              src="/update-image/sponser-logo/sponser-1.png"
              alt="logo"
              width={200}
              height={90}
              className="object-cover w-36 "
            />
          </div>

          <div>
            <Image
              src="/update-image/sponser-logo/sponser-3.png"
              alt="logo"
              width={175}
              height={85}
              className="object-cover w-36 "
            />
          </div>

          <div>
            <Image
              src="/update-image/sponser-logo/sponser-2.png"
              alt="logo"
              width={175}
              height={85}
              className="object-cover w-36 "
            />
          </div>

          <div>
            <Image
              src="/update-image/sponser-logo/sponser-4.png"
              alt="logo"
              width={175}
              height={85}
              className="object-cover w-36 "
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
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
        >
          <GrPrevious size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow hover:bg-white"
        >
          <GrNext size={20} />
        </button>
      </div>





    </MaxWidth>
  );
};

export default VocalPublishLogo;
