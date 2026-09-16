import Image from "next/image";
import Link from "next/link";
import { legal as legalEn, legalNav as legalNavEn, nav as navEn, site as siteEn } from "@/lib/content";
import { legal as legalAr, legalNav as legalNavAr, nav as navAr, site as siteAr } from "@/lib/content.ar";

export default function SiteFooter({ locale }: { locale: "en" | "ar" }) {
  const nav = locale === "ar" ? navAr : navEn;
  const legalNav = locale === "ar" ? legalNavAr : legalNavEn;
  const site = locale === "ar" ? siteAr : siteEn;
  const legal = locale === "ar" ? legalAr : legalEn;
  const rightsLabel =
    locale === "ar"
      ? `© ${new Date().getFullYear()} درع الحلول الرقمية. جميع الحقوق محفوظة.`
      : `© ${new Date().getFullYear()} Digital Solutions Shield. All rights reserved.`;

  return (
    <footer className="bg-forest text-cream dark:bg-gold dark:text-forest-dark">
      <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/icon-white.png" alt="DSS" width={400} height={400} className="h-8 w-auto" />
            <span className="font-heading text-sm font-semibold">{site.name}</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-cream/80 dark:text-forest-dark/90">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-light dark:hover:text-forest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={`mailto:${site.email}`} className="text-sm text-cream/80 hover:text-gold-light dark:text-forest-dark/90 dark:hover:text-forest">
            {site.email}
          </a>
        </div>

        <div className="mt-4 flex flex-col items-center gap-2 border-t border-cream/10 pt-3 text-center text-xs text-cream/50 dark:border-forest-dark/20 dark:text-forest-dark/60 sm:flex-row sm:justify-between">
          <p>
            {rightsLabel} · {legal.address}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-light dark:hover:text-forest">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
