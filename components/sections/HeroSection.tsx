import Image from 'next/image';
import { ArrowDown, ArrowRight, BookOpen, Landmark, UsersRound } from 'lucide-react';

const highlights = [
  { icon: Landmark, title: '2020년 개관', description: '나주에서 시민과 함께', href: '#about' },
  { icon: BookOpen, title: '문화와 배움', description: '문화예술 · 고전 인문학', href: '#programs' },
  { icon: UsersRound, title: '시민과 교류', description: '지역을 잇는 문화 활동', href: '#news' },
];

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="yeolim-hero">
      <div className="yeolim-hero-inner">
        <div className="yeolim-hero-copy">
          <div className="yeolim-hero-eyebrow">
            <span className="yeolim-hero-year">2026</span>
            <span>시민과 이어가는 문화 활동</span>
          </div>

          <h1 id="hero-title" className="yeolim-hero-title">
            열린 문화,<br />
            <span>함께하는 미래</span>
          </h1>

          <div className="yeolim-hero-divider" aria-hidden="true" />
          <p className="yeolim-hero-description">
            문화센터 열림이 시민과 함께<br />
            풍요로운 문화예술의 미래를 만들어갑니다.
          </p>

          <div className="yeolim-hero-actions">
            <a href="#programs" className="yeolim-hero-button yeolim-hero-button-primary">
              프로그램 안내
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#news" className="yeolim-hero-button yeolim-hero-button-secondary">
              2026 활동소식
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <a href="#about" className="yeolim-hero-about">
            문화센터 열림을 소개합니다
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <figure className="yeolim-hero-figure">
          <div className="yeolim-hero-artwork">
            <Image
              src="/images/yeolim-culture-hero.webp"
              alt="햇살이 드는 전시 공간에서 여러 세대가 함께 그림을 그리고 문화를 나누는 모습의 콘셉트 이미지"
              fill
              priority
              sizes="(min-width: 1328px) 620px, (min-width: 1024px) 48vw, (min-width: 768px) 700px, calc(100vw - 40px)"
              className="yeolim-hero-image"
            />
            <div className="yeolim-hero-image-caption">
              <span className="yeolim-hero-image-label">문화가 일상이 되는 공간</span>
              <span className="yeolim-hero-image-title">문화와 일상을 잇는 열림</span>
            </div>
          </div>
          <figcaption className="yeolim-hero-art-credit">
            문화예술 활동을 표현한 콘셉트 이미지
          </figcaption>
        </figure>
      </div>

      <div className="yeolim-hero-highlights">
        <div className="yeolim-hero-highlights-inner">
          {highlights.map(({ icon: Icon, title, description, href }) => (
            <a key={title} href={href} className="yeolim-hero-highlight">
              <span className="yeolim-hero-highlight-icon">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="yeolim-hero-highlight-copy">
                <strong>{title}</strong>
                <span>{description}</span>
              </span>
              <ArrowRight size={16} className="yeolim-hero-highlight-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
