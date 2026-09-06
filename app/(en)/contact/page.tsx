import type { Metadata } from "next";
import { site } from "@/lib/content";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Contact | Digital Solutions Shield",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="en" label="Back" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">Get in touch</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Book a Consultation</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">
            Pick a time that works for you below and we&apos;ll confirm your consultation. (An AI
            secretary will handle this step live on the site in a later phase.)
          </p>
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-2">
        <CalendlyEmbed />

        <div className="space-y-6">
          <div className="card">
            <h2 className="font-heading text-lg font-semibold text-accent">Email</h2>
            <a href={`mailto:${site.email}`} className="mt-2 block text-muted-strong hover:underline">
              {site.email}
            </a>
          </div>
          <div className="card">
            <h2 className="font-heading text-lg font-semibold text-accent">Website</h2>
            <p className="mt-2 text-muted-strong">{site.domain}</p>
          </div>
        </div>
      </section>
    </>
  );
}
