
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import EmergencyButton from '@/components/EmergencyButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <EmergencyButton />
    </div>
  );
};

export default Index;
