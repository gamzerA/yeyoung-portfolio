const navItems = [
  { href: "#research-focus", label: "Research Focus" },
  { href: "#featured-research", label: "Featured Research" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-navy"
        >
          Yeyoung Lee
        </a>
        <nav aria-label="주요 섹션 이동">
          <ul className="hidden gap-6 text-sm text-body md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* 모바일: 가로 스크롤 가능한 간결한 링크 목록 */}
          <ul className="flex gap-4 overflow-x-auto text-xs text-body md:hidden">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
