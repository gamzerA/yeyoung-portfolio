import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy py-8 text-sm text-white/70">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {profile.nameKo} · {profile.nameEn}
        </p>
        <p className="text-white/50">Graduate Research Applicant Portfolio</p>
      </div>
    </footer>
  );
}
