import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo, servicePillars } from "@/lib/content.ar";
import { hreflang, itemAnchor, serviceSchema } from "@/lib/seo";
import BackButton from "@/components/BackButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: pageSeo["services/ai-automation"].title,
  description: pageSeo["services/ai-automation"].description,
  alternates: hreflang("/services/ai-automation", "/ar/services/ai-automation"),
};

const pillar = servicePillars.find((p) => p.slug === "ai-automation")!;

export default function AiAutomationPageAr() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: pillar.title,
          description: pillar.summary,
          path: "/services/ai-automation",
          locale: "ar",
        })}
      />
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">خط خدمة جديد · {pillar.number}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{pillar.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">{pillar.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="mb-12 rounded-lg border border-gold/30 bg-gold/10 p-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            قريباً
          </p>
          <p className="mt-2 text-sm text-muted-strong">
            سيشغّل هذا الموقع قريباً مثالاً حياً خاصاً به: سكرتير ذكي مبني على n8n يجيب على استفسارات
            الزوار هنا مباشرة ويحجز الاستشارات في تقويمنا. في الوقت الحالي، إليك ما نقوم ببنائه.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillar.items.map((item) => (
            <div key={item.title} id={itemAnchor(item.title)} className="card scroll-mt-24">
              <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <BackButton locale="ar" label="رجوع" />
          <Link href="/ar/contact" className="btn-primary inline-flex">
            تحدث معنا عن وكيل ذكاء اصطناعي
          </Link>
        </div>
      </section>
    </>
  );
}
