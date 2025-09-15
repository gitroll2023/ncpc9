"use client";

import { Users, Award, Calendar, Home, ArrowRight, Check, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { useState, useRef, useEffect } from 'react';


export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
      if (video) {
        video.currentTime = 0; // 처음으로 되돌리기
      }
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    // Fullscreen change listener
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowControls(true);
        if (hideControlsTimeout.current) {
          clearTimeout(hideControlsTimeout.current);
        }
      } else {
        videoRef.current.play();
        setShowControls(true);
        // 모든 디바이스에서 컨트롤 자동 숨기기
        if (hideControlsTimeout.current) {
          clearTimeout(hideControlsTimeout.current);
        }
        hideControlsTimeout.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleControlClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;

    videoRef.current.currentTime = newTime;
    setProgress((newTime / duration) * 100);
  };

  let lastTapTime = 0;
  let tapTimeout: NodeJS.Timeout | null = null;

  const handleDoubleTap = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.stopPropagation();

    const currentTime = Date.now();
    const tapInterval = currentTime - lastTapTime;

    if (tapInterval < 300 && tapInterval > 0) {
      // 더블탭 감지
      if (tapTimeout) clearTimeout(tapTimeout);

      const rect = e.currentTarget.getBoundingClientRect();
      const tapX = e.clientX - rect.left;
      const isLeftSide = tapX < rect.width / 2;

      if (videoRef.current) {
        if (isLeftSide) {
          // 왼쪽: 10초 뒤로
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        } else {
          // 오른쪽: 10초 앞으로
          videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10);
        }
      }
    } else {
      // 첫 번째 탭
      tapTimeout = setTimeout(() => {
        togglePlay();
      }, 300);
    }

    lastTapTime = currentTime;
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };
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

        {/* Video Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-20">
            <div
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
              onMouseEnter={() => {
                if (isPlaying) {
                  setShowControls(true);
                  if (hideControlsTimeout.current) {
                    clearTimeout(hideControlsTimeout.current);
                  }
                  hideControlsTimeout.current = setTimeout(() => {
                    if (isPlaying) {
                      setShowControls(false);
                    }
                  }, 3000);
                }
              }}
              onMouseMove={() => {
                if (isPlaying) {
                  setShowControls(true);
                  if (hideControlsTimeout.current) {
                    clearTimeout(hideControlsTimeout.current);
                  }
                  hideControlsTimeout.current = setTimeout(() => {
                    if (isPlaying) {
                      setShowControls(false);
                    }
                  }, 3000);
                }
              }}
              onMouseLeave={() => {
                if (isPlaying) {
                  if (hideControlsTimeout.current) {
                    clearTimeout(hideControlsTimeout.current);
                  }
                  setShowControls(false);
                }
              }}
            >
              {/* 더블탭 표시기 */}
              {isFullscreen && (
                <>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full flex items-center justify-center pointer-events-none">
                    <div className="text-white text-4xl font-bold opacity-0 transition-opacity" id="leftTapIndicator">
                      -10s
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full flex items-center justify-center pointer-events-none">
                    <div className="text-white text-4xl font-bold opacity-0 transition-opacity" id="rightTapIndicator">
                      +10s
                    </div>
                  </div>
                </>
              )}

              <video
                ref={videoRef}
                className="w-full h-auto cursor-pointer"
                muted={isMuted}
                playsInline
                preload="metadata"
                poster="/0905.jpg"
                onClick={isFullscreen ? handleDoubleTap : handleVideoClick}
                onContextMenu={(e) => e.preventDefault()}
                controlsList="nodownload"
              >
                <source src="/0905.mp4" type="video/mp4" />
                영상을 재생할 수 없습니다.
              </video>

              {/* Video Controls Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 lg:p-6 transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleControlClick}
              >
                {/* Title for Mobile - Above Controls */}
                <div className="mb-2 sm:hidden">
                  <h3 className="text-white font-bold text-sm">문화진흥센터 나주</h3>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-white ml-0.5" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div
                      className="bg-white/20 backdrop-blur rounded-full h-1.5 sm:h-2 overflow-hidden cursor-pointer relative group"
                      onClick={handleProgressBarClick}
                    >
                      <div
                        className="bg-white h-full transition-all duration-200 pointer-events-none"
                        style={{ width: `${progress}%` }}
                      />
                      {/* 호버 시 더 큰 클릭 영역 */}
                      <div className="absolute inset-0 -top-2 -bottom-2" />
                    </div>
                  </div>

                  <span className="text-white text-xs sm:text-sm font-medium min-w-[60px] sm:min-w-[70px] lg:min-w-[80px] text-right">
                    {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'} / {formatTime(duration)}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFullscreen();
                    }}
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
                  >
                    {isFullscreen ? (
                      <Minimize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    )}
                  </button>
                </div>

                {/* Title for Desktop - Below Controls */}
                <div className="mt-3 hidden sm:block">
                  <h3 className="text-white font-bold text-base sm:text-lg">문화진흥센터 나주 소개 영상</h3>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">나주시 문화예술의 중심, 문화진흥센터를 만나보세요</p>
                </div>
              </div>
            </div>
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