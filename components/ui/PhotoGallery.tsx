"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface PhotoGalleryProps {
  title?: string;
  subtitle?: string;
}

export default function PhotoGallery({ title = "가을愛 문화를 담다", subtitle = "2025년 11월 8일 행사 사진" }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지 목록
  const images = [
    { src: '/images/11/1.jpg', alt: '가을愛 문화를 담다 - 공연 모습 1' },
    { src: '/images/11/2.jpg', alt: '가을愛 문화를 담다 - 공연 모습 2' },
    { src: '/images/11/3.jpg', alt: '가을愛 문화를 담다 - 관객 참여' },
    { src: '/images/11/4.jpg', alt: '가을愛 문화를 담다 - 특별 공연' },
    { src: '/images/11/5.jpg', alt: '가을愛 문화를 담다 - 단체 사진' },
    { src: '/images/11/6.jpg', alt: '가을愛 문화를 담다 - 행사 현장' },
  ];

  // 자동 슬라이드
  useEffect(() => {
    if (isAutoPlaying && !selectedImage) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, selectedImage, images.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsAutoPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsAutoPlaying(true);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="w-full">
      {/* 섹션 헤더 */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* 메인 갤러리 - 캐러셀 스타일 */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm">
        {/* 메인 이미지 영역 */}
        <div className="relative h-[400px] mb-6 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
              <ZoomIn className="h-6 w-6 text-gray-700" />
            </div>
          </button>

          {/* 네비게이션 버튼 */}
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 썸네일 그리드 */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`relative aspect-square rounded-lg overflow-hidden group ${
                index === currentIndex ? 'ring-2 ring-[#003d7a]' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* 자동재생 컨트롤 */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isAutoPlaying
                ? 'bg-[#003d7a] text-white hover:bg-[#002855]'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlaying ? '자동재생 중지' : '자동재생 시작'}
          </button>
        </div>
      </div>

      {/* 라이트박스 */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full"
              sizes="90vw"
              priority
            />
          </div>

          {/* 라이트박스 인디케이터 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedImage
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* 이미지 정보 */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-sm opacity-80">
              {selectedImage + 1} / {images.length}
            </p>
            <p className="text-lg mt-1">{images[selectedImage].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

{/* Animation Styles */}
<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`}</style>