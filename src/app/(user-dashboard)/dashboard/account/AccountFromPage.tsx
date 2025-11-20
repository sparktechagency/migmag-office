'use client';

import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { FaUser, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import Swal from "sweetalert2";

import { imgUrl } from '@/utility/img/imgUrl';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useUserProfileUpdateMutation, useUserProfileQuery } from '@/app/api/authApi/authApi';

const AccountFromPage: React.FC = () => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const { data, refetch } = useUserProfileQuery();
    const [updateProfile, { isLoading: isUpdating }] = useUserProfileUpdateMutation();

    // To avoid overwriting user input after first load
    const loadedRef = useRef(false);

    const [formdata, setformdata] = useState({
        full_name: '',
        email: '',
        contact: '',
        location: '',
    });

    // Load initial profile data only once
    useEffect(() => {
        if (data?.data && !loadedRef.current) {
            setformdata({
                full_name: data.data.full_name || '',
                email: data.data.email || '',
                contact: data.data.contact || '',
                location: data.data.location || '',
            });
            loadedRef.current = true;
        }
    }, [data]);

    // Handle text input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle image upload preview
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("full_name", formdata.full_name);
        formData.append("contact", formdata.contact);
        formData.append("location", formdata.location);



        if (imageFile) {
            formData.append("avatar", imageFile);
        }

        try {
            const res = await updateProfile(formData).unwrap();

            // ✅ Success alert
            Swal.fire({
                position: "top",
                icon: "success",
                title: res?.message || "Profile updated successfully!",
                showConfirmButton: false,
                timer: 2000,
            });

            refetch(); // Refresh profile data
        } catch (err: unknown) {
            console.error("Update error:", err);

            // Properly typed error
            const error = err as FetchBaseQueryError & { data?: { message?: string } };

            // ❌ Error alert
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Update failed",
                text: error?.data?.message || "Something went wrong!",
                showConfirmButton: true,
            });
        }
    };

    return (
        <>
            <div className="bg-[#FFFFFF] p-6 rounded-2xl">
                <h1 className="headerColor text-xl lg:text-3xl font-semibold">My Profile</h1>
                <p className="textColor text-sm mt-1">You can update your profile information.</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="border border-[#E7E7E7] bg-[#FFFFFF] rounded-3xl p-8 mt-4 lg:mt-6"
            >
                <div className="flex flex-col items-center">
                    <label htmlFor="photo-upload" className="cursor-pointer">
                        <div
                            className="w-28 h-28 border border-dashed border-gray-400 rounded-xl flex items-center justify-center bg-gray-100 overflow-hidden">
                            <Image
                                src={
                                    previewImage
                                        ? previewImage
                                        : data?.data?.avatar
                                            ? `${imgUrl}/${data.data.avatar}`
                                            : "/placeholder.png"
                                }
                                width={93}
                                height={91}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </label>
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <p className="font-bold text-xl headerColor lg:text-2xl text-center mt-4">Upload your photo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Full Name"
                            value={formdata.full_name}
                            onChange={handleChange}
                            className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                        />
                    </div>

                    <div className="relative">
                        <CgMail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formdata.email}
                            className="w-full pl-8 pr-4 py-2 bg-gray-100 cursor-not-allowed border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="relative mt-4">
                    <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Phone number"
                        value={formdata.contact}
                        onChange={handleChange}
                        className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                    />
                </div>

                <div className="relative mt-4">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formdata.location}
                        onChange={handleChange}
                        className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isUpdating}
                    className="w-full btnColor cursor-pointer headerColor font-semibold py-3 mt-10 lg:mt-18 rounded-[40px] transition-all duration-300 disabled:opacity-50"
                >
                    {isUpdating ? 'Updating...' : 'Update'}
                </button>
            </form>
        </>
    );
};

export default AccountFromPage;
