"use client";

import { X, CheckCircle2, AlertCircle, FileText, Users, MapPin, Calendar, User, Phone, Mail, Building2, Award, Download } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import { Toast } from './Toast';

// 참여 조건 모달
export function ParticipationConditionsModal({ 
  isOpen, 
  onClose, 
  onConfirm 
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [agreed, setAgreed] = useState(false);

  const conditions = [
    {
      title: '참여 자격',
      content: '신청은 누구나 가능하지만, 누구나 선정되는 것은 아닙니다. 예비 단체로 선정된 경우에만 열림에서 진행하는 행사에서 소개해드립니다.'
    },
    {
      title: '예비 단체 등록',
      content: '예비 단체로 선정된 경우에만 열림에서 진행하는 행사에서 소개를 통해 등록해드립니다.'
    },
    {
      title: '평가서 제출 의무',
      content: '나주 시민들을 초청하여 단체 및 동호회 평가서를 받아야 합니다. 예비 단체에서도 평가가 평균 이하인 경우 탈락될 수 있습니다.'
    },
    {
      title: '홍보 포스터 게시 의무',
      content: '각 협력 공간에는 열림에서 진행하는 기획행사 홍보 포스터를 게시하는 것이 조건입니다.'
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="단체 활동 참여 조건">
      <div className="space-y-6">
        {/* 안내 문구 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">중요 안내</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                단체 활동 신청은 열림에서 진행하는 공식 행사를 통해서만 가능합니다. 
                아래 조건을 반드시 확인하시고 동의해 주세요.
              </p>
            </div>
          </div>
        </div>

        {/* 참여 조건 목록 */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 text-lg mb-4">참여 조건</h3>
          {conditions.map((condition, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#003d7a] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{condition.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{condition.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 동의 체크박스 */}
        <div className="border-t pt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 text-[#003d7a] border-gray-300 rounded focus:ring-[#003d7a] focus:ring-2"
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              위 참여 조건을 모두 확인하였으며, 이에 동의합니다.
            </span>
          </label>
        </div>

        {/* 버튼 */}
        <div className="flex gap-3 pt-4 border-t">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            disabled={!agreed}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
              agreed
                ? 'bg-[#003d7a] text-white hover:bg-[#002a56]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            신청서 작성하기
          </button>
        </div>
      </div>
    </Modal>
  );
}

// 단체 신청 폼 모달
export function OrganizationFormModal({
  isOpen,
  onClose,
  onSubmit
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) {
  const [formData, setFormData] = useState({
    organizationName: '',
    representativeName: '',
    phone: '',
    email: '',
    address: '',
    memberCount: '',
    activityDescription: '',
    posterAgreement: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = '단체명을 입력해 주세요.';
    }
    if (!formData.representativeName.trim()) {
      newErrors.representativeName = '대표자명을 입력해 주세요.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
    } else if (!/^[0-9-]+$/.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식을 입력해 주세요.';
    }
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해 주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해 주세요.';
    }
    if (!formData.address.trim()) {
      newErrors.address = '주소를 입력해 주세요.';
    }
    if (!formData.memberCount.trim()) {
      newErrors.memberCount = '회원 수를 입력해 주세요.';
    }
    if (!formData.activityDescription.trim()) {
      newErrors.activityDescription = '활동 내용을 입력해 주세요.';
    }
    if (!formData.posterAgreement) {
      newErrors.posterAgreement = '홍보 포스터 게시에 동의해 주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="단체 활동 신청서">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 안내 문구 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>※ 주의사항:</strong> 모든 항목을 정확히 입력해 주세요. 
            신청서 제출 후 열림에서 검토하여 연락드립니다.
          </p>
        </div>

        {/* 단체명 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            단체명 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.organizationName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="단체명을 입력해 주세요"
            />
          </div>
          {errors.organizationName && (
            <p className="mt-1 text-sm text-red-500">{errors.organizationName}</p>
          )}
        </div>

        {/* 대표자명 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            대표자명 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="representativeName"
              value={formData.representativeName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.representativeName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="대표자명을 입력해 주세요"
            />
          </div>
          {errors.representativeName && (
            <p className="mt-1 text-sm text-red-500">{errors.representativeName}</p>
          )}
        </div>

        {/* 연락처 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="010-1234-5678"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* 이메일 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            이메일 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="example@email.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* 주소 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            주소 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="주소를 입력해 주세요"
            />
          </div>
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address}</p>
          )}
        </div>

        {/* 회원 수 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            회원 수 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="memberCount"
              value={formData.memberCount}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none ${
                errors.memberCount ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="예: 20명"
            />
          </div>
          {errors.memberCount && (
            <p className="mt-1 text-sm text-red-500">{errors.memberCount}</p>
          )}
        </div>

        {/* 활동 내용 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            활동 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            name="activityDescription"
            value={formData.activityDescription}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#003d7a] focus:border-[#003d7a] outline-none resize-none ${
              errors.activityDescription ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="단체의 주요 활동 내용을 입력해 주세요"
          />
          {errors.activityDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.activityDescription}</p>
          )}
        </div>

        {/* 홍보 포스터 게시 동의 */}
        <div className="border-t pt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="posterAgreement"
              checked={formData.posterAgreement}
              onChange={handleCheckboxChange}
              className="mt-1 w-5 h-5 text-[#003d7a] border-gray-300 rounded focus:ring-[#003d7a] focus:ring-2"
            />
            <div className="flex-1">
              <span className="text-sm font-semibold text-gray-700">
                홍보 포스터 게시 동의 <span className="text-red-500">*</span>
              </span>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                각 협력 공간에 열림에서 진행하는 기획행사 홍보 포스터를 게시하는 것에 동의합니다.
              </p>
            </div>
          </label>
          {errors.posterAgreement && (
            <p className="mt-2 text-sm text-red-500">{errors.posterAgreement}</p>
          )}
        </div>

        {/* 버튼 */}
        <div className="flex gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            취소
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-[#003d7a] text-white rounded-lg hover:bg-[#002a56] transition-colors font-medium"
          >
            신청서 제출하기
          </button>
        </div>
      </form>
    </Modal>
  );
}

// 제출 완료 모달
export function FormSubmissionModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="신청서 제출 완료">
      <div className="space-y-6 text-center">
        {/* 성공 아이콘 */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* 메시지 */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">
            신청서가 성공적으로 제출되었습니다
          </h3>
          <p className="text-gray-600 leading-relaxed">
            단체 활동 신청서가 정상적으로 접수되었습니다.<br />
            문화센터 열림에서 검토 후 연락드리겠습니다.
          </p>
        </div>

        {/* 안내 사항 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
          <h4 className="font-semibold text-blue-900 mb-2">안내 사항</h4>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>신청서 검토에는 약 3~5일이 소요될 수 있습니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>검토 결과는 입력하신 연락처로 안내드립니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>추가 문의사항이 있으시면 문화센터 열림으로 연락 주세요.</span>
            </li>
          </ul>
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-[#003d7a] text-white rounded-lg hover:bg-[#002a56] transition-colors font-medium"
        >
          확인
        </button>
      </div>
    </Modal>
  );
}

// 예비 단체 목록 모달
export function OrganizationListModal({
  isOpen,
  onClose
}: {
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

  const organizations = [
    '드림캐쳐 문화플랫폼',
    '행복 공방',
    '나주 사물놀이 동호회',
    '싱투게더 보컬 동호회',
    '한글나무 서예원',
    '빛그림 포토클럽',
    '나주 문학나무',
    '열림 연극단',
    '나주 무용예술단',
    '그림터 미술공방',
    '책마루 독서모임',
    '소리꽃 악기연주단'
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="예비 단체 목록">
      <div className="space-y-6">
        {/* 안내 문구 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">예비 단체 안내</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                아래 목록은 문화센터 열림에서 예비 단체로 선정된 단체들입니다. 
                예비 단체로 선정된 단체들은 열림에서 진행하는 행사에서 소개됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 단체 목록 */}
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-[#003d7a]" />
            예비 단체 목록 ({organizations.length}개)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#003d7a]/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#003d7a]/10 to-[#0066cc]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-[#003d7a]" />
                </div>
                <span className="font-medium text-gray-900">{org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 평가 신청서 다운로드 */}
        <div className="border-t pt-6">
          <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#003d7a]" />
            평가 신청서 다운로드
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              예비 단체로 선정된 단체는 아래 평가 신청서를 다운로드하여 작성 후, 
              <strong className="text-[#003d7a]"> 문화센터 열림</strong>으로 메일 제출해주시기 바랍니다.
            </p>
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <span className="text-blue-600 mt-0.5">📧</span>
              <span>제출 이메일: contact@ncpc.co.kr</span>
            </div>
          </div>
          <button
            onClick={handleDownloadClick}
            className="flex items-center justify-between w-full p-4 bg-white border-2 border-[#003d7a] rounded-lg hover:bg-[#003d7a] hover:text-white transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#003d7a]/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                <Download className="h-5 w-5 text-[#003d7a] group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                  원데이 클래스 및 동호회 평가 신청서.pdf
                </div>
                <div className="text-xs text-gray-500 group-hover:text-white/80 transition-colors mt-0.5">
                  파일 크기: 2.3MB
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#003d7a] group-hover:text-white transition-colors">
              <span className="font-medium">다운로드</span>
              <Download className="h-4 w-4" />
            </div>
          </button>
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
            <span className="text-yellow-600 text-lg">⚠️</span>
            <p className="text-xs text-yellow-800 leading-relaxed">
              평가 신청서 다운로드는 로그인한 회원만 가능합니다. 
              예비 단체 대표자는 회원 로그인 후 다운로드하여 작성해주세요.
            </p>
          </div>
        </div>

        {/* 추가 안내 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>※ 참고사항:</strong> 예비 단체는 평가서 제출 및 평가 과정을 거쳐 최종 선정됩니다. 
            평가가 평균 이하인 경우 탈락될 수 있습니다.
          </p>
        </div>

        {/* 확인 버튼 */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-[#003d7a] text-white rounded-lg hover:bg-[#002a56] transition-colors font-medium"
        >
          확인
        </button>
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

