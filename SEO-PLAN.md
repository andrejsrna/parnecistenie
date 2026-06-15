# SEO plán – Parneupratovanie.sk

Cieľ: organický rast cez dlhý chvost lokálnych a servisných kľúčových slov.
Každá landing page cieli na **1 konkrétny zámer hľadača** — služba, lokalita alebo kombinácia.

---

## Aktuálny stav

| Stránka | URL | Status |
|---|---|---|
| Homepage | `/` | ✅ live |

---

## Fáza 1 — Servisné stránky (priorita: vysoká)

Najvyšší objem hľadaní, priama konverzia. Implementovať ako prvé.

| Stránka | URL | Hlavné kľúčové slovo | Objem (odhad) |
|---|---|---|---|
| Tepovanie sedačiek | `/tepovanie-sedaciek` | tepovanie sedačiek Bratislava | ★★★ |
| Tepovanie kobercov | `/tepovanie-kobercov` | tepovanie kobercov Bratislava | ★★★ |
| Čistenie matracov | `/cistenie-matracov` | čistenie matraca Bratislava | ★★ |
| Tepovanie auta | `/tepovanie-auta` | tepovanie auta interiér Bratislava | ★★★ |
| Parná dezinfekcia | `/parna-dezinfekcia` | parná dezinfekcia Bratislava | ★★ |
| Čistenie topánok | `/cistenie-topanok` | čistenie tenisiek Bratislava | ★ |

### Štruktúra každej servisnej stránky

```
H1: Tepovanie sedačiek Bratislava – od 45 €
  Úvodný text (150–200 slov, kľúčové slovo 2–3×)
  Čo zahŕňa služba (odrážky)
  Cenník (tabuľka)
  Prečo my (3 USP)
  FAQ (3–5 otázok špecifických pre danú službu)
  CTA (telefón + formulár)
```

---

## Fáza 2 — Lokálne stránky (priorita: stredná)

Cieľ: zachytiť hľadania „[služba] [mesto]". Lokálne stránky bez konkrétnej služby majú nižší zámer — radšej kombinovať (pozri Fáza 3).

| Stránka | URL | Hlavné kľúčové slovo |
|---|---|---|
| Bratislava | `/bratislava` | tepovanie Bratislava |
| Petržalka | `/bratislava/petrzalka` | tepovanie Petržalka |
| Ružinov | `/bratislava/ruzinov` | tepovanie Ružinov |
| Senec | `/senec` | tepovanie Senec |
| Pezinok | `/pezinok` | tepovanie Pezinok |
| Malacky | `/malacky` | tepovanie Malacky |

> **Tip:** Bratislavské časti (Petržalka, Ružinov, Dúbravka…) mávajú nižší objem,
> ale aj nižšiu konkurenciu — ľahšie sa rankujú.

---

## Fáza 3 — Kombinované stránky (priorita: stredná)

Najkonkrétnejší zámer = najvyššia miera konverzie.

| Stránka | URL | Kľúčové slovo |
|---|---|---|
| Tepovanie sedačiek Bratislava | `/tepovanie-sedaciek/bratislava` | tepovanie sedačiek Bratislava |
| Tepovanie sedačiek Senec | `/tepovanie-sedaciek/senec` | tepovanie sedačiek Senec |
| Tepovanie auta Bratislava | `/tepovanie-auta/bratislava` | tepovanie auta Bratislava |
| Tepovanie kobercov Bratislava | `/tepovanie-kobercov/bratislava` | tepovanie kobercov Bratislava |
| Čistenie matraca Bratislava | `/cistenie-matracov/bratislava` | čistenie matraca Bratislava |

> Kombinovaných stránok môže byť veľa — začni s top 5 kombináciami
> (služba × lokalita s najvyšším odhadovaným objemom).

---

## Fáza 4 — Blog / informačný obsah (priorita: dlhodobá)

