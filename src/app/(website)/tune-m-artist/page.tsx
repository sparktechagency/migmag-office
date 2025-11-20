import React from "react";
import TunemNavbar from "./TunemNavbar";
import TunemBanner from "./TunemBanner";
import DiscoverVocal from "./DiscoverVocal";
import ArtistSlider from "./ArtistSlider";
import ApplayTune from "./ApplayTune";
import ApplayVocalistFrom from "./ApplayVocalistFrom";
import FeatureSection from "@/app/(website)/tune-m-artist/FeatureSection";
import CtaSection from "@/components/cta/CtaSection";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tune M Artist - Tunem",
  description:
    "Explore Tune M Artist on Tunem, discover vocalists, apply as a vocal partner, and experience our featured artist sections.",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6 md:pb-12 lg:pb-28">
        <TunemNavbar />
        <TunemBanner />
      </div>

      <DiscoverVocal />
      <ArtistSlider />
      <ApplayTune />
      <ApplayVocalistFrom />
      <FeatureSection />
      <CtaSection />
      <UpdateFooter />
    </>
  );
};

export default Page;
