"use client";
import { Check } from "lucide-react";
import React from "react";

export default function YearlyPlans() {
    const plans = [
        { name: "Free", price: true, uses: "10 minutes / month", downloads: true, wav: false, exclusive: "–", discount: "-", stems: false, earlyAccess: false },
        { name: "Basic ($90/yr)", price: true, uses: "60 minutes / month", downloads: true, wav: true, exclusive: 3, discount: "-", stems: false, earlyAccess: false },
        { name: "Pro ($140/yr)", price: true, uses: "150 minutes / month", downloads: true, wav: true, exclusive: 7, discount: "5%", stems: true, earlyAccess: true },
        { name: "Studio ($280/yr)", price: true, uses: "Unlimited", downloads: true, wav: true, exclusive: 15, discount: "10% (+ custom orders)", stems: true, earlyAccess: true },
    ];

    const yearlyPlans = [
        {
            name: "Free",
            price: "$0/yr",
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
            price: "$90/yr",
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
            price: "$140/yr",
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
            price: "$280/yr",
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
        <div className=" py-6 lg:py-12">


            {/* Table */}
            <div className="overflow-x-auto mt-6 hidden md:block ">
                <table className="w-full border-separate border-spacing-y-2">
                    <thead>
                        <tr>
                            <th className="text-left border-b border-gray-400 py-4 ">
                                Feature / Tier
                            </th>
                            {plans.map((plan) => (
                                <th key={plan.name} className="text-center text-xl font-medium border-b border-gray-400 ">
                                    {plan.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-center text-gray-700">
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Commercial Use (Royalty-Free License)</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.price ? "✅" : ""}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">AI Vocal Matcher (InstrumentalFit + VocalFit)</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.uses}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Full Vocal Library Access</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.downloads ? "✅" : ""}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Download in WAV Quality</td>
                            {plans.map((p) => (
                                <td className="border-b border-gray-400 " key={Math.random()}>{p.wav ? "✅" : "–"}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Monthly Vocal Credits</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.exclusive}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Discount on Vocal Purchases</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={Math.random()}>{plan?.discount}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Stems & MIDI Files</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.stems ? "✅" : "–"}</td>
                            ))}
                        </tr>
                        <tr>
                            <td className="text-left font-medium border-b border-gray-400 py-2   ">Early Access to Vocal Drops</td>
                            {plans.map((plan) => (
                                <td className="border-b border-gray-400 " key={plan.name}>{plan.earlyAccess ? "✅" : "–"}</td>
                            ))}
                        </tr>

                        <tr>
                            <td></td>
                            {plans.map((plan, idx) => (
                                <td key={plan.name}>
                                    <button
                                        className={`px-4 cursor-pointer mt-6 py-2 rounded-md font-medium ${idx === 0 ? "border border-black text-black" : "bg-black text-white"
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

            {/* small device  */}


            <div className=" space-y-5 md:hidden block  p-4">
                {yearlyPlans.map((plan, i) => (
                    <div
                        key={i}
                        className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl transition"
                    >
                        <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                        <p className="text-lg text-gray-500 mb-4">{plan.price}</p>

                        <ul className="space-y-3">
                            {plan.features.map((f, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                                    {f.included ? (
                                        <Check className="w-4 h-4 text-green-600" />
                                    ) : f.value && f.value !== "-" ? (
                                        <Check className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <span className="w-4 h-4 border rounded-sm border-gray-300 inline-block" />
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
                    </div>
                ))}
            </div>




        </div>
    );
}
