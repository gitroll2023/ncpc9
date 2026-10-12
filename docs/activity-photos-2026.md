# 2026년 활동사진 게시 기록

## 게시 구성

- 입력: 사용자가 제공한 Downloads/z 폴더의 18개 JPEG 파일.
- 동일 파일 (5)와 (8) 한 쌍은 SHA-256이 같아 한 번만 게시했습니다.
- 최종 게시: 17장. 인문학 1장, KPI 강의 2장, 상담소 2장, 캠핑문화 6장, 공방 6장.
- 실제 인물이 담긴 사진 11장은 내장 image_gen 이미지 편집으로 얼굴 모자이크를 적용했습니다. 작은 얼굴, 옆모습, 부분적으로 가려진 얼굴을 확대해 대조했습니다.
- 공방 작품 사진 1장은 손과 작품만 담겨 있어 얼굴 가림이 필요하지 않았습니다.
- 뚜렷한 활동 일러스트 5장은 얼굴을 가리지 않고 일러스트로 구분했습니다. 사진처럼 보이는 이미지는 보수적으로 얼굴을 가렸습니다.
- 공방 단체사진에서 앞사람 뒤에 부분적으로 보이는 얼굴을 발견해 마스크를 추가했습니다.
- 원본 파일은 변경하지 않았습니다. 새 게시 경로에는 검토한 WebP 파일만 저장했습니다. 원본 JPEG와 편집 전 얼굴 이미지는 새 게시 경로에 넣지 않았습니다.
- 표시 연도는 사용자가 지정한 2026년입니다. 파일명의 다운로드 시간을 촬영일로 사용하지 않았습니다.
- 웹용 변환은 최대 1280px, WebP 품질 88로 저장하며 원본 메타데이터를 복사하지 않았습니다.

## 파일 대응

| 입력 파일 | 최종 게시 파일 | 처리 |
| --- | --- | --- |
| photo_2026-10-12_20-19-54.jpg | `public/images/activities/2026/kpi-02.webp` | 얼굴 모자이크 |
| photo_2026-10-12_20-53-12 (6).jpg | `public/images/activities/2026/kpi-01.webp` | 얼굴 모자이크 |
| photo_2026-10-12_20-53-12 (2).jpg | `public/images/activities/2026/craft-02.webp` | 얼굴 모자이크 |
| photo_2026-10-12_20-53-12 (4).jpg | `public/images/activities/2026/craft-04.webp` | 얼굴 모자이크 |
| photo_2026-10-12_20-53-12 (5).jpg | `public/images/activities/2026/craft-05.webp` | 얼굴 모자이크 |
| photo_2026-10-12_20-53-12.jpg | `public/images/activities/2026/craft-06.webp` | 얼굴 모자이크 |
| photo_2026-10-12_21-25-03 (3).jpg | `public/images/activities/2026/camping-02.webp` | 얼굴 모자이크 |
| photo_2026-10-12_21-25-03 (6).jpg | `public/images/activities/2026/camping-03.webp` | 얼굴 모자이크 |
| photo_2026-10-12_21-25-03.jpg | `public/images/activities/2026/counseling-01.webp` | 활동 일러스트 |
| photo_2026-10-12_21-25-03 (2).jpg | `public/images/activities/2026/counseling-02.webp` | 활동 일러스트 |
| photo_2026-10-12_21-25-03 (4).jpg | `public/images/activities/2026/camping-04.webp` | 활동 일러스트 |
| photo_2026-10-12_21-25-03 (5).jpg | `public/images/activities/2026/camping-05.webp` | 활동 일러스트 |
| photo_2026-10-12_21-25-04.jpg | `public/images/activities/2026/camping-06.webp` | 활동 일러스트 |
| photo_2026-10-12_20-53-12 (3).jpg | `public/images/activities/2026/craft-03.webp` | 얼굴이 없는 작품 사진 |
| photo_2026-10-12_21-25-03 (7).jpg | `public/images/activities/2026/camping-01.webp` | 얼굴 모자이크 |
| photo_2026-10-12_21-28-59.jpg | `public/images/activities/2026/craft-01.webp` | 얼굴 모자이크 |
| photo_2026-10-12_22-17-10.jpg | `public/images/activities/2026/humanities-02.webp` | 얼굴 모자이크 |

## 최종 편집 프롬프트

### kpi-02

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Classroom. Cover the instructor's entire head at front center, every participant head including profiles at far right, partial person at far left, and all small/background heads. Preserve the lecture room and slide.


### kpi-01

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Lecture classroom. Cover the instructor's entire head at front center and all heads of the eight or more seated participants, including profiles at left, tiny people at front left, the central back-of-head and right rear heads. Preserve the slide and event room.


