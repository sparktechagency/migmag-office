import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import MaxWidth from "@/components/max-width/MaxWidth";
import Link from 'next/link';

const Refund: React.FC = () => {
    return (
        <div >
            {/* <div className=' bg-[#7F94DA] lg:my-14 my-8 '>
                <div className='  '>
                    <MaxWidth>
                        <h1 className=' lg:text-4xl text-2xl  text-white font-semibold lg:pt-20 lg:pb-28 py-10   '>Refund
                            Policy</h1>
                    </MaxWidth>
                </div>
            </div> */}

            <MaxWidth>
                <div className='  lg:my-14 my-8 ' >
                    <h1 className='lg:text-4xl font-bold text-xl' >TuneM Refund Policy – Final & Enforceable</h1>
                    <p className={" lg:my-6 my-3 lg:text-xl text-sm "} >
                        This Refund Policy is a legally binding condition of sale. By purchasing, accessing, or downloading any TuneM vocal product — including but not limited to Limited, Premium, or Exclusive vocals — you, the buyer (“Licensee”), agree to all terms below without exception.
                    </p>
                </div>
                <div className='  mx-auto   '>
                    {/* 1st box  */}
                    <div
                        className=' flex md:flex-row flex-col justify-between lg:gap-x-3 lg:gap-y-0 gap-y-3 px-4 lg:px-0 '>
                        <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 '>
                            <div className=' flex justify-center '>
                                <span>
                                    <FaEnvelopeOpenText size={30} />
                                </span>
                            </div>
                            <h1 className=' headerColor lg:text-4xl text-center  my-2 '>Apply For A Refund</h1>
                            <p className=' textColor text-center text-lg '>Contact us within 30 days</p>
                        </div>
                        <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 '>
                            <div className=' flex justify-center '>
                                <span>
                                    <FaEnvelopeOpenText size={30} />
                                </span>
                            </div>
                            <h1 className=' headerColor lg:text-4xl text-center  my-2 '>Provide Us All Information</h1>
                            <p className=' textColor text-center text-lg '>Tell us your order number</p>
                        </div>
                        <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6  '>
                            <div className=' flex justify-center '>
                                <span>
                                    <FaEnvelopeOpenText size={30} />
                                </span>
                            </div>
                            <h1 className=' headerColor lg:text-4xl text-center  my-2 '>We Check If You Are Eligible</h1>
                            <p className=' textColor text-center text-lg '>You will need to meet our critica</p>
                        </div>
                        <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 '>
                            <div className=' flex justify-center '>
                                <span>
                                    <FaEnvelopeOpenText size={30} />
                                </span>
                            </div>
                            <h1 className=' headerColor lg:text-4xl text-center  my-2 '>Get A Refund Or A Coupon</h1>
                            <p className='textColor text-center text-lg '>We will take care of it</p>
                        </div>
                    </div>

                    <div className=' mt-12 lg:px-0 px-4 '>
                        <h1 className=' headerColor font-bold lg:text-3xl text-xl '>🚫 NO REFUNDS AFTER DOWNLOAD — FINAL & IRREVERSIBLE</h1>

                        <p className='headerColor  text-lg  lg:text-2xl my-5 '>Once a digital file has been downloaded or accessed by the Licensee (even once), all sales are final.</p>

                        <p className="headerColor text-sm  lg:text-lg  " >
                            No refunds, partial refunds, credit, or exchanges will be granted under any circumstance once access or download has occurred. This applies to:
                        </p>






                        <ul className=' mb-3  list-disc  ml-4 mt-3 lg:text-xl text-sm font-bold '>
                            <li className=' ml-7 '>Limited Vocals (20-copy license)
                            </li>
                            <li className=' ml-7 '>
                                Premium Vocals (5-copy license)
                            </li>
                            <li className=' ml-7 '>
                                Exclusive Vocals (1-of-1 license)
                            </li>
                        </ul>
                        <div>
                            <p className='  text-sm  lg:text-lg '>This is non-negotiable.</p>
                        </div>
                        <div className='   my-3 text-xl '>
                            <p>
                                <span className={"font-bold text-xl "} >Why</span> ? Downloading grants irreversible access to commercial-use content. Due to the digital, non-returnable nature of our assets and the risk of misuse, TuneM cannot retrieve or re-secure the value of a vocal product once accessed. This protects our artists, our company, and our licensing integrity.
                            </p>
                        </div>
                    </div>





                    <div className="py-8   ">
                        <h2 className=" headerColor font-bold lg:text-3xl text-xl ">Refunds Before Download — Strict Conditions</h2>
                        <p className={"my-4 text-sm  lg:text-xl  "} >A refund may be granted <span className={"font-bold "} >only if all of the following are true:</span>  </p>
                        <ul className="list-disc ml-7  space-y-1 lg:text-lg text-sm ">
                            <li>
                                The Licensee <span className={"font-bold"} >has not downloaded</span> or accessed the file(s) in any way.
                            </li>
                            <li>
                                The vocal files have not been delivered, or the download link has been inaccessible for  <span className={"font-bold"} >5 full business days </span>after purchase.
                            </li>
                            <li>
                                A refund request is submitted in writing to support@tunem.io with a valid receipt   <span className={"font-bold"} >before</span> any access or use.
                            </li>

                        </ul>

                        <p className="lg:text-lg text-sm my-3 " >If any of the above conditions are not met, no refund will be processed.</p>

                        <h2 className="text-3xl headerColor font-bold mt-10 mb-4"> No Refunds For the Following (No Exceptions)</h2>
                        <ul className="list-disc ml-7  space-y-1 lg:text-lg text-sm ">
                            <li>
                                You downloaded, opened, or streamed the product — even once.
                            </li>
                            <li>
                                You “didn’t like the vocal” or “changed your mind” after purchase.
                            </li>
                            <li>You claim “your client no longer needs it” or “your project changed.”</li>
                            <li>You misunderstood the genre, tone, vocal delivery, or style (previews and descriptions are provided).</li>
                            <li>You had “technical issues” with your software — TuneM is not responsible for DAW or plugin compatibility.</li>
                            <li>You purchased a vocal expecting exclusive rights when purchasing a Limited or Premium license.</li>
                        </ul>

                        <p className="lg:text-lg text-sm mt-3 " >All license terms are clearly stated before checkout — misunderstanding them does not entitle you to a refund.</p>




                        <h2 className="text-3xl headerColor font-bold mt-10 mb-4"> Misuse, Fraud, and Disputes</h2>
                        <p className={"my-4 text-sm  lg:text-xl  "} >If a chargeback, PayPal dispute, or credit card dispute is initiated after accessing any vocal files, TuneM reserves the right to:</p>

                        <ul className="list-disc  ml-7 space-y-1">
                            <li>
                                Terminate your license immediately
                            </li>
                            <li>Pursue legal action for breach of licensing and loss of value</li>
                            <li>Share your details with fraud prevention services and blacklist future purchases</li>
                        </ul>

                        <p className="lg:text-lg text-sm mt-3 " >This is contractual theft. You are responsible for understanding the terms before purchase.</p>

                        <h2 className="text-3xl headerColor font-bold mt-10"> Audit and Download Tracking</h2>
                        <p className="lg:text-lg text-sm mt-3 " >We log and timestamp all download activity. If you downloaded the file, the transaction is legally considered complete and non-refundable. This log will be provided in any dispute.</p>





                        <h2 className="text-3xl headerColor font-bold mt-10">  Questions Before Purchase?</h2>
                        <p className="lg:text-lg text-sm mt-3 " >We’re happy to clarify any concerns before you buy. Reach out to us directly at <span className={" text-[#2D69D2] "} > <Link href="mailto:support@tunem.com">support@tunem.com</Link></span>  Once you download, the sale is final.</p>




                        <p>
                            This policy is governed under <span className={"font-bold"} >Maltese jurisdiction</span> and complies with all applicable EU digital goods regulations, including Article 16(m) of Directive 2011/83/EU (Consumer Rights Directive) regarding <span className={"font-bold"}  >exceptions to the right of withdrawal for digital content</span>  .
                        </p>






                    </div>


                </div>
            </MaxWidth>
        </div>
    )
}

export default Refund
