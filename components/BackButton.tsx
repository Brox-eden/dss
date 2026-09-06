"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ locale, label }: { locale: "en" | "ar"; label: string }) {
  const router = useRouter();
  const arrow = locale === "ar" ? "→" : "←";

  return (
    <button type="button" onClick={() => router.back()} className="btn-secondary inline-flex items-center gap-2">
      <span aria-hidden="true">{arrow}</span>
      {label}
    </button>
  );
}
