// Shared hreflang helper: every page passes its EN and AR paths so search
// engines know the two versions are translations of each other.
export function hreflang(enPath: string, arPath: string) {
  return {
    languages: {
      en: enPath,
      ar: arPath,
      "x-default": enPath,
    },
  };
}

// Turns a service item title into a stable anchor id, e.g. for
// cross-linking related items on the same services page.
export function itemAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9؀-ۿ]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const SITE_URL = "https://ds-shield.com";

// Organization schema, rendered once site-wide in the root layout.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Solutions Shield",
    alternateName: "DSS",
    url: SITE_URL,
    logo: `${SITE_URL}/images/web-logo-en.png`,
    email: "info@ds-shield.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
    },
  };
}

// Service schema for one pillar's detail page.
export function serviceSchema({
  name,
  description,
  path,
  locale,
}: {
  name: string;
  description: string;
  path: string;
  locale: "en" | "ar";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Digital Solutions Shield",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    url: `${SITE_URL}${path}`,
    inLanguage: locale,
  };
}
