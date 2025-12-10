'use client';

import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import MaxWidth from "@/components/max-width/MaxWidth";
import { useEffect, useState } from 'react';
import { imgUrl } from '@/utility/img/imgUrl';
import { useRouter } from 'next/navigation';

interface Track {
    id: number;
    title: string;
    name: string;
    genre: string;
    bpm: string;
    key: string;
    gender: 'Male' | 'Female';
    license: 'PREMIUM' | 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    price: number;
    image: string;
    audioUrl: string;
}

const licenseColors: Record<Track['license'], string> = {
    PREMIUM: 'bg-[#00C2CE] text-white',
    EXCLUSIVE: 'bg-[#80BC02] text-white',
    'NON-EXCLUSIVE': 'bg-[#818080] text-white',
};

const CartPage = () => {
    const [cart, setCart] = useState<Track[]>([]);
    const router = useRouter();

    // ✅ Load cart from localStorage once
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsed: unknown = JSON.parse(cartData);

                if (Array.isArray(parsed)) {
                    const parsedCart: Track[] = parsed.map((item: unknown) => {
                        if (typeof item === "object" && item !== null) {
                            const track = item as Track;
                            return { ...track, price: Number(track.price) }; // ensure price is number
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

    // ✅ Remove item from cart
    const handleRemove = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ Checkout Price Calculation
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal;

    // 🛒 Checkout Handler
    const handleCheckout = () => {
        if (cart.length === 0) return alert("Cart is empty!");
        router.push(`/cart-payment?total=${total}`);
    };


    const [tokenChecked, setTokenChecked] = useState(false);
    const [hasToken, setHasToken] = useState(false);

    console.log(tokenChecked, hasToken)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            setHasToken(false);
        } else {
            setHasToken(true);
        }
        setTokenChecked(true);
    }, [router]);


    // remove code 

    return (
        <div className="bg-[#f5fff8] min-h-screen">
            <MaxWidth>
                <div className="max-w-[1539px] mx-auto pt-10">
                    <h1 className="text-[#121212] text-3xl font-bold">My cart</h1>
                    <p className="text-[#3A3A3A] font-medium mt-2 text-[16px]">
                        List of songs that you selected for the cart section.
                    </p>

                    <div className="mt-10">
                        {cart.length === 0 && <p className="text-gray-500">Cart is empty</p>}
                        {cart.map((track) => (
                            <div
                                key={track.id}
                                className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-black text-white p-4 rounded-md mb-4 shadow hover:bg-[#1a1a1a]"
                            >
                                {/* Image + Title */}
                                <div className="flex items-start gap-4 w-full lg:w-auto">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image width={93} height={91} src={`${imgUrl}/${track?.image}`} alt="cover"
                                            className="w-full h-full object-cover rounded-md" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-base">{track.title}</div>
                                        <div className="text-sm text-gray-300">{track.name}</div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 text-sm text-gray-200 mt-4 lg:mt-0 w-full lg:w-1/2 text-left sm:text-center">
                                    <span>{track.genre}</span>
                                    <span>{track.bpm}</span>
                                    <span>{track.key}</span>
                                    <span>{track.gender}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${licenseColors[track.license]}`}>
                                        {track.license}
                                    </span>
                                </div>

                                {/* Price + Remove */}
                                <div className="flex items-center gap-4 mt-4 lg:mt-0 lg:justify-end w-full lg:w-auto">
                                    <span className="btnColor text-black font-bold px-4 py-1 rounded-full">
                                        ${track.price.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => handleRemove(track.id)}
                                        className="p-2 rounded-full cursor-pointer text-white"
                                    >
                                        <FaTrash className="cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 🛒 Checkout Summary */}
                    {cart.length > 0 && (
                        <div className="mt-10 bg-white shadow p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Checkout Summary</h2>
                            <ul className="mb-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex justify-between py-1">
                                        <span>{item.title}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="mt-4 cursor-pointer btnColor text-black font-bold px-6 py-2 rounded-lg w-full"
                            >
                                Checkout
                            </button>
                        </div>
                    )}
                </div>
            </MaxWidth>
        </div>
    );
};

export default CartPage;
