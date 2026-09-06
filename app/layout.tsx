import type { Metadata } from "next";
import { Oswald, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";
import { organizationSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700", "800"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.shortName} | ${site.name}`,
  description: site.tagline,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.shortName} | ${site.name}`,
    description: site.tagline,
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | ${site.name}`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema()} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');var isAr=location.pathname==='/ar'||location.pathname.indexOf('/ar/')===0;if(isAr){document.documentElement.lang='ar';document.documentElement.dir='rtl';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${oswald.variable} ${inter.variable} ${tajawal.variable} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
