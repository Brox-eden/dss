"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ locale, label }: { locale: "en" | "ar"; label: string }) {
  const router = useRouter();
  const arrow = locale === "ar" ? "→" : "←";

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium opacity-80 transition hover:opacity-100 hover:underline"
    >
      <span aria-hidden="true">{arrow}</span>
      {label}
    </button>
  );
}
