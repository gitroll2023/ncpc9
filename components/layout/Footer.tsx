"use client";

import { useState } from 'react';
import { Mail, Clock, Lock } from 'lucide-react';
import LoginModal from '../ui/LoginModal';

export default function Footer() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">
              문화진흥센터 <span className="font-normal">나주</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              나주 문화진흥센터는 지역 문화예술의 발전과
              시민의 문화적 삶의 질 향상을 위해 노력합니다.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">문의</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@ncpc.co.kr</span>
              </div>
              <div className="text-gray-300 mt-3">
                문화예술 프로그램 및 시설 대관 문의는
                <br />
                이메일로 연락 부탁드립니다.
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">운영시간</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div>평일: 09:00 - 22:00</div>
                  <div>주말: 09:00 - 17:00</div>
                  <div>공휴일 휴관</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Login */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300">
              © 2025 나주 문화진흥센터. All rights reserved.
            </p>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="group flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
              title="회원 로그인"
            >
              <Lock className="h-4 w-4" />
              <span className="text-sm">Login</span>
            </button>
          </div>
        </div>
      </div>
    </footer>

    {/* Login Modal */}
    <LoginModal
      isOpen={isLoginModalOpen}
      onClose={() => setIsLoginModalOpen(false)}
    />
    </>
  );
}