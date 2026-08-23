export interface ExperienceItem {
  title: string;
  period: string;
  description?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    title: "Undergraduate Researcher / Research Intern",
    period: "2023.07 – 2024.02",
    description: [
      "문헌 조사, 데이터 수집·전처리, 탐색적 분석, 결과 종합, 연구 문서 작성",
    ],
  },
  {
    title: "BITAmin Intercollegiate Big Data Club · 18th Cohort",
    period: "2026.07 – 현재",
    description: ["딥러닝·멀티모달 AI 세션, 논문 리뷰, 팀 프로젝트 리더십"],
  },
  {
    title: "EST AI Challengers · 1st Cohort",
    period: "2026.07 – 현재",
    description: ["팀장, 프로젝트 매니저, 모델링 리드"],
  },
  {
    title: "TS Traffic Safety Supporters",
    period: "2024.07 – 2024.11",
  },
  {
    title: "YASU Tutoring Program",
    period: "2023.09 – 2023.11",
  },
];
