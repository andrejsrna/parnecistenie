"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

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
        <a href="tel:0902791393" className="nav-cta">
          📞 <span className="nav-cta-text">0902 791 393</span>
        </a>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Otvoriť menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile-menu${open ? " is-open" : ""}`}>
        <Link href="/tepovanie-sedaciek" onClick={() => setOpen(false)}>
          Tepovanie sedačiek
        </Link>
        <Link href="/tepovanie-auta" onClick={() => setOpen(false)}>
          Tepovanie auta
        </Link>
      </div>
    </nav>
  );
}
