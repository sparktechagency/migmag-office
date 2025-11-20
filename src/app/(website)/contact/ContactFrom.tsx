import MaxWidth from '@/components/max-width/MaxWidth'
import Image from 'next/image'
import React from 'react'
import { FaArrowUp, FaHeadphonesAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const ContactFrom = () => {
  return (
    <div className=' my-7 '  >
      <div className=' bg-[#F9F9F9] w-full py-3 ' >
        <MaxWidth>
          <div className=' flex gap-x-8  items-center ' >
            <div>
              <Image src={"/images/contact/cs.png"} width={100} height={100} className=' rounded-full ' alt='' />
            </div>
            <div>
              <div className=' flex flex-row items-center ' >
                <span>
                  <FaHeadphonesAlt />
                </span>
                <h1>Tunem Support</h1>  </div>
              <div className = {` flex item-center gap-x-1  `} >
                {/* image  */}

                  <div>
                    <div className = {` w-3 h-3 bg-green-600 rounded-full mt-1.5 `} ></div>
                  </div>

                <div>
                  <span>Status: Available</span>
                </div>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>
      <MaxWidth>
        <div className="my-6 flex flex-col lg:flex-row  space-y-5   " >
          <div className='  md:w-[50%] w-full  ' >
            {/* email  */}
            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

              <p>
                TUNEM STUDIOS</p>
            </div>
            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>
                Head Office - Malta
              </p>

              <span>
                <FaArrowUp className=' rotate-45 ' />
              </span>


            </div>
            <div className=' h-0.5 w-[40%] bg-black ' />


            {/* Business Inquiries to Paulo */}


            <div className=' my-6 ' >
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <p>TuneM Headquarters</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <p>📍Tigne Point Sliema - Malta SLM3190</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <span>
                  <MdEmail />
                </span>
                <p> <Link href={`mailto:support@tunem.com`}>support@tunem.com</Link> </p>
              </div>
              {/* <div className=' flex items-center text-xl font-semibold gap-x-2    ' >

                <span>
                  <FaArrowUp className=' rotate-45 ' />
                </span>


              </div> */}
              <div className=' h-0.5 w-[44%] bg-black ' />
            </div>

            {/* Artist Inquiries to Ben */}



            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>TuneM Production & Creative Division</p>
            </div>










            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <p>
                📍8 Sienna Grobla - Gdańsk 80-760 Poland
              </p>
            </div>

            <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
              <span>
                <MdEmail />
              </span>
              <p>
                <Link href="mailto:business@tunem.com">business@tunem.com</Link>
              </p>
            </div>


            <div className=' h-0.5 w-[43%] bg-black ' />


            {/* Instagram Support */}


            {/* <div className="my-6" >
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <span>
                  <FaInstagramSquare />
                </span>
                <p>Artist Inquiries to Ben</p>
              </div>
              <div className=' flex items-center text-xl font-semibold gap-x-2    ' >
                <p>
                  support@vocalfy.com
                </p>

                <span>
                  <FaArrowUp className=' rotate-45 ' />
                </span>


              </div>
              <div className=' h-0.5 w-[22%] bg-black ' />
            </div> */}
            <div className=' mt-6 ' >
              Our dedicated team will help you as soon as possible with your inquiry. Get a reply within 24 hours.
            </div>
          </div>
          <div className=' md:w-[50%]  w-full   '  >
            <Image src={"/images/logo/tunem-stdio.jpg"} width={700} height={7000} alt='' className='' />
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default ContactFrom 