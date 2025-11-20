import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import MaxWidth from "@/components/max-width/MaxWidth";

const doList = [
    'Share TuneM across your social channels.',
    'Feature TuneM in your blogs, reviews, and write-ups.',
    'Create tutorials or educational content showcasing our products',
    "Use the official TuneM logo and link to our website when promoting",
    'Mention TuneM in your newsletters or email campaigns',
];

const dontList = [
    "Always use your affiliate link honestly — no misleading placements",
    "Do not alter our logo, branding, or trademarks",
    "Do not promote unofficial or unapproved discounts",
    "Never misrepresent TuneM or make false claims",
    "Affiliate links cannot be used for your own purchases",
];

const AffiliateGuidelines: React.FC = () => {
    return (
        <MaxWidth>
            <section className="bg-gray-50 lg:py-20 py-7 px-4">
                <div className="max-w-6xl mx-auto text-center mb-4 lg:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold headerColor  inline-block px-4 py-1 rounded">
                        Affiliate Guidelines
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10">
                    {/* ✅ DO List */}
                    <ul className="space-y-4 text-left">
                        {doList.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 ">
                                <div>
                                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                                </div>
                                <span className={` lg:text-xl text-lg textColor ml-3 `} >{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* ❌ DON'T List */}
                    <ul className="space-y-4 text-left">
                        {dontList.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-800">
                                <div>
                                    <XCircle className="text-red-600 w-5 h-5 mt-1" />
                                </div>
                                <span className={`lg:text-xl text-lg textColor ml-3 `} >{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </MaxWidth>
    );
};

export default AffiliateGuidelines;
