"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useArtistDetailsQuery } from "@/app/api/websiteApi/websiteApi";
import { imgUrl } from "@/utility/img/imgUrl";
interface HireFromProps {
    slug: string | null; // adjust type as needed
}
const HireFrom: React.FC<HireFromProps> = ({ slug }) => {



    const [lyricsChecked, setLyricsChecked] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [lyricsText, setLyricsText] = useState<string | undefined>("")

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };


    const { data } = useArtistDetailsQuery({ slug });


    console.log("lyrics check value is", lyricsChecked)







    return (
        <div className="min-h-screen bg-white flex justify-center py-10">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                {/* LEFT SIDE */}
                <div>

                    <div>
                        <span>
                            <div>
                                <Image src={"/update-image/logo/update-logo.svg"} width={700} height={700} alt={"logo"} className={` w-40 h-10 `} />

                            </div>
                        </span>
                    </div>


                    <span className={"flex flex-row gap-x-2 my-8 "} >
                        <Link href={`/singer-profile/${data?.data?.artist?.slug}`}>
                            <h1 className="text-xl font-semibold">{data?.data?.artist?.name}</h1>
                        </Link>
                        <p className={"mt-1 text-gray-500 "} >&lt; Confirm & Pay &gt; Submit requirements</p>
                    </span>

                    {/* Artist Info */}
                    <div className="flex items-center gap-3 mb-6 ">
                        <div className={"flex item-center justify-center "} >
                            <Link href={`/singer-profile/${data?.data?.artist?.slug}`}>
                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                    <Image
                                        src={`${imgUrl}/${data?.data?.artist?.profile}`}
                                        alt="Rayne"
                                        width={2000}
                                        height={2000}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <p className="font-semibold flex items-center gap-2">
                                <Link href={`/singer-profile/${data?.data?.artist?.slug}`}>
                                    <span className="hover:underline cursor-pointer">
                                        {data?.data?.artist?.name}
                                    </span>
                                </Link>

                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                    Available
                                </span>
                            </p>

                            <p className="text-sm text-gray-500">Singer • Songwriter</p>
                        </div>
                    </div>


                    {/* Upgrade */}
                    <h2 className="font-semibold mb-2">Upgrade</h2>
                    <div className="border rounded-lg p-4 flex flex-col gap-3 ">
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                className="w-5 h-5 mt-1 cursor-pointer"
                                checked={lyricsChecked}
                                onChange={() => setLyricsChecked(!lyricsChecked)}
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Lyrics</span>
                                    <span className="font-semibold">+ $100</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">
                                    The vocalist will write lyrics and a vocal melody for your song.
                                </p>
                            </div>
                        </div>

                        {/* Textarea appears only when checkbox is checked */}
                        {lyricsChecked && (
                            <textarea
                                className="w-full border rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Add any notes or ideas for the lyrics..."
                                value={lyricsText}
                                onChange={(e) => setLyricsText(e.target.value)}
                                rows={4}
                            />
                        )}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="mt-6 space-y-2 ">
                        {[
                            { question: "What do I need to provide the aritst?", answer: "Once payment is completed, submit your music track and vocal guide, and send the lyrics to support@tunem.com. If lyrics are ordered, only the music track is required." },
                            { question: "Can I hire a singer for cover vocals?", answer: "You'll receive 3 high-quality vocal takes recorded by the singer. You can then approve the delivery or request a free revision, ensuring you're 100% satisfied." },
                            { question: "What will I get?", answer: "You will receive the final audio files along with any revisions included in your package." },
                            { question: "How long will it take to get my song?", answer: "Delivery time depends on the complexity, but typically it takes 3-7 business days." }, // <-- new question
                        ].map((item, i) => (
                            <div key={i} className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-3 text-left"
                                    onClick={() => toggleFAQ(i)}
                                >
                                    <span className="text-sm font-medium">{item.question}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 cursor-pointer transition-transform ${openFAQ === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openFAQ === i && (
                                    <p className="text-sm text-gray-500 pb-3">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>


                    {/* Footer */}
                    <div className="text-xs text-gray-400 mt-10 flex gap-4">
                        {/* <a href="#"></a> */}
                        <Link href={"/refund-policy"}>Refund policy</Link>
                        <Link href={"/privacy-policy"}>Privacy policy</Link>
                        <Link href={"/term&condiction"}>Terms of Service</Link>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="border rounded-xl p-6 shadow-sm  ">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="  rounded-lg flex items-center justify-center">
                                <Image src={"/update-image/logo/update-logo.svg"} width={700} height={700} alt={"logo"} className={` w-40 h-10 `} />
                            </div>
                            <p className="text-sm">Vocals recording</p>
                        </div>
                        <span className="font-semibold">
                            $
                            {Number(data?.data?.artist?.price || 0) + (lyricsChecked ? 100 : 0)}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm mb-1">
                        <p>Total</p>
                        <span className="font-semibold">
                            $
                            {Number(data?.data?.artist?.price || 0) + (lyricsChecked ? 100 : 0)}
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">Delivery time: 3–10 days</p>

                    {/* Includes */}
                    <div className="flex gap-2 flex-wrap mb-6">
                        <span className="relative group px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full cursor-pointer">
                            3 Vocal Takes

                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 ransition-opacity duration-200 z-50">
                                The artist will record 3 high-quality vocal takes, with up to 180 seconds of recording time, delivered within 7 days.
                            </span>
                        </span>



                        <span className="relative group px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full cursor-pointer">
                            Commercial Use

                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 ransition-opacity duration-200 z-50">
                                Apply the vocals to your track and enjoy full ownership of the earnings.
                                Unlimited Revisions - After the initial delivery, the artist is able to make minor changes to the recording.
                            </span>
                        </span>

                        <span className="relative group px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full cursor-pointer">
                            Unlimited Revisions

                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 ransition-opacity duration-200 z-50">
                                After the initial delivery, the artist is able to make minor changes to the recording.
                            </span>
                        </span>
                        {
                            lyricsChecked && (
                                <span className="relative group px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full cursor-pointer">
                                    Lyrics

                                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-gray-900 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 ransition-opacity duration-200 z-50">
                                        The artist will write the lyrics and vocal melody for your song.
                                    </span>
                                </span>
                            )
                        }
                    </div>

                    {/* Continue Button */}

                    <Link href={`/checkout?price=${Number(data?.data?.artist?.price || 0) + (lyricsChecked ? 100 : 0)}&songId=${data?.data?.artist.id}&isMiddy=${lyricsChecked ? 1 : 0}&slug=${data?.data?.artist?.slug}`}>
                        <button className="w-full btnColor cursor-pointer text-black font-semibold py-3 rounded-lg mb-6">
                            Continue
                        </button>
                    </Link>

                    {/* Payment Methods */}
                    <div className="flex gap-3 justify-center">
                        <div className="max-w-xl mx-auto bg-white flex flex-wrap item-center gap-x-2  ">
                            <Image
                                src="/images/footer/paypal.png"
                                alt="payment-logo"
                                width={600}
                                height={400}
                                className="mx-auto object-cover w-20 h-20  " // center the image horizontally
                            />
                            <Image
                                src="/images/footer/master-card.png"
                                alt="payment-logo"
                                width={600}
                                height={400}
                                className="mx-auto object-cover w-20 h-20 "
                            />
                            <Image
                                src="/images/footer/visa.png"
                                alt="payment-logo"
                                width={600}
                                height={400}
                                className="mx-auto object-cover  w-20 h-20 "
                            />
                            <Image
                                src="/images/footer/apple-pay.png"
                                alt="payment-logo"
                                width={600}
                                height={400}
                                className="mx-auto object-cover w-20 h-20 "
                            />
                            <Image
                                src="/images/footer/google-pay.png"
                                alt="payment-logo"
                                width={600}
                                height={400}
                                className="mx-auto object-cover w-20 h-20  "
                            />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default HireFrom;
