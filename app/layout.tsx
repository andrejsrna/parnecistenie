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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Spoločnosť</h4>
          <p>Enhold s.r.o.</p>
          <p>Drobného 1900/2</p>
          <p>841 02 Bratislava — Dúbravka</p>
        </div>
        <div className="footer-col">
          <h4>Registrácia</h4>
          <p>IČO 55400817</p>
          <p>DIČ 2121985954</p>
          <p>IČ DPH SK2121985954</p>
          <p>Platca DPH od 1.1.2024</p>
        </div>
        <div className="footer-col">
          <h4>Kontakt</h4>
          <p><a href="mailto:ahoj@enhold.sk">ahoj@enhold.sk</a></p>
          <p><a href="tel:+421914230321">+421 914 230 321</a></p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Enhold s.r.o. Všetky práva vyhradené.</p>
    </footer>
  );
}

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
