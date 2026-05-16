import type { Metadata } from "next";
import { Inter, Fraunces, Cormorant_Garamond, Caveat, Italiana } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Atelier Kim Jansen — Herinneringen om vast te houden",
  description:
    "Persoonlijke herinneringsproducten van Kim Jansen. Van geliefde kleding maken we een jasje, deken, kussen of sjaal — een tastbare herinnering aan wie je dierbaar was.",
  openGraph: {
    title: "Atelier Kim Jansen",
    description:
      "Herinneringen om vast te houden — handgemaakte herinneringsproducten van geliefde kleding.",
    locale: "nl_NL",
    type: "website",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://atelierkimjansen.nl/#business",
  name: "Atelier Kim Jansen",
  description:
    "Persoonlijke herinneringsproducten gemaakt van geliefde kleding — jasjes, dekens, kussens en sjaals voor wie iemand heeft verloren.",
  url: "https://atelierkimjansen.nl",
  telephone: "+31610137351",
  email: "hallo@atelierkimjansen.nl",
  image: "https://atelierkimjansen.nl/og.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  founder: { "@type": "Person", name: "Kim Jansen" },
  priceRange: "€€",
  sameAs: [
    "https://instagram.com/atelier.kimjansen",
    "https://tiktok.com/@atelierkimjansen",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${fraunces.variable} ${cormorant.variable} ${caveat.variable} ${italiana.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
