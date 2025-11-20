import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const AffiliateQuestions: React.FC = () => {
    return (
        < MaxWidth >
            <section className="  bg-white lg:my-14 mt-6 " >
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className=" lg:text-4xl text-2xl headerColor  font-bold">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-12 text-left text-gray-900">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How will I receive my commissions?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>Payments are made via PayPal or bank transfer. Please note PayPal may include additional fees.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">When do payouts happen?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>After the 30-day refund period has passed.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How do I apply to become an affiliate?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>
                                Click the <span className={"font-bold"} >“Apply Now”</span> button and complete the form. We’ll review your submission and respond within 24–48 hours.
                            </p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How long does my referral link stay active?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>Your referral link remains valid indefinitely.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How does my affiliate code work?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>
                                You’ll receive a unique coupon code (usually 10%), redeemable up to 3 times per customer. Our advanced tracking ensures you get credited fairly for your referrals.
                            </p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">Is there a minimum payout threshold?</h3>
                            <p>Yes, you must reach at least $50 before requesting a payout.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How long does approval take?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>Typically within 24 hours, but in some cases up to 5 business days.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">Can I use TuneM vocals in my YouTube videos?</h3>
                            <p className={` lg:text-xl text-lg textColor  `}>
                                Yes! You can include our vocals in tutorials or demo videos to showcase TuneM. We’ll provide you with the vocals you need at no cost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MaxWidth>
    );
};

export default AffiliateQuestions;