import type { Metadata } from "next";
import Link from "next/link";
import { differentiators } from "@/lib/content.ar";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "لماذا DSS | درع الحلول الرقمية",
};

export default function WhyUsPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="ar" label="رجوع" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">الفرق</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">لماذا درع الحلول الرقمية؟</h1>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.number} className="card">
              <span className="font-heading text-sm text-accent">{d.number}</span>
              <h2 className="mt-2 font-heading text-xl font-semibold">{d.title}</h2>
              <p className="mt-2 text-sm text-muted">{d.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/ar/contact" className="btn-primary inline-flex">
            احجز استشارة
          </Link>
        </div>
      </section>
    </>
  );
}
