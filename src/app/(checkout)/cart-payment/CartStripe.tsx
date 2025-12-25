'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartCheckout from './CartCheckout';
import { useSearchParams } from 'next/navigation';
import { useCreatePaymentIntentMutation } from '@/app/api/paymentApi/paymentApi';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CartStripe() {
    const searchParams = useSearchParams();
    const totalParam = searchParams?.get('total') || null;
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [createPaymentIntent] = useCreatePaymentIntentMutation();

    const price = totalParam ? Number(totalParam) : 0;

    useEffect(() => {
        const createIntent = async () => {
            if (!price || isNaN(price)) return;

            try {
                const payload = {
                    amount: price, // Stripe expects cents
                    payment_method: "pm_card_visa",
                };

                const res = await createPaymentIntent(payload);
                const secret = res?.data?.data?.client_secret;
                if (secret) setClientSecret(secret);
            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createIntent();
    }, [price, createPaymentIntent]);

    const appearance = { theme: 'stripe' as const }; // ✅ fix type
    const options = clientSecret ? { clientSecret, appearance } : undefined;

    return (
        <div>
            {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <CartCheckout clientSecret={clientSecret} />
                </Elements>
            ) : (
                <p>Loading payment...</p>
            )}
        </div>
    );
}
