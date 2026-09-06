"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav as navEn, servicePillars as pillarsEn } from "@/lib/content";
import { nav as navAr, servicePillars as pillarsAr } from "@/lib/content.ar";
import { itemAnchor } from "@/lib/seo";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function SiteHeader({ locale }: { locale: "en" | "ar" }) {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const nav = locale === "ar" ? navAr : navEn;
  const pillars = locale === "ar" ? pillarsAr : pillarsEn;
  const homeHref = locale === "ar" ? "/ar" : "/";
  const contactHref = locale === "ar" ? "/ar/contact" : "/contact";
  const servicesHref = locale === "ar" ? "/ar/services" : "/services";
  const bookLabel = locale === "ar" ? "احجز استشارة" : "Book a Consultation";

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur dark:border-gold/20 dark:bg-forest-dark/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href={homeHref} className="flex shrink-0 items-center gap-3">
          <Image src="/images/icon-color.png" alt="" width={400} height={400} priority className="h-10 w-auto shrink-0 dark:hidden sm:h-12" />
          <Image src="/images/icon-white.png" alt="" width={400} height={400} priority className="hidden h-10 w-auto shrink-0 dark:block sm:h-12" />
          <Image
            src="/images/logo-wordmark-bilingual.png"
            alt="Digital Solutions Shield / درع الحلول الرقمية"
            width={1400}
            height={509}
            priority
            className="h-6 w-auto shrink-0 dark:hidden sm:h-8"
          />
          <Image
            src="/images/logo-wordmark-bilingual-white.png"
            alt="Digital Solutions Shield / درع الحلول الرقمية"
            width={1400}
            height={509}
            priority
            className="hidden h-6 w-auto shrink-0 dark:block sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {nav.map((item) =>
            item.href === servicesHref ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap font-heading text-sm font-medium uppercase tracking-wide text-forest transition hover:text-gold-dark dark:text-cream dark:hover:text-gold-light"
                >
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true" className="mt-0.5">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="invisible absolute end-0 top-full z-50 mt-3 w-[44rem] max-w-[90vw] rounded-lg border border-forest/10 bg-cream p-6 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-gold/20 dark:bg-forest-dark">
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {pillars.map((pillar) => (
                      <div key={pillar.slug}>
                        <Link
                          href={`${servicesHref}/${pillar.slug}`}
                          className="font-heading text-xs font-semibold uppercase tracking-wide text-accent hover:underline"
                        >
                          {pillar.title}
                        </Link>
                        <ul className="mt-2 space-y-1.5">
                          {pillar.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={`${servicesHref}/${pillar.slug}#${itemAnchor(subItem.title)}`}
                                className="text-xs text-muted transition hover:text-accent"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap font-heading text-sm font-medium uppercase tracking-wide text-forest transition hover:text-gold-dark dark:text-cream dark:hover:text-gold-light"
              >
                {item.label}
              </Link>
            )
          )}
          <Link href={contactHref} className="btn-primary !py-2">
            {bookLabel}
          </Link>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
            <span className="h-0.5 w-6 bg-forest dark:bg-cream" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-6 pb-6 dark:border-gold/20 dark:bg-forest-dark md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) =>
              item.href === servicesHref ? (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-heading text-sm font-medium uppercase tracking-wide text-forest dark:text-cream"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services submenu"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-1 text-forest dark:text-cream"
                    >
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <ul className="mt-3 space-y-3 ps-4">
                      {pillars.map((pillar) => (
                        <li key={pillar.slug}>
                          <Link
                            href={`${servicesHref}/${pillar.slug}`}
                            onClick={() => setOpen(false)}
                            className="font-heading text-xs font-semibold uppercase tracking-wide text-accent"
                          >
                            {pillar.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-sm font-medium uppercase tracking-wide text-forest dark:text-cream"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href={contactHref} onClick={() => setOpen(false)} className="btn-primary w-full">
              {bookLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
