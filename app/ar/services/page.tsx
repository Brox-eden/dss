import type { Metadata } from "next";
import Link from "next/link";
import { servicePillars } from "@/lib/content.ar";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "الخدمات | درع الحلول الرقمية",
};

export default function ServicesPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="ar" label="رجوع" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">التغطية</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">محفظة الخدمات</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">
            الاستشارات والهندسة والآن الأتمتة: ثلاثة محاور تغطي المسار الكامل من السياسات إلى الحماية المُطبَّقة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 md:grid-cols-3">
          {servicePillars.map((pillar) => (
            <Link key={pillar.slug} href={`/ar/services/${pillar.slug}`} className="card flex flex-col">
              <span className="font-heading text-sm text-accent">{pillar.number}</span>
              <h2 className="mt-2 font-heading text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted">{pillar.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-muted-light">
                {pillar.items.slice(0, 2).map((item) => (
                  <li key={item.title}>• {item.title}</li>
                ))}
              </ul>
              <span className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                عرض التفاصيل ←
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
