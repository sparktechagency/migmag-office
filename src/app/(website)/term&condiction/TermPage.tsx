import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const TermPage: React.FC = () => {
    return (
        <div className="  lg:py-10    ">
            <MaxWidth>
                <div className=" mx-auto bg-white  rounded-lg ">
                    <h1 className="headerColor lg:text-4xl text-2xl font-bold mb-6 text-center">TuneM Terms and Conditions</h1>

                    <p className=" text-lg textColor lg:text-xl mb-4">
                        Welcome to TuneM! These terms and conditions outline the rules and regulations for the use of
                        the TuneM website,
                        located at <a href="www.tunem.com" className="text-blue-600 underline">www.tunem.com</a>.
                    </p>
                    <p className="mb-6 text-lg textColor lg:text-xl ">
                        By accessing this website we assume you accept these terms and conditions in full.
                        Do not continue to use TuneM if you do not accept all of the terms and conditions stated on this
                        page.
                    </p>

                    {/* Sections */}
                    {[
                        {
                            title: '1. Terminology',
                            body: [
                                `"Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company’s terms and conditions.`,
                                `"The Company", "Ourselves", "We", "Our" and "Us", refers to TuneM.`,
                                `"Party", "Parties", or "Us", refers to both the Client and ourselves.`,
                                `All terms refer to the offer, acceptance and consideration of payment necessary... under the law of Malta.`,
                            ]
                        },
                        {
                            title: '2. Cookies',
                            body: [
                                `We employ the use of cookies. By accessing TuneM, you agreed to use cookies in agreement with the TuneM Privacy Policy.`
                            ]
                        },
                        {
                            title: '3. Intellectual Property',
                            body: [
                                `All content on the Website, including vocals, text, graphics, logos, and software, is the property of TuneM or its licensors and is protected by applicable copyright and intellectual property laws.`
                            ]
                        },
                        {
                            title: '4. Artist Participation',
                            body: [
                                `Vocalists may apply to join the TuneM platform. Artists accepted into the platform agree to:`
                            ],
                            list: [
                                `Deliver high-quality vocal recordings as requested.`,
                                `Provide dry and wet stems with at least 3 full takes.`,
                                `Maintain professional communication and meet delivery timelines.`,
                                `Have a basic understanding of English.`,
                                `Work independently and demonstrate strong work ethic and commitment to their craft.`,
                                `TuneM handles all marketing, sales, and client management. Artists are not responsible for sourcing their own clients.`
                            ]
                        },
                        {
                            title: '5. Vocal Sales',
                            body: [
                                `All vocals sold through TuneM are royalty-free. Buyers receive a clear license and invoice upon purchase.`,
                                `Artists are compensated as per the agreement set out upon onboarding. MIDI files may be available at an additional cost.`
                            ]
                        },
                        {
                            title: '6. Comments and User Content',
                            body: [
                                `Parts of this website may allow users to post and exchange opinions and information.`,
                                `TuneM does not filter, edit, publish or review comments prior to their appearance on the website.`,
                                `Comments do not reflect the views and opinions of TuneM. TuneM shall not be liable for the Comments.`,
                                `TuneM reserves the right to monitor and remove inappropriate Comments.`,
                                `You grant TuneM a non-exclusive license to use, reproduce, and edit your Comments.`
                            ]
                        },
                        {
                            title: '7. Linking to Our Content',
                            body: [
                                `Certain organizations may link to our Website without prior written approval. Others may need approval.`,
                                `Links must not be deceptive or imply false endorsement.`
                            ]
                        },
                        {
                            title: '8. iFrames',
                            body: [
                                `You may not create frames around our Webpages without prior approval and written permission.`
                            ]
                        },
                        {
                            title: '9. Content Liability',
                            body: [
                                `We are not responsible for content that appears on your website.`,
                                `You agree to defend us against all claims arising on your website.`
                            ]
                        },
                        {
                            title: '10. Privacy',
                            body: [
                                `Please refer to our Privacy Policy for information about how we collect and use your data.`
                            ]
                        },
                        {
                            title: '11. Reservation of Rights',
                            body: [
                                `We reserve the right to request removal of any links to our Website.`,
                                `We also reserve the right to amend these terms at any time.`
                            ]
                        },
                        {
                            title: '12. Removal of Links',
                            body: [
                                `If you find any link on our Website that is offensive, you may contact us.`,
                                `We are not obligated to remove links or respond.`
                            ]
                        },
                        {
                            title: '13. Disclaimer',
                            body: [
                                `To the maximum extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and its use.`,
                                `Nothing in this disclaimer will limit liability for death, fraud, or other things not permitted by law.`
                            ]
                        },
                        {
                            title: '14. VAT and Tax Policy',
                            body: [
                                `All services are subject to an 18% VAT in accordance with Maltese law.`,
                                `EU-based clients must provide a valid VAT number to avoid VAT charges.`
                            ]
                        },
                        {
                            title: '15. Jurisdiction',
                            body: [
                                `These Terms and Conditions are governed by and construed in accordance with the laws of Malta.`
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">{section.title}</h2>
                            <div className="space-y-2">
                                {section.body.map((paragraph, i) => (
                                    <p key={i} className="text-lg textColor lg:text-xl">{paragraph}</p>
                                ))}
                                {section.list && (
                                    <ul className="list-disc ml-5 text-lg textColor lg:text-xl space-y-1 mt-2">
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}

                    <p className="text-lg textColor lg:text-xl mt-8">
                        By using TuneM, you acknowledge that you have read, understood, and agreed to these Terms and
                        Conditions.
                    </p>
                </div>
            </MaxWidth>
        </div>
    );
};

export default TermPage;
