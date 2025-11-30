import Image from "next/image";
import React from "react";
import QuotePage from "@/pages/home-page/QuotePage";
import MaxWidth from "@/components/max-width/MaxWidth";
import VocalArtist from "./VocalArtist";

const VocalPublish: React.FC = () => {
  return (
    <>
      <MaxWidth>
        <div className=" max-w-[1315px] mx-auto px-4 lg:mt-20 mt-8  ">

        </div>
        <div></div>
        <div className="  mx-auto flex flex-col items-stretch  lg:flex-row  gap-x-14 lg:mt-[110px] md:mt-20  ">
          {/* left section  */}
          <div className=" w-full  ">
            <Image
              src={"/update-image/home-page/vocal-relase/vocal-relase.jpg"}
              className=" object-cover md:w-full w-[50%]  mx-auto "
              width={961}
              height={991}
              alt="...."
            />
          </div>
          {/* right section  */}
          <div className=" lg:-mt-1 mt-4   ">
            <div className=" max-w-[441px] ">
              <h1 className=" headerColor text-2xl lg:text-[35px] font-bold leading-9 ">
                Use Our Vocals in Your Official Releases
              </h1>
            </div>
            <div className=" maw-w-[450px] lg:mt-8 mt-3 ">
              <h1 className=" lg:text-lg leading-6 textColor ">
                 Whether you&apos;re uploading your track to Spotify, Apple Music, Beatport, or YouTube, all vocals from TuneM are fully royalty-free and release-ready. Create, produce, and release your music with total confidence no clearance issues, no limits.
              </h1>
            </div>
            <div className={""} >
              <div className=" flex flex-col lg:flex-row md:flex-row  lg:items-start justify-center lg:gap-x-10 md:gap-10 ">
                <div className={" ml-[44%] md:ml-0  "} >
                  <span className="block mx-auto  ml-1 mt-10  " >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 44 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.0237 19.4673L40.0315 15.949C39.4595 15.281 38.9974 14.034 38.9974 13.1433V9.35787C38.9974 6.99753 37.0833 5.06026 34.7512 5.06026H31.011C30.1529 5.06026 28.8988 4.59265 28.2388 4.0137L24.7626 0.985332C23.2445 -0.328444 20.7583 -0.328444 19.2182 0.985332L15.7639 4.03596C15.1039 4.59265 13.8498 5.06026 12.9918 5.06026H9.18555C6.85341 5.06026 4.9393 6.99753 4.9393 9.35787V13.1656C4.9393 14.034 4.47727 15.281 3.92724 15.949L0.957057 19.4896C-0.319019 21.026 -0.319019 23.5199 0.957057 25.0564L3.92724 28.5969C4.47727 29.2649 4.9393 30.5119 4.9393 31.3803V35.1881C4.9393 37.5484 6.85341 39.4857 9.18555 39.4857H12.9918C13.8498 39.4857 15.1039 39.9533 15.7639 40.5322L19.2402 43.5606C20.7583 44.8744 23.2445 44.8744 24.7846 43.5606L28.2608 40.5322C28.9208 39.9533 30.1529 39.4857 31.033 39.4857H34.7732C37.1053 39.4857 39.0194 37.5484 39.0194 35.1881V31.4026C39.0194 30.5342 39.4815 29.2649 40.0535 28.5969L43.0457 25.0787C44.3218 23.5422 44.3218 21.0037 43.0237 19.4673ZM31.143 18.0644L20.5163 28.8196C20.2083 29.1313 19.7903 29.3095 19.3503 29.3095C18.9102 29.3095 18.4922 29.1313 18.1842 28.8196L12.8598 23.4309C12.2217 22.7851 12.2217 21.7163 12.8598 21.0705C13.4978 20.4248 14.5539 20.4248 15.1919 21.0705L19.3503 25.2791L28.8108 15.7041C29.4489 15.0583 30.5049 15.0583 31.143 15.7041C31.781 16.3498 31.781 17.4187 31.143 18.0644Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <div className="  ">
                  <p className=" mt-3 lg:mt-7 headerColor text-center md:text-start font-bold text-lg leading-6 ">
                    Choose Your Vocal
                  </p>
                  <div className=" max-w-[691px] ">
                    <h1 className=" mt-3 lg:mt-5 font-thin text-lg textColor leading-6 text-justify lg:text-start ">
                      Browse a wide range of professional, royalty-free vocals
                      filtered by genre, mood, and vocal type. Find the sound
                      that fits your vision.
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row md:flex-row  items-start lg:gap-x-10 md:gap-10   ">
                <span className={`mt-10 ml-[44%] md:ml-0  `} >
                  <Image
                    src={"/update-image/home-page/vocal-relase/relese2Logo.png"}
                    alt={"download"}
                    width={30}
                    height={35}
                    className={" object-cover w-11 h-11 flex justify-center  "}
                  />
                </span>
                <div className="  ">
                  <p className=" mt-3 lg:mt-7 text-center md:text-start headerColor font-bold text-lg leading-6 ">
                    Download and Produce
                  </p>
                  <div className=" max-w-[691px] ">
                    <h1 className=" lg:mt-5 font-thin mt-2 lg:text-lg textColor leading-6 text-justify lg:text-start ">
                      Use the vocal in your track, edit freely, and build your
                      release. All vocals come as high-quality WAV files,
                      including dry and wet versions.
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col lg:flex-row md:flex-row  items-start lg:gap-x-10 md:gap-10   ">
                <span className={`mt-10  ml-[44%] md:ml-0 `} >
                  <Image
                    src={"/update-image/home-page/vocal-relase/relese3Logo.png"}
                    alt={"download"}
                    width={35}
                    height={35}
                    className={"object-cover w-11 h-11  "}
                  />
                </span>
                <div className="  ">
                  <p className=" lg:mt-8 mt-3 headerColor text-center md:text-start font-bold text-lg leading-6 ">
                    Release With Confidence
                  </p>
                  <div className=" max-w-[691px] ">
                    <h1 className=" lg:mt-5 mt-2 font-thin text-lg textColor leading-6 text-justify lg:text-start ">
                      Release your song on Spotify, Apple Music, YouTube, or any
                      other platform. Our vocals come with full rights 100%
                      royalty free, no clearance issues, no limits !{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <QuotePage />
        </div>

        <div>
          <VocalArtist />
        </div>


      </MaxWidth>
    </>
  );
};

export default VocalPublish;
