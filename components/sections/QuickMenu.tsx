"use client";

import {
  Calculator,
  FileText,
  Phone,
  CreditCard,
  Search,
  Building,
  Clock,
  Shield
} from 'lucide-react';

export default function QuickMenu() {
  const quickMenuItems = [
    {
      icon: Calculator,
      title: '보험료 조회',
      description: '내 보험료를 간편하게',
      link: '/service/premium',
      color: 'bg-kb-navy',
      hoverColor: 'hover:bg-kb-navy-dark',
      popular: true
    },
    {
      icon: FileText,
      title: '보험금 청구',
      description: '보험금 청구 및 진행현황',
      link: '/service/claim',
      color: 'bg-kb-blue',
      hoverColor: 'hover:bg-kb-blue-dark',
      popular: true
    },
    {
      icon: Search,
      title: '계약정보 조회',
      description: '내 보험 계약정보 확인',
      link: '/service/contract',
      color: 'bg-kb-navy-light',
      hoverColor: 'hover:bg-kb-navy',
      popular: true
    },
    {
      icon: Phone,
      title: '상담 신청',
      description: '전문가 무료 상담',
      link: '/service/consultation',
      color: 'bg-kb-blue-light',
      hoverColor: 'hover:bg-kb-blue',
      popular: false
    },
    {
      icon: CreditCard,
      title: '각종 신청',
      description: '변경신청, 서류발급',
      link: '/service/application',
      color: 'bg-kb-gray-700',
      hoverColor: 'hover:bg-kb-gray-800',
      popular: false
    },
    {
      icon: Building,
      title: '지점 찾기',
      description: '가까운 지점 안내',
      link: '/branch',
      color: 'bg-kb-gray-600',
      hoverColor: 'hover:bg-kb-gray-700',
      popular: false
    }
  ];

  const customerCenter = [
    {
      title: '고객센터',
      phone: '1588-1003',
      hours: '평일 09:00~18:00',
      description: '보험 관련 모든 상담'
    },
    {
      title: '보험금센터',
      phone: '1588-1004',
      hours: '평일 09:00~18:00',
      description: '보험금 청구 전용'
    }
  ];

  const announcements = [
    {
      type: '중요',
      title: 'KB생명 모바일 서비스 시스템 점검 안내',
      date: '2024.01.15',
      badge: 'hot'
    },
    {
      type: '안내',
      title: '2024년 보험료 납입방법 변경 안내',
      date: '2024.01.10',
      badge: null
    },
    {
      type: '공지',
      title: '설 연휴 고객센터 운영시간 변경 안내',
      date: '2024.01.05',
      badge: null
    }
  ];

  return (
    <section className="py-16 bg-kb-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-kb-gray-900 mb-4">
            빠른 서비스
          </h2>
          <p className="text-lg text-kb-gray-600">
            고객님이 자주 이용하는 서비스를 쉽고 빠르게 이용하세요
          </p>
        </div>

        {/* Quick Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickMenuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="group relative bg-white rounded-sm p-6 text-center hover:shadow-lg transition-all duration-300 border border-kb-gray-200 hover:-translate-y-1"
              >
                {item.popular && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    인기
                  </div>
                )}
                <div className={`w-12 h-12 ${item.color} ${item.hoverColor} rounded-sm flex items-center justify-center mx-auto mb-3 transition-colors duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-kb-gray-900 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-kb-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Center */}
          <div className="bg-white rounded-sm p-8 border border-kb-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-kb-blue/10 rounded-sm flex items-center justify-center">
                <Phone className="h-6 w-6 text-kb-blue" />
              </div>
              <h3 className="text-xl font-bold text-kb-gray-900">고객센터</h3>
            </div>

            <div className="space-y-4">
              {customerCenter.map((center, index) => (
                <div
                  key={index}
                  className="p-4 bg-kb-gray-50 rounded-sm border border-kb-gray-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-kb-gray-900">
                      {center.title}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-kb-gray-600" />
                      <span className="text-sm text-kb-gray-600">
                        {center.hours}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-kb-navy">
                      {center.phone}
                    </span>
                    <span className="text-sm text-kb-gray-600">
                      {center.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-kb-navy/5 rounded-sm border border-kb-navy/20">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-kb-navy" />
                <span className="text-sm font-medium text-kb-navy">
                  안전한 보험금 지급을 위한 안내
                </span>
              </div>
              <p className="text-xs text-kb-gray-600 leading-relaxed">
                보험금 지급 관련 문의시 개인정보 보호를 위해 본인확인 절차가 진행됩니다.
              </p>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="bg-white rounded-sm p-8 border border-kb-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-kb-gray-700/10 rounded-sm flex items-center justify-center">
                  <FileText className="h-6 w-6 text-kb-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-kb-gray-900">최근 공지사항</h3>
              </div>
              <a
                href="/news/notice"
                className="text-sm text-kb-gray-600 hover:text-kb-navy transition-colors"
              >
                전체보기
              </a>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-kb-gray-50 rounded-sm transition-colors duration-200 border border-transparent hover:border-kb-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded ${
                        announcement.type === '중요'
                          ? 'bg-red-100 text-red-700'
                          : announcement.type === '안내'
                          ? 'bg-kb-blue/10 text-kb-blue'
                          : 'bg-kb-gray-100 text-kb-gray-700'
                      }`}>
                        {announcement.type}
                      </span>
                      {announcement.badge === 'hot' && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                          HOT
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-kb-gray-500">
                      {announcement.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-kb-gray-900 hover:text-kb-navy transition-colors cursor-pointer">
                    {announcement.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/news/notice"
                className="block w-full py-3 text-center border border-kb-gray-300 text-kb-gray-700 rounded font-medium hover:bg-kb-gray-50 hover:border-kb-gray-400 transition-all duration-200"
              >
                공지사항 더보기
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact CTA */}
        <div className="mt-16 bg-kb-navy rounded-sm p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            문화예술 프로그램에 관심이 있으신가요?
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            나주시민 여러분을 위한 다양한 문화예술 프로그램을 만나보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded">
              <Phone className="h-6 w-6" />
              <div className="text-left">
                <div className="font-bold text-lg">061-333-7000</div>
                <div className="text-sm text-white/80">평일 09:00~18:00</div>
              </div>
            </div>
            <a
              href="/programs/regular"
              className="bg-white text-kb-navy px-8 py-4 rounded font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              프로그램 둘러보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}