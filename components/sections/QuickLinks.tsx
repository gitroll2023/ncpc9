'use client'

import {
  Calendar,
  BookOpen,
  Users,
  MapPin,
  Phone,
  FileText,
  Clock
} from 'lucide-react'

const QuickLinks = () => {
  const quickLinks = [
    {
      icon: Calendar,
      title: '프로그램 신청',
      description: '다양한 문화 프로그램 신청',
      link: '#programs',
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: BookOpen,
      title: '시설 예약',
      description: '강당, 세미나실 등 시설 예약',
      link: '#reservation',
      color: 'bg-green-50 text-green-600',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: Users,
      title: '동아리 신청',
      description: '문화 동아리 가입 및 개설',
      link: '#clubs',
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      icon: MapPin,
      title: '오시는 길',
      description: '위치 안내 및 교통편',
      link: '#location',
      color: 'bg-orange-50 text-orange-600',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      icon: Phone,
      title: '문의하기',
      description: '전화 및 온라인 상담',
      link: '#contact',
      color: 'bg-red-50 text-red-600',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: FileText,
      title: '온라인 신청서',
      description: '각종 신청서 다운로드',
      link: '#forms',
      color: 'bg-indigo-50 text-indigo-600',
      hoverColor: 'hover:bg-indigo-100'
    }
  ]

  const operatingHours = [
    {
      icon: Clock,
      title: '운영시간 안내',
      schedules: [
        { day: '평일', time: '09:00 - 22:00', status: 'open' },
        { day: '토요일', time: '09:00 - 18:00', status: 'open' },
        { day: '일요일·공휴일', time: '휴관', status: 'closed' }
      ]
    }
  ]

  const facilities = [
    {
      name: '대강당',
      capacity: '300석',
      features: ['음향시설', '조명시설', '무대'],
      available: true
    },
    {
      name: '세미나실',
      capacity: '50석',
      features: ['프로젝터', '화이트보드', '음향시설'],
      available: true
    },
    {
      name: '전시실',
      capacity: '200㎡',
      features: ['전시조명', '작품걸이', '안내데스크'],
      available: false
    },
    {
      name: '연습실',
      capacity: '20석',
      features: ['피아노', '거울', '음향시설'],
      available: true
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            빠른 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            자주 찾는 서비스를 한 번에 이용하세요
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.link}
                className={`group bg-white rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${link.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${link.hoverColor} transition-colors duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                  {link.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </a>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Operating Hours */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">운영시간</h3>
            </div>

            <div className="space-y-4">
              {operatingHours[0].schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">
                      {schedule.day}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium">
                      {schedule.time}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        schedule.status === 'open' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>※ 휴관일:</strong> 매주 월요일, 신정, 설날, 추석 연휴
              </p>
            </div>
          </div>

          {/* Facility Status */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">시설 현황</h3>
            </div>

            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold text-gray-900">
                        {facility.name}
                      </h4>
                      <span className="text-sm text-gray-600">
                        {facility.capacity}
                      </span>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        facility.available
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {facility.available ? '예약가능' : '예약불가'}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200">
                시설 예약하기
              </button>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            궁금한 점이 있으신가요?
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            전문 상담원이 친절하게 안내해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <Phone className="h-5 w-5" />
         
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
              온라인 문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickLinks