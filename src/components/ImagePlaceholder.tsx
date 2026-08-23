export default function ImagePlaceholder({
  label,
  aspect = "aspect-[16/9]",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} w-full border border-dashed border-line bg-surface flex items-center justify-center`}
      role="img"
      aria-label={`${label} — 이미지 준비 중`}
    >
      <span className="px-4 text-center text-xs text-muted">
        {label}
        <br />
        이미지 준비 중
      </span>
    </div>
  );
}
