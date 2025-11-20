import React from "react";
import Faq from "../tune-m-artist/Faq";
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Tunem",
  description:
    "Find answers to frequently asked questions about Tunem’s services, artist features, and account support.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Faq />
      </div>
      <UpdateFooter />
    </div>
  );
};

export default Page;
