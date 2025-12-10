"use client"
import React, { useState } from 'react'
import MaxWidth from "@/components/max-width/MaxWidth";
import Swal from "sweetalert2";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useApplayArtistMutation } from '@/app/api/websiteApi/websiteApi';


const ApplayVocalistFrom: React.FC = () => {
    const genres = [
        'POP',
        'DANCE POP',
        'HOUSE',
        'FUTURE HOUSE',
        'DEEP HOUSE',
        'COVERS',
        'OTHER'
    ];


    const [name, setName] = useState<string>('');
    const [demoLink, setDemoLink] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [socialLink, setSocialLink] = useState<string>('');
    const [referral, setReferral] = useState<string>('');
    const [about, setAbout] = useState<string>('');
    const [genree, setGenre] = useState<string[]>([]);
    const [other_genre, setOther_genre] = useState<string>('');
    // const [audio, setAudio] = useState<File | null>(null);

    const handleGenreChange = (genre: string) => {
        if (genree.includes(genre)) {
            setGenre(genree.filter((g) => g !== genre));
        } else {
            setGenre([...genree, genre]);
        }
    };

    const [applayArtist, { isLoading }] = useApplayArtistMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('social_link', socialLink);
        formData.append('referral', referral);
        formData.append('about', about);

        genree.forEach((genre) => {
            formData.append('genres[]', JSON.stringify(genre));
        });

        formData.append('other_genre', other_genre);

        // if (audio instanceof File) {
        //     formData.append('file', audio);
        // }

        try {
            const res = await applayArtist(formData).unwrap();
            if (res) {
                setName('');
                setEmail('');
                setSocialLink('');
                setAbout('');
                setGenre([]);
                setOther_genre('');
                // setAudio(null); // reset to null if audio is File | null
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Submitted successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (err) {
            console.error(err);
            const error = err as FetchBaseQueryError & { data?: { message?: string } };
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error?.data?.message || 'Something went wrong',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };


    return (
        <div className=' bg-black '>
            <MaxWidth>
                <div className=' max-w-[1366px] mx-auto py-8 lg:py-[60px] px-4 '>
                    <div className=' flex lg:flex-row flex-col items-start gap-y-8 lg:gap-y-0 relative lg:gap-5 '>

                        {/* left side  */}
                        <div className=' w-full '>


                            <div className=' max-w-[572px] mt-9 '>
                                <p className=' lg:text-3xl text-xl  text-[#FFBD00] font-semibold mb-6 '>Apply to Become a
                                    Vocalist at TuneM</p>
                                <p className={`text-white`}>
                                    We’re looking for dedicated vocalists who are passionate about music and ready to
                                    work
                                    professionally with a growing network of producers. If you have talent, drive, and a
                                    strong work ethic — TuneM could be the perfect platform for you.
                                </p>
                                <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>What We’re Looking
                                    For</h1>
                            </div>
                            <div className=' max-w-[572px] mt-8'>
                                <div className='  '>
                                    <div className=''>
                                        <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>Vocal
                                            Talent &
                                            Recording Setup</h1>
                                        <p className={`text-white`}>Strong singing ability with access to a home or
                                            studio
                                            setup. Must be able to deliver clean vocal stems</p>
                                    </div>

                                </div>
                                <div className='  my-8 '>
                                    <div className='  '>
                                        <div className=''>
                                            <h1 className={`lg:text-3xl text-xl font-semibold text-white mt-5 `}>Work
                                                Ethic & Drive</h1>
                                            <p className={`text-white`}>We value vocalists who are committed,
                                                consistent, and passionate about building a career in music.</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* right side  */}
                        <div className='  w-full '>

                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className='flex flex-col'>
                                    <label htmlFor="name"
                                        className='text-white text-lg font-bold leading-6'>Name</label>
                                    <input
                                        id='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium'
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="email"
                                        className='text-white text-lg font-bold leading-6'>Email</label>
                                    <input
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium'
                                        type="email"
                                        required
                                    />
                                </div>

                                {/* Social Link */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="socialLink" className='text-white text-lg font-bold leading-6'>Social
                                        link</label>
                                    <input
                                        id='socialLink'
                                        placeholder="Instagram or TikTok"
                                        value={socialLink}
                                        onChange={(e) => setSocialLink(e.target.value)}
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium'
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* demo line */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="id" className='text-white text-lg font-bold leading-6'>Submit your demo</label>
                                    <input
                                        id='link'
                                        placeholder="Send Us A Link"
                                        value={demoLink}
                                        onChange={(e) => setDemoLink(e.target.value)}
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium'
                                        type="url"
                                        required
                                    />
                                </div>

                                {/* Referral */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="Referral" className='text-white text-lg font-bold leading-6'>Referral</label>
                                    <input
                                        id='Referral'
                                        placeholder="Referral"
                                        value={referral}
                                        onChange={(e) => setReferral(e.target.value)}
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium'
                                        type="text"
                                    />
                                </div>

                                {/* About */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="about" className='text-white text-lg font-bold leading-6'>Tell us
                                        about you</label>
                                    <textarea
                                        id='about'
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        placeholder='What makes you a great fit for TUNEM?'
                                        className='hover:outline-0 focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                        rows={4}
                                        required
                                    />
                                </div>

                                {/* Genre */}
                                <div className='bg-black mt-5 text-white'>
                                    <h3 className='text-lg font-bold mb-4'>
                                        What genre do you work with the most? (multiple choice)
                                    </h3>
                                    <div className='flex flex-wrap gap-6'>
                                        {genres.map((genre, index) => (
                                            <div key={index} className='flex items-center gap-2 cursor-pointer'>
                                                <input
                                                    type="checkbox"
                                                    id={genre}
                                                    name="genre"
                                                    value={genre}
                                                    onChange={() => handleGenreChange(genre)}
                                                    checked={genree.includes(genre)}
                                                    className="appearance-none cursor-pointer w-6 h-6 rounded-full border-2 border-white checked:bg-yellow-400 checked:border-yellow-400"
                                                />
                                                <label htmlFor={genre} className='text-white cursor-pointer'>
                                                    {genre}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Genre */}
                                <div className='flex flex-col mt-5'>
                                    <label htmlFor="otherGenre" className='text-white text-lg font-bold leading-6'>
                                        If you chose Other which genre?
                                    </label>
                                    <textarea
                                        id='otherGenre'
                                        value={other_genre}
                                        onChange={(e) => setOther_genre(e.target.value)}
                                        className='hover:outline-0 placeholder:text-[#818080] placeholder:text-lg focus:outline-0 border-b border-[#818080] bg-black text-white py-1 text-lg font-medium resize-none'
                                        rows={2}
                                    />
                                </div>

                                {/* Audio Upload */}
                                {/* <div className='flex flex-col mt-5'>
                                    <label htmlFor='fileUpload' className='text-white text-lg font-bold leading-6'>
                                        Upload Your File
                                    </label>
                                    <input
                                        id='fileUpload'
                                        type='file'
                                        required
                                        accept='audio/*'
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setAudio(e.target.files[0]);
                                            }
                                        }}
                                        className='hover:outline-0 focus:outline-0 mt-5 border border-[#818080] px-10 rounded-2xl w-full lg:w-[45%] bg-black text-white py-2 text-lg font-medium cursor-pointer'
                                    />
                                </div> */}

                                {/* Submit */}
                                <div className='mt-9'>
                                    <button
                                        type="submit"
                                        className='cursor-pointer text-center text-lg font-medium bg-[#D9D9D9] w-full py-1.5 rounded-2xl'>
                                        {
                                            isLoading ? <>
                                                Loading...
                                            </> : <>
                                                SEND NOW
                                            </>
                                        }
                                    </button>
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default ApplayVocalistFrom; 
