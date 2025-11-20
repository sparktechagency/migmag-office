import React from "react";
import LicensesPage from "./LicensesPage";
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licenses - Tunem",
  description: "Learn about Tunem’s music licensing, usage rights, and content ownership policies.",
};

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:my-14 my-8">
        <LicensesPage />
      </div>
      <UpdateFooter />
    </div>
  );
};

export default Page;
