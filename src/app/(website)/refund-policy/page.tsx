import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Refund from "./Refund";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Tunem",
  description:
    "Read Tunem’s Refund Policy to understand the conditions, process, and eligibility for refunds on purchased tracks and services.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Refund />
      <UpdateFooter />
    </div>
  );
};

export default Page;
