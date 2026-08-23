export interface EducationItem {
  school: string;
  department: string;
  period: string;
  detail: string;
  note?: string;
}

export const educationItems: EducationItem[] = [
  {
    school: "Yong In University",
    department: "Department of Artificial Intelligence",
    period: "2025.03 – 2027.02 (졸업 예정)",
    detail: "GPA 3.82 / 4.5",
    note: "편입학",
  },
  {
    school: "Yong-In Arts & Science University",
    department: "Department of Big Data Management",
    period: "2022.03 – 2025.02",
    detail: "GPA 4.46 / 4.5",
  },
];

export const relevantCoursework = [
  "Artificial Intelligence",
  "Machine Learning",
  "Big Data Analytics",
  "Financial Time Series",
  "Computer Architecture",
  "Operating Systems",
  "Computer Networks",
  "Text Mining",
];
