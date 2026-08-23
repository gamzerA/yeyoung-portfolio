import { siteBasePath } from "./site";

export type ProjectStatus = "completed" | "ongoing";

export interface Project {
  id: string;
  title: string;
  period: string;
  context: string; // 대회/과목/사업명
  role: string;
  status: ProjectStatus;
  problem: string;
  data: string;
  approach: string[];
  validation: string;
  result: string; // status가 completed면 Result, ongoing이면 Current Status로 라벨링
  techStack: string[];
  links?: { label: string; url: string; note?: string }[];
  // 실제 서비스/저장소 화면 스크린샷 경로. 없으면 이미지 자리표시자를 표시한다.
  image?: { src: string; alt: string; caption: string };
}

export const projects: Project[] = [
  {
    id: "greenfab-insight",
    title:
      "GreenFab Insight — Semiconductor Defect Prediction, Explanation, and ESG Dashboard",
    period: "2026.08",
    context: "EST AI Challengers Hackathon",
    role: "Team Lead / Modeling Lead",
    status: "completed",
    problem:
      "반도체 공정 데이터를 활용해 불량을 조기에 예측하고, 그 판단 근거를 설명 가능한 형태로 제시하는 것을 목표로 한 해커톤 프로젝트입니다.",
    data: "UCI SECOM 데이터셋 — 샘플 1,567개, 센서 변수 591개, 불량 104건.",
    approach: [
      "LightGBM 기반 예측 모델 구축",
      "Optuna를 이용한 하이퍼파라미터 탐색",
      "SHAP을 이용한 모델 판단 근거 설명",
      "클래스 가중치 적용 및 Stratified 5-Fold 교차검증",
      "의사결정 임곗값(threshold) 최적화",
    ],
    validation:
      "Recall, Precision, PR-AUC, Balanced Accuracy와 실패 사례 분석을 함께 검토했으며, 정확도(accuracy) 단일 지표만으로 모델을 평가하지 않았습니다.",
    result:
      "팀 리드 및 모델링 리드로서 위 모델링·평가 파이프라인 구축에 기여했습니다.",
    techStack: ["Python", "LightGBM", "Optuna", "SHAP"],
    links: [
      {
        label: "라이브 데모 바로가기",
        url: "https://greenfab-loop-web.onrender.com/",
      },
    ],
    image: {
      src: `${siteBasePath}/images/projects/greenfab-insight.jpg`,
      alt: "GreenFab Loop 대시보드 — 위험 선별 단계 화면 캡쳐",
      caption: "GreenFab Loop 라이브 데모 캡쳐",
    },
  },
  {
    id: "safenavi",
    title: "SafeNavi — Location-Based Natural-Disaster Shelter Guidance",
    period: "2026.03 – 2026.06",
    context: "Capstone Project",
    role: "데이터 수집·전처리 및 데이터베이스 담당",
    status: "completed",
    problem:
      "재난 상황에서 사용자의 위치를 기반으로 가까운 대피소와 행동 요령을 안내하는 서비스를 만드는 캡스톤 프로젝트입니다.",
    data: "전국 대피소 자료 87,767건과 재난 행동요령 645건을 수집·정제했습니다.",
    approach: [
      "PostgreSQL/PostGIS 기반 데이터베이스 구축",
      "주변 대피소 검색을 위한 공간 데이터 구조 설계",
      "배포 서비스에 데이터베이스 통합",
    ],
    validation: "",
    result:
      "데이터 수집·전처리와 공간 데이터베이스 설계를 담당했습니다. 서비스는 현재 정상적으로 접속되며, 재난문자·기상정보 기반 안전지수, 위치 기반 대피소 추천, 행동요령 안내, 가족과의 위치·상태 공유 기능을 제공합니다(서비스 소개 페이지 기준).",
    techStack: ["PostgreSQL", "PostGIS"],
    links: [
      {
        label: "서비스 바로가기",
        url: "https://www.safenavi.site",
      },
    ],
    image: {
      src: `${siteBasePath}/images/projects/safenavi.jpg`,
      alt: "SafeNavi 서비스 랜딩 화면 캡쳐",
      caption: "safenavi.site 캡쳐",
    },
  },
  {
    id: "extinction-response-fund",
    title:
      "Impact Validation and Investment Recommendation for the Local Extinction Response Fund",
    period: "2026.08 – 현재",
    context: "Chungbuk Regional AI Innovation Project",
    role: "Team Lead",
    status: "ongoing",
    problem:
      "지역소멸대응기금 투자의 효과를 검증하고, 다음 연도 투자 방향을 제시하기 위한 프레임워크를 설계하는 진행 중인 프로젝트입니다.",
    data: "청년 순이동 등 정책 성과변수를 활용합니다.",
    approach: [
      "청년 순이동 등 성과변수를 활용한 효과검증 프레임워크 설계",
      "기준선(baseline), 시점 외 검증, 오차 분석 설계",
      "이중차분(DID) 기반 근거 등급 설계",
      "대화형 질의 → 진단 대시보드 → 차년도 투자계획 생성으로 이어지는 서비스 흐름 기획",
    ],
    validation:
      "기준선 설정, 시점 외 검증, 오차 분석을 포함한 검증 체계를 설계하는 단계입니다.",
    result:
      "현재 진행 중인 프로젝트로, 팀 리드로서 효과검증 프레임워크와 서비스 흐름을 설계하고 있습니다. 아직 완료된 성과는 없습니다.",
    techStack: [],
  },
  {
    id: "influence",
    title: "Influence — Instagram Profile Catalog & Story Card Platform",
    period: "2026.08.16 (1일)",
    context: "Codex Community Hackathon - Seoul for Students",
    role: "Insight 참가자 (도메인 전문성) — Build 2명·Insight 2명 4인 팀",
    status: "completed",
    problem:
      "Instagram 인플루언서 프로필을 카탈로그화하고, 기록을 스토리카드로 만들어 제작 패키지 승인·내보내기까지 이어지는 흐름을 하루 만에 동작하는 MVP로 구현하는 것을 목표로 한 Codex 기반 원데이 해커톤 프로젝트입니다.",
    data: "58개 Instagram 프로필로 구성된 카탈로그 데이터를 활용했습니다(분야·국가·팔로워 수 기준 검색 가능).",
    approach: [
      "기록 → StoryCard → 제작 패키지 → 승인·내보내기로 이어지는 서비스 흐름 구현",
      "PostgreSQL/pgvector 기반 자연어 의미 검색",
      "Google OAuth·Calendar 선택적 연동, OpenAI/RAG 기반 콘텐츠 처리(데모 모드 지원)",
      "Docker Compose 로컬 환경 및 AWS(Amplify, ECS, RDS, S3) 배포 구성",
    ],
    validation: "",
    result:
      "하루 동안 진행된 해커톤에서 Insight 참가자로 문제 정의와 사용자 관점 제시에 참여했으며, 팀은 위 기능을 갖춘 동작하는 MVP를 완성했습니다. 별도의 심사 결과나 수상은 없었습니다.",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker", "AWS"],
    links: [
      {
        label: "GitHub 저장소",
        url: "https://github.com/hnuu785/influencer",
      },
    ],
    image: {
      src: `${siteBasePath}/images/projects/influence.jpg`,
      alt: "Influence GitHub 저장소 화면 캡쳐",
      caption: "github.com/hnuu785/influencer 캡쳐",
    },
  },
];
