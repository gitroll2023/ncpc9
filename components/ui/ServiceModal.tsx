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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">2025년 주요 공연</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-[#003d7a] pl-4 py-2">
              <div className="font-medium text-gray-900">사랑愛담다</div>
              <div className="text-sm text-gray-600 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.05.24 (토)</span>
                </div>
                <div className="text-sm">장소: 나주 정미소</div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="font-medium text-gray-900">나주 문화콘서트</div>
              <div className="text-sm text-gray-600 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.07.05</span>
                </div>
                <div className="text-sm">장소: 나주 정미소</div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="font-medium text-gray-900">나주포차</div>
              <div className="text-sm text-gray-600 mt-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.09.05-06 (금,토)</span>
                </div>
                <div className="text-sm">장소: CGV건물 3층</div>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">전시 프로그램</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">생애그넘어</h4>
                  <p className="text-sm text-gray-600 mt-1">그림 전시회</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>🎨 지역 예술가들의 작품</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">삶과 죽음, 그 너머를 주제로 한 작품 전시</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                  예정
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            📍 전시 공간 및 상세 일정은 추후 공지 예정입니다.
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">문화교육 프로그램</h3>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                현재 다양한 문화예술 교육 프로그램을 준비 중입니다.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                어린이부터 성인까지 모든 연령층을 위한 체계적인 문화예술 교육프로그램을 제공할 예정입니다.
              </p>
            </div>
          </div>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">생활문화 활동</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <div className="font-medium text-gray-900">Sing Together</div>
              <div className="text-sm text-gray-600 mt-1">
                <p>싱투게더 동호회 - 노래 동호회</p>
                <p className="text-xs mt-1">장소: 나주 크로스카페</p>
                <p className="text-xs">노래를 사랑하는 사람들이 모여 함께 노래하는 동호회</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                일상 속에서 즐기는 문화활동을 통해 삶의 질을 높이고 공동체를 만들어가는 프로그램입니다.
              </p>
            </div>
          </div>
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