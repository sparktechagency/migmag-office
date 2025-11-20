import React from "react";
import Navbar from "@/components/navbar/Navbar";
import PrivacyPage from "./PrivacyPage";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Tunem",
  description:
    "Read Tunem’s Privacy Policy to understand how we collect, use, and safeguard your personal information.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPage />
      <UpdateFooter />
    </div>
  );
};

export default Page;
