"use client"

import React, { useState } from 'react';
import LimitedLicense from './LimitedLicense';
import PremiumLicense from './PremiumLicense';
import ExclusiveLicense from './ExclusiveLicense';
import MaxWidth from "@/components/max-width/MaxWidth";

const tabs = ['Limited Vocal License', 'Premium License', 'TuneM Exclusive Vocal License',];

const LicensesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Limited Vocal License');

    const renderContent = () => {
        switch (activeTab) {
            case 'Limited Vocal License':
                return (
                    <div>
                        <LimitedLicense></LimitedLicense>
                    </div>
                );
            case 'Premium License':
                return (
                    <>
                        <PremiumLicense></PremiumLicense>
                    </>
                );
            case 'TuneM Exclusive Vocal License':
                return (
                    <div>
                        <ExclusiveLicense></ExclusiveLicense>
                    </div>
                );


            default:
                return null;
        }
    };

    return (
        <MaxWidth>
            <div className=" mx-auto ">
                <h1 className="lg:text-4xl text-2xl headerColor font-bold mb-2">Licenses</h1>
                <p className="lg:text-xl text-lg  textColor mb-6">
                    All TuneM vocals come with a personalized, royalty-free license. You&apos;re cleared to release and
                    monetize your music worldwide. Licenses and invoices are delivered instantly after purchase.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full cursor-pointer font-medium transition lg:text-xl text-sm ${activeTab === tab
                                ? 'bg-green-100 text-green-800'
                                : 'headerColor  hover:text-black'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {renderContent()}
            </div>
        </MaxWidth>
    );
};

export default LicensesPage;
