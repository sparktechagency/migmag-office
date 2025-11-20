import React from "react";
import Navbar from "@/components/navbar/Navbar";
import AffiliatesBanner from "@/app/(website)/affiliates/AffiliatesBanner";
import AvatarSlider from "@/app/(website)/affiliates/AvatarSlider";
import Benefits from "@/app/(website)/affiliates/Benefits";
import VocalPartner from "@/app/(website)/affiliates/VocalPartner";
import DownloadSection from "@/app/(website)/affiliates/DownloadSection";
import AffiliateQuestions from "@/app/(website)/affiliates/AffiliateQuestions";
import AffiliateGuidelines from "@/app/(website)/affiliates/AffiliateGuidelines";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliates - Tunem",
  description:
    "Join the Tunem Affiliate Program to earn rewards by promoting our platform. Learn about benefits, guidelines, and how to get started.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:my-14 my-8">
        <AffiliatesBanner />
        <AvatarSlider />
        <Benefits />
        <VocalPartner />
        <DownloadSection />
        <AffiliateGuidelines />
        <AffiliateQuestions />
      </div>
      <UpdateFooter />
    </div>
  );
};

export default Page;
