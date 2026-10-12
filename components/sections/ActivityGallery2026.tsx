'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Camera, ChevronDown, ChevronLeft, ChevronRight, ShieldCheck, X, ZoomIn } from 'lucide-react';
import { activityCategories, activityPhotos2026, type ActivityCategory } from '../../lib/activityPhotos2026';

export default function ActivityGallery2026() {
  const [category, setCategory] = useState<ActivityCategory | '전체'>('전체');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const photos = category === '전체' ? activityPhotos2026 : activityPhotos2026.filter(item => item.category === category);
  const selectedIndex = photos.findIndex(item => item.id === selectedId);
  const selectedPhoto = photos[selectedIndex];
  const isOpen = selectedId !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const navigate = (direction: number) => {
    setSelectedId(photos[(selectedIndex + direction + photos.length) % photos.length].id);
  };

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
          <button type="button" key={item.id} className="activity-photo-card"
            aria-label={`${item.category} · ${item.title} ${item.kind === 'illustration' ? '일러스트' : '사진'} 확대 보기`}
            onClick={event => { openerRef.current = event.currentTarget; setSelectedId(item.id); }}>
            <div className="activity-photo-frame">
              <Image src={item.src} alt={item.title} fill
                sizes="(min-width: 1280px) 395px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
                className="activity-photo-thumbnail" />
              <span className="activity-photo-category">{item.category}</span>
              <span className="activity-photo-zoom"><ZoomIn size={18} aria-hidden="true" /></span>
              {item.kind === 'illustration' && <span className="activity-photo-kind">일러스트</span>}
            </div>
            <div className="activity-photo-caption">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="activity-photo-link">크게 보기 <ChevronRight size={15} aria-hidden="true" /></span>
            </div>
          </button>
        ))}
      </div>

      {visibleCount < photos.length && (
        <div className="activity-gallery-more">
          <button type="button" onClick={() => setVisibleCount(count => count + 6)}>
            사진 더 보기 <span>({photos.length - visibleCount}장 남음)</span><ChevronDown size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      <dialog ref={dialogRef} className="activity-photo-dialog" aria-labelledby="activity-photo-dialog-title"
        onCancel={event => { event.preventDefault(); setSelectedId(null); }}
        onClick={event => { if (event.target === event.currentTarget) setSelectedId(null); }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
          if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
        }}>
        {selectedPhoto && (
          <div className="activity-photo-dialog-content">
            <div className="activity-photo-dialog-header">
              <span>{selectedPhoto.category} <span aria-hidden="true">·</span> 2026</span>
              <button type="button" aria-label="사진 확대 보기 닫기" onClick={() => setSelectedId(null)} autoFocus><X size={24} aria-hidden="true" /></button>
            </div>
            <div className="activity-photo-dialog-image"
              onTouchStart={event => { touchStartRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
              onTouchEnd={event => {
                const start = touchStartRef.current;
                if (!start) return;
                const deltaX = event.changedTouches[0].clientX - start.x;
                const deltaY = event.changedTouches[0].clientY - start.y;
                touchStartRef.current = null;
                if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) navigate(deltaX < 0 ? 1 : -1);
              }}>
              <Image key={selectedPhoto.id} src={selectedPhoto.src} alt={selectedPhoto.title} fill sizes="(min-width: 1200px) 1100px, 96vw" className="activity-photo-full" />
            </div>
            <div className="activity-photo-dialog-caption">
              <div>
                <h4 id="activity-photo-dialog-title">{selectedPhoto.title}</h4>
                <p>{selectedPhoto.description}</p>
                <span>{selectedPhoto.kind === 'illustration' ? '활동 일러스트' : selectedPhoto.facesRedacted ? '얼굴 모자이크 처리 사진' : '활동 사진'}</span>
              </div>
              <div className="activity-photo-dialog-navigation">
                <button type="button" aria-label="이전 활동사진" onClick={() => navigate(-1)} disabled={photos.length < 2}><ChevronLeft size={23} aria-hidden="true" /></button>
                <span aria-live="polite">{selectedIndex + 1} / {photos.length}</span>
                <button type="button" aria-label="다음 활동사진" onClick={() => navigate(1)} disabled={photos.length < 2}><ChevronRight size={23} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
