'use client';

import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';

type Track = {
    id: number;
    price: number;
};

type CheckoutFormProps = {
    clientSecret: string;
};

export default function CheckoutForm({ clientSecret }: CheckoutFormProps) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();



    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [cart, setCart] = useState<Track[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsed: unknown = JSON.parse(cartData);

                if (Array.isArray(parsed)) {
                    const parsedCart: Track[] = parsed.map((item: unknown) => {
                        if (typeof item === "object" && item !== null) {
                            const t = item as Track;
                            return { ...t, price: Number(t.price) }; // ensure price is number
                        }
                        throw new Error("Invalid item in cart");
                    });

                    setCart(parsedCart);
                }
            } catch (error) {
                console.error("Failed to parse cart:", error);
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        if (!stripe || !elements || !clientSecret) {
            setLoading(false);
            return;
        }

        if (cart.length === 0) {
            alert("Cart is empty!");
            setLoading(false);
            return;
        }

        try {

            // 1️⃣ Call your order API first
            const formData = new FormData();
            cart.forEach((item, index) => {
                formData.append(`songs[${index}][song_id]`, item.id.toString());
                formData.append(`songs[${index}][price]`, item.price.toString());
                formData.append(`songs[${index}][is_midifile]`, "0");
            });
            formData.append("payment_method", "card");

            const token = localStorage.getItem("token");
            if (!token) throw new Error("User not authenticated!");

            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            if (!apiUrl) throw new Error("API base URL is not configured!");

            const orderRes = await axios.post(`
                ${apiUrl}/create-order`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );



            const orderId = orderRes.data?.data?.order.order_number;

            // 2️⃣ Confirm Stripe payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement)!,
                    billing_details: { name, email },
                },
            });

            if (result.error) {
                setErrorMessage(result.error.message ?? 'Payment failed');
                setLoading(false);
                return;
            }

            if (result.paymentIntent?.status === 'succeeded') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Payment successful! Order ID: ${orderId}`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Clear cart and redirect
                localStorage.removeItem("cart");
                router.push('/');
            }

        } catch (err: unknown) {
            console.error(err);
            // toast.error(err.message || 'Something went wrong');
        }

        setLoading(false);
    };

    const inputStyle = {
        style: {
            base: { fontSize: '16px', color: '#32325d', '::placeholder': { color: '#a0aec0' } },
            invalid: { color: '#e53e3e' },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
            <Toaster position="top-center" />
        </div>
    );
}
