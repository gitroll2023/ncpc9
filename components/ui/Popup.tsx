"use client";

import { useState, useEffect } from 'react';
import { X, Calendar, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface PopupData {
  id: number;
  title: string;
  subtitle?: string;
  content: string;
  theme?: string;
  startDate?: string;
  endDate: string;
  link?: string;
  imageUrl?: string;
  imageDescription?: string;
}

interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPopup, setIsAutoPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSize, setImageSize] = useState<{ width: number; height: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const popupData: PopupData = {
    id: 1,
    title: "공지사항",
    subtitle: "중요 안내",
    content: "",
    theme: "",
    endDate: "",
    link: "",
    imageUrl: "/1108.jpg",
    imageDescription: "중요한 공지사항을 확인해 주시기 바랍니다."
  };

  useEffect(() => {
    // 외부에서 명시적으로 열라고 한 경우 (isOpen === true)
    if (isOpen === true) {
      setIsVisible(true);
      setIsAutoPopup(false);
      return;
    }

    // 외부에서 명시적으로 닫으라고 한 경우 (isOpen === false)
    if (isOpen === false) {
      setIsVisible(false);
      setIsAutoPopup(false);
      return;
    }

    // 자동 팝업 로직 (isOpen이 undefined일 때만)
    if (isOpen === undefined) {
      const today = new Date();
      const hideUntil = localStorage.getItem(`popup_hide_until`);

      if (hideUntil) {
        const hideDate = new Date(hideUntil);
        if (today < hideDate) {
          setIsVisible(false);
          setIsAutoPopup(false);
          return;
        }
      }

      // 자동 팝업 표시
      setIsVisible(true);
      setIsAutoPopup(true);
    }
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
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-2 sm:p-4">
      <div className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl w-full mx-auto overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]"
           style={{
             maxWidth: imageSize 
               ? `min(95vw, ${Math.min(imageSize.width + 40, 1200)}px)`
               : '95vw'
           }}>
        {/* Header - 컴팩트하게 */}
        <div className="relative bg-gradient-to-br from-[#003d7a] to-[#0066cc] px-3 py-2 sm:px-4 sm:py-3 text-white flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 hover:bg-white/30 rounded-full transition-all duration-200 z-10 group hover:scale-110 active:scale-95"
            aria-label="닫기"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          <div className="relative z-10 pr-8">
            {popupData.title && (
              <h2 className="text-sm sm:text-lg font-bold text-white">
                {popupData.title}
              </h2>
            )}
            {popupData.subtitle && (
              <p className="text-xs sm:text-sm text-white/90 font-light">
                {popupData.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Image Section - 여백 최소화, 반응형 처리 */}
        {popupData.imageUrl && (
          <div className="relative w-full flex-shrink-0 overflow-auto">
            <div className="relative w-full overflow-hidden" style={{
              aspectRatio: imageSize 
                ? `${imageSize.width} / ${imageSize.height}`
                : 'auto',
              minHeight: '150px',
              maxHeight: isMobile 
                ? 'calc(95vh - 100px)' 
                : 'calc(90vh - 120px)'
            }}>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-pulse flex flex-col items-center gap-2">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                    <span className="text-sm text-gray-500">이미지 로딩 중...</span>
                  </div>
                </div>
              )}
              <Image
                src={popupData.imageUrl}
                alt={popupData.title || "공지사항 이미지"}
                fill
                className={`object-contain sm:object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1200px) 90vw, 1200px"
                onLoad={(e) => {
                  setImageLoaded(true);
                  const img = e.currentTarget as HTMLImageElement;
                  if (img && img.naturalWidth && img.naturalHeight) {
                    setImageSize({
                      width: img.naturalWidth,
                      height: img.naturalHeight
                    });
                  } else {
                    // Fallback: 이미지 URL에서 직접 로드
                    const tempImg = new window.Image();
                    tempImg.onload = () => {
                      setImageSize({
                        width: tempImg.naturalWidth,
                        height: tempImg.naturalHeight
                      });
                    };
                    tempImg.src = popupData.imageUrl;
                  }
                }}
                priority
              />
            </div>
          </div>
        )}

        {/* Description Section - 컴팩트하게 */}
        {popupData.imageDescription && (
          <div className="px-3 py-2 sm:px-4 sm:py-3 flex-shrink-0 bg-white border-t border-gray-200">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 mt-1">
                <div className="w-1 h-1 bg-[#003d7a] rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {popupData.imageDescription}
              </p>
            </div>
          </div>
        )}

        {/* Footer Controls - 항상 표시 */}
        <div className="px-3 py-2 sm:px-4 sm:py-3 border-t border-gray-200 flex justify-between items-center flex-shrink-0 bg-white">
          {isAutoPopup ? (
            <button
              onClick={handleDontShowToday}
              className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors"
            >
              1일간 보지 않기
            </button>
          ) : (
            <div></div>
          )}
          <button
            onClick={handleClose}
            className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors font-medium"
          >
            닫기
          </button>
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