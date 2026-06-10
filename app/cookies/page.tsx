import Link from "next/link";

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

export default function CookiesPage() {
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
            Cookies
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Zásady používania cookies
          </h1>

          <div className="mt-8 space-y-8 leading-8 text-white/70">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Čo sú cookies
              </h2>
              <p className="mt-3">
                Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom
                zariadení pri návšteve webovej stránky. Pomáhajú zabezpečiť
                správne fungovanie webu a môžu slúžiť aj na analytické alebo
                marketingové účely.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Aké cookies používame
              </h2>
              <p className="mt-3">
                V aktuálnej verzii webu používame najmä technické cookies
                potrebné na správne fungovanie stránky a formulára. Ak neskôr
                pridáme analytické alebo marketingové nástroje, túto stránku
                aktualizujeme.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">
                Správa cookies
              </h2>
              <p className="mt-3">
                Cookies môžete spravovať alebo vymazať v nastaveniach svojho
                internetového prehliadača.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white">Kontakt</h2>
              <p className="mt-3">
                V prípade otázok nás môžete kontaktovať na emailovej adrese
                info@pmgslovakia.sk.
              </p>
            </div>

            <div className="rounded-2xl bg-[#d7b66f]/10 p-5 text-sm text-white/60 ring-1 ring-[#d7b66f]/20">
              Tento text je pracovná verzia. Pred ostrým spustením odporúčame
              finálnu právnu kontrolu.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}