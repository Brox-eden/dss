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
