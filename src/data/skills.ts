export interface SkillCategory {
  category: string;
  items: string[];
}

// 근거 없는 숙련도(%) 표기나 막대그래프는 사용하지 않는다. 보유 도구만 나열한다.
export const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    category: "Machine Learning",
    items: ["XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
  },
  {
    category: "Database & Backend",
    items: ["PostgreSQL", "PostGIS", "Git", "GitHub"],
  },
  {
    category: "Analysis & Validation",
    items: [
      "Stratified K-Fold",
      "Class imbalance handling",
      "Threshold tuning",
      "Error analysis",
    ],
  },
];
