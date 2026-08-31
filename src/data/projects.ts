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
    id: "extinction-response-fund",
    title:
      "Chungbuk Regional Depopulation Response Fund Performance Analysis AI Agent",
    period: "2026.08",
    context: "Chungbuk Regional AI Innovation Project",
    role: "Team Lead",
    status: "completed",
    problem:
      "충북 지방소멸대응기금의 배분·집행 성과와 청년 인구 변화를 함께 분석하고, 정책 담당자가 근거를 확인하면서 차년도 투자 방향을 검토할 수 있는 AI 서비스를 구축했습니다.",
    data: "충북 11개 시군의 2017~2024년 지방소멸대응기금 및 청년 인구·순이동 관련 데이터를 활용했습니다.",
    approach: [
      "분석 API가 반환한 수치만 인용하고 호출 엔드포인트와 출처를 함께 표시하는 근거 기반 AI 질의 기능 구현",
      "시군별 기금 배분액·집행액·집행률과 청년 인구지표를 비교하는 진단 대시보드 구성",
      "처치군·비교군의 순이동률 추세와 기금 효과를 검토하는 인과분석 흐름 설계",
      "분석 결과를 차년도 투자 제안과 사업계획서 초안으로 연결하는 의사결정 지원 흐름 구현",
    ],
    validation:
      "공개 배포 환경에서 분석 API 연결 상태와 데이터 기준 시점을 표시하며, 답변 수치가 API 응답과 출처에 근거하도록 구성했습니다. 서비스는 2024년 12월 기준 데이터로 정상 운영 중입니다.",
    result:
      "AI 질의, 기금 대시보드, 인과분석, 차년도 제안, 사업계획서 초안 기능을 갖춘 서비스를 완성해 공개 배포했습니다.",
    techStack: ["AI Agent", "REST API", "Causal Inference", "Data Dashboard"],
    links: [
      {
        label: "라이브 서비스 바로가기",
        url: "https://chungbuk-insight-agent.lovable.app/",
      },
    ],
    image: {
      src: `${siteBasePath}/images/projects/chungbuk-depopulation-fund.png`,
      alt: "충북 지방소멸대응기금 성과분석 AI 에이전트의 AI 질의 화면 캡쳐",
      caption: "충북 지방소멸대응기금 성과분석 AI 에이전트 라이브 서비스 캡쳐",
    },
  },
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
