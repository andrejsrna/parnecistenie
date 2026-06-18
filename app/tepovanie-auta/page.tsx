import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Tepovanie auta Bratislava – interiér od 70 € | Parneupratovanie.sk",
  description:
    "Profesionálne tepovanie autosedadiel, podláh, kufra a čalúnenia dverí v Bratislave a okolí. Kompletný interiér od 70 €. Prídeme k vám. ☎ 0902 791 393",
  alternates: {
    canonical: "https://parnecistenie.sk/tepovanie-auta",
  },
  openGraph: {
    title: "Tepovanie auta Bratislava – interiér od 70 €",
    description:
      "Hĺbkové tepovanie autosedadiel, kobercov a čalúnenia dverí. Prídeme k vám v Bratislave, Senci, Pezinku a Malackách.",
    url: "https://parnecistenie.sk/tepovanie-auta",
    images: [{ url: "/logo.png", width: 1080, height: 1080 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tepovanie auta",
  provider: {
    "@type": "LocalBusiness",
    name: "Parneupratovanie.sk",
    telephone: "+421902791393",
    url: "https://parnecistenie.sk",
  },
  areaServed: ["Bratislava", "Senec", "Pezinok", "Malacky"],
  offers: [
    { "@type": "Offer", name: "Kompletný interiér auta", price: "70", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Len sedadlá (4 ks)", price: "45", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Podlahové koberce", price: "25", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Kufor", price: "20", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Van / dodávka", price: "120", priceCurrency: "EUR" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Koľko stojí tepovanie auta v Bratislave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kompletný interiér osobného auta tepujeme od 70 €. Samotné sedadlá (4 ks) od 45 €, podlahové koberce od 25 € a kufor od 20 €. Van alebo dodávka od 120 €.",
      },
    },
    {
      "@type": "Question",
      name: "Ako dlho trvá tepovanie interiéru auta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kompletný interiér osobného auta zvyčajne trvá 1,5 až 2,5 hodiny. Závisí od veľkosti vozidla a stupňa znečistenia.",
      },
    },
    {
      "@type": "Question",
      name: "Kedy môžem auto po tepovaní používať?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Odporúčame nechať interiér vyschnúť 2–4 hodiny pri otvorených dverách alebo oknách. Schnutie závisí od počasia a intenzity čistenia.",
      },
    },
    {
      "@type": "Question",
      name: "Čistíte aj kožené sedadlá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, pracujeme aj s kožou — používame šetrné prípravky a para je pri koži bezpečná. Pri čistení koženého čalúnenia postupujeme opatrne, aby nedošlo k poškodeniu.",
      },
    },
    {
      "@type": "Question",
      name: "Prídete tepovať auto aj mimo Bratislavy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, dochádzame do celého Bratislavského kraja — Senec, Pezinok, Malacky a okolité obce. Doprava je zdarma pri objednávke nad 50 €.",
      },
    },
  ],
};

const pricing = [
  ["Kompletný interiér (osobné auto)", "70 €"],
  ["Sedadlá (4 ks)", "45 €"],
  ["Predné sedadlá (2 ks)", "25 €"],
  ["Podlahové koberce", "25 €"],
  ["Kufor", "20 €"],
  ["Strop", "20 €"],
  ["Van / dodávka", "120 €"],
];

const faqs = faqSchema.mainEntity.map((q) => ({
  q: q.name,
  a: q.acceptedAnswer.text,
}));

export default function TepovanieAuta() {
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
            <Link href="/" className="breadcrumb-link">Domov</Link> › Tepovanie auta
          </p>
          <h1>Tepovanie auta Bratislava – interiér od 70 €</h1>
          <p>
            Kompletné hĺbkové tepovanie autosedadiel, podlahových kobercov,
            kufra a čalúnenia dverí priamo na vašom parkovacom mieste.
            Odstránime škvrny, pachy aj baktérie — bez agresívnej chémie.
          </p>
          <a className="btn" href="tel:0902791393">
            📞 Zavolať 0902 791 393
          </a>
        </div>
      </header>

      {/* ── Čo zahŕňa služba ── */}
      <section className="section">
        <h2>Čo zahŕňa tepovanie interiéru auta?</h2>
        <p className="subtitle">
          Kompletné čistenie od sedadiel až po kufor — na jednom mieste
        </p>
        <div className="service-content">
          <div className="service-text">
            <p>
              Tepovanie auta v Bratislave vykonávame profesionálnym extrakčným
              strojom priamo tam, kde máte auto zaparkované. Nemusíte nikam
              jazdiť — prídeme za vami domov, do práce alebo na parkovisko.
            </p>
            <p style={{ marginTop: "16px" }}>
              Kombinujeme hĺbkové tepovanie a parnú dezinfekciu, ktorá prenikne
              do vlákien čalúnenia a kobercov, rozruší zaschnuté nečistoty
              a neutralizuje pachy po cigaretách, jedle alebo zvieratách.
            </p>
            <ul className="checklist">
              <li>Vysátie celého interiéru vrátane štrbín</li>
              <li>Ošetrenie škvŕn predčistiacim prípravkom</li>
              <li>Hĺbkové tepovanie sedadiel a podlahových kobercov</li>
              <li>Tepovanie kufra a bočného čalúnenia dverí</li>
              <li>Parná dezinfekcia povrchov</li>
              <li>Kontrola výsledku a utrenie prebytočnej vlhkosti</li>
            </ul>
          </div>
          <div className="service-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🚗</span>
              <div>
                <strong>Priamo na vašom parkovacom mieste</strong>
                <p>Nestrácate čas jazdou — prídeme k vám domov, do práce či na sídlisko</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">✅</span>
              <div>
                <strong>Bez agresívnej chémie</strong>
                <p>Para a šetrné prípravky — bezpečné aj pre kožu a deti</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💨</span>
              <div>
                <strong>Odstránenie pachov</strong>
                <p>Cigarety, jedlo, zvieratá — para neutralizuje zápach v hĺbke vlákien</p>
              </div>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">💶</span>
              <div>
                <strong>Cena vopred, žiadne prekvapenia</strong>
                <p>Hovoríme cenu pred príchodom — žiadne skryté poplatky</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cenník ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Cenník tepovanie auta</h2>
        <p className="subtitle">Všetky ceny sú konečné, vrátane príchodu v Bratislave</p>
        <div className="pricing-wrap" style={{ marginTop: "40px", maxWidth: 600, margin: "40px auto 0" }}>
          <table>
            <thead>
              <tr>
                <th>Čo tepujeme</th>
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
        <h2>Otázky o tepovaní auta</h2>
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
        <p className="cta-heading">Objednajte tepovanie auta ešte dnes</p>
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
