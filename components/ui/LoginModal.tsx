"use client";

import { useState } from 'react';
import { X, User, Lock, Eye, EyeOff } from 'lucide-react';
import Modal from './Modal';
import { Toast } from './Toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('error');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setToastMessage('아이디와 비밀번호를 모두 입력해주세요.');
      setToastType('warning');
      setShowToast(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          username,
          password,
          timestamp: Date.now(),
          csrfToken: btoa(Math.random().toString()).substr(10, 15)
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessages = [
          '아이디 또는 비밀번호가 일치하지 않습니다.',
          '로그인 정보가 올바르지 않습니다.',
          '입력하신 정보를 다시 확인해주세요.',
        ];

        const attempts = parseInt(sessionStorage.getItem('loginAttempts') || '0');
        sessionStorage.setItem('loginAttempts', (attempts + 1).toString());

        if (attempts >= 5) {
          setToastMessage('로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.');
          setToastType('warning');
        } else {
          setToastMessage(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
          setToastType('error');
        }
        setShowToast(true);
      }
    } catch (error) {
      const errorMessages = [
        '아이디 또는 비밀번호가 일치하지 않습니다.',
        '로그인 정보가 올바르지 않습니다.',
        '입력하신 정보를 다시 확인해주세요.',
      ];
      setToastMessage(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setShowPassword(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">회원 로그인</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  아이디
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-transparent outline-none"
                    placeholder="아이디를 입력하세요"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-transparent outline-none"
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-[#003d7a] focus:ring-[#003d7a] border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    로그인 상태 유지
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-[#003d7a] hover:text-[#002a56] font-medium"
                  onClick={() => {
                    setToastMessage('비밀번호 재설정은 센터로 문의하세요.');
                    setToastType('info');
                    setShowToast(true);
                  }}
                >
                  비밀번호 찾기
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-[#003d7a] text-white font-medium rounded-lg hover:bg-[#002a56] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003d7a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? '로그인 중...' : '로그인'}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                문화진흥센터 나주 회원 전용 서비스입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}