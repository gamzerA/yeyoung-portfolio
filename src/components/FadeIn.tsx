"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * 요소가 뷰포트에 들어오면 짧게 페이드인한다.
 * prefers-reduced-motion 사용자와 JS 비활성 환경에서는 즉시 보이도록 처리한다.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    // 모션 축소 환경 등으로 이미 보이는 상태라면 관찰기를 붙일 필요가 없다.
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // 마운트 시 최초 상태(prefers-reduced-motion)만 참조하면 되므로 의도적으로 1회만 실행한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "fade-in" : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
