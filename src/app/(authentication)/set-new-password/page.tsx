import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import SetNewPassword from './SetNewPassword'
export const metadata = {
  title: "Set New Password | Tunem",
  description:
    "Create a new password to secure your Tunem account. Enter and confirm your new password to complete the reset process.",
};

const page: React.FC = () => {
  return (
    <div className=' bg-[#f2fef8] ' >
      <Navbar></Navbar>
      <SetNewPassword></SetNewPassword>
    </div>
  )
}

export default page
