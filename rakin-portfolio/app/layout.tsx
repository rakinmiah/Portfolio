import type { Metadata } from "next";
import { sourceSerif, dmSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakin Miah — Web Designer & Developer · Portfolio",
  description:
    "I design and build high-converting websites and landing pages. Currently rebuilding deenrelief.org — a charity donation platform with a custom Stripe checkout, full design system and technical SEO foundation.",
  openGraph: {
    title: "Rakin Miah — Web Designer & Developer",
    description: "Portfolio: DeenRelief charity donation platform rebuild.",
    url: "https://rakin-miah.vercel.app",
    siteName: "Rakin Miah",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rakin Miah",
  jobTitle: "Web Designer & Developer",
  url: "https://rakin-miah.vercel.app",
  email: "rakin.rifat.miah@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton",
    addressCountry: "GB",
  },
  sameAs: ["https://linkedin.com/in/rakinrifatmiah"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${sourceSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
