import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experienceItems } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Experience & Activities" title="경험 및 활동" />
        </FadeIn>

        <ul className="divide-y divide-line border-t border-line">
          {experienceItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <li className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-8">
                <div>
                  <h3 className="text-[15px] font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.period}</p>
                </div>
                <div>
                  {item.description && (
                    <ul className="space-y-1.5 text-[15px] leading-relaxed text-body">
                      {item.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
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
