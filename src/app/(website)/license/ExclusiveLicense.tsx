import React from 'react';
import { motion } from 'framer-motion';

const ExclusiveLicense = () => {
    return (
        <div  >
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 "
            >
                <h2 className="lg:text-4xl text-2xl headerColor font-bold">TuneM Exclusive Vocal License</h2>
                {/* <p className=" lg:text-xl text-lg textColor ">Price: From $199</p> */}
                <p className=" lg:text-xl text-lg textColor ">Edition Limit: 1 copy only (sold once, then removed)</p>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">A. Delivery</h4>
                    <ul className="list-disc list-inside space-y-2 lg:text-xl text-lg textColor  ">
                        <li>1x Wet Vocal (processed & tuned) in high-quality WAV format</li>
                        <li>Minimum 3x Dry Vocal Takes (raw, unprocessed)</li>
                        <li>If included: instrumental stems (piano, drums, etc.) and chord/melody files in .MIDI format</li>
                        <li>Files delivered via email and in the user account dashboard</li>
                    </ul>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">B. Exclusive Usage Rights</h4>
                    <ul className="list-disc list-inside space-y-2 lg:text-xl text-lg textColor  ">
                        <li>Exclusive rights to use the vocal in unlimited original songs (including remixes/edits)</li>
                        <li>Commercial release and distribution</li>
                        <li>Upload to Spotify, Apple Music, YouTube, etc.</li>
                        <li>Free or paid downloads (unlimited)</li>
                        <li>Unlimited public and radio performance rights</li>
                        <li>This vocal will never be resold to anyone else</li>
                    </ul>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">C. Ownership & Restrictions</h4>
                    <ul className="list-disc list-inside space-y-2 lg:text-xl text-lg textColor  ">
                        <li>100% Buyout License – full master rights belong to Licensee</li>
                        <li>No resale, sublicensing, or transfer of license/files</li>
                        <li>Do not upload the vocal to content ID/fingerprinting systems unless you are the sole claimant</li>
                        <li>Credit to TuneM or the vocalist is optional</li>
                    </ul>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">D. Royalties</h4>
                    <p className=' lg:text-xl text-lg textColor  ' >You keep 100% of all royalties, earnings, and rights — no splits with TuneM or third parties.</p>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">E. Stems & MIDI Terms</h4>
                    <p className=' lg:text-xl text-lg textColor  ' >All terms apply to stems and MIDI files. You may adapt creatively but may not release them in original form.</p>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">F. Breach of Agreement</h4>
                    <p className=' lg:text-xl text-lg textColor  ' >If any terms are breached, TuneM may terminate this license with 30 days’ written notice.</p>
                </section>

                <section>
                    <h4 className="lg:text-3xl text-2xl headerColor   font-bold mb-2">G. VAT & Jurisdiction</h4>
                    <p className=' lg:text-xl text-lg textColor  '>All purchases are subject to 18% VAT under Maltese law. This agreement is governed by the laws of Malta.</p>
                </section>
            </motion.div>
        </div>
    );
};

export default ExclusiveLicense;
