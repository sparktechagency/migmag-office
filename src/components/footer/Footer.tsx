// "use client"


// import Link from 'next/link'
// import React, {useState} from 'react'
// import {FaCcApplePay, FaFacebook, FaInstagramSquare} from "react-icons/fa";
// import {FaTiktok} from "react-icons/fa";
// import {BsDiscord} from "react-icons/bs";
// import {FcGoogle} from "react-icons/fc";
// import {ArrowRight} from "lucide-react";

// const Footer: React.FC = () => {
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         // TODO: Handle email submission logic
//     };

//     return (
//         <div style={{fontFamily: 'Favorit'}} className="lg:mt-16 mt-5 px-4 md:px-4">
//             <div className="max-w-[1539px] mx-auto">
//                 {/* Logo */}
//                 <div className="mx-auto flex justify-center">
//                     <span>
//                         <svg width="96" height="41" viewBox="0 0 96 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <g clipPath="url(#clip0_1_2391)">
//                                 <path
//                                     d="M95.9945 9.38879V40.906H69.7846V15.941C69.7846 15.941 61.1104 16.3613 61.1104 31.2684V41.0055H34.84V30.4334C34.2893 16.3613 26.1658 15.941 26.1658 15.941V40.9005H0V9.38326H26.1658C26.1658 9.38326 32.0422 9.38325 34.84 17.0082V0H61.0829V17.0856C63.8091 9.38879 69.7571 9.38879 69.7571 9.38879H95.9945Z"
//                                     fill="black"/>
//                             </g>
//                             <defs>
//                                 <clipPath id="clip0_1_2391">
//                                     <rect width="96" height="41" fill="white"/>
//                                 </clipPath>
//                             </defs>
//                         </svg>
//                     </span>
//                 </div>

//                 {/* Divider */}
//                 <div className="text-black border border-[#000000] "></div>

//                 {/* Newsletter and Description */}
//                 <div className="lg:mt-12 mt-6 flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
//                     <div>
//                         <h1 className="font-bold lg:text-4xl text-2xl lg:text-[35px] leading-9 text-[#000000]">Sign Up for the TuneM
//                             Newsletter</h1>
//                         <div className="max-w-[478px] mt-4">
//                             <p className="text-lg leading-6 text-[#000000]">
//                                 Stay Tuned and be the first to hear about new vocal releases, special offers, and
//                                 exclusive updates from inside the world of TuneM. No spam — just real value for music
//                                 creators.

//                             </p>
//                             <div>
//                                 <p className=" mt-5 text-lg mb-2">
//                                     Sign up for our mailing list to get latest updates and offers
//                                 </p>
//                                 <form
//                                     onSubmit={handleSubmit}
//                                     className="flex items-center bg-[#1f1f1f] rounded-full overflow-hidden"
//                                 >
//                                     <input
//                                         type="email"
//                                         required
//                                         placeholder="Enter your email address"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="flex-1 px-4 lg:py-3 py-1 text-lg bg-white text-black border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
//                                     />
//                                     <button
//                                         type="submit"
//                                         className="bg-yellow-400 px-6 lg:py-5 py-3 hover:bg-yellow-500 "
//                                     >
//                                         <ArrowRight className="w-4 h-4 -ml-5 lg:-ml-0 text-black"/>
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="mt-6">
//                             <Link href="/register">
//                                 <button
//                                     className="w-[194px] lg:text-xl text-lg rounded-2xl border border-[#000000] text-[#000000]  py-1.5 cursor-pointer ">
//                                     REGISTER
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="  ">
//                         <div>
//                             <h1 className="font-bold text-2xl lg:text-4xl leading-9 text-[#000000]">TuneM helps you
//                                 create the best vocals in the industry.</h1>
//                         </div>
//                         <div className="max-w-[478px] absolute right-[10%] mt-2 lg:mt-4 ">
//                             <p className="text-[#000000] text-end text-lg leading-6">
//                                 We work with unique, handpicked trusted singers, top-tier songwriters, and professional
//                                 engineers. All vocals are recorded in high-quality studio setups to ensure every take is
//                                 clean, original, and ready for your next release.
//                             </p>
//                         </div>
//                         <div className="mt-36 lg:mt-24 flex justify-end">
//                             <h1 className="text-[#000000] text-lg font-bold leading-9 mt-10 ">FOLLOW US</h1>
//                         </div>
//                         <div className="flex gap-x-5 justify-end mt-3">
//                             <div className="  rounded-full">
//                                 <a target="_blank"
//                                    href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagramSquare size={25}/></a>
//                             </div>
//                             <div className="  rounded-full">
//                                 <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en"><FaTiktok
//                                     size={25}/></a>
//                             </div>
//                             <div className="  rounded-full">
//                                 <a target="_blank" href="https://www.instagram.com/accounts/login/?hl=en"><BsDiscord
//                                     size={25}/></a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Divider */}
//                 <div className="border border-[#000000] mt-12"></div>

