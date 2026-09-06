import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo, servicePillars } from "@/lib/content";
import { hreflang, itemAnchor, serviceSchema } from "@/lib/seo";
import BackButton from "@/components/BackButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: pageSeo["services/professional-services"].title,
  description: pageSeo["services/professional-services"].description,
  alternates: hreflang("/services/professional-services", "/ar/services/professional-services"),
};

const pillar = servicePillars.find((p) => p.slug === "professional-services")!;

export default function ProfessionalServicesPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: pillar.title,
          description: pillar.summary,
          path: "/services/professional-services",
          locale: "en",
        })}
      />
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">Engineering · {pillar.number}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{pillar.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">{pillar.summary}</p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {pillar.items.map((item) => (
            <div key={item.title} id={itemAnchor(item.title)} className="card scroll-mt-24">
              <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <BackButton locale="en" label="Back" />
          <Link href="/contact" className="btn-primary inline-flex">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
