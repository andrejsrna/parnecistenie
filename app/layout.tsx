import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://parnecistenie.sk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tepovanie Bratislava | Parné čistenie sedačiek a kobercov",
    template: "%s | Parneupratovanie.sk",
  },
  description:
    "Profesionálne tepovanie sedačiek, matracov, kobercov a áut v Bratislave, Senci, Pezinku a Malackách. Bez chémie, s parou. Voláme sa 0902 791 393.",
  keywords: [
    "tepovanie Bratislava",
    "parné čistenie",
    "tepovanie sedačiek",
    "tepovanie kobercov",
    "čistenie matracov",
    "tepovanie auta interiér",
    "parné upratovanie",
    "tepovanie Senec",
    "tepovanie Pezinok",
    "tepovanie Malacky",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: BASE_URL,
    siteName: "Parneupratovanie.sk",
    title: "Tepovanie Bratislava | Parné čistenie sedačiek a kobercov",
    description:
      "Profesionálne tepovanie sedačiek, matracov, kobercov a áut. Čisto, zdravo, bez chémie. Bratislava a okolie.",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 1080,
        alt: "Parneupratovanie.sk – Tepovanie a parné čistenie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tepovanie Bratislava | Parné čistenie sedačiek a kobercov",
    description:
      "Profesionálne tepovanie sedačiek, matracov, kobercov a áut. Čisto, zdravo, bez chémie.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Parneupratovanie.sk – Tepovanie",
  description:
    "Profesionálne tepovanie sedačiek, matracov, kobercov a áut. Parné čistenie bez chémie.",
  url: BASE_URL,
  telephone: "+421902791393",
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Bratislava" },
    { "@type": "City", name: "Senec" },
    { "@type": "City", name: "Pezinok" },
    { "@type": "City", name: "Malacky" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cenník tepovacích služieb",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tepovanie sedačky" }, price: "45", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tepovanie matraca" }, price: "20", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tepovanie koberca" }, price: "3", priceCurrency: "EUR" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Čistenie interiéru auta" }, price: "70", priceCurrency: "EUR" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
