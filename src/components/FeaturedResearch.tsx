import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { featuredResearch } from "@/data/featuredResearch";

export default function FeaturedResearch() {
  return (
    <section id="featured-research" className="border-b border-line py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Featured Research" title="대표 연구" />
        </FadeIn>

        <FadeIn delay={80}>
          <article className="border-t border-line pt-8">
            <h3 className="text-xl md:text-2xl font-semibold leading-snug text-navy">
              {featuredResearch.title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <p className="text-muted">{featuredResearch.venue}</p>
              <a
                href={featuredResearch.repositoryUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
              >
                GitHub Repository ↗
              </a>
            </div>

            <dl className="mt-8 divide-y divide-line border-t border-line">
              {featuredResearch.sections.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 gap-2 py-5 md:grid-cols-[160px_1fr] md:gap-8"
                >
                  <dt className="text-sm font-medium text-accent">
                    {s.label}
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-body">
                    {s.body}
                  </dd>
                </div>
              ))}
            </dl>

          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
