import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const culturalThemes = ['공연예술', '전시기획', '생활문화', '고전 인문학'];

export default function HeroSection() {
  return (
    <section className="yeolim-panorama-hero" aria-labelledby="hero-title">
      <div className="yeolim-panorama-banner">
        <div className="yeolim-panorama-scene">
          <Image
            src="/images/yeolim-culture-panorama.webp"
            alt="공연 무대, 미술 전시, 시민 공예 활동, 고전 인문학 강의를 한 장에 담은 문화예술 이미지"
            width={1881}
            height={836}
            sizes="100vw"
            priority
            className="yeolim-panorama-image"
          />
          <div className="yeolim-panorama-top-shade" aria-hidden="true" />
          <ul className="yeolim-panorama-themes" aria-label="주요 문화사업">
            {culturalThemes.map(theme => <li key={theme}>{theme}</li>)}
          </ul>
        </div>

        <div className="yeolim-panorama-bottom-shade" aria-hidden="true" />
        <div className="yeolim-panorama-content">
          <div className="yeolim-panorama-copy">
            <p className="yeolim-panorama-eyebrow">2026 · 시민과 이어가는 문화 활동</p>
            <h1 id="hero-title" className="yeolim-panorama-title">
              열린 문화, <span>함께하는 미래</span>
            </h1>
            <p className="yeolim-panorama-description">
              문화센터 열림이 시민과 함께<br />
              풍요로운 문화예술의 미래를 만들어갑니다.
            </p>
          </div>
          <div className="yeolim-panorama-actions">
            <a href="#programs" className="yeolim-panorama-button yeolim-panorama-button-primary">
              프로그램 안내 <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#news" className="yeolim-panorama-button yeolim-panorama-button-secondary">
              2026 활동소식 <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
