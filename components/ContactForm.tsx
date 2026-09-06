"use client";

import { useState } from "react";

// Public Web3Forms access key - this is meant to be embedded client-side
// (it's tied to the destination inbox, not a secret), not an API secret.
const WEB3FORMS_ACCESS_KEY = "d6199335-d437-4b42-8e86-a5feaef189f1";

const copy = {
  en: {
    name: "Name",
    email: "Email",
    organization: "Organization",
    message: "What do you need help with?",
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
        <label className="block font-heading text-sm font-medium">{t.name}</label>
        <input
          required
          type="text"
          name="name"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">{t.email}</label>
        <input
          required
          type="email"
          name="email"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">{t.organization}</label>
        <input
          type="text"
          name="organization"
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block font-heading text-sm font-medium">{t.message}</label>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-forest/20 px-3 py-2 focus:border-gold focus:outline-none"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{t.errorBody}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
