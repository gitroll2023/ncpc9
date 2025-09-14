"use client";

import { useState } from 'react';
import { Music, Palette, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { PerformanceModal, ExhibitionModal, EducationModal, CommunityModal } from '../ui/ServiceModal';
import AnimatedSection from '../ui/AnimatedSection';

export default function ServiceSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const services = [
    {
      icon: Music,
      title: '공연예술',
      description: '클래식, 전통예술, 대중문화까지 다양한 공연으로 시민들에게 감동을 선사합니다.',
      modalKey: 'performance'
    },
    {
      icon: Palette,
      title: '전시기획',
      description: '지역 예술가들의 작품전시와 기획전시를 통해 문화적 감성을 키워갑니다.',
      modalKey: 'exhibition'
    },
    {
      icon: GraduationCap,
      title: '문화교육',
      description: '어린이부터 성인까지 체계적인 문화예술 교육프로그램을 제공합니다.',
      modalKey: 'education'
    },
    {
      icon: Users,
      title: '생활문화',
      description: '일상 속에서 즐기는 문화활동으로 삶의 질을 높이고 공동체를 만들어갑니다.',
      modalKey: 'community'
    }
  ];

  return (
    <>
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          {/* Section Header */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                주요 문화사업
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                나주 문화진흥센터는 다양한 문화예술 프로그램을 통해
                시민 여러분의 문화적 삶을 풍요롭게 만들어갑니다
              </p>
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <button
                    onClick={() => setActiveModal(service.modalKey)}
                    className="group relative bg-white rounded-xl p-4 lg:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 text-left w-full overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {/* 그라데이션 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a]/5 via-transparent to-[#0066cc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    
                    {/* 글로우 효과 */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{
                           background: 'radial-gradient(circle at center, rgba(0,61,122,0.1) 0%, transparent 70%)',
                           filter: 'blur(20px)'
                         }}>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-[#003d7a]/10 to-[#0066cc]/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:from-[#003d7a] group-hover:to-[#0066cc] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5 lg:h-7 lg:w-7 text-[#003d7a] group-hover:text-white transition-all duration-500" />
                      </div>
                      <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 group-hover:text-[#003d7a] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-xs lg:text-base line-clamp-2 lg:line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center text-[#003d7a] font-medium group-hover:gap-3 transition-all duration-500 text-xs lg:text-base group-hover:text-[#0066cc]">
                        자세히 보기
                        <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modals */}
      <PerformanceModal
        isOpen={activeModal === 'performance'}
        onClose={() => setActiveModal(null)}
      />
      <ExhibitionModal
        isOpen={activeModal === 'exhibition'}
        onClose={() => setActiveModal(null)}
      />
      <EducationModal
        isOpen={activeModal === 'education'}
        onClose={() => setActiveModal(null)}
      />
      <CommunityModal
        isOpen={activeModal === 'community'}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}