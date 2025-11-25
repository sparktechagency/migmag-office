import React from 'react';
import Navbar from "@/components/navbar/Navbar";
import UpdateFooter from "@/components/footer/UpdateFooter";

import MaxWidth from "@/components/max-width/MaxWidth";
import { FaMicrophone, FaSmile, FaStar } from 'react-icons/fa';

const Page: React.FC = () => {
    const features = [
        {
            icon: <FaMicrophone className="text-4xl text-blue-200 mb-2" />,
            title: 'Awesome vocals',
        },
        {
            icon: <FaSmile className="text-4xl text-blue-200 mb-2" />,
            title: 'Happy customers',
        },
        {
            icon: <FaStar className="text-4xl text-blue-200 mb-2" />,
            title: 'Trusted brand',
        },
    ];
    return (
        <div>
            <Navbar></Navbar>
            <MaxWidth>
                <div className={`my-8`}>
                    <div className={`affiliationBgColor py-12 `}>
                        <h1 className={` text-center lg:text-5xl text-2xl font-bold `}>Fill Out The Form & Apply.</h1>
                        <div className="max-w-4xl mx-auto flex justify-around items-center flex-wrap gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center mt-6 my-4 ">
                                    <span className={` mx-auto flex justify-center `} >{feature.icon}</span>
                                    <p className="text-lg font-medium">{feature.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`my-12`} >
                        <p className=' md:text-lg text-sm   ' >

                            Application is linked to your Tunem account
                        </p>

                        <div className={` mt-5 `} >
                            <form className={` space-y-4 `} >
                                <div className={`flex flex-col  md:flex-row  gap-x-5 space-y-3  `} >
                                    {/* First Name* */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">
                                            First Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        // placeholder="Enter your first name"
                                        />
                                    </div>

                                    {/* Last Name* */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">

                                            Last Name*
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        // placeholder="Enter your first name"
                                        />
                                    </div>
                                </div>
                                {/* Name or artist name* */}
                                <div className="flex flex-col w-full ">
                                    <label htmlFor="firstName" className="mb-1 text-lg  ">

                                        Name or artist name*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="reason" className="mb-1 text-lg">
                                        Why are you the perfect fit for promoting Tunem?*
                                    </label>
                                    <textarea
                                        id="reason"
                                        required
                                        rows={2}
                                        className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 resize-none"

                                    ></textarea>
                                </div>
                                <div>
                                    <h1>Add links here (optional)</h1>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-x-5 space-y-3 `} >
                                    {/* YouTube Link */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">
                                            YouTube Link
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        // placeholder="Enter your first name"
                                        />
                                    </div>

                                    {/* Instagram Link */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">


                                            Instagram Link
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        // placeholder="Enter your first name"
                                        />
                                    </div>
                                </div>
                                <div className={`flex flex-col md:flex-row gap-x-5 space-y-3  `} >
                                    {/* TikTok Link */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">
                                            TikTok Link
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        />
                                    </div>

                                    {/* Website / Blog Link */}
                                    <div className="flex flex-col w-full ">
                                        <label htmlFor="firstName" className="mb-1 text-lg  ">
                                            Website / Blog Link
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-0 "
                                        // placeholder="Enter your first name"
                                        />
                                    </div>
                                </div>
                                <button className={` btnColor font-bold text-sm w-full text-center py-3 rounded-md cursor-pointer    `} >Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </MaxWidth>
            <UpdateFooter></UpdateFooter>
        </div>
    );
};

export default Page;