import Container from "./Container";
import FadeIn from "./FadeIn";
import { profile } from "@/data/profile";

export default function Hero() {
  const cvAvailable = Boolean(profile.cvFilePath);

  return (
    <section id="top" className="border-b border-line py-20 md:py-28">
      <Container>
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
            {profile.role}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-navy">
            {profile.nameKo}
            <span className="mx-3 text-line">/</span>
            <span className="font-normal">{profile.nameEn}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body">
            {profile.statement}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-navysoft">
            {profile.keywords.map((keyword, i) => (
              <li key={keyword} className="flex items-center gap-3">
                <span>{keyword}</span>
                {i < profile.keywords.length - 1 && (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
            >
              {profile.email}
            </a>
            {cvAvailable ? (
              <a
                href={profile.cvFilePath as string}
                download={profile.cvFileName}
                className="border border-navy px-4 py-2 text-navy transition-colors hover:border-accent hover:text-accent"
              >
                CV Download
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="CV 파일이 아직 제공되지 않았습니다"
                className="cursor-not-allowed border border-line px-4 py-2 text-muted disabled:opacity-70"
              >
                CV Download{" "}
                <span className="text-xs">(준비 중)</span>
              </button>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
