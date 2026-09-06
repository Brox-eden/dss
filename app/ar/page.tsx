import Image from "next/image";
import Link from "next/link";
import {
  about,
  ctaBookConsultation,
  ctaExploreServices,
  differentiators,
  heroTitle,
  mission,
  servicePillars,
  site,
  valueProposition,
  vision,
} from "@/lib/content.ar";

export default function HomeAr() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="eyebrow text-gold-light dark:text-forest-dark">الأمن السيبراني · التقنية · الخدمات المهنية</p>
            <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-cream/80 dark:text-forest-dark/80">{site.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/ar/contact" className="btn-primary bg-gold text-forest hover:bg-gold-light dark:bg-forest-dark dark:text-cream dark:hover:bg-forest">
                {ctaBookConsultation}
              </Link>
              <Link href="/ar/services" className="btn-secondary border-cream text-cream hover:bg-cream hover:text-forest dark:border-forest-dark dark:text-forest-dark dark:hover:bg-forest-dark dark:hover:text-gold">
                {ctaExploreServices}
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/icon-white.png"
              alt="شعار درع DSS"
              width={312}
              height={380}
              className="h-64 w-auto opacity-90 sm:h-80"
              priority
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="section !py-12 text-center">
        <p className="mx-auto max-w-3xl font-heading text-xl font-medium text-forest/90 dark:text-cream/90 sm:text-2xl">
          {valueProposition}
        </p>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="section">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">عن DSS</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">{site.shortName}: درع الحلول الرقمية</h2>
            <p className="mt-4 text-muted-strong">{about}</p>
            <Link href="/ar/about" className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-accent hover:underline">
              المزيد عن DSS ←
            </Link>
          </div>
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-accent">الرؤية</h3>
              <p className="mt-2 text-sm text-muted-strong">{vision}</p>
            </div>
            <div className="card">
              <h3 className="font-heading text-lg font-semibold text-accent">الرسالة</h3>
              <p className="mt-2 text-sm text-muted-strong">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section className="bg-white dark:bg-forest-dark">
        <div className="section">
          <p className="eyebrow">التغطية</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold">محفظة الخدمات</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {servicePillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/ar/services/${pillar.slug}`}
                className="card flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-sm text-accent">{pillar.number}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted">{pillar.summary}</p>
                </div>
                <span className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                  اعرف المزيد ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <p className="eyebrow">الفرق</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold">لماذا درع الحلول الرقمية؟</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.number} className="card">
              <span className="font-heading text-sm text-accent">{d.number}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI TEASER */}
      <section className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
        <div className="section flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-gold-light dark:text-forest-dark">جديد: أدوات الذكاء الاصطناعي والأتمتة</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
              نبني أيضاً وكلاء ذكاء اصطناعي مبنية على n8n.
            </h2>
            <p className="mt-3 max-w-xl text-cream/80 dark:text-forest-dark/80">
              من مساعدي الحجز الذين يتعاملون مع العملاء إلى وكلاء الموارد البشرية الداخلية، تعرّف على ما نبنيه ووجهة السكرتير الذكي الخاص بهذا الموقع.
            </p>
          </div>
          <Link href="/ar/services/ai-automation" className="btn-primary bg-gold text-forest hover:bg-gold-light dark:bg-forest-dark dark:text-cream dark:hover:bg-forest whitespace-nowrap">
            استعرض أدوات الذكاء الاصطناعي والأتمتة
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl">هل أنت مستعد لتعزيز بنيتك التحتية الرقمية؟</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          احجز استشارة مع فريقنا لنتحدث عن احتياجاتك في الامتثال أو الهندسة أو الأتمتة.
        </p>
        <Link href="/ar/contact" className="btn-primary mt-6 inline-flex">
          احجز استشارة
        </Link>
      </section>
    </>
  );
}
