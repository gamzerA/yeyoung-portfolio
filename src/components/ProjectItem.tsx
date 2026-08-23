import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/data/projects";

const fieldOrder: {
  key: keyof Pick<
    Project,
    "problem" | "role" | "data" | "validation" | "result"
  >;
  label: string;
}[] = [
  { key: "problem", label: "Problem" },
  { key: "role", label: "Role" },
  { key: "data", label: "Data" },
  { key: "validation", label: "Validation" },
  { key: "result", label: "Result" },
];

export default function ProjectItem({ project }: { project: Project }) {
  const resultLabel = project.status === "ongoing" ? "Current Status" : "Result";

  return (
    <article className="border-t border-line py-12">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg md:text-xl font-semibold leading-snug text-navy">
            {project.title}
          </h3>
          <span
            className={`shrink-0 text-xs font-medium uppercase tracking-wide ${
              project.status === "ongoing" ? "text-accent" : "text-muted"
            }`}
          >
            {project.status === "ongoing" ? "진행 중" : "완료"}
          </span>
        </div>
        <p className="text-sm text-muted">
          {project.context} · {project.period}
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_240px]">
        <dl className="space-y-5">
          {fieldOrder.map(({ key, label }) => {
            if (key === "validation" && !project.validation) return null;
            const displayLabel = key === "result" ? resultLabel : label;
            return (
              <div key={key} className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6">
                <dt className="text-sm font-medium text-accent">
                  {displayLabel}
                </dt>
                <dd className="text-[15px] leading-relaxed text-body">
                  {project[key]}
                </dd>
              </div>
            );
          })}

          <div className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6">
            <dt className="text-sm font-medium text-accent">Approach</dt>
            <dd>
              <ul className="space-y-1.5 text-[15px] leading-relaxed text-body">
                {project.approach.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span aria-hidden="true" className="text-line">
                      —
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          {project.techStack.length > 0 && (
            <div className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6">
              <dt className="text-sm font-medium text-accent">Tech Stack</dt>
              <dd className="text-[15px] leading-relaxed text-body">
                {project.techStack.join(", ")}
              </dd>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="grid grid-cols-1 gap-1 md:grid-cols-[120px_1fr] md:gap-6">
              <dt className="text-sm font-medium text-accent">Link</dt>
              <dd className="text-[15px] leading-relaxed">
                {project.links.map((link) => (
                  <span key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="border-b border-navy text-navy transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label} ↗
                    </a>
                    {link.note && (
                      <span className="ml-2 text-xs text-muted">
                        ({link.note})
                      </span>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          )}

        </dl>

        {project.image ? (
          <figure className="m-0">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-line">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 768px) 240px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted">
              {project.image.caption}
            </figcaption>
          </figure>
        ) : (
          <ImagePlaceholder label={project.title.split("—")[0].trim()} />
        )}
      </div>
    </article>
  );
}