//                 {/* Payment Methods and Links */}
//                 <div className="mt-7 pb-20 hidden lg:flex flex-col md:flex-row justify-between gap-10">
//                     <div>
//                         <h1>Payment methods</h1>
//                         <div className="flex items-center  mt-2 gap-4">
//                             <div className=" rounded-full">
//                                 <svg width="80" height="100" viewBox="0 0 24 24" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M18.9861 6.91069C19.0396 4.12819 16.7436 1.99219 13.5866 1.99219H7.05757C6.90538 1.99224 6.7582 2.0466 6.64252 2.14551C6.52685 2.24441 6.45027 2.38135 6.42657 2.53169L3.81007 18.8797C3.79837 18.9538 3.80285 19.0295 3.82323 19.1017C3.8436 19.1738 3.87937 19.2407 3.92808 19.2978C3.97678 19.3548 4.03727 19.4006 4.10537 19.432C4.17348 19.4634 4.24758 19.4797 4.32257 19.4797H8.19107L7.58607 23.2657C7.57436 23.3398 7.57886 23.4156 7.59926 23.4878C7.61966 23.56 7.65548 23.6269 7.70424 23.684C7.753 23.741 7.81355 23.7868 7.88172 23.8181C7.94988 23.8495 8.02403 23.8657 8.09907 23.8657H11.2501C11.4026 23.8657 11.5381 23.8107 11.6536 23.7122C11.7691 23.6132 11.7881 23.4767 11.8116 23.3262L12.7366 17.8837C12.7601 17.7337 12.8366 17.5387 12.9526 17.4397C13.0681 17.3407 13.1691 17.2867 13.3211 17.2862H15.2501C18.3416 17.2862 20.9651 15.0892 21.4446 12.0327C21.7836 9.86269 20.8531 7.88919 18.9861 6.91069Z"
//                                         fill="#001C64"/>
//                                     <path
//                                         d="M9.02798 13.4502L8.06448 19.5602L7.45948 23.3922C7.44777 23.4663 7.45227 23.542 7.47267 23.6143C7.49308 23.6865 7.52889 23.7534 7.57765 23.8104C7.62642 23.8675 7.68697 23.9132 7.75513 23.9446C7.82329 23.976 7.89745 23.9922 7.97248 23.9922H11.3075C11.4596 23.992 11.6066 23.9376 11.7222 23.8387C11.8378 23.7398 11.9143 23.6029 11.938 23.4527L12.817 17.8827C12.8407 17.7325 12.9172 17.5956 13.0328 17.4968C13.1484 17.398 13.2954 17.3437 13.4475 17.3437H15.411C18.5025 17.3437 21.1255 15.0887 21.605 12.0322C21.945 9.86266 20.853 7.88916 18.986 6.91016C18.981 7.14116 18.961 7.37166 18.9255 7.60016C18.446 10.6562 15.8225 12.9117 12.731 12.9117H9.65848C9.5065 12.9117 9.3595 12.9659 9.24393 13.0646C9.12836 13.1633 9.05179 13.3 9.02798 13.4502Z"
//                                         fill="#0070E0"/>
//                                     <path
//                                         d="M8.06398 19.5601H4.18398C4.10896 19.5601 4.03482 19.5439 3.96668 19.5125C3.89853 19.4812 3.83801 19.4354 3.78929 19.3783C3.74056 19.3213 3.70479 19.2544 3.68446 19.1821C3.66412 19.1099 3.65969 19.0342 3.67148 18.9601L6.28748 2.36908C6.31119 2.21879 6.38779 2.08191 6.50348 1.98309C6.61917 1.88427 6.76634 1.83001 6.91848 1.83008H13.587C16.7435 1.83008 19.0395 4.12758 18.986 6.91008C18.2005 6.49808 17.2775 6.26258 16.266 6.26258H10.7065C10.5545 6.26273 10.4075 6.31708 10.2919 6.41587C10.1763 6.51466 10.0998 6.65142 10.076 6.80158L9.02848 13.4501L8.06398 19.5601Z"
//                                         fill="#003087"/>
//                                 </svg>

