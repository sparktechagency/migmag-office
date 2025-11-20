import MaxWidth from "@/components/max-width/MaxWidth";
import Image from "next/image";

interface FeatureItem {
    icon: string;
    title: string;
    // description: string;
}

const FeatureSection: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: "/update-image/tuneM-Artist/logo/earn.png",
            title: "Earn from Your Talent",
            // description: 'Work with singers - vetted by us for skill and quality.',
        },
        {
            icon: "/update-image/tuneM-Artist/logo/vocal.png",
            title: 'Build Your Vocal Catalogue',
            // description: 'Safe and secure site with hundreds of verified reviews.',
        },
        {
            icon: "/update-image/tuneM-Artist/logo/creative.png",
            title: 'Time & Creative Freedom',
            // description: 'Our vocalists will deliver the recording within 10 days.',
        },
    ];

    return (
        <MaxWidth>
            <section  className="  pt-8 lg:pt-16 bg-white">
                <h1 className={` font-bold lg:text-4xl text-2xl headerColor text-center mb-10  `} >Why TuneM?</h1>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <span className={   ` flex justify-center `} >
                                <Image src={feature?.icon} width={160} height={160} className={` object-cover w-40 h-40 `} alt={feature.title}/>
                            </span>
                            <h3 className=" lg:text-2xl text-xl headerColor font-semibold  mb-2">{feature.title}</h3>
                            {/*<p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>*/}
                        </div>
                    ))}
                </div>
            </section>
        </MaxWidth>
    );
};

export default FeatureSection;
