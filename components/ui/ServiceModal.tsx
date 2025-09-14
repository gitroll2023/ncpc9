"use client";

import Modal from './Modal';
import { Calendar, Check } from 'lucide-react';
import { useState } from 'react';
import { Toast } from './Toast';

// 공연예술 모달
export function PerformanceModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="공연예술 프로그램">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">프로그램 소개</h3>
          <p className="text-gray-700 leading-relaxed">
            나주 문화진흥센터의 공연예술 프로그램은 클래식, 전통예술, 대중문화까지
            다양한 장르의 공연을 통해 시민들에게 최고의 문화예술 경험을 제공합니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">2025년 9월 공연 일정</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-[#003d7a] pl-4 py-2">
              <div className="font-medium text-gray-900">나주의 소리 - 가을 정기공연</div>
              <div className="text-sm text-gray-600 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.09.20 (토) 19:00</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="font-medium text-gray-900">청소년 오케스트라 정기연주회</div>
              <div className="text-sm text-gray-600 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.09.27 (토) 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">관람 안내</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
              <span>공연 30분 전부터 입장 가능</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
              <span>7세 이상 관람 가능</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
              <span>주차 2시간 무료</span>
            </li>
          </ul>
        </div>

      </div>
    </Modal>
  );
}

// 전시기획 모달
export function ExhibitionModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="전시기획 프로그램">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">전시 소개</h3>
          <p className="text-gray-700 leading-relaxed">
            지역 예술가들의 작품전시와 기획전시를 통해 시민들의 문화적 감성을 키우고,
            나주의 예술 문화를 널리 알리는 전시 프로그램입니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">종료된 전시</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">나주의 빛과 색</h4>
                  <p className="text-sm text-gray-600 mt-1">지역 작가 15인 연합전</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>📅 2025.07.01 - 08.31</span>
                    <span>🎨 회화, 조각</span>
                    <span>📍 빛가람 전망대 1층</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                  종료
                </span>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">전통과 현대의 만남</h4>
                  <p className="text-sm text-gray-600 mt-1">한국화 특별전</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>📅 2025.05.15 - 06.30</span>
                    <span>🎨 한국화</span>
                    <span>📍 빛가람 전망대 1층</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                  종료
                </span>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">나주의 사계절</h4>
                  <p className="text-sm text-gray-600 mt-1">사진 특별전</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>📅 2025.03.01 - 04.30</span>
                    <span>📸 사진</span>
                    <span>📍 빛가람 전망대 1층</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                  종료
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            📍 모든 전시는 빛가람 전망대 1층에서 진행되었습니다.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            다음 전시 일정은 추후 공지 예정입니다.
          </p>
        </div>
      </div>
    </Modal>
  );
}

// 문화교육 모달
export function EducationModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('info');

  const handleEducationApplication = () => {
    setToastMessage('오프라인(현장) 신청만 가능합니다. 문화진흥센터를 방문해주세요.');
    setToastType('info');
    setShowToast(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="문화교육 프로그램">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">교육 프로그램 소개</h3>
          <p className="text-gray-700 leading-relaxed">
            어린이부터 성인까지 모든 연령층을 위한 체계적인 문화예술 교육프로그램을 제공합니다.
            전문 강사진과 함께 예술적 감성과 창의력을 키워보세요.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">2025년 가을학기 프로그램</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">어린이 미술교실</div>
                <div className="text-sm text-gray-600">만 5-7세 / 주 2회</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[#003d7a]">월 60,000원</div>
                <div className="text-xs text-gray-500">잔여 3석</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">청소년 기타교실</div>
                <div className="text-sm text-gray-600">중고등학생 / 주 1회</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[#003d7a]">월 80,000원</div>
                <div className="text-xs text-gray-500">잔여 5석</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">성인 서예교실</div>
                <div className="text-sm text-gray-600">성인 / 주 2회</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[#003d7a]">월 70,000원</div>
                <div className="text-xs text-gray-500">잔여 7석</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleEducationApplication}
            className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            프로그램 안내서 다운로드
          </button>
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

// 생활문화 모달
export function CommunityModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('info');

  const handleClubApplication = () => {
    setToastMessage('오프라인(현장) 신청만 가능합니다. 문화진흥센터를 방문해주세요.');
    setToastType('info');
    setShowToast(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="생활문화 프로그램">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">생활문화란?</h3>
          <p className="text-gray-700 leading-relaxed">
            일상 속에서 즐기는 문화활동을 통해 삶의 질을 높이고 공동체를 만들어가는 프로그램입니다.
            동아리 활동, 문화 모임, 지역 축제 등 다양한 활동에 참여해보세요.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">활동 중인 동아리</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-lg p-3 text-center hover:bg-gray-50">
              <div className="text-2xl mb-2">🎭</div>
              <div className="font-medium text-sm">나주 연극동아리</div>
              <div className="text-xs text-gray-600">회원 15명</div>
            </div>
            <div className="border rounded-lg p-3 text-center hover:bg-gray-50">
              <div className="text-2xl mb-2">🎵</div>
              <div className="font-medium text-sm">합창단</div>
              <div className="text-xs text-gray-600">회원 32명</div>
            </div>
            <div className="border rounded-lg p-3 text-center hover:bg-gray-50">
              <div className="text-2xl mb-2">📸</div>
              <div className="font-medium text-sm">사진동호회</div>
              <div className="text-xs text-gray-600">회원 28명</div>
            </div>
            <div className="border rounded-lg p-3 text-center hover:bg-gray-50">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-medium text-sm">수채화 모임</div>
              <div className="text-xs text-gray-600">회원 20명</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">동아리 신규 회원 모집</h4>
          <p className="text-sm text-gray-700">
            2025년 하반기 동아리 신규 회원을 모집합니다.
            관심있는 분야의 동아리에 가입하여 함께 활동해보세요!
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