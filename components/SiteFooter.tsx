import Image from "next/image";
import Link from "next/link";
import { nav as navEn, site as siteEn } from "@/lib/content";
import { nav as navAr, site as siteAr } from "@/lib/content.ar";

export default function SiteFooter({ locale }: { locale: "en" | "ar" }) {
  const nav = locale === "ar" ? navAr : navEn;
  const site = locale === "ar" ? siteAr : siteEn;
  const navigateLabel = locale === "ar" ? "روابط" : "Navigate";
  const contactLabel = locale === "ar" ? "تواصل معنا" : "Contact";
  const rightsLabel =
    locale === "ar"
      ? `© ${new Date().getFullYear()} درع الحلول الرقمية. جميع الحقوق محفوظة.`
      : `© ${new Date().getFullYear()} Digital Solutions Shield. All rights reserved.`;

  return (
    <footer className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image src="/images/icon-white.png" alt="DSS" width={400} height={400} className="mb-4 h-12 w-auto" />
            <p className="max-w-xs text-sm text-cream/70 dark:text-forest-dark/70">{site.tagline}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light dark:text-forest-dark">{navigateLabel}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80 dark:text-forest-dark/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold-light dark:hover:text-forest">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-light dark:text-forest-dark">{contactLabel}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80 dark:text-forest-dark/80">
              <li>{site.domain}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-light dark:hover:text-forest">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50 dark:border-forest-dark/20 dark:text-forest-dark/60">
          {rightsLabel}
        </div>
      </div>
    </footer>
  );
}
