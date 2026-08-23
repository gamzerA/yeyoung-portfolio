import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Skills" title="기술 역량" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-line pt-8 md:grid-cols-2">
          {skillCategories.map((group, index) => (
            <FadeIn key={group.category} delay={index * 50}>
              <h3 className="text-sm font-medium tracking-[0.06em] text-navy">
                {group.category}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                {group.items.join(", ")}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
