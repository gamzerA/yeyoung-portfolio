import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { educationItems, relevantCoursework } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-surface py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Education" title="학력" />
        </FadeIn>

        <ul className="divide-y divide-line border-t border-line">
          {educationItems.map((item, index) => (
            <FadeIn key={item.school} delay={index * 60}>
              <li className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-8">
                <div>
                  <h3 className="text-[15px] font-semibold text-navy">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm text-body">{item.department}</p>
                </div>
                <div className="text-[15px] leading-relaxed text-body">
                  <p>{item.period}</p>
                  <p className="text-muted">{item.detail}</p>
                  {item.note && <p className="text-muted">{item.note}</p>}
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={140}>
          <div className="mt-10 border-t border-line pt-8">
            <h3 className="text-sm font-medium tracking-[0.1em] text-accent uppercase">
              Relevant Coursework
            </h3>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-body">
              {relevantCoursework.join(", ")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
