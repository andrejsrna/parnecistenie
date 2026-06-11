import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parneupratovanie.sk | Tepovanie",
  description:
    "Profesionálne tepovanie a parné čistenie v Bratislavskom kraji. Odstránime škvrny, pachy a baktérie zo sedačiek, matracov, kobercov a automobilov.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
