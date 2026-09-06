import type { Metadata } from "next";
import Link from "next/link";
import { servicePillars } from "@/lib/content.ar";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "الاستشارات والامتثال | درع الحلول الرقمية",
};

const pillar = servicePillars.find((p) => p.slug === "consulting-compliance")!;

export default function ConsultingCompliancePageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="ar" label="رجوع" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">استشاري · {pillar.number}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{pillar.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">{pillar.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {pillar.items.map((item) => (
            <div key={item.title} className="card">
              <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
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
