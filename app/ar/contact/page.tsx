import type { Metadata } from "next";
import { site } from "@/lib/content.ar";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "تواصل معنا | درع الحلول الرقمية",
};

export default function ContactPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <p className="eyebrow text-gold-light dark:text-forest-dark">تواصل معنا</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">احجز استشارة</h1>
          <p className="mt-4 max-w-2xl text-cream/80 dark:text-forest-dark/80">
            اختر الوقت المناسب لك أدناه وسنؤكد استشارتك. (سيتولى سكرتير ذكي هذه الخطوة مباشرة على
            الموقع في مرحلة لاحقة.)
          </p>
        </div>
      </section>

      <section className="section grid gap-12 md:grid-cols-2">
        <CalendlyEmbed locale="ar" />

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
