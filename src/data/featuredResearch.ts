import { xgboostRepositoryUrl } from "./site";

export const featuredResearch = {
  title:
    "Fair-Value Estimation and Anomalous Transaction Detection in Seoul Real Estate",
  venue: "한국정보통신학회 제59회 춘계학술대회 · 구두 발표",
  date: "2026",
  repositoryUrl: xgboostRepositoryUrl,
  sections: [
    {
      label: "Research Question",
      body: "서울 부동산 거래 데이터로부터 적정 거래가격을 추정하고, 예측값과 실제값의 차이를 통해 이상거래 후보를 식별할 수 있는가.",
    },
    {
      label: "Data & Method",
      body: "서울 부동산 거래 189,864건을 정제·분석하고, XGBoost 회귀모형을 적용해 거래가격을 예측했다.",
    },
    {
      label: "Validation",
      body: "예측 모형의 평균 R²는 0.9172로 나타났다.",
    },
    {
      label: "Result",
      body: "예측 잔차를 이용해 이상거래 후보 922건을 식별했다.",
    },
    {
      label: "Contribution",
      body: "데이터 분석과 결과 해석에 기여했으며, 7분 구두 발표와 질의응답을 직접 진행했다.",
    },
  ],
};
