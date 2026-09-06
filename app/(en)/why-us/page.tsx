import type { Metadata } from "next";
import Link from "next/link";
import { differentiators } from "@/lib/content";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Why DSS | Digital Solutions Shield",
};

export default function WhyUsPage() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">Difference</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Why Digital Solutions Shield?</h1>
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
