import Image from "next/image";
import React from "react";
import MaxWidth from "@/components/max-width/MaxWidth";

const benefits = [
    {
        title: "Earn 20% Commission",
        description: "Receive a personalized coupon code so your audience’s purchases are tracked and credited to you.",
        icon: "/images/affiliates/benefit/benefit-1.png",
    },
    {
        title: "Dashboard",
        description: "Track referrals, earnings, and access promo assets",
        icon: "/images/affiliates/benefit/benefit-2.png",
    },
    {
        title: "Full TuneM Library Access",
        description: "Use our complete collection of vocals for your content and marketing.",
        icon: "/images/affiliates/benefit/benefit-3.png",
    },
];

const Benefits: React.FC = () => {
    return (



        <section className="bg-[#f9f9f9] py-12">
            <MaxWidth>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Section */}
                    <div className="flex-1 w-full">
                        <h2 className="lg:text-4xl text-2xl headerColor font-bold mb-6">Affiliate Rewards</h2>
                        <div className="space-y-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="bg-black rounded-md p-2">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={50}
                                            height={50}
                                            className="invert "
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold headerColor lg:text-2xl text-xl ">{item.title}</p>
                                        <p className="textColor text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <Image
                            src="/images/affiliates/benefit/benefit-5.jpeg"
                            alt="Mobile Preview"
                            width={280}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>
            </MaxWidth>
        </section>
    );
};

export default Benefits;
