"use client";

import { Users, Award, Calendar, Home, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';


export default function AboutSection() {
  const features = [
    {
      icon: Home,
      title: '최신 문화시설',
      description: '최첨단 공연장과 전시실을 갖춘 복합문화공간'
    },
    {
      icon: Users,
      title: '지역사회 중심',
      description: '시민과 함께 만들어가는 문화예술 커뮤니티'
    },
    {
      icon: Award,
      title: '전문 프로그램',
      description: '수준 높은 문화예술 교육 및 체험 프로그램 운영'
    },
    {
      icon: Calendar,
      title: '다양한 행사',
      description: '연중 다채로운 문화행사와 공연 개최'
    }
  ];

  const achievements = [
    '연간 300회 이상 문화예술 프로그램 운영',
    '누적 방문객 50만명 돌파',
    '지역 예술가 200팀 이상 지원',
    '시민 만족도 95% 달성'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-[#003d7a]"></div>
              <span className="text-[#003d7a] font-medium uppercase tracking-wider text-sm">About NCPC</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              문화진흥센터 나주
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              나주시 문화예술의 중심지로서 시민의 문화적 삶의 질 향상과
              지역 문화예술 발전을 선도하는 전문 문화기관입니다.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Description */}
          <AnimatedSection direction="left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                문화가 일상이 되는 공간
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  문화진흥센터는 2020년 개관 이래 지역 문화예술 발전의 중추적 역할을
                  담당하고 있습니다. 최신 시설과 전문 인력을 바탕으로 수준 높은 문화예술
                  프로그램을 제공하며, 시민 모두가 문화를 향유할 수 있는 열린 공간을 지향합니다.
                </p>
                <p>
                  우리 센터는 단순한 문화시설을 넘어 지역사회의 문화적 허브로서, 예술가와 시민,
                  전통과 현대, 지역과 세계를 연결하는 가교 역할을 수행하고 있습니다.
                </p>
              </div>

              {/* Vision Box */}
              <div className="mt-8 p-6 border-l-4 border-[#003d7a] bg-gray-50">
                <h4 className="font-bold text-lg text-[#003d7a] mb-2">VISION 2025</h4>
                <p className="text-gray-700">
                  "문화로 하나되는 행복한 나주, 시민과 함께 만들어가는 문화도시"
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Achievements */}
          <AnimatedSection direction="right" delay={400}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                주요 성과
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-[#003d7a]" />
                    </div>
                    <p className="text-gray-700 font-medium">{achievement}</p>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#003d7a] mb-1">
                    2020
                  </div>
                  <div className="text-sm text-gray-600">개관년도</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#003d7a] mb-1">
                    365
                  </div>
                  <div className="text-sm text-gray-600">연중무휴 운영</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#003d7a] mb-1">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">전문 강사진</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-[#003d7a] mb-1">
                    1,500
                  </div>
                  <div className="text-sm text-gray-600">수용 인원</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <div className="border-t pt-16">
          <AnimatedSection direction="up" delay={0}>
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
              핵심 역량
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 100}>
                <div
                  className="group relative hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 rounded-xl p-4 lg:p-6 overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* 그라데이션 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003d7a]/5 via-transparent to-[#0066cc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  {/* 글로우 효과 */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{
                         background: 'radial-gradient(circle at center, rgba(0,61,122,0.08) 0%, transparent 70%)',
                         filter: 'blur(15px)'
                       }}>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-[#003d7a]/10 to-[#0066cc]/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:from-[#003d7a] group-hover:to-[#0066cc] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="w-5 h-5 lg:w-7 lg:h-7 text-[#003d7a] group-hover:text-white transition-all duration-500" />
                    </div>
                    <h4 className="text-sm lg:text-lg font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-[#003d7a] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}