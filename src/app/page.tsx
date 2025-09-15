"use client";

import { useState } from 'react';
import Header from '../../components/layout/Header';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import PodcastSection from '../../components/sections/PodcastSection';
import ServiceSection from '../../components/sections/ServiceSection';
import NewsSection from '../../components/sections/NewsSection';
import Footer from '../../components/layout/Footer';
import Popup from '../../components/ui/Popup';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNewsClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="pt-20 w-full overflow-x-hidden">
        <HeroSection onNewsClick={handleNewsClick} />
        <AboutSection />
        <PodcastSection />
        <ServiceSection />
        <NewsSection />
      </main>
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
}