import type { Metadata } from "next";
import { pageSeo, site } from "@/lib/content.ar";
import { hreflang } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: hreflang("/contact", "/ar/contact"),
};

export default function ContactPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">تواصل معنا</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">
            أرسل لنا رسالة حول احتياجاتك في الامتثال أو الأمن السيبراني أو البنية التحتية أو الأتمتة، وسنرد عليك عبر البريد الإلكتروني.
          </p>
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-2">
        <ContactForm locale="ar" />

        <div className="space-y-6">
          <div className="card">
            <h2 className="font-heading text-lg font-semibold text-accent">البريد الإلكتروني</h2>
            <a href={`mailto:${site.email}`} className="mt-2 block text-muted-strong hover:underline">
              {site.email}
            </a>
          </div>
          <div className="card">
            <h2 className="font-heading text-lg font-semibold text-accent">الموقع الإلكتروني</h2>
            <p className="mt-2 text-muted-strong">{site.domain}</p>
          </div>
        </div>

        <div className="text-center md:col-span-2">
          <BackButton locale="ar" label="رجوع" />
        </div>
      </section>
    </>
  );
}
