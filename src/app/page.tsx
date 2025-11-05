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
  const [isPopupOpen, setIsPopupOpen] = useState<boolean | undefined>(undefined);

  const handleNewsClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    // 팝업을 닫을 때는 undefined로 리셋하여 자동 팝업이 다시 작동할 수 있도록 함
    // 하지만 localStorage에 저장된 경우에는 다시 나타나지 않음
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
      {/* 자동 팝업: isOpen이 undefined일 때 자동 팝업 활성화 */}
      {/* 수동 팝업: isOpen이 true일 때 표시 */}
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
}