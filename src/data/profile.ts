// Hero / 최상단 프로필 정보
// 제공되지 않은 값(학교 이메일, 전화번호)은 절대 채우지 않는다.

import { siteBasePath } from "./site";

export const profile = {
  nameKo: "이예영",
  nameEn: "Yeyoung Lee",
  role: "Graduate Research Applicant",
  statement:
    "산업 데이터에서 발생하는 희소 이상을 신뢰성 있게 탐지하고, 모델의 판단과 실패 원인을 현장 엔지니어가 이해할 수 있도록 설명하는 AI 시스템을 연구합니다.",
  keywords: [
    "Industrial AI",
    "Smart Manufacturing",
    "Anomaly Detection",
    "Explainable AI",
    "Multimodal Learning",
  ],
  githubUrl: "https://github.com/gamzerA",
  email: "y2l1003@naver.com",
  // public/cv/ 아래 실제 CV 파일 경로. null이면 버튼이 비활성 상태로 렌더링된다.
  cvFilePath:
    `${siteBasePath}/cv/Lee_Yeyoung_Graduate_Research_CV.pdf` as string | null,
  cvFileName: "Lee_Yeyoung_Graduate_Research_CV.pdf",
};
