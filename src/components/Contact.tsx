import Container from "./Container";
import FadeIn from "./FadeIn";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
            연구 및 대학원 지원 관련 문의
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body">
            연구실 지원 및 협업 관련 문의는 아래 연락처로 보내주시면
            확인 후 회신드리겠습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
