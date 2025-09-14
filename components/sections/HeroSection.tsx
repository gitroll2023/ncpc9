"use client";

import { ArrowRight, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { useScrollAnimation } from '../../lib/useScrollAnimation';

interface HeroSectionProps {
  onNewsClick?: () => void;
}

// 카운트업 애니메이션 훅 (즉시 시작)
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart 이징 함수
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return count;
}

export default function HeroSection({ onNewsClick }: HeroSectionProps) {
  const yearsCount = useCountUp(25, 2000);
  const visitorsCount = useCountUp(50, 2500);
  const daysCount = useCountUp(365, 3000);
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-[#003d7a] to-[#0052a3] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 w-full">
          <div className="max-w-2xl">
            {/* Category Badge */}
            <AnimatedSection delay={0} direction="up">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white text-sm font-medium">나주 문화예술의 중심</span>
              </div>
            </AnimatedSection>

            {/* Main Title */}
            <AnimatedSection delay={200} direction="up">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                문화로 행복한 나주
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection delay={400} direction="up">
              <p className="text-xl lg:text-2xl text-white/90 mb-8">
                나주 문화진흥센터가 시민과 함께<br />
                풍요로운 문화예술의 미래를 만들어갑니다
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#003d7a] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003d7a]/10 to-[#0066cc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">프로그램 안내</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button
                  onClick={onNewsClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Bell className="mr-2 h-5 w-5 relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10">최신소식</span>
                </button>
              </div>
            </AnimatedSection>

            {/* Quick Stats */}
            <AnimatedSection delay={800} direction="up">
              <div className="mt-12 flex gap-4 sm:gap-8 justify-center sm:justify-start">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {yearsCount}년
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">지역문화 선도</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {visitorsCount}만+
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">연간 이용객</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {daysCount}일
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">문화프로그램</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}