'use client';
import React from 'react';
import DashboardBanner from './DashboardBanner';
import dynamic from 'next/dynamic';

// Hero কে client-only বানানো, SSR বন্ধ
const Hero = dynamic(() => import('./Hero'), { ssr: false });

const UserDashboard: React.FC = () => {
  return (
    <>
      <DashboardBanner />
      <Hero />
    </>
  );
};

export default UserDashboard;
