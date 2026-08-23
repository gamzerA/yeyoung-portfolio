export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
          {description}
        </p>
      )}
    </div>
  );
}
