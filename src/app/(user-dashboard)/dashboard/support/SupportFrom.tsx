"use client"
import React from 'react';
import Swal from "sweetalert2";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useSupportMessageMutation } from '@/app/api/authApi/authApi';

const SupportForm: React.FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const [supportMessage, { isLoading }] = useSupportMessageMutation()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email,
            message,
        };

        try {
            const res = await supportMessage(payload).unwrap(); // RTK Query returns a promise with unwrap
            if (res) {
                setMessage("");
                setEmail("");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res.message, // RTK Query unwrap returns the data directly
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            let errorMessage = "Something went wrong";

            // Type narrowing for RTK Query errors
            if ((error as FetchBaseQueryError)?.status) {
                const err = error as FetchBaseQueryError;
                if ('data' in err && err.data && typeof err.data === 'object' && 'message' in err.data) {
                    errorMessage = (err.data as { message: string }).message;
                } else if (typeof err.data === 'string') {
                    errorMessage = err.data;
                }
            }

            Swal.fire({
                position: "top-end",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className='bg-white p-6 rounded-3xl'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='headerColor text-[16px] font-semibold' htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor'
                        placeholder='Enter your email...'
                        required
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='headerColor text-[16px] font-semibold' htmlFor="message">Support for</label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={7}
                        className='bg-[#F5F5F5] rounded-xl p-3 mt-2 border-none hover:border-none focus:outline-0 placeholder:textColor'
                        placeholder='Description'
                        required
                    />
                </div>
                <div className='mt-16'>
                    <button
                        type="submit"
                        className='btnColor shadow w-full text-xl headerColor font-semibold py-2 rounded-xl cursor-pointer'
                    >
                        {
                            isLoading ? "Loading..." : <> Send </>
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SupportForm;

