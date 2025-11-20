"use client";
import { Check } from "lucide-react";
import React from "react";

export default function MonthlyPlans() {
    const plans = [
        { name: "Free", price: true, uses: "10 minutes / month", fullAccess: true, downloadWave: false, vocalCredit: "-", downloads: "-", wav: false, exclusive: false, stems: false },
        { name: "Basic ($10/mo)", price: true, uses: "60 minutes / month", fullAccess: true, downloadWave: true, vocalCredit: 3, downloads: "-", wav: true, exclusive: false, stems: false },
        { name: "Pro ($15/mo)", price: true, uses: "150 minutes / month", fullAccess: true, downloadWave: true, vocalCredit: 7, downloads: "5%", wav: true, exclusive: true, stems: true },
        { name: "Studio ($30/mo)", price: true, uses: "Unlimited", fullAccess: true, downloadWave: true, vocalCredit: 5, downloads: "10% (+ custom orders)", wav: true, exclusive: true, stems: true },
    ];



    const monthlyPlans = [
        {
            name: "Free",
            price: "$0/mo",
            features: [
                { label: "Commercial Use (Royalty-Free License)", included: true },
                { label: "AI Vocal Matcher (InstrumentalFit + VocalFit)", value: "10 minutes / month" },
                { label: "Full Vocal Library Access", included: true },
                { label: "Download in WAV Quality", included: false },
                { label: "Monthly Vocal Credits", value: "-" },
                { label: "Discount on Vocal Purchases", value: "-" },
                { label: "Stems & MIDI Files", included: false },
                { label: "Early Access to Vocal Drops", included: false },
            ],
        },
        {
            name: "Basic",
            price: "$10/mo",
            features: [
                { label: "Commercial Use (Royalty-Free License)", included: true },
                { label: "AI Vocal Matcher (InstrumentalFit + VocalFit)", value: "60 minutes / month" },
                { label: "Full Vocal Library Access", included: true },
                { label: "Download in WAV Quality", included: true },
                { label: "Monthly Vocal Credits", value: "3" },
                { label: "Discount on Vocal Purchases", value: "-" },
                { label: "Stems & MIDI Files", included: false },
                { label: "Early Access to Vocal Drops", included: false },
            ],
        },
        {
            name: "Pro",
            price: "$15/mo",
            highlight: true,
            features: [
                { label: "Commercial Use (Royalty-Free License)", included: true },
                { label: "AI Vocal Matcher (InstrumentalFit + VocalFit)", value: "150 minutes / month" },
                { label: "Full Vocal Library Access", included: true },
                { label: "Download in WAV Quality", included: true },
                { label: "Monthly Vocal Credits", value: "7" },
                { label: "Discount on Vocal Purchases", value: "5%" },
                { label: "Stems & MIDI Files", included: true },
                { label: "Early Access to Vocal Drops", included: true },
            ],
        },
        {
            name: "Studio",
            price: "$30/mo",
            features: [
                { label: "Commercial Use (Royalty-Free License)", included: true },
                { label: "AI Vocal Matcher (InstrumentalFit + VocalFit)", value: "Unlimited" },
                { label: "Full Vocal Library Access", included: true },
                { label: "Download in WAV Quality", included: true },
                { label: "Monthly Vocal Credits", value: "15" },
                { label: "Discount on Vocal Purchases", value: "10% (+ custom orders)" },
                { label: "Stems & MIDI Files", included: true },
                { label: "Early Access to Vocal Drops", included: true },
            ],
        },
    ];

    return (
        <div className=" mx-auto  py-6 lg:py-12">


            {/* Table */}
            <div className="overflow-x-auto mt-6 hidden md:block  ">
                <table className="w-full border-separate border-spacing-y-2 overflow-x-auto  ">
                    <thead>
                        <tr className="  " >
                            <th className="text-left text-xl border-b border-gray-400 py-2  ">Feature / Tier</th>
                            {plans.map((plan) => (
                                <th key={plan.name} className="text-center text-xl font-medium border-b border-gray-400 py-2 ">
                                    {plan.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-center text-gray-700 mt-6  space-y-5    ">

                        <tr className="   " >
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Commercial Use (Royalty-Free <br /> License)</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.price ? "✅" : ""}</td>
                            ))}
                        </tr>

                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">AI Vocal Matcher  (InstrumentalFit <br /> +  VocalFit)</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.uses}</td>
                            ))}
                        </tr>







                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Full Vocal Library Access</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.fullAccess ? "✅" : ""}</td>
                            ))}
                        </tr>















                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Download in WAV Quality</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.wav ? "✅" : "-"}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Monthly Vocal Credits</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.vocalCredit}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Discount on Vocal Purchases</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.downloads}</td>
                            ))}
                        </tr>

                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Stems & MIDI Files</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.wav ? "✅" : "-"}</td>
                            ))}
                        </tr>





                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2 ">Early Access to Vocal Drops</td>
                            {plans.map((plan) => (
                                <td className=" border-b border-gray-400" key={plan.name}>{plan.exclusive ? "✅" : "-"}</td>
                            ))}
                        </tr>




                        <tr>
                            <td></td>
                            {plans.map((plan, idx) => (
                                <td key={plan.name} className=" space-x-6"  >
                                    <button
                                        className={` cursor-pointer px-4 mt-3 py-2 rounded-md font-medium ${idx === 0 ? "border border-black text-black" : "bg-black text-white"
                                            }`}
                                    >
                                        {idx === 0 ? "Start free" : "Continue"}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="p-4 space-y-6 md:hidden block   ">
                {monthlyPlans.map((plan, i) => (
                    <div
                        key={i}
                        className={`border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition ${plan.highlight ? "border-blue-500 ring-2 ring-blue-300" : ""
                            }`}
                    >
                        {plan.highlight && (
                            <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                                Recommended
                            </span>
                        )}

                        <h2 className="text-2xl font-bold text-gray-900 mt-2">{plan.name}</h2>
                        <p className="text-lg text-gray-600 mb-4">{plan.price}</p>

                        <ul className="space-y-3">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                    {f.included ? (
                                        <Check className="w-4 h-4 text-green-600 mt-1" />
                                    ) : f.value && f.value !== "-" ? (
                                        <Check className="w-4 h-4 text-green-600 mt-1" />
                                    ) : (
                                        <span className="w-4 h-4 border rounded-sm border-gray-300 inline-block mt-1" />
                                    )}
                                    <span>
                                        {f.label}{" "}
                                        {f.value && f.value !== "-" && (
                                            <span className="font-medium text-gray-900">— {f.value}</span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Choose {plan.name}
                        </button> */}
                    </div>
                ))}
            </div>



        </div>
    );
}
