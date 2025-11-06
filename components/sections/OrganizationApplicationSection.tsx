"use client";

import { useState } from 'react';
import { FileText, Users, CheckCircle2, ArrowRight, List } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { ParticipationConditionsModal, OrganizationFormModal, FormSubmissionModal, OrganizationListModal } from '../ui/OrganizationModals';

export default function OrganizationApplicationSection() {
  const [isConditionsModalOpen, setIsConditionsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsConditionsModalOpen(true);
  };

  const handleConditionsConfirm = () => {
    setIsConditionsModalOpen(false);
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = () => {
    setIsFormModalOpen(false);
    setIsSubmissionModalOpen(true);
  };

  const features = [
    {
      icon: Users,
      title: '예비 단체 등록',
      description: '예비 단체로 선정된 경우에만 열림 행사에서 소개'
    },
    {
      icon: FileText,
      title: '평가서 제출',
      description: '나주 시민들을 초청하여 단체 및 동호회 평가서 수집'
    },
    {
      icon: CheckCircle2,
      title: '공식 행사 참여',
      description: '협력 공간에 열림 기획행사 홍보 포스터 게시 필수'
    }
  ];

  return (
    <>
      <section id="organization" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-1 w-12 bg-[#003d7a]"></div>
                <span className="text-[#003d7a] font-medium uppercase tracking-wider text-sm">Organization</span>
                <div className="h-1 w-12 bg-[#003d7a]"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                단체 활동 신청
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                문화센터 열림과 함께 활동할 단체를 모집합니다.<br />
                참여 조건을 확인하시고 신청해 주세요.
              </p>
              <button
                onClick={() => setIsListModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-[#003d7a] border-2 border-[#003d7a] rounded-lg hover:bg-[#003d7a] hover:text-white transition-all duration-300 font-medium"
              >
                <List className="h-5 w-5" />
                <span>예비 단체 목록 보기</span>
              </button>
            </div>
          </AnimatedSection>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 100}>
                <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#003d7a]/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003d7a]/10 to-[#0066cc]/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-[#003d7a] group-hover:to-[#0066cc] transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[#003d7a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003d7a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="bg-gradient-to-r from-[#003d7a] to-[#0066cc] rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  열림에 동호회를 신청하시겠습니까?
                </h3>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  참여 조건을 확인하신 후 신청서를 작성해 주세요.<br />
                  예비 단체로 선정된 경우에만 열림 행사에서 소개해드립니다.
                </p>
                <button
                  onClick={handleApplyClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#003d7a] font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  <span>참여 조건 확인 및 신청하기</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modals */}
      <ParticipationConditionsModal
        isOpen={isConditionsModalOpen}
        onClose={() => setIsConditionsModalOpen(false)}
        onConfirm={handleConditionsConfirm}
      />
      <OrganizationFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
      <FormSubmissionModal
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
      />
      <OrganizationListModal
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
      />
    </>
  );
}

