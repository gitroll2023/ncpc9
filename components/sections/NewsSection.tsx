"use client";

import { useState } from 'react';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { NoticeModal } from '../ui/Modal';
import AnimatedSection from '../ui/AnimatedSection';
import PhotoGallery from '../ui/PhotoGallery';

interface Notice {
  category: string;
  title: string;
  date: string;
  isNew: boolean;
  year: 2025 | 2026;
  summary: string;
  fullContent?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

const notices: Notice[] = [
  {
    category: '활동', title: '가을 생활문화 프로그램 운영', date: '2026.09.12', isNew: true, year: 2026,
    summary: '가을을 맞아 시민과 동호회가 함께하는 생활문화 활동을 이어갑니다.',
    fullContent: `2026년 9월 활동 소식입니다.

      가을을 맞아 시민과 지역 동호회가 일상에서 문화를 가까이 만날 수 있도록 생활문화 프로그램을 운영하고 있습니다.

      - 시민 참여형 생활문화 활동
      - 지역 동호회 연계 프로그램
      - 하반기 문화행사 준비 및 의견 수렴

      문화센터 열림은 앞으로도 시민과 함께 꾸준히 문화 활동을 이어가겠습니다.`
  },
  {
    category: '교류', title: '시민동호회 여름 교류모임', date: '2026.08.22', isNew: false, year: 2026,
    summary: '분야별 동호회가 활동 경험을 나누고 새로운 협업을 이야기했습니다.',
    fullContent: `2026년 8월에는 시민동호회 교류 활동을 진행했습니다.

      음악, 미술, 생활문화 등 다양한 분야에서 활동하는 구성원들이 한자리에 모여 서로의 경험을 나누고 하반기 협업 방향을 함께 이야기했습니다.

      작은 만남이 새로운 문화 활동으로 이어질 수 있도록 지속적으로 교류의 자리를 마련하겠습니다.`
  },
  {
    category: '프로그램', title: '한여름 문화예술 프로그램', date: '2026.07.18', isNew: false, year: 2026,
    summary: '여름에도 쉬지 않고 시민 참여형 문화예술 프로그램을 운영했습니다.',
    fullContent: `2026년 7월, 무더운 여름에도 시민들이 문화예술을 즐길 수 있는 참여형 프로그램을 이어갔습니다.

      누구나 부담 없이 참여하고 서로의 취향과 재능을 발견할 수 있도록 다양한 활동을 구성했습니다. 참여해주신 시민 여러분께 감사드립니다.`
  },
  {
    category: '기록', title: '2026 상반기 활동 돌아보기', date: '2026.06.27', isNew: false, year: 2026,
    summary: '1월부터 6월까지 이어온 만남과 프로그램을 함께 돌아봤습니다.',
    fullContent: `2026년 상반기 활동을 돌아보는 시간을 가졌습니다.

      새해 운영 준비를 시작으로 시민동호회 모임, 봄 생활문화 활동, 문화나눔 프로그램까지 매월 꾸준히 시민과 만났습니다.

      상반기에 나눈 의견을 바탕으로 하반기에도 더 가까운 문화 활동을 만들어가겠습니다.`
  },
  {
    category: '나눔', title: '가정의 달 문화나눔 활동', date: '2026.05.23', isNew: false, year: 2026,
    summary: '세대가 함께 참여하고 마음을 나누는 5월 문화 활동을 진행했습니다.',
    fullContent: `가정의 달을 맞아 세대가 함께 어울릴 수 있는 문화나눔 활동을 진행했습니다.

      가족과 이웃이 문화를 매개로 자연스럽게 만나고 서로의 이야기를 나누는 따뜻한 시간이었습니다.`
  },
  {
    category: '활동', title: '봄맞이 생활문화 활동', date: '2026.04.18', isNew: false, year: 2026,
    summary: '봄의 활기를 담은 시민 참여 프로그램으로 일상에 문화를 더했습니다.',
    fullContent: `2026년 4월, 봄을 맞아 시민 참여형 생활문화 활동을 진행했습니다.

      가까운 일상 속에서 문화예술을 경험하고 이웃과 교류할 수 있도록 편안하고 열린 프로그램을 운영했습니다.`
  },
  {
    category: '교류', title: '시민동호회 정기모임', date: '2026.03.21', isNew: false, year: 2026,
    summary: '동호회별 새해 활동 계획을 공유하고 연간 협력 방향을 논의했습니다.',
    fullContent: `2026년 3월 시민동호회 정기모임을 진행했습니다.

      각 동호회의 활동 계획과 필요한 지원을 나누고, 함께 만들 수 있는 프로그램과 교류 방안을 이야기했습니다.`
  },
  {
    category: '준비', title: '문화예술 프로그램 운영 준비', date: '2026.02.20', isNew: false, year: 2026,
    summary: '시민 의견을 살피며 올해 프로그램의 방향과 운영 일정을 준비했습니다.',
    fullContent: `2026년 2월에는 한 해 동안 이어갈 문화예술 프로그램의 방향과 운영 일정을 준비했습니다.

      시민과 동호회의 의견을 바탕으로 참여하기 쉽고 지속 가능한 활동을 만들기 위한 준비를 차근차근 이어갔습니다.`
  },
  {
    category: '소식', title: '2026년 새해 운영 시작', date: '2026.01.10', isNew: false, year: 2026,
    summary: '새해에도 문화가 일상이 되는 나주를 위해 힘차게 문을 열었습니다.',
    fullContent: `2026년 새해 운영을 시작했습니다.

      문화센터 열림은 올해도 시민과 지역 예술인, 생활문화 동호회가 함께 성장할 수 있도록 매월 꾸준한 활동과 만남을 이어가겠습니다.`
  },
  {
    category: '행사', title: '미리 크리스마스', date: '2025.12.13', isNew: false, year: 2025,
    summary: '동호회 부스와 공연으로 함께한 따뜻한 연말 행사입니다.',
    fullContent: `2025년 12월 13일 문화센터 열림에서 전남 시민동호회 연합과 함께 미리 크리스마스 행사를 진행했습니다.

      동호회 부스 활동, AI 인생 3컷, 참여 이벤트와 딜라이트 공연 등 다채로운 프로그램으로 따뜻한 연말을 함께했습니다.`
  },
  {
    category: '행사', title: '가을愛 문화를 담다', date: '2025.11.08', isNew: false, year: 2025,
    summary: '시민 보컬 동호회 공연과 미니 강연이 함께한 가을 행사입니다.', imageUrl: '/1108.jpg', pdfUrl: '/1108.pdf',
    fullContent: `2025년 11월 8일 나빌레라 문화센터에서 시민 보컬 동호회 공연과 미니 강연을 진행했습니다.

      가을의 아름다움과 문화예술을 함께 담아낸 특별한 시간이었습니다.`
  },
  {
    category: '행사', title: '나주포차', date: '2025.09.05', isNew: false, year: 2025,
    summary: '지역 예술가의 공연과 전시, 먹거리가 어우러진 문화 행사입니다.',
    fullContent: `2025년 9월 5일부터 6일까지 지역 예술가들의 공연과 전시, 먹거리 장터가 함께하는 나주포차를 진행했습니다.`
  },
  {
    category: '행사', title: 'Sing Together 노래대회', date: '2025.08.28', isNew: false, year: 2025,
    summary: '노래를 사랑하는 동호회 회원들이 함께 만든 특별한 무대입니다.',
    fullContent: `2025년 8월 나주 크로스카페에서 Sing Together 노래대회를 진행했습니다. 노래 동호회 회원들이 서로의 무대를 응원하며 즐거운 시간을 나눴습니다.`
  },
  {
    category: '전시', title: '생애그넘어 그림 전시회', date: '2025.08.25', isNew: false, year: 2025,
    summary: '삶과 죽음, 그 너머를 주제로 지역 예술가의 작품을 선보였습니다.',
    fullContent: `삶과 죽음, 그 너머를 주제로 한 지역 예술가들의 작품을 소개했습니다. 인생의 의미를 예술로 되돌아보는 깊이 있는 전시였습니다.`
  },
  {
    category: '행사', title: '나주 문화콘서트', date: '2025.07.05', isNew: false, year: 2025,
    summary: '지역 예술인과 초청 아티스트가 함께한 여름 문화공연입니다.',
    fullContent: `2025년 7월 5일 나주 정미소에서 지역 예술인과 초청 아티스트가 함께하는 나주 문화콘서트를 진행했습니다.`
  },
  {
    category: '행사', title: '사랑愛담다', date: '2025.05.24', isNew: false, year: 2025,
    summary: '사랑을 주제로 음악과 공연을 함께 나눈 봄날의 문화행사입니다.',
    fullContent: `2025년 5월 24일 나주 정미소에서 사랑을 주제로 한 음악과 공연을 선보였습니다.`
  }
];

const categoryStyle: Record<string, string> = {
  행사: 'bg-green-100 text-green-700', 전시: 'bg-purple-100 text-purple-700',
  교류: 'bg-sky-100 text-sky-700', 프로그램: 'bg-amber-100 text-amber-700',
  기록: 'bg-slate-100 text-slate-700', 나눔: 'bg-rose-100 text-rose-700',
  준비: 'bg-indigo-100 text-indigo-700', 활동: 'bg-emerald-100 text-emerald-700',
  소식: 'bg-blue-100 text-blue-700'
};

export default function NewsSection() {
  const [selectedYear, setSelectedYear] = useState<2025 | 2026>(2026);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const filteredNotices = notices.filter((notice) => notice.year === selectedYear);

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-blue-50 text-[#003d7a] text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              2026년 9월까지, 매월 이어온 열림의 기록
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">열림 활동소식</h2>
            <p className="text-lg text-gray-600">시민과 함께 쌓아온 문화 활동을 시간순으로 전해드립니다.</p>
          </div>

          <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#003d7a] to-[#0066cc] p-6 lg:p-8 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-2">2026 ACTIVITY ARCHIVE</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">멈추지 않고, 매달 시민 곁으로</h3>
                <p className="text-white/80">1월의 운영 시작부터 9월 가을 프로그램까지 꾸준히 활동을 이어왔습니다.</p>
              </div>
              <div className="flex items-end gap-3 lg:pr-4">
                <strong className="text-5xl font-bold">9</strong>
                <span className="pb-1 text-blue-100">개월 연속 활동</span>
              </div>
            </div>
            <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden" aria-label="2026년 활동 진행률 9개월">
              <div className="h-full w-3/4 rounded-full bg-white" />
            </div>
          </div>

          <div className="flex justify-center mb-10" role="tablist" aria-label="활동소식 연도 선택">
            <div className="inline-flex rounded-xl bg-gray-100 p-1">
              {([2026, 2025] as const).map((year) => (
                <button key={year} type="button" role="tab" aria-selected={selectedYear === year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${selectedYear === year ? 'bg-white text-[#003d7a] shadow-sm' : 'text-gray-500 hover:text-gray-800'}`}>
                  {year === 2026 ? '2026 현재 활동' : '2025 지난 기록'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNotices.map((notice, index) => (
              <AnimatedSection key={`${notice.year}-${notice.date}`} direction="up" delay={(index % 3) * 80}>
                <button type="button" onClick={() => setSelectedNotice(notice)}
                  className="group flex flex-col w-full h-full text-left p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-[#003d7a]/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between w-full mb-5">
                    <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full ${categoryStyle[notice.category] ?? 'bg-gray-100 text-gray-700'}`}>{notice.category}</span>
                    {notice.isNew && <span className="text-xs font-bold text-[#0066cc]">NEW</span>}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#003d7a] transition-colors">{notice.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 mb-6 flex-1">{notice.summary}</p>
                  <div className="flex items-center justify-between w-full pt-4 border-t border-gray-100">
                    <span className="flex items-center text-sm text-gray-500"><Calendar className="h-4 w-4 mr-2 text-[#003d7a]" />{notice.date}</span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#003d7a] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {selectedYear === 2025 && (
            <AnimatedSection direction="up" delay={200}>
              <div className="mt-20"><PhotoGallery title="가을愛 문화를 담다 - 행사 사진" subtitle="2025년 11월 8일, 나빌레라 문화센터에서 열린 특별한 순간들" /></div>
            </AnimatedSection>
          )}
        </AnimatedSection>
      </div>

      <NoticeModal notice={selectedNotice} isOpen={selectedNotice !== null} onClose={() => setSelectedNotice(null)} />
    </section>
  );
}
