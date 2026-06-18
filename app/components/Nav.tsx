import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-links nav-left">
        <li><Link href="/tepovanie-sedaciek">Tepovanie sedačiek</Link></li>
        <li><Link href="/tepovanie-auta">Tepovanie auta</Link></li>
      </ul>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Parneupratovanie.sk – Tepovanie a parné čistenie"
          width={300}
          height={300}
          className="logo-img"
          priority
        />
      </Link>
      <div className="nav-right">
        <a href="tel:0902791393" className="nav-cta">📞 0902 791 393</a>
      </div>
    </nav>
  );
}
