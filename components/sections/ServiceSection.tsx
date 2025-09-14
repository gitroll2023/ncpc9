"use client";

import { useState } from 'react';
import { Music, Palette, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { PerformanceModal, ExhibitionModal, EducationModal, CommunityModal } from '../ui/ServiceModal';

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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              주요 문화사업
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              나주 문화진흥센터는 다양한 문화예술 프로그램을 통해
              시민 여러분의 문화적 삶을 풍요롭게 만들어갑니다
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveModal(service.modalKey)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 group text-left w-full"
                >
                  <div className="w-14 h-14 bg-[#003d7a]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#003d7a] transition-colors duration-300">
                    <Icon className="h-7 w-7 text-[#003d7a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-[#003d7a] font-medium group-hover:gap-2 transition-all duration-300">
                    자세히 보기
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </button>
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