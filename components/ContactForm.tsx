"use client";

import Link from "next/link";
import { useId, useState } from "react";

// Public Web3Forms access key - this is meant to be embedded client-side
// (it's tied to the destination inbox, not a secret), not an API secret.
const WEB3FORMS_ACCESS_KEY = "e7d038a6-f162-4e0c-b11f-6cd2315516e2";

const copy = {
  en: {
    name: "Name",
    email: "Email",
    organization: "Organization",
    message: "What do you need help with?",
    consentPre: "I agree to the ",
    consentLink: "Privacy Policy",
    consentPost: " and consent to my data being processed, including transfer to our form-processing provider outside Saudi Arabia.",
    privacyHref: "/privacy-policy",
    send: "Send",
    sending: "Sending...",
    thanksTitle: "Thanks! We'll be in touch.",
    thanksBody: "Your message has been sent. We'll reply by email shortly.",
    errorBody: "Something went wrong sending your message. Please try again, or email us directly.",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    organization: "الجهة",
    message: "كيف يمكننا مساعدتك؟",
    consentPre: "أوافق على ",
    consentLink: "سياسة الخصوصية",
    consentPost: " وأوافق على معالجة بياناتي، بما في ذلك نقلها إلى مزوّد معالجة النماذج لدينا خارج المملكة العربية السعودية.",
    privacyHref: "/ar/privacy-policy",
    send: "إرسال",
    sending: "جارٍ الإرسال...",
    thanksTitle: "شكراً! سنتواصل معك قريباً.",
    thanksBody: "تم إرسال رسالتك بنجاح. سنرد عليك عبر البريد الإلكتروني قريباً.",
    errorBody: "حدث خطأ أثناء إرسال رسالتك. حاول مرة أخرى أو راسلنا مباشرة عبر البريد الإلكتروني.",
  },
};

export default function ContactForm({ locale = "en" }: { locale?: "en" | "ar" }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    organization: `${uid}-organization`,
    message: `${uid}-message`,
    error: `${uid}-error`,
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card">
        <h2 className="font-heading text-lg font-semibold text-gold-dark">{t.thanksTitle}</h2>
        <p className="mt-2 text-sm text-forest/70 dark:text-cream/70">{t.thanksBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <label htmlFor={ids.name} className="block font-heading text-sm font-medium">
          {t.name}
        </label>
        <input
          required
          type="text"
          name="name"
          id={ids.name}
          aria-invalid={status === "error" || undefined}
          aria-describedby={status === "error" ? ids.error : undefined}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1"
        />
      </div>
      <div>
        <label htmlFor={ids.email} className="block font-heading text-sm font-medium">
          {t.email}
        </label>
        <input
          required
          type="email"
          name="email"
          id={ids.email}
          aria-invalid={status === "error" || undefined}
          aria-describedby={status === "error" ? ids.error : undefined}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1"
        />
      </div>
      <div>
        <label htmlFor={ids.organization} className="block font-heading text-sm font-medium">
          {t.organization}
        </label>
        <input
          type="text"
          name="organization"
          id={ids.organization}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1"
        />
      </div>
      <div>
        <label htmlFor={ids.message} className="block font-heading text-sm font-medium">
          {t.message}
        </label>
        <textarea
          required
          name="message"
          id={ids.message}
          rows={4}
          aria-invalid={status === "error" || undefined}
          aria-describedby={status === "error" ? ids.error : undefined}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-1"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          required
          type="checkbox"
          name="consent"
          id={`${uid}-consent`}
          className="mt-1 h-4 w-4 shrink-0 rounded border-forest/30 focus-visible:ring-2 focus-visible:ring-gold"
        />
        <label htmlFor={`${uid}-consent`} className="text-sm text-muted-strong">
          {t.consentPre}
          <Link href={t.privacyHref} className="text-accent underline hover:no-underline">
            {t.consentLink}
          </Link>
          {t.consentPost}
        </label>
      </div>

      {status === "error" && (
        <p id={ids.error} role="alert" className="text-sm text-red-600">
          {t.errorBody}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
