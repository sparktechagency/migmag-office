import MaxWidth from "@/components/max-width/MaxWidth";
import Link from "next/link";

type FaqType = {
    question: string,
    answer: string
}
const faqs: FaqType[] = [
    {
        question: "Can I use TuneM vocals commercially?",
        answer:
            "Yes. All vocals include a full commercial license. You can release your tracks on Spotify, Apple Music, YouTube and other platforms earning unlimited streams and revenue.",
    },
    {
        question: "Are the vocals royalty-free?",
        answer:
            "Yes. Once purchased, all vocals are royalty-free. You keep 100% of the earnings from your release.",
    },

    {
        question: "Do I need to credit the singer or TuneM?",
        answer: "No credit is required unless explicitly mentioned on the product page.",
    },

    {
        question: "Can I register my track with a publishing rights organisation?",
        answer: "You can register your track under your name without crediting TuneM or the singer."
    },

    {
        question: "Do I fully own my track even with a non-exclusive vocal?",
        answer: "You fully own your final track and all earnings. TuneM only retains ownership of the original vocal recording.",
    },

    {
        question: "Can I ghost produce using a TuneM vocal?",
        answer: "You can sell the finished track to a client, provided all TuneM license terms are respected.",
    },




];




const Faq = () => {
    return (
        <MaxWidth>
            <section className=" mx-auto mb-10   ">
                <h1 className={" headerColor lg:text-3xl text-xl leading-9 font-bold text-center mb-10 lg:mb-20 mt-10 "}>TuneM FAQ</h1>
                <div>
                    <span className={"flex item-center gap-x-2  "} >
                        <h1 className={"lg:text-xl font-bold  "} >📧 Support Contact</h1> : <p className={" mt-0.5 "} ><Link href="mailto:support@tunem.com">support@tunem.com</Link>  </p>
                    </span>
                    <p>We reply within 1–24 hours on business days.</p>
                </div>



                <div className=" lg:mt-10 ">
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-4  " >
                        Licensing & Usage
                    </h1>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">{faq.question}</h3>
                            <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >What are the license limitations?</h1>
                    <p className={"font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4"} >You cannot resell, redistribute, or sublicense the vocals in any form. This includes, but is not limited to:</p>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Selling or sharing vocals as part of sample packs, vocal libraries, or sound collections.</li>
                        <li>Using the vocals or any part of them to train or fine-tune AI models, machine learning systems, or similar technologies.</li>
                        <li>Uploading or distributing vocals on any platform or marketplace that allows others to access, download, or reuse them.</li>
                    </ul>
                    <p className={`lg:text-lg textColor leading-6 lg:mb-4 mb-2 `} >
                        You may use vocals solely within your own musical productions, client work, or ghost productions in accordance with TuneM’s license terms.
                        Exclusive licenses have no limitations.
                    </p>
                </div>






                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        TuneM Vocals
                    </h1>
                </div>


                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Limited Vocal (up to 5 copies):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>1x wet vocal</li>
                        <li>3x dry vocal takes (untreated)</li>
                        <li>Full commercial license</li>
                        <li>Capped at 5 total sales</li>
                    </ul>
                </div>



                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Premium Vocal (up to 3 copies):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Includes everything in Limited</li>
                        <li>May include bonus harmonies, MIDI, and stems (if available)</li>
                        <li>Only 3 total licenses available.</li>
                    </ul>
                </div>


                <div>
                    <h1 className="font-bold lg:text-2xl text-xl leading-6 lg:mt-4 mt-2  headerColor mb-3 lg:mb-4" >Exclusive Vocal (1 copy only):</h1>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Sold only once</li>
                        <li>Includes wet and dry takes, harmonies, stems, MIDI (if available)</li>
                        <li>Full buyout rights and total master ownership</li>
                    </ul>
                </div>



                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-4  " >
                        Technical Details
                    </h1>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What are wet vocals?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Vocals processed with effects such as reverb or delay, ready to use in your production.</p>
                </div>
                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What are dry vocals?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Raw, unprocessed takes ideal for custom mixing and effects.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">How many vocal takes are included?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">You’ll receive at least 3 lead takes. Additional harmonies and ad-libs may also be included.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Are these vocals exclusive to TuneM?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes. All vocals are created exclusively for and sold only through TuneM.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What does &ldquo;not overused&ldquo; mean?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">We cap the number of sales to maintain exclusivity:</p>
                </div>


                <div>
                    <ul className="lg:text-lg textColor leading-6 lg:mb-4 mb-2 space-y-2 list-disc ml-8  " >
                        <li>Limited → 5 copies</li>
                        <li>Premium → 3 copies</li>
                        <li>Exclusive → 1 copy only</li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Can I re-record the vocal with another singer?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes. Re-recording is permitted under all license types.</p>
                </div>




                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        Distribution & Releases
                    </h1>
                </div>



                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Where can I release my track?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Anywhere including Spotify, Apple Music, SoundCloud, Beatport, YouTube, Bandcamp or through a label.</p>
                </div>



                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Can I use instrumental stems royalty-free??</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes, as long as your final track is a new and creative work.</p>
                </div>

                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">What if a label or distributor asks who wrote the lyrics?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">You may list yourself or your credited lyricist. There is no required name to include.</p>
                </div>


                <div>
                    <h1 className=" lg:text-4xl font-bold text-xl  lg:mb-8 mb-5  " >
                        Support & Policies
                    </h1>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">Do you offer refunds?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Yes. We provide a 30-day money-back guarantee as long as the vocal has not been downloaded. Once a digital file has been accessed or downloaded, we are unable to issue a refund in accordance with EU Directive 2011/83/EU on Consumer Rights, which excludes refunds for digital content once delivery has begun. We actively monitor downloads to ensure compliance. For assistance, please contact support at <Link className={`font-bold text-black `} href="mailto:support@tunem.com">support@tunem.com</Link></p>
                </div>


                <div>
                    <h3 className="font-bold lg:text-2xl text-xl leading-6  headerColor mb-3 lg:mb-4">How do I contact TuneM support?</h3>
                    <p className="lg:text-lg textColor leading-6 lg:mb-4 mb-2  ">Email us at <span className="font-bold" > <Link className="text-black " href="mailto:support@tunem.com">support@tunem.com</Link> </span> or reach out via our Contact Page</p>
                </div>
















                {/* <div>
                    <h3 className="font-bold lg:text-2xl text-lg leading-6  text-black mb-3 mt-4 lg:mb-3">What are the
                        differences between your vocal packages?</h3>
                    <ul className="list-disc  space-y-1">
                        <li className="font-bold headerColor text-lg leading-6 flex flex-row items-center list-disc ">
                            Limited Vocal (30 copies only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not exclusive, but strictly limited to 30 total purchases.
                            </span>
                        </li>
                        <li className="font-bold text-lg headerColor leading-6 flex flex-row items-center  ">
                            Premium Vocal (5 copies only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Includes everything in the Limited Vocal package plus bonus materials (harmonies, MIDI, and stems if available). Only 5 total licenses available.
                            </span>
                        </li>
                        <li className="font-bold headerColor text-lg leading-6 flex flex-row items-center  ">
                            Exclusive Vocal (1 copy only):
                            <span className="block font-normal textColor text-lg leading-6">
                                Sold only once. Includes wet & dry takes, harmonies, stems, MIDI files (if available), and full buyout rights. Total master ownership.
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold lg:text-2xl text-lg leading-6  headerColor mb-3 mt-2 lg:mt-4 lg:mb-5">What
                        are the license limitations?</h3>
                    <ul className="list-disc  space-y-1">
                        < li className="block font-normal textColor text-lg leading-6">
                            Includes 1x wet vocal, 3x dry vocal takes (untreated), with full commercial license. Not
                            exclusive, but strictly limited to 30 total purchases.
                        </li>

                        <li className=" textColor lg:text-lg leading-6 flex flex-row items-center  ">
                            Use vocals to create sample packs You can use vocals for client work or ghost productions.
                            Exclusive licenses have no limitations.
                        </li>

                    </ul>
                </div> */}





            </section>
        </MaxWidth>
    );
}


export default Faq