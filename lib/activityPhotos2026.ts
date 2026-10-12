export const activityCategories = ['인문학', 'KPI 강의', '상담소', '캠핑문화', '공방'] as const;
export type ActivityCategory = typeof activityCategories[number];

export interface ActivityPhoto {
  id: string;
  category: ActivityCategory;
  title: string;
  description: string;
  src: string;
  kind: 'photo' | 'illustration';
  facesRedacted: boolean;
}

const photo = (
  id: string, category: ActivityCategory, title: string, description: string,
  kind: ActivityPhoto['kind'] = 'photo', facesRedacted = true,
): ActivityPhoto => ({
  id, category, title, description, kind,
  facesRedacted: kind === 'photo' && facesRedacted,
  src: `/images/activities/2026/${id}.webp`,
});

export const activityPhotos2026: ActivityPhoto[] = [
  photo('humanities-02', '인문학', '가까이에서 나누는 인문학', '강의를 듣고 함께 이야기를 나누는 모임.'),
  photo('kpi-01', 'KPI 강의', 'KPI 강의 현장', '강연자의 이야기에 귀 기울이며 함께하는 배움.'),
  photo('counseling-01', '상담소', '이야기를 나누는 상담소', '대화와 공감의 시간을 담은 활동 일러스트.', 'illustration'),
  photo('camping-01', '캠핑문화', '문화공간에서 만나는 캠핑', '텐트와 함께 새로운 문화 활동을 나누는 공간.'),
  photo('craft-01', '공방', '꽃과 함께한 공방의 하루', '꽃을 다듬고 작품을 완성하며 함께한 순간.'),
  photo('craft-02', '공방', '함께 만드는 꽃바구니', '서로의 손길이 모여 완성되는 공방 활동.'),
  photo('kpi-02', 'KPI 강의', '기질을 이해하는 KPI 강의', '강의 자료를 함께 살피며 배움을 나누는 시간.'),
  photo('counseling-02', '상담소', '공감으로 이어지는 이야기', '편안한 대화의 분위기를 표현한 활동 일러스트.', 'illustration'),
  photo('camping-02', '캠핑문화', '함께 둘러앉은 캠핑 모임', '텐트 곁에서 함께 식사하고 교류하는 시간.'),
  photo('camping-03', '캠핑문화', '텐트 안에서 나누는 시간', '함께 생각을 적고 이야기를 나누는 활동.'),
  photo('camping-04', '캠핑문화', '따뜻한 캠핑의 풍경', '텐트 안의 즐거운 교류를 담은 활동 일러스트.', 'illustration'),
  photo('camping-05', '캠핑문화', '문화로 이어지는 작은 만남', '함께 둘러앉은 캠핑의 순간을 표현한 일러스트.', 'illustration'),
  photo('camping-06', '캠핑문화', '일상 속 캠핑 이야기', '편안한 만남과 캠핑의 분위기를 담은 일러스트.', 'illustration'),
  photo('craft-03', '공방', '손끝으로 완성하는 작은 작품', '함께 만든 작품을 한자리에 모아 나누는 순간.', 'photo', false),
  photo('craft-04', '공방', '집중하며 함께하는 만들기', '재료를 살피고 차근차근 작품을 만들어가는 시간.'),
  photo('craft-05', '공방', '꽃으로 채우는 문화 활동', '꽃과 재료를 나누며 이어가는 공방의 배움.'),
  photo('craft-06', '공방', '손으로 배우고 마음을 나누다', '작품을 만들며 자연스럽게 이어지는 대화와 교류.'),
];
