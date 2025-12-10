import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";

const TunemBanner = () => {

  return (
    <div className=" mx-auto  ">

      <div
        className={`bg-[linear-gradient(90deg,rgba(233,244,254,1)_0%,rgba(249,253,255,1)_50%,rgba(238,248,255,1)_100%)]`}
      >

        <MaxWidth>
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left side */}
            <div className="lg:w-[60%] lg:mt-14 space-y-4">
              <div className="flex flex-col justify-center items-center ">
                <div>
                  <Image
                    src="/update-image/logo/update-logo.svg"
                    width={700}
                    height={700}
                    alt="logo"
                    className="w-40 h-10"
                  />
                </div>

                <div>
                  <h1 className="font-bold mt-2 text-3xl">For Artists</h1>
                </div>
              </div>
              <div className="lg:mt-16 text-center lg:text-start mb-6 lg:mb-0 px-6 ">
                <h1 className="text-lg lg:text-3xl headerColor font-semibold">
                  Record. Deliver. Get Paid.
                </h1>
                <p className="textColor">No fees. No delays. Pure vocal income.</p>
              </div>
            </div>

            {/* Right side */}
            <div>
              <Image
                src="/update-image/tuneM-Artist/banner/banner.png"
                alt="banner-logo"
                width={850}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </MaxWidth>

      </div>



    </div>
  )




}

export default TunemBanner;



