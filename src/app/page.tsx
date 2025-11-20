import React from 'react';

import type { Metadata } from 'next';
import CookieConsent from '@/components/cookie/cookie-consent';
import UpdateFooter from '@/components/footer/UpdateFooter';
import MoreQuestion from '@/pages/home-page/MoreQuestion';
import Review from '@/pages/home-page/Review';
import Coverd from '@/pages/home-page/Coverd';
import UseSound from '@/pages/home-page/UseSound';
import VocalPublish from '@/pages/home-page/VocalPublish';
import ArtistList from '@/pages/home-page/ArtistList';
import TopTenVocal from '@/pages/home-page/TopTenVocal';
import MusicSlider from '@/components/home/MusickSlider';
import VocalPublishLogo from '@/pages/home-page/VocalPublishLogo';
import HomeBanner from '@/pages/home-page/HomeBanner';
import Navbar from '@/components/navbar/Navbar';
import MemberShip from '@/pages/home-page/membership/MemberShip';

export const metadata: Metadata = {
  title: 'Home - Tunem',
  description: 'Discover new music, artists, and podcasts on Tunem. Explore trending tracks and more.',
};

const HomePageWrapper: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Overlay Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FCFF] via-[#FEFEFE] to-transparent pointer-events-none"></div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <div>
          <HomeBanner />
        </div>
        <div>
          <VocalPublishLogo />
        </div>

        <MusicSlider />

        <div className="lg:mt-[69px] mt-6">
          <TopTenVocal />
        </div>

        <ArtistList />

        {/* membership */}
        <MemberShip />

        <VocalPublish />
        <UseSound />

        <Coverd />

        <Review />

        <MoreQuestion />

        <UpdateFooter />
        <CookieConsent />
      </div>
    </div>
  );
};


export default HomePageWrapper;
