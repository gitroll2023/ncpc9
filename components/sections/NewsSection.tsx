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
  imageUrl?: string;
  pdfUrl?: string;
}

export default function NewsSection() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);

  const notices = [
    {
      category: '행사',
      title: '가을愛 문화를 담다',
      date: '2025.11.08',
      isNew: true,
      imageUrl: '/1108.jpg',
      pdfUrl: '/1108.pdf',
      fullContent: `가을愛 문화를 담다 행사가 11월 8일(토)에 개최됩니다.

      행사 정보:
      - 일시: 2025년 11월 8일(토) 오후 2시~3시
      - 장소: 나빌레라 문화센터
      - 내용: 나주 시민 보컬 동호회 공연 및 미니 강연

      가을의 아름다움과 문화예술을 함께 담아내는 특별한 시간입니다.
      시민 여러분의 많은 관심과 참여를 부탁드립니다.

      행사 상세 일정 및 프로그램 안내는 첨부된 PDF 파일을 참고해 주세요.`
    },
    {
      category: '행사',
      title: '나주포차',
      date: '2025.09.05',
      isNew: false,
      fullContent: `나주포차가 9월 5일(금)부터 6일(토)까지 개최됩니다.

      행사 정보:
      - 일시: 2025년 9월 5일(금) ~ 6일(토)
      - 장소: CGV건물 3층
      - 내용: 지역 예술가들의 공연, 전시, 먹거리 장터

      다양한 문화 콘텐츠와 함께 나주의 밤을 즐겨보세요!
      많은 관심과 참여 부탁드립니다.`
    },
    {
      category: '행사',
      title: 'Sing Together 노래대회',
      date: '2025.08.28',
      isNew: false,
      fullContent: `Sing Together (싱투게더 동호회 개최 - 노래대회)

      행사 정보:
      - 장소: 나주 크로스카페
      - 내용: 노래 동호회 회원들의 노래 대회

      노래를 사랑하는 동호회 회원들의 실력을 뽐낼 수 있는
      특별한 무대를 준비했습니다.

      문의: 크로스카페`
    },
    {
      category: '전시',
      title: '생애그넘어 (그림 전시회)',
      date: '2025.08.25',
      isNew: false,
      fullContent: `'생애그넘어' 그림 전시회를 개최합니다.

      전시 정보:
      - 내용: 삶과 죽음, 그 너머를 주제로 한 작품 전시
      - 참여 작가: 지역 예술가들

      인생의 의미를 되돌아보고 예술로 승화시킨
      깊이 있는 작품들을 만나보실 수 있습니다.

      많은 관람 부탁드립니다.`
    },
    {
      category: '행사',
      title: '나주 문화콘서트',
      date: '2025.07.05',
      isNew: false,
      fullContent: `나주 문화콘서트가 7월 5일에 개최됩니다.

      행사 정보:
      - 일시: 2025년 7월 5일
      - 장소: 나주 정미소
      - 출연: 지역 예술인 및 초청 아티스트

      여름밤을 수놓을 아름다운 음악과 함께
      나주 정미소에서 특별한 시간을 보내세요.

      많은 관심과 참여 부탁드립니다.`
    },
    {
      category: '행사',
      title: '사랑愛담다',
      date: '2025.05.24',
      isNew: false,
      fullContent: `사랑愛담다 공연이 5월 24일(토)에 개최됩니다.

      행사 정보:
      - 일시: 2025년 5월 24일(토)
      - 장소: 나주 정미소
      - 내용: 사랑을 주제로 한 음악, 무용, 연극 공연

      따뜻한 봄날, 사랑을 담은 감동적인 공연으로
      여러분을 초대합니다.

      문의: contact@ncpc.co.kr`
    }
  ];

  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice);
    setIsNoticeModalOpen(true);
  };

  return (
    <>
      <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <AnimatedSection direction="up" delay={0}>
            <div>
            {/* News List */}
            <div>
              <AnimatedSection direction="up" delay={0}>
                <div className="mb-10 text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">알림마당</h2>
                  <p className="text-lg text-gray-600">문화센터 열림의 다양한 소식을 전해드립니다</p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notices.map((notice, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 100}>
                    <button
                      onClick={() => handleNoticeClick(notice)}
                      className="block w-full text-left p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#003d7a]/20 transition-all duration-200 hover:-translate-y-1 h-full"
                    >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full ${
                            notice.category === '공지'
                              ? 'bg-blue-100 text-blue-700'
                              : notice.category === '전시'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {notice.category}
                          </span>
                          {notice.isNew && (
                            <span className="inline-block px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#003d7a] transition-colors line-clamp-2 min-h-[3rem]">
                          {notice.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-auto">
                          <Calendar className="h-4 w-4 mr-2 text-[#003d7a]" />
                          <span className="font-medium">{notice.date}</span>
                        </div>
                      </div>
                    </div>
                    </button>
                  </AnimatedSection>
                ))}
              </div>
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