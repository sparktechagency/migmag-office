

import React from 'react';
import ForgetOtpVerify from './ForgetOtpVerify';
export const metadata = {
  title: "OTP Verification | Tunem",
  description: "Verify your one-time password to securely access your Tunem account. Enter the OTP sent to your email or phone to continue.",
};
const Page: React.FC = () => {
  return <ForgetOtpVerify />;
};

export default Page;
