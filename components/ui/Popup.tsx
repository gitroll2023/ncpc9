"use client";

import { useState, useEffect } from 'react';
import { X, Calendar, ChevronRight } from 'lucide-react';

interface PopupData {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  theme?: string;
  startDate?: string;
  endDate: string;
  link?: string;
}

interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPopup, setIsAutoPopup] = useState(false);

  const popupData: PopupData = {
    id: 1,
    title: "2025 인문학 강연",
    subtitle: "삶의 깊이를 더하는 시간",
    content: "2025년 9월 16일부터\n인문학 강연이 진행됩니다.",
    theme: "인문학이란?",
    endDate: "2025.09.20",
    link: "#humanities"
  };

  useEffect(() => {
    // 외부에서 제어되는 경우 (버튼으로 열린 경우)
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
      setIsAutoPopup(false); // 버튼으로 열린 경우
      return;
    }

    // 자동 팝업 로직 (기존)
    const today = new Date();
    const todayStr = today.toDateString();

    const hideUntil = localStorage.getItem(`popup_hide_until`);

    if (hideUntil) {
      const hideDate = new Date(hideUntil);
      if (today < hideDate) {
        setIsVisible(false);
        return;
      }
    }

    setIsVisible(true);
    setIsAutoPopup(true); // 자동으로 열린 경우
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleDontShowToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem(`popup_hide_until`, tomorrow.toISOString());
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Premium Header Design */}
        <div className="relative bg-gradient-to-br from-[#003d7a] to-[#0066cc] p-8 text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
            aria-label="닫기"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-white/80" />
              <span className="text-sm font-medium text-white/90">Special Lecture</span>
            </div>

            <h2 className="text-2xl font-bold mb-2 text-white">
              {popupData.title}
            </h2>

            {popupData.subtitle && (
              <p className="text-lg text-white/90 font-light italic">
                {popupData.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="text-center">
            <p className="text-xl font-medium text-gray-800 mb-4 whitespace-pre-line">
              {popupData.content}
            </p>

            {popupData.theme && (
              <div className="mt-6">
                <div className="rounded-lg p-6 bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d7a] to-[#0066cc]"></div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003d7a] text-white text-xs font-medium rounded-full mb-4">
                      <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      1회차 강연주제
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight">
                      {popupData.theme}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* Footer Controls */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
            {isAutoPopup && (
              <button
                onClick={handleDontShowToday}
                className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors"
              >
                1일간 보지 않기
              </button>
            )}
            <button
              onClick={handleClose}
              className={`text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors ${!isAutoPopup ? 'ml-auto' : ''}`}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* Animation Style */}
<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`}</style>