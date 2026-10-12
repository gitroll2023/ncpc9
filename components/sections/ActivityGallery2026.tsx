'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Camera, ChevronDown, ShieldCheck } from 'lucide-react';
import { activityCategories, activityPhotos2026, type ActivityCategory } from '../../lib/activityPhotos2026';

export default function ActivityGallery2026() {
  const [category, setCategory] = useState<ActivityCategory | '전체'>('전체');
  const [visibleCount, setVisibleCount] = useState(6);
  const photos = category === '전체' ? activityPhotos2026 : activityPhotos2026.filter(item => item.category === category);

  return (
    <div id="activity-photos-2026" className="activity-gallery-2026" aria-labelledby="activity-gallery-title">
      <div className="activity-gallery-heading">
        <div>
          <span className="activity-gallery-eyebrow"><Camera size={17} aria-hidden="true" /> 2026 PHOTO ARCHIVE</span>
          <h3 id="activity-gallery-title">사진으로 만나는 열림의 활동</h3>
          <p>인문학부터 공방까지, 배움과 교류가 이어지는 순간을 만나보세요.</p>
        </div>
        <span className="activity-gallery-total">5개 분야 <span aria-hidden="true">·</span> {activityPhotos2026.length}장</span>
      </div>

      <div className="activity-gallery-filters" role="group" aria-label="활동사진 분야 선택">
        {(['전체', ...activityCategories] as const).map(value => {
          const count = value === '전체' ? activityPhotos2026.length : activityPhotos2026.filter(item => item.category === value).length;
          return (
            <button type="button" key={value} aria-pressed={category === value}
              onClick={() => { setCategory(value); setVisibleCount(6); }}>
              {value}<span>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="activity-gallery-note">
        <ShieldCheck size={16} aria-hidden="true" />
        <p>실제 인물이 담긴 사진은 얼굴을 가려 게시했습니다. 일러스트는 별도로 표시했습니다.</p>
      </div>

      <p className="sr-only" role="status" aria-live="polite">{category} 활동사진 {photos.length}장 중 {Math.min(visibleCount, photos.length)}장 표시</p>
      <div className="activity-gallery-grid">
        {photos.slice(0, visibleCount).map(item => (
          <article key={item.id} className="activity-photo-card" aria-labelledby={`activity-photo-title-${item.id}`}>
            <div className="activity-photo-frame">
              <Image src={item.src} alt={item.title} fill
                sizes="(min-width: 1280px) 395px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
                className="activity-photo-thumbnail" />
              <span className="activity-photo-category">{item.category}</span>
              {item.kind === 'illustration' && <span className="activity-photo-kind">일러스트</span>}
            </div>
            <div className="activity-photo-caption">
              <h4 id={`activity-photo-title-${item.id}`}>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {visibleCount < photos.length && (
        <div className="activity-gallery-more">
          <button type="button" onClick={() => setVisibleCount(count => count + 6)}>
            사진 더 보기 <span>({photos.length - visibleCount}장 남음)</span><ChevronDown size={18} aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
