"use client";

import { X, Calendar, User, FileText, Download } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { Toast } from './Toast';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {children}
        </div>
      </div>
    </div>
  );
}

// 공지사항 상세 모달 컴포넌트
interface Notice {
  title?: string;
  category?: string;
  date?: string;
  fullContent?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

export function NoticeModal({ notice, isOpen, onClose }: {
  notice: Notice | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('warning');

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setToastMessage('회원 로그인 후 다운로드 가능합니다.');
    setToastType('warning');
    setShowToast(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={notice?.title || ''}>
      <div className="space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            notice?.category === '공지'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-green-100 text-green-700'
          }`}>
            {notice?.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{notice?.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>관리자</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {notice?.fullContent ||
`안녕하세요, 문화센터 열림입니다.

${notice?.title}에 대한 자세한 내용을 안내드립니다.

문화센터 열림은 시민 여러분께 더 나은 문화예술 서비스를 제공하기 위해
항상 노력하고 있습니다. 많은 관심과 참여 부탁드립니다.

자세한 사항은 아래 내용을 참고해 주시기 바랍니다.

• 일시: ${notice?.date}
• 대상: 시민 누구나
• 문의: contact@ncpc.co.kr`}
          </div>
        </div>

        {/* Attachments */}
        {(notice?.pdfUrl || notice?.title) && (
          <div className="border-t pt-4">
            <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              첨부파일
            </h3>
            <div className="space-y-2">
              <button
                onClick={handleDownloadClick}
                className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Download className="h-4 w-4 text-gray-500" />
                  <span>{notice?.title?.slice(0, 20) || '행사안내'}_상세안내.pdf</span>
                  <span className="text-gray-500">(2.3MB)</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-blue-600 flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  다운로드
                </span>
              </button>
            </div>
            {!notice?.pdfUrl && (
              <div className="mt-2 p-3 bg-yellow-50 rounded-lg flex items-start gap-2">
                <span className="text-yellow-600 text-lg">⚠️</span>
                <p className="text-xs text-yellow-800">
                  첨부파일 다운로드는 로그인한 회원만 가능합니다.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </Modal>
  );
}

// 공연 예매 모달
export function BookingModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('info');

  const handleBooking = (isSoldOut: boolean) => {
    if (isSoldOut) {
      setToastMessage('이미 매진된 공연입니다.');
      setToastType('error');
    } else {
      setToastMessage('현재 예매 가능한 공연이 없습니다.');
      setToastType('info');
    }
    setShowToast(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="공연 예매">
      <div className="space-y-6">
        {/* Performance List */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">사랑愛담다</h3>
                <p className="text-sm text-gray-600 mt-1">5월 24일(토) 예정</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>🏢 나주 정미소</span>
                </div>
              </div>
              <button
                onClick={() => handleBooking(false)}
                className="px-4 py-2 bg-[#003d7a] text-white rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">나주 문화콘서트</h3>
                <p className="text-sm text-gray-600 mt-1">7월 5일 예정</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>🏢 나주 정미소</span>
                </div>
              </div>
              <button
                onClick={() => handleBooking(false)}
                className="px-4 py-2 bg-[#003d7a] text-white rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>

        {/* Additional Events */}
        <div className="space-y-4">
          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">나주포차</h3>
                <p className="text-sm text-gray-600 mt-1">9월 5~6일 (금,토)</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>🏢 CGV건물 3층</span>
                </div>
              </div>
              <button
                onClick={() => handleBooking(false)}
                className="px-4 py-2 bg-[#003d7a] text-white rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Sing Together</h3>
                <p className="text-sm text-gray-600 mt-1">싱투게더 동호회 개최 - 노래대회</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>🏢 나주 크로스카페</span>
                </div>
              </div>
              <button
                onClick={() => handleBooking(false)}
                className="px-4 py-2 bg-[#003d7a] text-white rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">생애그넘어</h3>
                <p className="text-sm text-gray-600 mt-1">그림 전시회</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>🇺 전시 예정</span>
                </div>
              </div>
              <button
                onClick={() => handleBooking(false)}
                className="px-4 py-2 bg-[#003d7a] text-white rounded hover:bg-[#002a56] transition-colors"
              >
                자세히 보기
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            ℹ️ 예매 후 행사 당일 현장에서 예매 확인서를 제시해 주세요.
          </p>
        </div>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </Modal>
  );
}

// 수강 신청 모달
export function EnrollmentModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('info');

  const handleEnrollment = () => {
    setToastMessage('오프라인(현장) 신청만 가능합니다. 문화센터 열림을 방문해주세요.');
    setToastType('info');
    setShowToast(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="수강 신청">
      <div className="space-y-6">
        {/* Program List */}
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">성인 미술교실</h3>
                <p className="text-sm text-gray-600 mt-1">수채화, 유화 기초부터 심화까지</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>📅 매주 화, 목 10:00-12:00</span>
                  <span>👥 정원 15명 (잔여 3명)</span>
                  <span>💰 월 80,000원</span>
                </div>
              </div>
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed text-sm"
              >
                신청마감
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">어린이 바이올린교실</h3>
                <p className="text-sm text-gray-600 mt-1">초등학생 대상 바이올린 입문</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>📅 매주 토 14:00-16:00</span>
                  <span>👥 정원 10명 (잔여 5명)</span>
                  <span>💰 월 100,000원</span>
                </div>
              </div>
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed text-sm"
              >
                신청마감
              </button>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">전통 사물놀이</h3>
                <p className="text-sm text-gray-600 mt-1">우리 전통 악기를 배워보세요</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>📅 매주 수, 금 19:00-21:00</span>
                  <span>👥 정원 20명 (잔여 8명)</span>
                  <span>💰 월 60,000원</span>
                </div>
              </div>
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed text-sm"
              >
                신청마감
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ 수강료는 매월 5일까지 납부해 주시기 바랍니다.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800 font-medium">
            ℹ️ 온라인 신청은 준비 중입니다. 현재는 오프라인(현장) 신청만 가능합니다.
          </p>
        </div>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </Modal>
  );
}