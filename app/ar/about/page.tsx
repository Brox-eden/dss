import type { Metadata } from "next";
import { about, coreValues, methodology, mission, vision } from "@/lib/content.ar";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "من نحن | درع الحلول الرقمية",
};

export default function AboutPageAr() {
  return (
    <>
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section">
          <BackButton locale="ar" label="رجوع" />
          <p className="eyebrow text-gold-light dark:text-forest-dark">من نحن</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">عن درع الحلول الرقمية</h1>
        </div>
      </section>

      <section className="section">
        <p className="max-w-3xl text-lg text-muted-strong">{about}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="font-heading text-xl font-semibold text-accent">الرؤية</h2>
            <p className="mt-3 text-muted-strong">{vision}</p>
          </div>
          <div className="card">
            <h2 className="font-heading text-xl font-semibold text-accent">الرسالة</h2>
            <p className="mt-3 text-muted-strong">{mission}</p>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">القيم الأساسية</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {coreValues.map((value) => (
              <div key={value} className="rounded-lg border border-forest/10 bg-white p-5 text-center font-heading font-medium dark:border-gold/15 dark:bg-forest">
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">منهجية العمل</p>
          <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">كيف نعمل</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {methodology.map((phase) => (
              <div key={phase.number} className="card">
                <span className="font-heading text-sm text-accent">{phase.number}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold">{phase.title}</h3>
                <p className="mt-2 text-sm text-muted">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
