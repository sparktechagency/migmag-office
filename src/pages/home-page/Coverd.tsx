import Image from 'next/image';
import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";
import CtaSection from '@/components/cta/CtaSection';

const Coverd: React.FC = () => {
  return (
    <>
      <MaxWidth>
        <section className="mx-auto mt-10 lg:mt-12">
          

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-2 w-full">
            {/* Left Content */}
            <article className=" flex-1 p-5 lg:w-[40%] w-full rounded-md">
              <h1 className="text-2xl headerColor lg:text-[35px] font-bold text-white leading-9">
                Vocals from the Industry’s Best
              </h1>
              <p className="lg:text-lg textColor leading-6 font-thin mt-3  max-w-[478px] mb-5 ">
                Get access to top featured artists and rising voices, professionally recorded in studio environments. All vocals come from credited singers behind major releases — trusted by producers and labels worldwide.
              </p>

              <div className="mt-2  space-y-3 max-w-[700px]">
                {[
                  {
                    title: "100% Royalty-Free",
                    desc: "All vocals on TuneM are cleared for commercial use. You can release your music on any platform and keep 100% of the royalties — no licenses, no revenue splits, no restrictions."
                  },
                  {
                    title: "Lifetime Use",
                    desc: "Receive your dry vocal stems, invoice, and confirmation by email after purchase. MIDI files sold separately if required."
                  },
                  {
                    title: "Trusted Agreements",
                    desc: "Clear, professional, and built to protect you. Every vocal comes with a downloadable license — no hidden terms, no obstacles, release your music with no limits."
                  }
                ].map((item, index) => (
                  <div key={index} className="transition duration-300">
                    <p className="text-white font-bold text-xl headerColor   ">{item.title}</p>
                    <p className="text-white font-light lg:text-lg textColor leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Right Content */}
            <div className="w-full flex-1 lg:w-[60%]">
              <Image
                src="/update-image/home-page/quote/becomeTuneM.png"
                alt="Become TuneM - Vocals and Music Platform"
                width={1200}
                height={800}
                className="rounded-lg  w-full h-auto  "
              />
            </div>
          </div>
        </section>
      </MaxWidth>

      {/* Bottom CTA Section */}
      <CtaSection></CtaSection>
      
    </>
  );
};

export default Coverd;
