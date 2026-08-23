import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeyoung Lee — Graduate Research Applicant",
  description:
    "이예영 / Yeyoung Lee — Industrial AI, Anomaly Detection, Explainable AI 연구자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-canvas">{children}</body>
    </html>
  );
}