//                             </div>
//                             <div className="  rounded-full">
//                                 <svg width="80" height="100" viewBox="0 0 24 16" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z"
//                                         fill="#252525"/>
//                                     <path
//                                         d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z"
//                                         fill="#EB001B"/>
//                                     <path
//                                         d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z"
//                                         fill="#F79E1B"/>
//                                     <path fillRule="evenodd" clipRule="evenodd"
//                                           d="M12 4C13.2144 4.91221 14 6.36455 14 8.00037C14 9.63618 13.2144 11.0885 12 12.0007C10.7856 11.0885 10 9.63618 10 8.00037C10 6.36455 10.7856 4.91221 12 4Z"
//                                           fill="#FF5F00"/>
//                                 </svg>

//                             </div>
//                             <div className="  rounded-full">
//                                 <svg width="80" height="100" viewBox="0 0 24 16" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <g clipPath="url(#clip0_181783_2033)">
//                                         <path
//                                             d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z"
//                                             fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
//                                         <path
//                                             d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z"
//                                             fill="#171E6C"/>
//                                     </g>
//                                     <defs>
//                                         <clipPath id="clip0_181783_2033">
//                                             <rect width="80" height="100" fill="white"/>
//                                         </clipPath>
//                                     </defs>
//                                 </svg>


//                             </div>
//                             <div className="  rounded-full">
//                                 <FaCcApplePay size={65}/>

//                             </div>
//                             <div className="  rounded-full">
//                                 <FcGoogle size={65}/>
//                             </div>
//                         </div>
//                         {/*social icons */}
//                         <div className={`mt-16`}>

//                             {/*face book*/}

//                             <div>

//                                 <a
//                                     target="_blank"
//                                     href="https://www.facebook.com"
//                                     rel="noopener noreferrer"
//                                     className="cursor-pointer flex items-center gap-x-3.5"
//                                 >
//                                     <FaFacebook
//                                         size={30}
//                                         className="text-black hover:text-[#E7F056] transition-all cursor-pointer"
//                                     />
//                                     <p className="text-black text-xl">@migmag.com</p>
//                                 </a>

//                             </div>
//                         </div>
//                     </div>

//                     {/* Links Section */}
//                     <div className="flex flex-wrap gap-10">
//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">TUNEM</li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/tune-m-artist">Hire a
//                                     Singer</Link></li>

//                                 <li><Link className="text-lg text-[#000000] leading-9"
//                                           href="/https://tunemcollective.com/">Courses</Link></li>
//                             </ul>
//                         </div>

