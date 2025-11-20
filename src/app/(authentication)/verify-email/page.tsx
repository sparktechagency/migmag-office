import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import EmailVerify from './EmailVerify'
export const metadata = {
    title: "Email Verification | Tunem",
    description:
        "Verify your email address to activate and secure your Tunem account. Click the verification link sent to your email to continue.",
};
const page: React.FC = () => {
    return (
        <div className=' bg-[#f2fef8] ' >
            <Navbar />
            <EmailVerify />
        </div>
    )
}

export default page
