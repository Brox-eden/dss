import type { Metadata } from "next";
import { pageSeo, termsSections } from "@/lib/content.ar";
import { hreflang } from "@/lib/seo";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: pageSeo.terms.title,
  description: pageSeo.terms.description,
  alternates: hreflang("/terms", "/ar/terms"),
};

export default function TermsPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">قانوني</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">شروط الاستخدام</h1>
        </div>
      </section>

      <section className="section max-w-3xl">
        <div className="space-y-8">
          {termsSections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-lg font-semibold text-accent">{s.heading}</h2>
              <p className="mt-2 text-muted-strong">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BackButton locale="ar" label="رجوع" />
        </div>
      </section>
    </>
  );
}
