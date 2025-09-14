"use client";

import { useState, useEffect } from 'react';
import { X, Calendar, Clock } from 'lucide-react';

interface PopupData {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
  startDate: string;
  endDate: string;
  link?: string;
}

export default function Popup() {
  const [popups, setPopups] = useState<PopupData[]>([]);
  const [activePopup, setActivePopup] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // 2024년 말 ~ 2025년 9월 12일까지의 팝업 데이터
  const popupData: PopupData[] = [
    {
      id: 1,
      title: "2025 나주 문화예술 페스티벌",
      content: "나주의 문화와 예술이 하나되는 축제!\n다채로운 공연과 전시, 체험 프로그램이 여러분을 기다립니다.",
      startDate: "2025.09.05",
      endDate: "2025.09.12",
      link: "#festival",
      imageUrl: "/images/popup-festival.jpg"
    },
    {
      id: 2,
      title: "가을학기 문화예술 교육프로그램 수강생 모집",
      content: "2025년 가을학기 문화예술 교육프로그램 수강생을 모집합니다.\n음악, 미술, 무용, 연극 등 다양한 프로그램을 만나보세요.",
      startDate: "2025.08.01",
      endDate: "2025.08.31",
      link: "#education"
    },
    {
      id: 3,
      title: "나주 전통문화 특별전시",
      content: "나주의 역사와 전통을 담은 특별 전시회\n우리 지역의 소중한 문화유산을 만나보세요.",
      startDate: "2025.07.15",
      endDate: "2025.09.30",
      link: "#exhibition"
    }
  ];

  useEffect(() => {
    // 오늘 날짜 확인 (2025년 9월 기준으로 설정)
    const today = new Date('2025-09-10'); // 실제로는 new Date()를 사용
    const activePopups = popupData.filter(popup => {
      const endDate = new Date(popup.endDate.replace(/\./g, '-'));
      return endDate >= today;
    });
    setPopups(activePopups);

    // 로컬 스토리지에서 오늘 그만보기 확인
    const hideToday = localStorage.getItem('hidePopupToday');
    const hideDate = localStorage.getItem('hidePopupDate');
    const todayStr = today.toISOString().split('T')[0];

    if (hideToday === 'true' && hideDate === todayStr) {
      setIsVisible(false);
    }
  }, [popupData.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCloseToday = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('hidePopupToday', 'true');
    localStorage.setItem('hidePopupDate', today);
    setIsVisible(false);
  };

  const handleNext = () => {
    setActivePopup((prev) => (prev + 1) % popups.length);
  };

  const handlePrev = () => {
    setActivePopup((prev) => (prev - 1 + popups.length) % popups.length);
  };

  if (!isVisible || popups.length === 0) return null;

  const currentPopup = popups[activePopup];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Popup Content */}
        <div className="p-8">
          {/* Date Badge */}
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003d7a]/10 rounded-full text-sm">
              <Calendar className="h-4 w-4 text-[#003d7a]" />
              <span className="text-[#003d7a] font-medium">
                {currentPopup.startDate} - {currentPopup.endDate}
              </span>
            </div>
            {popups.length > 1 && (
              <div className="text-sm text-gray-500">
                {activePopup + 1} / {popups.length}
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {currentPopup.title}
          </h2>

          {/* Content */}
          <div className="text-gray-600 whitespace-pre-line mb-6">
            {currentPopup.content}
          </div>

          {/* Image (if exists) */}
          {currentPopup.imageUrl && (
            <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
              <span className="text-gray-400">이미지 영역</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {currentPopup.link && (
              <a
                href={currentPopup.link}
                className="flex-1 py-3 px-4 bg-[#003d7a] text-white text-center font-medium rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </a>
            )}
            <button
              onClick={handleCloseToday}
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
            >
              오늘 하루 보지 않기
            </button>
          </div>

          {/* Navigation (if multiple popups) */}
          {popups.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ←
              </button>
              <div className="flex gap-2">
                {popups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePopup(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activePopup ? 'bg-[#003d7a]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="px-8 py-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>문화진흥센터 나주 | ncpc.co.kr</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>운영시간: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}