import React from "react";
import Navbar from "@/components/navbar/Navbar";
import ContactFrom from "./ContactFrom";
import UpdateFooter from "@/components/footer/UpdateFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Tunem",
  description:
    "Get in touch with Tunem for support, inquiries, or collaboration opportunities. We are here to help you with any questions.",
};

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ContactFrom />
      </div>
      <UpdateFooter />
    </div>
  );
};

export default Page;
