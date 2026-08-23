import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-line bg-surface py-20 md:py-28"
    >
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="Selected Projects" title="주요 프로젝트" />
        </FadeIn>

        <div>
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 60}>
              <ProjectItem project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
