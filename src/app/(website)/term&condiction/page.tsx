import React from "react";
import TermPage from "./TermPage";
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - Tunem",
  description:
    "Review Tunem’s Terms and Conditions to understand the rules, policies, and user responsibilities when using our platform.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TermPage />
      <UpdateFooter />
    </div>
  );
};

export default Page;