Informačné články nie sú určené na konverziu, ale budujú autoritu domény
a zachytávajú hľadania vo fáze uvažovania.

| Článok | URL | Kľúčové slovo |
|---|---|---|
| Ako funguje parné čistenie? | `/blog/ako-funguje-parne-cistenie` | parné čistenie ako funguje |
| Tepovanie vs. parné čistenie — aký je rozdiel? | `/blog/tepovanie-vs-parne-cistenie` | rozdiel tepovanie parné čistenie |
| Ako často tepovať sedačku? | `/blog/ako-casto-tepovat-sedacku` | ako často tepovať sedačku |
| Ako odstrániť moč zo sedačky? | `/blog/odstranenie-mocu-sedacka` | moč na sedačke čistenie |
| Ako vyčistiť auto sedadlá doma? | `/blog/cistenie-auto-sedadiel` | čistenie auto sedadiel doma |
| Tepovanie pred alebo po maľovaní? | `/blog/tepovanie-pred-po-malovani` | tepovanie pred maľovaním |

> Články s praktickými radami sa dobre zdieľajú a získavajú prirodzené spätné odkazy.

---

## Implementačný plán

### Q3 2026 — Základ
- [ ] Servisné stránky: `tepovanie-sedaciek`, `tepovanie-kobercov`, `tepovanie-auta`
- [ ] Lokálne stránky: `bratislava`, `senec`
- [ ] Interné linky z homepage na všetky servisné stránky

### Q4 2026 — Rozšírenie
- [ ] Zvyšné servisné stránky (`cistenie-matracov`, `parna-dezinfekcia`, `cistenie-topanok`)
- [ ] Zvyšné lokálne stránky (`pezinok`, `malacky`, bratislavské časti)
- [ ] Top 3 kombinované stránky
- [ ] Prvé 2 blogové články

### Q1 2027 — Obsah
- [ ] Zvyšné kombinované stránky
- [ ] 4+ blogové články
- [ ] Interné linkovanie medzi blogom a servisnými stránkami

---

## Technické poznámky pre implementáciu

### Next.js štruktúra

```
app/
  tepovanie-sedaciek/
    page.tsx          ← servisná stránka
    [lokalita]/
      page.tsx        ← kombinovaná stránka (generateStaticParams)
  tepovanie-kobercov/
    page.tsx
    [lokalita]/
      page.tsx
  bratislava/
    page.tsx
    petrzalka/
      page.tsx
  blog/
    page.tsx          ← zoznam článkov
    [slug]/
      page.tsx
```

### Šablóna metadata pre každú stránku

```tsx
export const metadata: Metadata = {
  title: "Tepovanie sedačiek Bratislava | od 45 € | Parneupratovanie.sk",
  description: "Profesionálne tepovanie sedačiek v Bratislave. Rohové sedačky od 70 €, dvojmiestne od 45 €. Prídeme k vám domov. Voláme 0902 791 393.",
  alternates: { canonical: "https://parnecistenie.sk/tepovanie-sedaciek" },
  openGraph: { ... }
}
```

### Interné linkovanie — pravidlá

- Každá servisná stránka odkazuje na relevantné lokálne varianty
- Každá lokálna stránka odkazuje na všetky dostupné služby v danej oblasti
- Blog články odkazujú na najrelevantnejšiu servisnú stránku v CTA
- Homepage odkazuje na všetky servisné stránky (nie lokálne — tie dostanú link zo servisných)

---

## Mimo stránky (off-page)

| Akcia | Priorita |
|---|---|
| Google Business Profile vyplniť + fotky | 🔴 ihneď |
| Zoznam.sk, Firmy.sk, Zlaté stránky | 🔴 ihneď |
| Požiadať spokojných zákazníkov o Google recenziu | 🔴 ihneď |
| Facebook stránka + príspevky pred/po | 🟡 Q3 2026 |
| Spolupráca s realitkami / správcami bytov | 🟡 Q3 2026 |
