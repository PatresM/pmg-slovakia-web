import Image from "next/image";

const services = [
  {
    title: "Subscription",
    subtitle: "Auto ako predplatné",
    text: "Moderný spôsob mobility bez zbytočných záväzkov. Vozidlo používate, my riešime starosti.",
  },
  {
    title: "Help Car",
    subtitle: "Pomoc motoristom",
    text: "Pri nehode, poruche alebo servise vám pomôžeme zostať mobilný bez prerušenia.",
  },
  {
    title: "Fleet Care",
    subtitle: "Pre firmy",
    text: "Kompletná starostlivosť o firemné vozidlá, servis, STK, pneuservis a logistiku.",
  },
  {
    title: "Náhradné vozidlá",
    subtitle: "Mobilita bez výpadku",
    text: "Keď vaše vozidlo stojí, my vám pomôžeme zostať pojazdný.",
  },
];

const benefits = [
  "Vyzdvihnutie a pristavenie vozidla",
  "Servis, STK, EK a pneuservis",
  "Náhradné vozidlo pri nehode alebo servise",
  "Riešenia pre firmy, flotily aj súkromné osoby",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center">
            <Image
              src="/pmg-logo.png"
              alt="PMG Slovakia"
              width={170}
              height={70}
              className="h-auto w-[145px] md:w-[165px]"
              priority
            />
          </a>

          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="#sluzby" className="hover:text-[#d7b66f]">Služby</a>
            <a href="#preco" className="hover:text-[#d7b66f]">Prečo PMG</a>
            <a href="#kontakt" className="hover:text-[#d7b66f]">Kontakt</a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-[#d7b66f] px-6 py-3 text-sm font-bold text-black hover:bg-[#f0cf86]"
          >
            Získať ponuku
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_25%,rgba(215,182,111,0.22),transparent_30%),linear-gradient(90deg,#05070c_0%,#07101d_45%,#05070c_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#d7b66f]">
              PMG Slovakia
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Vaše vozidlo.
              <span className="block text-[#d7b66f]">Naša starosť.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Predplatné vozidiel, náhradná mobilita a komplexná starostlivosť
              o vozidlá pre firmy, podnikateľov aj súkromné osoby.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-[#d7b66f] px-8 py-4 text-center font-bold text-black hover:bg-[#f0cf86]"
              >
                Chcem ponuku
              </a>
              <a
                href="#sluzby"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Pozrieť služby
              </a>
            </div>
          </div>

          <div className="relative h-[520px] md:h-[680px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#d7b66f]/20 blur-3xl" />
            <Image
              src="/bmw-m5-hero.png"
              alt="Prémiové vozidlo PMG Slovakia"
              fill
              className="object-contain object-center drop-shadow-[0_35px_60px_rgba(0,0,0,0.75)]"
              priority
            />
          </div>
        </div>
      </section>

      <section id="sluzby" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-[#d7b66f]">
            Naše riešenia
          </p>
          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Mobilita bez kompromisov
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl transition hover:-translate-y-2 hover:border-[#d7b66f]/50"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7b66f] text-xl text-black">
                  ✦
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#d7b66f]">
                  {service.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/62">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="bg-[#f7f5f0] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#b79252]">
              Prečo PMG
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Neprenajímame len autá.
              <span className="block text-[#b79252]">Riešime mobilitu.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/65">
              PMG Slovakia je partner pre ľudí a firmy, ktoré nechcú strácať čas
              servisom, papiermi, STK, pneuservisom ani hľadaním náhradného vozidla.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 text-lg shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-10">
            <p className="text-sm uppercase tracking-[0.4em] text-[#d7b66f]">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Získajte individuálnu ponuku
            </h2>
            <p className="mt-5 text-white/65">
              Ozvite sa nám a pripravíme riešenie podľa toho, či potrebujete vozidlo,
              náhradnú mobilitu alebo správu vozového parku.
            </p>

            <div className="mt-8 grid gap-3">
              <a href="tel:+421910595835" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">
                +421 910 595 835
              </a>
              <a href="tel:+421948027374" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">
                +421 948 027 374
              </a>
              <a href="mailto:info@pmgslovakia.sk" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">
                info@pmgslovakia.sk
              </a>
              <div className="rounded-xl bg-white/5 p-4">
                Daxnerova 9, 010 01 Žilina
              </div>
            </div>

            <a
              href="https://wa.me/421910595835"
              target="_blank"
              className="mt-6 inline-flex rounded-full bg-[#25D366] px-7 py-4 font-bold text-black hover:opacity-90"
            >
              WhatsApp kontakt
            </a>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-10">
            <div className="grid gap-5">
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Meno a priezvisko" />
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Telefón" />
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Email" />
              <textarea className="min-h-36 rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Čo potrebujete vyriešiť?" />
              <button className="rounded-full bg-[#d7b66f] px-8 py-4 font-bold text-black hover:bg-[#f0cf86]">
                Odoslať požiadavku
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        PMG SLOVAKIA, s.r.o. · IČO: 57 381 411 · Mobilita bez starostí
      </footer>
    </main>
  );
}import Image from "next/image";

const services = [
  ["Subscription", "Auto ako predplatné", "Mesačný model mobility bez zbytočných záväzkov."],
  ["Help Car", "Pomoc motoristom", "Náhradná mobilita pri nehode, poruche alebo servise."],
  ["Fleet Care", "Pre firmy", "Servis, STK, pneuservis, umývanie a logistika vozidiel."],
  ["Náhradné vozidlá", "Bez výpadku", "Keď vaše auto stojí, vy ostávate mobilný."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070c]/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="group flex items-center">
            <Image
              src="/pmg-logo-white.png"
              alt="PMG Slovakia"
              width={190}
              height={80}
              className="h-auto w-[150px] transition duration-500 mix-blend-screen brightness-110 contrast-110 drop-shadow-[0_0_22px_rgba(255,255,255,0.22)] group-hover:drop-shadow-[0_0_32px_rgba(215,182,111,0.55)] md:w-[180px]"
              priority
            />
          </a>

          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a href="#sluzby" className="hover:text-[#d7b66f]">Služby</a>
            <a href="#preco" className="hover:text-[#d7b66f]">Prečo PMG</a>
            <a href="#kontakt" className="hover:text-[#d7b66f]">Kontakt</a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-[#d7b66f] px-6 py-3 text-sm font-bold text-black shadow-[0_0_35px_rgba(215,182,111,0.38)] hover:bg-[#f0cf86]"
          >
            Získať ponuku
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_28%,rgba(215,182,111,0.24),transparent_30%),linear-gradient(90deg,#05070c_0%,#07101d_44%,#05070c_100%)]" />
        <div className="gold-orb left-[8%] top-[22%]" />
        <div className="gold-orb right-[10%] top-[18%]" />

        <div className="relative z-10 mx-auto grid min-h-[84vh] max-w-7xl items-center gap-10 md:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
              PMG Slovakia
            </p>

            <h1 className="text-5xl font-semibold leading-[1.03] md:text-7xl">
              Vaše vozidlo.
              <span className="block text-[#d7b66f]">Naša starosť.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
              Predplatné vozidiel, náhradná mobilita a komplexná starostlivosť
              o vozidlá pre firmy, podnikateľov aj súkromné osoby.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="rounded-full bg-[#d7b66f] px-8 py-4 text-center font-bold text-black shadow-[0_0_40px_rgba(215,182,111,0.32)] hover:bg-[#f0cf86]">
                Chcem ponuku
              </a>
              <a href="#sluzby" className="rounded-full border border-white/25 px-8 py-4 text-center font-bold hover:bg-white/10">
                Pozrieť služby
              </a>
            </div>
          </div>

          <div className="relative h-[520px] md:h-[690px]">
            <div className="absolute -inset-10 rounded-[3rem] bg-[#d7b66f]/20 blur-3xl" />
            <Image
              src="/bmw-m5-hero.png"
              alt="BMW M5 PMG Slovakia"
              fill
              className="object-contain object-center drop-shadow-[0_40px_70px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>
        </div>
      </section>

      <section id="sluzby" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
            Naše riešenia
          </p>
          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Mobilita bez kompromisov
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {services.map(([title, subtitle, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:border-[#d7b66f]/50 hover:bg-white/[0.075]">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7b66f] text-xl text-black shadow-[0_0_30px_rgba(215,182,111,0.35)]">
                  ✦
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#d7b66f]">{subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="bg-[#f7f5f0] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.42em] text-[#b79252]">Prečo PMG</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Neprenajímame len autá.
            <span className="block text-[#b79252]">Riešime mobilitu.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
            PMG Slovakia je partner pre ľudí a firmy, ktoré nechcú strácať čas
            servisom, papiermi, STK, pneuservisom ani hľadaním náhradného vozidla.
          </p>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-10">
            <p className="text-sm uppercase tracking-[0.42em] text-[#d7b66f]">Kontakt</p>
            <h2 className="mt-4 text-4xl font-semibold">Získajte individuálnu ponuku</h2>

            <div className="mt-8 grid gap-3">
              <a href="tel:+421910595835" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">+421 910 595 835</a>
              <a href="tel:+421948027374" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">+421 948 027 374</a>
              <a href="mailto:info@pmgslovakia.sk" className="rounded-xl bg-white/5 p-4 hover:bg-white/10">info@pmgslovakia.sk</a>
              <div className="rounded-xl bg-white/5 p-4">Daxnerova 9, 010 01 Žilina</div>
            </div>

            <a href="https://wa.me/421910595835" target="_blank" className="mt-6 inline-flex rounded-full bg-[#25D366] px-7 py-4 font-bold text-black hover:opacity-90">
              WhatsApp kontakt
            </a>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-10">
            <div className="grid gap-5">
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Meno a priezvisko" />
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Telefón" />
              <input className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Email" />
              <textarea className="min-h-36 rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:border-[#d7b66f]" placeholder="Čo potrebujete vyriešiť?" />
              <button className="rounded-full bg-[#d7b66f] px-8 py-4 font-bold text-black hover:bg-[#f0cf86]">
                Odoslať požiadavku
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        PMG SLOVAKIA, s.r.o. · IČO: 57 381 411 · Mobilita bez starostí
      </footer>
    </main>
  );
}