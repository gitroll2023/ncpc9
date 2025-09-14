"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, ChevronRight, Volume2, Clock, FileText } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';

export default function PodcastSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 임시로 더미 duration 설정 (실제 오디오 길이로 변경 필요)
  const dummyDuration = 1800; // 30분 (1800초)

  useEffect(() => {
    // Load transcript
    fetch('/podcast/pod9.txt')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line.trim());
        setTranscript(lines);
      })
      .catch(err => console.error('Failed to load transcript:', err));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      console.log('오디오 duration:', audio.duration);
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleError = (e: Event) => {
      console.error('오디오 로드 실패:', e);
      setHasError(true);
      setIsLoading(false);
    };
    const handleCanPlay = () => {
      console.log('오디오 재생 가능:', audio.duration);
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.addEventListener('error', handleError);

    // 수동으로 로드 시도
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('ended', () => setIsPlaying(false));
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    const maxDuration = duration || dummyDuration;
    audioRef.current.currentTime = Math.max(0, Math.min(maxDuration, audioRef.current.currentTime + seconds));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative bg-gradient-to-b from-[#003d7a] to-[#002a56] text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <AnimatedSection direction="up" delay={0}>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Podcast Thumbnail */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <Image
                src="/podcast/pod9.jpg"
                alt="다함께 차차차! 문화가 있는 저녁"
                width={256}
                height={256}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-10 w-10 text-[#003d7a] ml-0" />
                  ) : (
                    <Play className="h-10 w-10 text-[#003d7a] ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Podcast Info and Controls */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="text-sm text-blue-200 mb-2 flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                팟캐스트 Episode 9
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                다함께 차차차! 문화가 있는 저녁
              </h2>
              <p className="text-blue-100 mb-4">
                나주와 목포의 문화진흥센터 소식과 2025년 가을 축제 안내
              </p>
               <div className="flex items-center gap-4 text-sm text-blue-200">
                 <span className="flex items-center gap-1">
                   <Clock className="h-4 w-4" />
                   {formatTime(duration || dummyDuration)}
                 </span>
                 <span>진행: 정다윤, 김상민</span>
               </div>
            </div>

            {/* Custom Audio Controls */}
            <div className="space-y-4">
              {/* Progress Bar */}
               <div className="space-y-2">
                 <div className="flex items-center justify-between text-sm">
                   <span>{formatTime(currentTime)}</span>
                   <span>{formatTime(duration || dummyDuration)}</span>
                 </div>
                 <input
                   type="range"
                   min="0"
                   max={duration || dummyDuration}
                   value={currentTime}
                   onChange={handleProgressChange}
                   className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                   style={{
                     background: `linear-gradient(to right, #ffffff ${(currentTime / (duration || dummyDuration)) * 100}%, rgba(255,255,255,0.2) ${(currentTime / (duration || dummyDuration)) * 100}%)`
                   }}
                 />
               </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => skip(-5)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  title="5초 뒤로"
                >
                  <SkipBack className="h-5 w-5" />
                </button>

                <button
                  onClick={togglePlay}
                  className="p-4 bg-white rounded-full hover:bg-blue-50 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6 text-[#003d7a]" />
                  ) : (
                    <Play className="h-6 w-6 text-[#003d7a] ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => skip(5)}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  title="5초 앞으로"
                >
                  <SkipForward className="h-5 w-5" />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 ml-auto">
                  <Volume2 className="h-5 w-5" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ffffff ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%)`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Transcript Button - Below Content */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
            >
              <FileText className="h-5 w-5" />
              <span className="font-medium">팟캐스트 대본 {showTranscript ? '닫기' : '보기'}</span>
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/podcast/pod9.wav" preload="metadata" />

      {/* Transcript Panel */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
        showTranscript ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          <div className="p-4 bg-[#003d7a] text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white">팟캐스트 대본</h3>
              <button
                onClick={() => setShowTranscript(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-3 text-sm leading-relaxed text-gray-800">
              {transcript.map((line, index) => {
                const speakerMatch = line.match(/^(정다윤|김상민):/);
                if (speakerMatch) {
                  const speaker = speakerMatch[1];
                  const content = line.substring(speakerMatch[0].length).trim();
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          speaker === '정다윤'
                            ? 'bg-pink-100 text-pink-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {speaker}
                        </span>
                      </div>
                      <p className="ml-2 text-gray-700">{content}</p>
                    </div>
                  );
                }
                return (
                  <p key={index} className="ml-2 text-gray-700">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}