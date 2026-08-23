import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { researchFocusItems, longTermDirection } from "@/data/researchFocus";

export default function ResearchFocus() {
  return (
    <section
      id="research-focus"
      className="border-b border-line bg-surface py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Research Focus" title="연구 관심 분야" />
        </FadeIn>

        <ol className="divide-y divide-line border-t border-line">
          {researchFocusItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 60}>
              <li className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[minmax(0,220px)_1fr] md:gap-8">
                <h3 className="text-[15px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-body">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={200}>
          <div className="mt-12 border-t border-line pt-8">
            <h3 className="text-sm font-medium tracking-[0.1em] text-accent uppercase">
              Long-term Direction
            </h3>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-body">
              {longTermDirection}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
