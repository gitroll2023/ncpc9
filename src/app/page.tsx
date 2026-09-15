import Header from '../../components/layout/Header';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import ServiceSection from '../../components/sections/ServiceSection';
import NewsSection from '../../components/sections/NewsSection';
import OrganizationApplicationSection from '../../components/sections/OrganizationApplicationSection';
import Footer from '../../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="pt-20 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <NewsSection />
        <OrganizationApplicationSection />
      </main>
      <Footer />
    </div>
  );
}
