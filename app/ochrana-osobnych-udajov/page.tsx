import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Ako PMG SLOVAKIA, s.r.o. spracúva osobné údaje z kontaktného formulára a webu a aké máte práva.",
  alternates: {
    canonical: "/ochrana-osobnych-udajov",
  },
};

function BrandLogo() {
  return (
    <div
      className="flex select-none flex-col items-center justify-center text-center leading-none"
      style={{ fontFamily: "Calibri, Arial, sans-serif" }}
    >
      <div className="text-[30px] font-semibold uppercase tracking-[0.16em] text-white">
        PMG
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.48em] text-white/75">
        Slovakia
      </div>
      <div className="mt-2 text-[7px] font-semibold uppercase tracking-[0.32em] text-white/40">
        Premium Mobility Group
      </div>
    </div>
  );
}

export default function OchranaOsobnychUdajovPage() {
  return (
    <main className="min-h-screen bg-[#05070c] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href="/" aria-label="Späť na úvod">
            <BrandLogo />
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Späť na web
          </Link>
        </header>

        <section className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
          <p className="text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
            GDPR
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Ochrana osobných údajov
          </h1>

          <div className="mt-8 space-y-8 leading-8 text-white/70">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Prevádzkovateľ
              </h2>
              <p className="mt-3">
                Prevádzkovateľom osobných údajov je PMG SLOVAKIA, s.r.o.,
                IČO: 57 381 411, so sídlom Daxnerova 9, 010 01 Žilina.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Kontaktné údaje
              </h2>
              <p className="mt-3">
                Email: info@pmgslovakia.sk
                <br />
                Telefón: +421 910 565 835, +421 948 027 374
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Aké údaje spracúvame
              </h2>
              <p className="mt-3">
                Prostredníctvom kontaktného formulára môžeme spracúvať meno,
                priezvisko, telefónne číslo, emailovú adresu, zvolenú službu a
                obsah správy, ktorú nám odošlete.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Účel spracúvania
              </h2>
              <p className="mt-3">
                Osobné údaje spracúvame za účelom kontaktovania záujemcu,
                vybavenia požiadavky, prípravy individuálnej ponuky a následnej
                komunikácie.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Právny základ
              </h2>
              <p className="mt-3">
                Právnym základom spracúvania je vykonanie opatrení pred
                uzatvorením zmluvy na základe žiadosti dotknutej osoby (čl. 6
                ods. 1 písm. b) GDPR) a pri analytických cookies súhlas
                dotknutej osoby (čl. 6 ods. 1 písm. a) GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Príjemcovia a sprostredkovatelia
              </h2>
              <p className="mt-3">
                Správy z kontaktného formulára sa k nám doručujú cez službu
                Web3Forms, ktorá ich spracúva ako sprostredkovateľ. Ak udelíte
                súhlas s analytickými cookies, údaje o návšteve webu spracúva
                Google Ireland Limited (Google Analytics). Pri týchto službách
                môže dochádzať k prenosu údajov do USA, a to na základe EU-US
                Data Privacy Framework alebo štandardných zmluvných doložiek.
              </p>
              <p className="mt-3">
                Osobné údaje nepredávame a nepoužívame ich na automatizované
                rozhodovanie ani profilovanie.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Doba uchovávania
              </h2>
              <p className="mt-3">
                Údaje z dopytu uchovávame najdlhšie 1 rok od posledného
                kontaktu, ak z neho nevznikne zmluvný vzťah. Ak zmluva vznikne,
                údaje uchovávame po dobu jej trvania a po dobu potrebnú na
                plnenie zákonných povinností (napr. účtovných).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Práva dotknutej osoby
              </h2>
              <p className="mt-3">
                Máte právo na prístup k osobným údajom, ich opravu, vymazanie,
                obmedzenie spracúvania, prenositeľnosť údajov a právo namietať
                proti spracúvaniu. Udelený súhlas môžete kedykoľvek odvolať,
                pri cookies cez odkaz „Nastavenia cookies“ v pätičke webu.
                Svoje práva si môžete uplatniť emailom na info@pmgslovakia.sk.
              </p>
              <p className="mt-3">
                Ak sa domnievate, že spracúvanie vašich údajov porušuje
                predpisy, máte právo podať návrh na začatie konania na Úrad na
                ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07
                Bratislava 27, www.dataprotection.gov.sk.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}