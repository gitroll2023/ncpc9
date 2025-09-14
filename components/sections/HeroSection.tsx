"use client";

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-[#003d7a] to-[#0052a3] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 w-full">
          <div className="max-w-2xl">
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white text-sm font-medium">나주 문화예술의 중심</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              문화로 행복한 나주
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              나주 문화진흥센터가 시민과 함께<br />
              풍요로운 문화예술의 미래를 만들어갑니다
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003d7a] font-semibold rounded hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>프로그램 안내</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-white">25년</div>
                <div className="text-sm text-white/80">지역문화 선도</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50만+</div>
                <div className="text-sm text-white/80">연간 이용객</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">365일</div>
                <div className="text-sm text-white/80">문화프로그램</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}