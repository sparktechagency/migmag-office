import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Footer from '@/components/footer/Footer'
import HireFrom from './HireFrom'


const Page = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params;

    return (
        <div>
            <Navbar />
            <HireFrom slug={slug} />
            <Footer />
        </div>
    );
};

export default Page;
