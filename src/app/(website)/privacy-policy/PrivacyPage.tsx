import React from "react";
import MaxWidth from "@/components/max-width/MaxWidth";

const PrivacyPage: React.FC = () => {
    return (
        <MaxWidth>
            <div className=" py-8 lg:py-14 ">
                <h1 className="lg:text-4xl headerColor font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4 textColor text-lg lg:text-xl ">Last Updated: [Insert Date]</p>

                <section className="mb-8">
                    <h2 className="lg:text-3xl text-2xl headerColor font-semibold mb-2">INTRODUCTION</h2>
                    <p className=" textColor text-lg lg:text-xl " >
                        TuneM (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy and is committed to safeguarding the personal
                        information of our users (&quot;you,&quot; &quot;your,&quot; or &quot;User&quot;). This Privacy Policy explains how we
                        collect, use, store, and share your data when you access our website (tunem.ai or any associated
                        platform) and any services provided by TuneM. By using our site, you consent to the terms of
                        this Privacy Policy.

                    </p>
                    <p className="mt-2 textColor text-lg lg:text-xl ">
                        We may update this Privacy Policy from time to time. Any modifications will be effective
                        immediately upon posting. You are encouraged to review this page regularly. Continued use of the
                        site constitutes acceptance of the updated terms.
                    </p>
                </section>

                {/* Section 1 */}
                <section className="mb-8">
                    <h2 className="lg:text-3xl text-2xl headerColor font-semibold mb-2">1. INFORMATION WE COLLECT</h2>
                    <ul className="list-disc textColor lg:text-xl text-lg list-inside space-y-2">
                        <li>
                            <strong className={`headerColor`} >Personal Data:</strong> Includes your name, email address, billing/shipping address,
                            phone number, social media profiles, and other information provided when registering, making
                            a purchase, or communicating with us.
                        </li>
                        <li>
                            <strong className={`headerColor`} >Technical Data:</strong> Includes your IP address, browser type, operating system,
                            time zone, device information, and pages visited.
                        </li>
                        <li>
                            <strong className={`headerColor`} >Payment Data:</strong> Payment details (e.g., credit card or PayPal info) are
                            processed securely by our third-party payment processor (e.g., Stripe or PayPal). TuneM does
                            not store your full payment information.
                        </li>
                        <li>
                            <strong className={`headerColor`} >Usage Data:</strong> We may track how you use our services to enhance the
                            functionality and security of the platform.
                        </li>
                        <li>
                            <strong className={`headerColor`} >Third-Party Data:</strong> Information obtained from social networks, analytics
                            providers, and advertising partners may be used to improve user experience.
                        </li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section className="mb-8">
                    <h2 className="lg:text-3xl text-2xl headerColor font-semibold mb-2">2. HOW WE USE YOUR INFORMATION</h2>
                    <ul className="list-disc lg:text-xl text-lg textColor list-inside space-y-1">
                        <li>Fulfill orders and deliver digital products</li>
                        <li>Respond to inquiries and support requests</li>
                        <li>Send relevant marketing and promotional content</li>
                        <li>Improve our services and website performance</li>
                        <li>Comply with legal obligations and prevent fraud</li>
                        <li>Enforce our Terms of Service</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section className="mb-8">
                    <h2 className="lg:text-3xl text-2xl headerColor font-semibold mb-2">3. SHARING YOUR DATA</h2>
                    <p className={"lg:text-xl text-lg headerColor font-semibold"} >We may share your data with:</p>
                    <ul className="list-disc lg:text-xl text-lg textColor list-inside space-y-1">
                        <li>Payment processors to complete transactions</li>
                        <li>Legal authorities when required by law</li>
                        <li>Marketing platforms (only with your consent)</li>
                        <li>Analytics tools to improve our service</li>
                    </ul>
                    <p className="mt-2 lg:text-xl text-lg textColor ">We will never sell your personal data.</p>
                </section>

                {/* Sections 4–10 */}
                <section className="mb-8">
                    <h2 className="font-semibold lg:text-3xl text-2xl headerColor mb-2">4. COOKIES AND TRACKING</h2>
                    <p className={"lg:text-xl text-lg textColor "} >
                        We use cookies and similar technologies to track site usage, store preferences, and improve your
                        experience. You can disable cookies in your browser settings, though this may impact certain
                        functionalities.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className=" lg:text-3xl text-2xl font-semibold mb-2">5. SECURITY MEASURES</h2>
                    <p className={`lg:text-xl text-lg textColor`} >
                        We implement technical and organizational safeguards to protect your information. However, no
                        system is 100% secure, and we cannot guarantee the absolute security of your data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl lg:text-3xl  font-semibold mb-2">6. YOUR RIGHTS</h2>
                    <ul className="list-disc lg:text-xl text-lg textColor list-inside space-y-1">
                        <li>Access or correct your personal data</li>
                        <li>Request deletion of your account and associated data</li>
                        <li>Opt-out of marketing emails</li>
                        <li>Adjust cookie settings via your browser</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl lg:text-3xl headerColor font-semibold mb-2">7. DATA RETENTION</h2>
                    <p className={"lg:text-xl text-lg textColor"} >
                        We retain personal information only as long as necessary to fulfill the purposes outlined or to
                        comply with legal requirements.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl lg:text-3xl headerColor font-semibold mb-2">8. INTERNATIONAL DATA TRANSFERS</h2>
                    <p className={"lg:text-xl text-lg textColor"} >
                        TuneM is based in Malta and complies with EU General Data Protection Regulation (GDPR). By using
                        our services, you agree to the transfer and processing of your data within Malta and potentially
                        to trusted international partners under adequate safeguards.
                    </p>
                </section>



                <section>
                    <h2 className="text-2xl lg:text-3xl headerColor  font-semibold mb-2">9. CONTACT US</h2>
                    <p className={"lg:text-xl text-lg textColor"} >Our services are not intended for children under 13. We do not knowingly collect data from minors. If we become aware that such data has been collected, we will delete it immediately.</p>
                    <ul className="list-none mt-2">
                        <li className={"headerColor lg:text-xl text-lg "} ><strong>TuneM Studios.</strong></li>
                        <li className={`lg:text-xl text-lg headerColor `} >Email: <a href="support@tunem..com"
                            className="textColor underline">support@tunem.ai</a></li>
                        <li className={` lg:text-xl text-lg textColor `} >Registered Office: T5F Tigne Point Malta SLM3190</li>
                    </ul>
                </section>
            </div>
        </MaxWidth>
    );
};

export default PrivacyPage;
