import React from 'react';
import { motion } from 'framer-motion';

const PremiumLicense: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 "
        >
            <h2 className="text-2xl lg:text-4xl headerColor font-bold">5 copies only available.</h2>
            <p className=" lg:text-xl text-lg textColor">Effective Date: Upon purchase</p>
            <p className=" lg:text-xl text-lg textColor">Parties: This agreement is entered into by TuneM (“Licensor”) and the purchaser (“Licensee”).</p>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">A. Delivery</h4>
                <ul className="list-disc list-inside space-y-2  lg:text-xl text-lg textColor  ">
                    <li>1x Wet Vocal (tuned & processed) as MP3 and WAV</li>
                    <li>3x Dry Vocal Takes (untreated) as WAV</li>
                    <li>(Optional) Instrumental stem files (piano, drums, etc.) and .MIDI files if available</li>
                    <li>Files delivered via email and downloadable from the Licensee account</li>
                </ul>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">B. License Scope</h4>
                <ul className="list-disc list-inside space-y-2  lg:text-xl text-lg textColor  ">
                    <li>Use the vocal in one (1) original song (including edits/remixes)</li>
                    <li>Release and distribute commercially</li>
                    <li>Upload to Spotify, Apple Music, YouTube, etc.</li>
                    <li>Free and paid downloads (unlimited)</li>
                    <li>Public performances and radio play</li>
                    <li>Unlimited monetization across platforms</li>
                </ul>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">C. License Limits & Ownership</h4>
                <ul className="list-disc list-inside space-y-2  lg:text-xl text-lg textColor  ">
                    <li>Only 10 licenses sold per vocal — marked unavailable after limit</li>
                    <li>TuneM retains full ownership of vocal content</li>
                    <li>No resale, sublicensing, or transferring of license/files</li>
                    <li>Do not register original vocal with content ID systems (e.g., YouTube)</li>
                    <li>Do not offer raw vocal for download, paid or free</li>
                </ul>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2 ">D. Royalties</h4>
                <p className = {" lg:text-xl text-lg textColor"} >You retain 100% of all royalties and earnings. No royalty or publishing share with TuneM or third parties.</p>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">E. Stem & MIDI Use</h4>
                <p className = " lg:text-xl text-lg textColor" >You may use stem and MIDI files creatively. Do not release original arrangements as-is.</p>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">F. Breach of Agreement</h4>
                <p className = {" lg:text-xl text-lg textColor"} >If any terms are violated, TuneM may revoke the license with 30 days’ notice. Legal action may follow misuse.</p>
            </section>

            <section>
                <h4 className=" lg:text-3xl text-2xl font-semibold headerColor mb-2">G. VAT & Jurisdiction</h4>
                <p className = " lg:text-xl text-lg textColor" >All purchases are subject to 18% VAT under Maltese law. This agreement is governed by Malta legal system.</p>
            </section>
        </motion.div>
    );
};

export default PremiumLicense;
