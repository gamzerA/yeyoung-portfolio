# Yeyoung Lee — Graduate Research Portfolio

이예영의 단일 페이지 포트폴리오.😉
## 실행 방법

```bash
npm install
npm run dev
# http://localhost:3000
```

프로덕션 정적 빌드:

```bash
npm run build
# 결과물: out/
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages로 배포한다.

- 공개 주소: `https://gamzerA.github.io/yeyoung-portfolio/`
- 저장소 설정의 **Pages → Build and deployment** 소스는 **GitHub Actions**를 사용한다.

## 폴더 구조

```
src/
  app/
    layout.tsx        # 전역 레이아웃, 메타데이터
    page.tsx           # 섹션을 순서대로 조립하는 홈 페이지
    globals.css         # 색상/타이포그래피 디자인 토큰, 접근성 스타일
  components/
    Header.tsx          # 상단 고정 내비게이션 (섹션 앵커 링크)
    Hero.tsx
    ResearchFocus.tsx
    FeaturedResearch.tsx
    Projects.tsx         # ProjectItem을 반복 렌더링
    ProjectItem.tsx
    Experience.tsx
    Education.tsx
    Skills.tsx
    Honors.tsx
    Contact.tsx
    Footer.tsx
    SectionHeading.tsx    # 재사용 섹션 제목 컴포넌트
    ImagePlaceholder.tsx  # 이미지 미제공 시 표시되는 자리표시자
    FadeIn.tsx              # 짧은 스크롤 페이드인 (IntersectionObserver, prefers-reduced-motion 대응)
    Container.tsx
  data/
    profile.ts           # Hero 정보 (이름, 소개, 링크, CV 경로)
    researchFocus.ts
    featuredResearch.ts
    projects.ts            # 프로젝트 A/B/C 데이터 배열
    experience.ts
    education.ts
    skills.ts
    honors.ts
```

## 콘텐츠 원칙

확인되지 않은 정량 성과나 역할은 임의로 추가하지 않는다. 공개 페이지에서는 미확정 정보 안내를 노출하지 않고, 확인된 내용만 표시한다.

## CV 다운로드 버튼 활성화 방법

CV 파일은 `public/cv/Lee_Yeyoung_Graduate_Research_CV.pdf`에 있으며, 상단의 **CV Download** 버튼에서 내려받을 수 있다.
