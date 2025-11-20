'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { useSearchParams } from "next/navigation";
import HireCheckout from './HireCheckout';
import { useCreatePaymentIntentMutation } from '@/app/api/paymentApi/paymentApi';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function HireStripeFrom() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const searchParams = useSearchParams();

    const [createPaymentIntent] = useCreatePaymentIntentMutation()



    const artistParams = searchParams?.get('artistId');
    const priceParams = searchParams?.get('price');
    const artistSlug = searchParams?.get('slug');
    

    // const price: number | null = priceParam ? parseFloat(priceParam) : null;
    const artistId: number | null = artistParams ? Number(artistParams) : null;
    const price: number | null = priceParams ? Number(priceParams) : null;
    const slug: string | null = artistSlug ? artistSlug : null;

    useEffect(() => {
        const createIntent = async () => {

            try {
                if (price) {
                    const payload = {
                        amount: price * 100, // Stripe expects cents
                        payment_method: "pm_card_visa"
                    };
                    const res = await createPaymentIntent(payload).unwrap();
                    const secret = res?.data?.client_secret;
                    if (secret) setClientSecret(secret);
                }
            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createIntent();
    }, [createPaymentIntent, price]);




    // Stripe appearance config
    const appearance: Appearance = { theme: "stripe" };
    const options: StripeElementsOptions | undefined = clientSecret
        ? { clientSecret, appearance }
        : undefined;



    return (
        <div>
            {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <HireCheckout clientSecret={clientSecret} artistId={artistId} slug={slug} />
                </Elements>
            ) : (
                <p>Loading payment...</p>
            )}
        </div>
    );
}
