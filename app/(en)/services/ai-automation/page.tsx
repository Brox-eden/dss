import type { Metadata } from "next";
import Link from "next/link";
import { servicePillars } from "@/lib/content";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "AI Tools & Automation | Digital Solutions Shield",
};

const pillar = servicePillars.find((p) => p.slug === "ai-automation")!;

export default function AiAutomationPage() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="en" label="Back" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">New Service Line · {pillar.number}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{pillar.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">{pillar.summary}</p>
        </div>
      </section>

      <section className="section">
        {/* Coming-soon callout: remove once the live AI secretary demo ships */}
        <div className="mb-12 rounded-lg border border-gold/30 bg-gold/10 p-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
            Coming soon
          </p>
          <p className="mt-2 text-sm text-muted-strong">
            This site will soon run its own live example: an AI secretary, built on n8n, that answers
            visitor questions right here and books consultations directly onto our calendar. For now,
            here&apos;s what we build.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillar.items.map((item) => (
            <div key={item.title} className="card">
              <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary inline-flex">
            Talk to Us About an AI Agent
          </Link>
        </div>
      </section>
    </>
  );
}
