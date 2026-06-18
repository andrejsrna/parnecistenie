import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Tepovanie sedačiek Bratislava – od 45 € | Parneupratovanie.sk",
  description:
    "Profesionálne tepovanie sedačiek, gaučov a kresiel v Bratislave a okolí. Rohová sedačka od 70 €, dvojmiestna od 45 €. Prídeme k vám domov. ☎ 0902 791 393",
  alternates: {
    canonical: "https://parnecistenie.sk/tepovanie-sedaciek",
  },
  openGraph: {
    title: "Tepovanie sedačiek Bratislava – od 45 €",
    description:
      "Hĺbkové tepovanie rohových sedačiek, gaučov a kresiel. Prídeme k vám domov v Bratislave, Senci, Pezinku a Malackách.",
    url: "https://parnecistenie.sk/tepovanie-sedaciek",
    images: [{ url: "/logo.png", width: 1080, height: 1080 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tepovanie sedačiek",
  provider: {
    "@type": "LocalBusiness",
    name: "Parneupratovanie.sk",
    telephone: "+421902791393",
    url: "https://parnecistenie.sk",
  },
  areaServed: ["Bratislava", "Senec", "Pezinok", "Malacky"],
  offers: [
    { "@type": "Offer", name: "Kreslo", price: "15", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Stolička", price: "5", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Sedačka 2-miestna", price: "45", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Sedačka 3-miestna", price: "55", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Rohová sedačka", price: "70", priceCurrency: "EUR" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koľko stojí tepovanie sedačky v Bratislave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceny začínajú od 45 € za dvojmiestnu sedačku, trojmiestna je od 55 € a rohová sedačka od 70 €. Kreslo tepujeme od 15 €.",
      },
    },
    {
      "@type": "Question",
      name: "Ako dlho trvá tepovanie sedačky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dvojmiestna sedačka trvá 30–60 minút. Rohová sedačka alebo väčší gauč 60–90 minút. Presný čas závisí od stavu čalúnenia a veľkosti.",
      },
    },
    {
      "@type": "Question",
      name: "Kedy môžem sedačku po tepovaní používať?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Odporúčame počkať 2–4 hodiny, kým čalúnenie úplne vyschne. Výsledok závisí od materiálu a intenzity znečistenia.",
      },
    },
    {
      "@type": "Question",
      name: "Odstránite aj staré alebo zasychnuté škvrny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Väčšinu bežných škvŕn (káva, víno, jedlo, moč) odstraňujeme úspešne. Pri veľmi starých alebo intenzívnych škvrnách vám vopred povieme, čo je reálne očakávať.",
      },
    },
    {
      "@type": "Question",
      name: "Prídete tepovať aj mimo Bratislavy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, dochádzame do celého Bratislavského kraja — Senec, Pezinok, Malacky a priľahlé obce. Doprava je zdarma pri objednávke nad 50 €.",
      },
    },
  ],
};

const pricing = [
  ["Kreslo", "15 €"],
  ["Stolička", "5 €"],
  ["Sedačka 2-miestna", "45 €"],
  ["Sedačka 3-miestna", "55 €"],
  ["Rohová sedačka", "70 €"],
  ["Sedačka + 2 kreslá", "85 €"],
];

const faqs = faqSchema.mainEntity.map((q) => ({
  q: q.name,
  a: q.acceptedAnswer.text,
}));

export default function TepovanieSedaciek() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <header className="hero service-hero">
        <div className="steam" />
        <Nav />
        <div className="hero-content service-hero-content">
          <p className="breadcrumb">
            <Link href="/" className="breadcrumb-link">Domov</Link> › Tepovanie sedačiek
          </p>
          <h1>Tepovanie sedačiek Bratislava – od 45 €</h1>
          <p>
            Hĺbkovo vyčistíme vašu sedačku, gauč alebo kreslo priamo u vás
            doma. Odstránime škvrny, pachy aj baktérie — bez agresívnej chémie,
            s použitím pary a profesionálnej tepovacej techniky.
          </p>
          <a className="btn" href="tel:0902791393">
            📞 Zavolať 0902 791 393
          </a>
        </div>
      </header>

      {/* ── Čo zahŕňa služba ── */}
      <section className="section">
        <h2>Čo zahŕňa tepovanie sedačky?</h2>
        <p className="subtitle">
          Kompletné hĺbkové čistenie čalúneného nábytku na jednom mieste
        </p>
        <div className="service-content">
          <div className="service-text">
            <p>
              Tepovanie sedačky v Bratislave vykonávame profesionálnym
              zariadením priamo vo vašej domácnosti. Nemusíte nič odnášať —
              prídeme za vami, spracujeme sedačku na mieste a odídeme.
            </p>
            <p style={{ marginTop: "16px" }}>
              Používame kombináciu hĺbkového tepovacieho stroja a pary, ktorá
              prenikne do vlákien čalúnenia, rozruší nečistoty a zároveň
              dezinfikuje povrch. Výsledok je čisté, svieže čalúnenie bez
              chemického zápachu.
            </p>
            <ul className="checklist">
              <li>Predbežné vysávanie celej sedačky</li>
              <li>Ošetrenie škvŕn predčistiacim prípravkom</li>
              <li>Hĺbkové tepovanie extrakčným strojom</li>
              <li>Parná dezinfekcia povrchu</li>
              <li>Kontrola výsledku a utrenie prebytočnej vlhkosti</li>
            </ul>
          </div>
          <div className="service-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <div>
                <strong>Bez chémie</strong>
                <p>Para a šetrné prípravky — bezpečné pre deti aj alergikov</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🏠</span>
              <div>
                <strong>Priamo u vás</strong>
                <p>Prídeme domov, do kancelárie alebo na prenájom</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <div>
                <strong>Rýchle schnutie</strong>
                <p>Sedačka schne 2–4 hodiny, nie celý deň</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💶</span>
              <div>
                <strong>Férové ceny</strong>
                <p>Cenu dostanete vopred, žiadne skryté poplatky</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cenník ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Cenník tepovanie sedačiek</h2>
        <p className="subtitle">Všetky ceny sú konečné, vrátane príchodu v Bratislave</p>
        <div className="pricing-wrap" style={{ marginTop: "40px", maxWidth: 600, margin: "40px auto 0" }}>
          <table>
            <thead>
              <tr>
                <th>Typ sedačky / nábytku</th>
                <th>Cena od</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(([name, price]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td><strong>{price}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pricing-note">
          Doprava zdarma pri objednávke nad 50 € v Bratislave. Mimo Bratislavy
          (Senec, Pezinok, Malacky) — doprava dohodou.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Otázky o tepovaní sedačiek</h2>
        <p className="subtitle">Najčastejšie otázky pred objednávkou</p>
        <div className="faq-list">
          {faqs.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary className="faq-question">{q}</summary>
              <p className="faq-answer">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <p className="cta-heading">Objednajte tepovanie sedačky ešte dnes</p>
        <div className="phone">
          <a href="tel:0902791393" style={{ color: "inherit", textDecoration: "none" }}>
            0902 791 393
          </a>
        </div>
        <p>Bratislava • Senec • Pezinok • Malacky</p>
      </section>

      <a className="float" href="tel:0902791393">
        📞 Volať
      </a>
    </>
  );
}