//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">CONTACT</li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/contact">Contact Us</Link>
//                                 </li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/refund-policy">Refund
//                                     Policy</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/faq">FAQ</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/term&condiction">Term &
//                                     Condiction</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/privacy-policy">Privacy
//                                     Policy</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/license">License</Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">WORK WITH US</li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/tune-m-artist">TUNEM for
//                                     Artists</Link></li>
//                                 <li>
//                                     <Link className="text-lg text-[#000000] leading-9" href="/affiliates">
//                                         Affiliates
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//                 {/*small device payment */}


//                 <div className="mt-7  lg:hidden flex flex-col md:flex-row justify-between gap-10">
//                     <div>
//                         <h1>Payment methods</h1>
//                         <div className="flex items-center  mt-2 gap-4">
//                             <div className=" rounded-full">
//                                 <svg width="40" height="60" viewBox="0 0 24 24" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M18.9861 6.91069C19.0396 4.12819 16.7436 1.99219 13.5866 1.99219H7.05757C6.90538 1.99224 6.7582 2.0466 6.64252 2.14551C6.52685 2.24441 6.45027 2.38135 6.42657 2.53169L3.81007 18.8797C3.79837 18.9538 3.80285 19.0295 3.82323 19.1017C3.8436 19.1738 3.87937 19.2407 3.92808 19.2978C3.97678 19.3548 4.03727 19.4006 4.10537 19.432C4.17348 19.4634 4.24758 19.4797 4.32257 19.4797H8.19107L7.58607 23.2657C7.57436 23.3398 7.57886 23.4156 7.59926 23.4878C7.61966 23.56 7.65548 23.6269 7.70424 23.684C7.753 23.741 7.81355 23.7868 7.88172 23.8181C7.94988 23.8495 8.02403 23.8657 8.09907 23.8657H11.2501C11.4026 23.8657 11.5381 23.8107 11.6536 23.7122C11.7691 23.6132 11.7881 23.4767 11.8116 23.3262L12.7366 17.8837C12.7601 17.7337 12.8366 17.5387 12.9526 17.4397C13.0681 17.3407 13.1691 17.2867 13.3211 17.2862H15.2501C18.3416 17.2862 20.9651 15.0892 21.4446 12.0327C21.7836 9.86269 20.8531 7.88919 18.9861 6.91069Z"
//                                         fill="#001C64"/>
//                                     <path
//                                         d="M9.02798 13.4502L8.06448 19.5602L7.45948 23.3922C7.44777 23.4663 7.45227 23.542 7.47267 23.6143C7.49308 23.6865 7.52889 23.7534 7.57765 23.8104C7.62642 23.8675 7.68697 23.9132 7.75513 23.9446C7.82329 23.976 7.89745 23.9922 7.97248 23.9922H11.3075C11.4596 23.992 11.6066 23.9376 11.7222 23.8387C11.8378 23.7398 11.9143 23.6029 11.938 23.4527L12.817 17.8827C12.8407 17.7325 12.9172 17.5956 13.0328 17.4968C13.1484 17.398 13.2954 17.3437 13.4475 17.3437H15.411C18.5025 17.3437 21.1255 15.0887 21.605 12.0322C21.945 9.86266 20.853 7.88916 18.986 6.91016C18.981 7.14116 18.961 7.37166 18.9255 7.60016C18.446 10.6562 15.8225 12.9117 12.731 12.9117H9.65848C9.5065 12.9117 9.3595 12.9659 9.24393 13.0646C9.12836 13.1633 9.05179 13.3 9.02798 13.4502Z"
//                                         fill="#0070E0"/>
//                                     <path
//                                         d="M8.06398 19.5601H4.18398C4.10896 19.5601 4.03482 19.5439 3.96668 19.5125C3.89853 19.4812 3.83801 19.4354 3.78929 19.3783C3.74056 19.3213 3.70479 19.2544 3.68446 19.1821C3.66412 19.1099 3.65969 19.0342 3.67148 18.9601L6.28748 2.36908C6.31119 2.21879 6.38779 2.08191 6.50348 1.98309C6.61917 1.88427 6.76634 1.83001 6.91848 1.83008H13.587C16.7435 1.83008 19.0395 4.12758 18.986 6.91008C18.2005 6.49808 17.2775 6.26258 16.266 6.26258H10.7065C10.5545 6.26273 10.4075 6.31708 10.2919 6.41587C10.1763 6.51466 10.0998 6.65142 10.076 6.80158L9.02848 13.4501L8.06398 19.5601Z"
//                                         fill="#003087"/>
//                                 </svg>

