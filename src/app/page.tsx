"use client";

import Header from '../../components/layout/Header';
import HeroSection from '../../components/sections/HeroSection';
import PodcastSection from '../../components/sections/PodcastSection';
import ServiceSection from '../../components/sections/ServiceSection';
import NewsSection from '../../components/sections/NewsSection';
import Footer from '../../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PodcastSection />
        <ServiceSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}