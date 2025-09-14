"use client";

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { NoticeModal, BookingModal, EnrollmentModal } from '../ui/Modal';
import AnimatedSection from '../ui/AnimatedSection';

interface Notice {
  category: string;
  title: string;
  date: string;
  isNew: boolean;
  fullContent?: string;
}

export default function NewsSection() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

  const notices = [
    {
      category: '공지',
      title: '2025 나주 문화예술 페스티벌 개최 안내',
      date: '2025.09.05',
      isNew: true,
      fullContent: `2025 나주 문화예술 페스티벌이 9월 5일부터 12일까지 개최됩니다.

      올해로 10회째를 맞는 나주 문화예술 페스티벌은 '문화로 하나되는 나주'를 주제로
      다양한 공연, 전시, 체험 프로그램을 준비했습니다.

      주요 프로그램:
      - 개막 공연: 나주시립합창단 & 게스트 아티스트
      - 전시: 나주 작가 30인전
      - 체험: 전통공예, 미술, 음악 체험 부스
      - 특별 이벤트: 문화예술 경연대회, 플리마켓

      많은 관심과 참여 부탁드립니다.`
    },
    {
      category: '행사',
      title: '가을 정기공연 "나주의 소리" 티켓 오픈',
      date: '2025.09.03',
      isNew: true,
      fullContent: `가을 정기공연 "나주의 소리" 티켓 예매가 시작되었습니다.

      공연 정보:
      - 일시: 2025년 9월 20일(토) 오후 7시
      - 장소: 문화진흥센터 대공연장
      - 출연: 나주시립국악단, 특별 게스트
      - 티켓: 전석 20,000원

      예매 방법:
      - 온라인: ncpc.co.kr
      - 현장: 문화진흥센터 1층 안내데스크`
    },
    {
      category: '공지',
      title: '추석 연휴 운영시간 변경 안내',
      date: '2025.09.01',
      isNew: false
    },
    {
      category: '행사',
      title: '청소년 문화예술 경연대회 참가자 모집',
      date: '2025.08.28',
      isNew: false
    },
    {
      category: '공지',
      title: '2025년 하반기 문화예술 교육프로그램 안내',
      date: '2025.08.25',
      isNew: false
    }
  ];

  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice);
    setIsNoticeModalOpen(true);
  };

  return (
    <>
      <section id="news" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <AnimatedSection direction="up" delay={0}>
            <div className="grid lg:grid-cols-3 gap-8">
            {/* News List */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="up" delay={0}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">알림마당</h2>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 100}>
                    <button
                      onClick={() => handleNoticeClick(notice)}
                      className="block w-full text-left p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                            notice.category === '공지'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {notice.category}
                          </span>
                          {notice.isNew && (
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-[#003d7a] transition-colors">
                          {notice.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {notice.date}
                        </div>
                      </div>
                    </div>
                    </button>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <AnimatedSection direction="left" delay={200}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">바로가기</h3>
              </AnimatedSection>
              <div className="space-y-3">
                <AnimatedSection direction="left" delay={300}>
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="block w-full text-left p-4 bg-[#003d7a] text-white rounded-lg hover:bg-[#002a56] transition-colors duration-200"
                  >
                    <div className="font-medium mb-1">공연 예매</div>
                    <div className="text-sm opacity-90">현재 예매 가능한 공연 보기</div>
                  </button>
                </AnimatedSection>
                <AnimatedSection direction="left" delay={400}>
                  <button
                    onClick={() => setIsEnrollmentModalOpen(true)}
                    className="block w-full text-left p-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <div className="font-medium mb-1">수강 신청</div>
                    <div className="text-sm text-gray-600">문화예술 교육프로그램</div>
                  </button>
                </AnimatedSection>
              </div>

              {/* Contact Info */}
              <AnimatedSection direction="left" delay={500}>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">문의</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>이메일: contact@ncpc.co.kr</div>
                    <div>운영시간: 평일 09:00 - 18:00</div>
                    <div>주말/공휴일: 09:00 - 17:00</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
        </div>
      </section>

      {/* Modals */}
      <NoticeModal
        notice={selectedNotice}
        isOpen={isNoticeModalOpen}
        onClose={() => setIsNoticeModalOpen(false)}
      />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
      />
    </>
  );
}