### craft-02

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Flower workshop. Cover all five or more heads: two seated women at left, elderly woman with visor center, standing instructor wearing a mask at upper right, large profile at foreground far right, and any partial head at the right edge. The mask alone is insufficient; eyes must also be covered.


### craft-04

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Craft workshop. Four visible women. Cover every entire face and head including the large cropped face at far left, seated woman in black, younger seated woman in white, and standing instructor in peach at right.


### craft-05

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Flower workshop with nine people around a long table. Cover ALL nine entire heads: large left foreground woman, center foreground woman, rear head behind her, standing gray-haired woman, three distant faces down the table, right foreground woman wearing glasses, red-sleeved woman next to her. Obscure head silhouettes as well for conservative privacy.


### craft-06

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Four women doing crafts at a white table. Cover all four entire heads: large profile at foreground left, standing yellow-striped-shirt woman at center, seated red-shirt woman next to her, seated blue-shirt woman at right. Preserve hands and materials.


### camping-02

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Indoor camping group selfie. There are eleven visible faces/heads, including the HUGE selfie face foreground right and HUGE partially cropped glasses face bottom-left, two men at left, man in white left-center, four women along rear edge of the table, and woman leaning into frame at center-right. Cover EVERY one of these heads entirely, no facial features may remain. Make mosaics large and conspicuous, including edge-cropped faces.


### camping-03

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Three adults seated inside an orange tent. Cover ALL THREE entire heads including both profile men wearing glasses left and right and the woman at center. No eyes, hair, ears, chin or glasses may remain recognizable. Preserve the orange tent and the written materials on table.


### camping-01

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Wide classroom camping scene with four tents. Cover EVERY small human head inside ALL tents and the standing woman at back-right near the lecture board. Include two people in left orange tent, two in central tent, two in rear orange tent, people in right green tent, and any obscured heads. Faces may be tiny but still must be covered. Leave drawn cartoon wall artworks unchanged; cover any photograph of a real face visible on the television. Keep tents and classroom intact.


### craft-01

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Group photo of eight women around a flower workshop table. Cover ALL EIGHT heads, including each distant woman at the far end, the woman wearing a black cap, the seated woman wearing a bucket hat, the woman standing at rear right, the three women at left and the large smiling woman foreground right. Mosaics must cover entire heads and all edges; no recognizable facial detail may remain.

추가 수정 프롬프트:

Use case: precise-object-edit. Edit target: supplied already anonymized workshop group photo. This is a privacy repair. Preserve the photo and all EXISTING mosaic masks EXACTLY. There are NINE people, not eight. One extra person remains partly visible behind the woman in the gray bucket hat, near the middle-right of the photograph: a person wearing a blue baseball cap, around 62 percent from the left and 51 percent from the top. Their cheek and part of face are visible just left of the gray bucket hat at the rear. Add a generously oversized opaque coarse pixel mosaic over the ENTIRE blue-cap person's head, extending from the cap down over the complete face and chin, and spanning all of the partially exposed face behind the gray-hat woman. Join/overlap nearby existing masks if necessary to cover the narrow gap, prioritizing full privacy. ALSO expand the gray bucket-hat woman's mask up through the entire hat so no head or overlapping partly visible face is left uncovered in this central-right cluster. Every one of the NINE people must have the head fully anonymized by opaque large block mosaics. Absolutely no eyes, noses, mouths, profiles or facial features may remain visible. Do not remove or weaken any existing mask. Change only these privacy masks. Do not change framing, room, flowers, hands, clothes, or objects. Same aspect ratio. No new faces, text, watermark or additional changes.


### humanities-02

Use case: precise-object-edit. Edit target: supplied actual event photograph. Required edit: privacy anonymization ONLY. Place strong opaque coarse pixel mosaic rectangles over EVERY human face and entire head. Each head must become a non-identifiable coarse grid of approximately 4 by 4 or 5 by 5 large opaque squares. This is NOT a mild blur: no eyes, nose, mouth, facial contours, skin detail, glasses or hair details may remain recognizable. Slightly enlarge every mosaic to cover forehead, ears, chin, and hair edges, including profile faces, small faces, partially occluded faces, and cropped faces at the image edges. Include people seen from the back to be conservative. Preserve exactly the original photograph's aspect ratio, framing, people positions and bodies, room, objects, hands, clothing, colors and existing text. Do not regenerate or improve the scene, invent people, crop, add a watermark, change text, or introduce any new unmasked face. No other changes. Small lecture around a long table. Cover every human head including the speaker front-left, many profiles across the upper and right side, partially hidden head below the far-right window, all tiny background participants, both large foreground heads and the cap-wearing person lower right. Both front faces and rear head silhouettes should be completely covered by strong opaque coarse block mosaics. Preserve the classroom, monitor and seating.

