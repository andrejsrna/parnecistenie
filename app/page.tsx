import Image from "next/image";

const services = [
  {
    icon: "🛋️",
    title: "Sedačky a gauče",
    desc: "Hĺbkové tepovanie rohových sedačiek, gaučov, kresiel a čalúneného nábytku.",
    price: "od 45 €",
  },
  {
    icon: "🛏️",
    title: "Matrace",
    desc: "Odstránenie prachu, škvŕn a nečistôt nahromadených počas každodenného používania.",
    price: "od 20 €",
  },
  {
    icon: "🏠",
    title: "Koberce a domácnosti",
    desc: "Tepovanie kobercov, stoličiek, čalúnenia a ďalších textilných povrchov.",
    price: "od 3 €/m²",
  },
  {
    icon: "🚗",
    title: "Interiéry vozidiel",
    desc: "Sedadlá, podlahy, kufor, čalúnenie dverí a kompletné osvieženie interiéru auta.",
    price: "od 70 €",
  },
  {
    icon: "👟",
    title: "Čistenie topánok",
    desc: "Tenisky, športová obuv a textilná obuv s dezinfekciou parou.",
    price: "od 10 €",
  },
  {
    icon: "🦠",
    title: "Parná dezinfekcia",
    desc: "Para pomáha odstrániť baktérie a osviežiť povrchy bez zbytočnej chémie.",
    price: "na dopyt",
  },
];

const pricing = [
  ["Kreslo", "15 €"],
  ["Stolička", "5 €"],
  ["Sedačka 2-miestna", "45 €"],
  ["Sedačka 3-miestna", "55 €"],
  ["Rohová sedačka", "70 €"],
  ["Matrac jednostranne", "20 €"],
  ["Matrac obojstranne", "35 €"],
  ["Koberec", "3 €/m²"],
  ["Interiér auta", "70 €"],
  ["Čistenie topánok", "10 €"],
];

const faqs = [
  {
    q: "Kde pôsobíte?",
    a: "Poskytujeme tepovanie a parné čistenie v Bratislave a celom okolí — Senec, Pezinok, Malacky a priľahlé obce. Prídeme priamo k vám domov.",
  },
  {
    q: "Ako dlho trvá tepovanie sedačky?",
    a: "Bežná dvojmiestna sedačka trvá 30–60 minút. Rohová sedačka alebo väčší gauč 60–90 minút. Presný čas závisí od stavu čalúnenia.",
  },
  {
    q: "Kedy môžem sedačku po tepovaní používať?",
    a: "Odporúčame počkať 2–4 hodiny, kým čalúnenie úplne vyschne. Pri parnom čistení je doba schnutia kratšia ako pri klasickom tepovaní.",
  },
  {
    q: "Používate chemické prostriedky?",
    a: "Pracujeme primárne s parou a šetrnými prípravkami. Na väčšinu povrchov nepotrebujeme agresívnu chémiu — para sama odstraňuje baktérie a pachy.",
  },
  {
    q: "Čistíte aj autá?",
    a: "Áno, čistíme kompletné interiéry vozidiel — sedadlá, podlahy, kufor aj čalúnenie dverí. Tepovanie auta začína od 70 €.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <header className="hero">
        <div className="steam" />

        <nav className="nav">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Parneupratovanie.sk – Tepovanie a parné čistenie"
              width={300}
              height={300}
              className="logo-img"
              priority
            />
          </a>
        </nav>

        <div className="hero-content">
          <h1>
            Profesionálne tepovanie a parné čistenie v Bratislavskom kraji
          </h1>
          <p>
            Odstránime škvrny, pachy, baktérie a nečistoty zo sedačiek,
            matracov, kobercov, automobilov aj obuvi. Vaše priestory budú opäť
            svieže, čisté a pripravené na každodenné používanie.
          </p>
          <a className="btn" href="tel:0902791393">
            📞 Zavolať 0902 791 393
          </a>
        </div>
      </header>

      {/* ── Services ── */}
      <section className="section">
        <h2>Čo všetko čistíme?</h2>
        <p className="subtitle">Kompletné služby pre domácnosti aj vozidlá</p>

        <div className="grid-cards">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>
                {s.icon} {s.title}
              </h3>
              <p>{s.desc}</p>
              <div className="price">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Cenník tepovacích služieb</h2>
        <div className="pricing-wrap" style={{ marginTop: "40px" }}>
          <table>
            <thead>
              <tr>
                <th>Služba</th>
                <th>Cena od</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map(([name, price]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <h2>Časté otázky</h2>
        <p className="subtitle">Všetko čo potrebujete vedieť pred objednávkou</p>
        <div className="faq-list">
          {faqs.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary className="faq-question">{q}</summary>
              <p className="faq-answer">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Localities ── */}
      <section className="section localities" style={{ paddingTop: 0 }}>
        <h2>Kde pôsobíme?</h2>
        <p className="subtitle">
          Tepovanie a parné čistenie priamo u vás doma
        </p>
        <div className="grid-cards">
          <div className="card">
            <h3>📍 Bratislava</h3>
            <p>
              Tepovanie sedačiek, matracov a kobercov v celej Bratislave —
              Petržalka, Ružinov, Dúbravka, Nové Mesto aj ďalšie časti mesta.
            </p>
          </div>
          <div className="card">
            <h3>📍 Senec a okolie</h3>
            <p>
              Dochádzame do Senca, Bernolákova, Zálesí a obcí v okolí Senca.
              Tepovanie auta aj domácnosti na mieste.
            </p>
          </div>
          <div className="card">
            <h3>📍 Pezinok a Malacky</h3>
            <p>
              Pokrývame Pezinok, Modru, Svätý Jur, Malacky a okolie. Zavolajte
              a dohodneme termín priamo u vás.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta">
        <p className="cta-heading">Objednajte si termín ešte dnes</p>
        <div className="phone">
          <a href="tel:0902791393" style={{ color: "inherit", textDecoration: "none" }}>
            0902 791 393
          </a>
        </div>
        <p>Bratislava • Senec • Pezinok • Malacky</p>
      </section>

      {/* ── Floating call button ── */}
      <a className="float" href="tel:0902791393">
        📞 Volať
      </a>
    </>
  );
}