//                             </div>
//                             <div className="  rounded-full">
//                                 <svg width="40" height="60" viewBox="0 0 24 16" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z"
//                                         fill="#252525"/>
//                                     <path
//                                         d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z"
//                                         fill="#EB001B"/>
//                                     <path
//                                         d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z"
//                                         fill="#F79E1B"/>
//                                     <path fillRule="evenodd" clipRule="evenodd"
//                                           d="M12 4C13.2144 4.91221 14 6.36455 14 8.00037C14 9.63618 13.2144 11.0885 12 12.0007C10.7856 11.0885 10 9.63618 10 8.00037C10 6.36455 10.7856 4.91221 12 4Z"
//                                           fill="#FF5F00"/>
//                                 </svg>

//                             </div>
//                             <div className="  rounded-full">
//                                 <svg width="40" height="60" viewBox="0 0 24 16" fill="none"
//                                      xmlns="http://www.w3.org/2000/svg">
//                                     <g clipPath="url(#clip0_181783_2033)">
//                                         <path
//                                             d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z"
//                                             fill="white" stroke="black" strokeOpacity="0.2" strokeWidth="0.5"/>
//                                         <path
//                                             d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z"
//                                             fill="#171E6C"/>
//                                     </g>
//                                     <defs>
//                                         <clipPath id="clip0_181783_2033">
//                                             <rect width="80" height="100" fill="white"/>
//                                         </clipPath>
//                                     </defs>
//                                 </svg>


//                             </div>
//                             <div className="  rounded-full">
//                                 <FaCcApplePay size={40}/>

//                             </div>
//                             <div className="  rounded-full">
//                                 <FcGoogle size={40}/>
//                             </div>
//                         </div>
//                         {/*social icons */}
//                         <div className={`l mt-3 `}>

//                             {/*face book*/}

//                             <div>

//                                 <a
//                                     target="_blank"
//                                     href="https://www.facebook.com"
//                                     rel="noopener noreferrer"
//                                     className="cursor-pointer flex items-center gap-x-3.5"
//                                 >
//                                     <FaFacebook
//                                         size={30}
//                                         className="text-black hover:text-[#E7F056] transition-all cursor-pointer"
//                                     />
//                                     <p className="text-black text-xl">@migmag.com</p>
//                                 </a>

//                             </div>
//                         </div>
//                     </div>

//                     {/* Links Section */}
//                     <div className="flex flex-wrap gap-10">
//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">TUNEM</li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/tune-m-artist">Hire a
//                                     Singer</Link></li>

//                                 <li><Link className="text-lg text-[#000000] leading-9"
//                                           href="/https://tunemcollective.com/">Courses</Link></li>
//                             </ul>
//                         </div>

//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">CONTACT</li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/contact">Contact Us</Link>
//                                 </li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/refund-policy">Refund
//                                     Policy</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/faq">FAQ</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/term&condiction">Term &
//                                     Condiction</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/privacy-policy">Privacy
//                                     Policy</Link></li>
//                                 <li><Link className="text-lg text-[#000000] leading-9" href="/license">License</Link>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div>
//                             <ul className="flex flex-col gap-1">
//                                 <li className="text-lg text-[#000000] font-bold leading-9">WORK WITH US</li>
//                                 <li>
//                                     <Link className="text-lg text-[#000000] leading-9" href="/tune-m-artist">TUNEM for
//                                         Artists
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="text-lg text-[#000000] leading-9" href="/affiliates">
//                                         Affiliates
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default Footer;

import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer