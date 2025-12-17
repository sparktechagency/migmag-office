'use client';

import { useCustomOrderApiMutation } from '@/app/api/paymentApi/paymentApi';
import { useArtistDetailsQuery } from '@/app/api/websiteApi/websiteApi';
import { imgUrl } from '@/utility/img/imgUrl';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

type CheckoutFormProps = {
    clientSecret: string;
    artistId: number | null;
    slug: string | null;
    is_midifile?: number;
};

export default function HireCheckout({ clientSecret, artistId, slug, is_midifile }: CheckoutFormProps) {

    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);



    const [customOrderApi] = useCustomOrderApiMutation()

    const id = artistId;

    const payload = {
        order_type: "Custom",
        payment_method: "card",
        is_midy_file: is_midifile
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        if (!stripe || !elements || !clientSecret) {
            setLoading(false);
            return toast.error('Stripe is not ready');
        }



        try {
            // 1️⃣ Confirm Stripe payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement)!,
                    billing_details: {
                        name,
                        email,
                    },
                },
            });

            if (result.error) {
                setErrorMessage(result.error.message ?? 'Payment failed');
                toast.error(result.error.message ?? 'Payment failed');
            } else if (result.paymentIntent?.status === 'succeeded') {

                const res = await customOrderApi({ id, payload }).unwrap();;

                if (res) {

                    Swal.fire({

                        position: "top-end",
                        icon: "success",
                        title: res?.message || 'Payment Successful!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    router.push('/');
                }





            }

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                toast.error(err.message);
                setErrorMessage(err.message);
            } else {
                console.error(err);
                toast.error('Something went wrong');
                setErrorMessage('Something went wrong');
            }
        }

        setLoading(false);
    };

    const inputStyle = {
        style: {
            base: {
                fontSize: '16px',
                color: '#32325d',
                '::placeholder': { color: '#a0aec0' },
            },
            invalid: { color: '#e53e3e' },
        },
    };


    const { data } = useArtistDetailsQuery({ slug });






    return (
        <div className="min-h-screen flex flex-col gap-x-6 md:space-y-0 space-y-6  md:flex-row items-center justify-center max-w-6xl mx-auto   ">
            {/* left side  */}
            <div className=' w-full ' >
                <div>

                    <div>
                        <span>
                            <Image src={"/update-image/logo/update-logo.svg"} width={700} height={700} alt={"logo"} className={` w-40 h-10 `} />
                        </span>
                    </div>


                    <span className={"flex flex-row gap-x-2 my-8 "} >
                        <h1 className="text-xl font-semibold">{data?.data?.artist?.name}</h1>
                        <p className={"mt-1 text-gray-500 "} >&lt; Confirm & Pay &gt; Submit requirements</p>
                    </span>

                    {/* Artist Info */}

                    {/* Artist Info */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className={" w-24 h-24 rounded-full flex item-center justify-center "} >
                            <Image
                                src={`${imgUrl}/${data?.data?.artist?.profile}`}
                                alt="Rayne"
                                width={2000}
                                height={2000}
                                className="rounded-full  w-24 h-24 "
                            />
                        </div>
                        <div>
                            <p className="font-semibold">{data?.data?.artist?.name} <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Available</span></p>
                            <p className="text-sm text-gray-500">Singer • Songwriter</p>
                        </div>
                    </div>
                    {/* Upgrade */}
                    {/* <h2 className="font-semibold mb-2">Upgrade</h2> */}
                    {/* <div className="border rounded-lg p-4 flex flex-col gap-3"> */}
                    {/* <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                className="w-5 h-5 mt-1 cursor-pointer"
                                checked={lyricsChecked}
                                onChange={() => setLyricsChecked(!lyricsChecked)}
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Lyrics</span>
                                    <span className="font-semibold">+ $99</span>
                                </div>
                                <p className="text-gray-500 text-sm mt-1">
                                    The vocalist will write lyrics and a vocal melody for your song.
                                </p>
                            </div>
                        </div> */}

                    {/* Textarea appears only when checkbox is checked */}
                    {/* {lyricsChecked && (
                            <textarea
                                className="w-full border rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Add any notes or ideas for the lyrics..."
                                value={lyricsText}
                                onChange={(e) => setLyricsText(e.target.value)}
                                rows={4}
                            />
                        )} */}
                    {/* </div> */}

                    {/* FAQ Accordion */}
                    <div className="mt-6 space-y-2">
                        {[
                            "What do I need to provide the artist?",
                            "Can I hire a singer for cover vocals?",
                            "What will I get?",
                        ].map((q, i) => (
                            <div key={i} className="border-b">
                                <button
                                    className="flex justify-between items-center w-full py-3 text-left"
                                    onClick={() => toggleFAQ(i)}
                                >
                                    <span className="text-sm font-medium">{q}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 cursor-pointer transition-transform ${openFAQ === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openFAQ === i && (
                                    <p className="text-sm text-gray-500 pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

            </div>
            {/* right side  */}
            <div className=' w-full ' >
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-center mb-6">Secure Payment</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-4 py-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Card Number</label>
                            <div className="px-4 py-2 border border-gray-300 rounded-md">
                                <CardNumberElement options={inputStyle} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Expiry Date</label>
                            <div className="px-4 py-2 border border-gray-300 rounded-md">
                                <CardExpiryElement options={inputStyle} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">CVC</label>
                            <div className="px-4 py-2 border border-gray-300 rounded-md">
                                <CardCvcElement options={inputStyle} />
                            </div>
                        </div>

                        {errorMessage && (
                            <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            disabled={!stripe || loading}
                            className="bg-black cursor-pointer text-white font-semibold py-2 rounded-md"
                        >
                            {loading ? 'Processing...' : 'Pay Now'}
                        </button>
                    </form>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
}
