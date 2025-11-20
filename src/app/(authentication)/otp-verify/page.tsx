import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import OtpVerifyPage from './OtpVerifyPage'

export const metadata = {
    title: "OTP Verification | Tunem",
    description:"Verify your one-time password to securely access your Tunem account. Enter the OTP sent to your email or phone to continue.",
};

const page: React.FC = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar />
            <OtpVerifyPage></OtpVerifyPage>
        </div>
    )
}

export default page
