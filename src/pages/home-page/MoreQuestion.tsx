import MaxWidth from '@/components/max-width/MaxWidth'
import Link from 'next/link'
import React from 'react'

const MoreQuestion = () => {
    return (
        <div className=' mb-10 lg:mb-16 space-y-4 ' >
            <MaxWidth>
                <h1 className={`text-center lg:text-4xl text-xl font-semibold `} >More questions?</h1>
                <p className={`text-center mt-1 textColor lg:text-2xl text-lg my-2 `} >
                    Visit our <Link className=' ' href={"/faq"} >FAQ </Link> or
                </p>
                <div className={" h-0.5 w-14 bg-[#818080] flex justify-center ml-[51%]  "} ></div>
                <div>
                    <Link className={" flex justify-center mt-2 "} href={`/contact`}>
                        <button className={` btnColor px-4 cursor-pointer py-1.5  rounded text-sm font-semibold   `} >
                            CONTACT 24/7 SUPPORT
                        </button>
                    </Link>
                </div>
            </MaxWidth>
        </div>
    )
}

export default MoreQuestion