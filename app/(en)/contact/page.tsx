import type { Metadata } from "next";
import { pageSeo, site } from "@/lib/content";
import { hreflang } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: hreflang("/contact", "/ar/contact"),
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">Get in touch</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">
            Send us a message about your compliance, cybersecurity, infrastructure or AI automation needs, and we&apos;ll reply by email.
          </p>
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-2">
        <ContactForm />

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

        <div className="text-center md:col-span-2">
          <BackButton locale="en" label="Back" />
        </div>
      </section>
    </>
  );
}
