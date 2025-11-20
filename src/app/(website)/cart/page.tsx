import React from 'react'
import CartPage from './CartPage'
import Navbar from '@/components/navbar/Navbar'
export const metadata = {
    title: "Cart | Tunem",
    description: "Explore a wide range of professional vocals and cover vocals on Tunem. Hire talented artists or discover trending vocal samples to enhance your next track.",
};

const page: React.FC = () => {
    return (
        <div>
            <div className=' bg-[#f5fff8]  ' >
                <Navbar></Navbar>
                <CartPage></CartPage>
            </div>
        </div>
    )
}

export default page
