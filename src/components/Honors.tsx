import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { honorItems } from "@/data/honors";

export default function Honors() {
  return (
    <section id="honors" className="border-b border-line bg-surface py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Honors & Qualifications" title="수상 및 자격" />
        </FadeIn>

        <ul className="divide-y divide-line border-t border-line">
          {honorItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 40}>
              <li className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[15px] font-medium text-navy">
                    {item.title}
                  </h3>
                  {item.detail && (
                    <span className="text-sm text-muted">{item.detail}</span>
                  )}
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
