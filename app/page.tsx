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

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <header className="hero">
        <div className="steam" />

        <nav className="nav">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Parneupratovanie.sk – Tepovanie"
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
        <h2>Cenník služieb</h2>
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

      {/* ── CTA ── */}
      <section className="cta">
        <h2>Objednajte si termín ešte dnes</h2>
        <div className="phone">0902 791 393</div>
        <p>Bratislava • Senec • Pezinok • Malacky</p>
      </section>

      {/* ── Floating call button ── */}
      <a className="float" href="tel:0902791393">
        📞 Volať
      </a>
    </>
  );
}
