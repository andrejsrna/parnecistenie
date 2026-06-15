import Image from "next/image";

export default function Nav() {
  return (
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
  );
}
