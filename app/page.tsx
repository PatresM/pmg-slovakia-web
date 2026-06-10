import Image from "next/image";

const services = [
  {
    title: "Subscription",
    subtitle: "Auto ako predplatné",
    text: "Mesačný model mobility bez zbytočných záväzkov. Jazdíte, my riešime starosti.",
  },
  {
    title: "Mobility Assistance",
    subtitle: "Pomoc kedykoľvek",
    text: "Náhradná mobilita pri nehode, poruche alebo servise bez prerušenia.",
  },
  {
    title: "Fleet Care",
    subtitle: "Pre firmy",
    text: "Servis, STK, pneuservis, umývanie a logistika firemných vozidiel.",
  },
  {
    title: "Náhradné vozidlá",
    subtitle: "Bez výpadku",
    text: "Keď vaše auto stojí, vy ostávate mobilný.",
  },
];

const steps = [
  {
    number: "01",
    title: "Kontaktujete nás",
    text: "Poviete nám, čo potrebujete vyriešiť – vozidlo, servis, nehodu alebo firemnú flotilu.",
  },
  {
    number: "02",
    title: "Navrhneme riešenie",
    text: "Vyberieme vhodnú službu, vozidlo alebo kombináciu služieb podľa vašej situácie.",
  },
  {
    number: "03",
    title: "Zostávate mobilný",
    text: "My riešime všetko okolo vozidla, vy pokračujete bez zbytočných starostí.",
  },
];

const benefits = [
  "Vyzdvihnutie a pristavenie vozidla",
  "Detailing, umývanie a starostlivosť o vozidlo",
  "Servis, STK a pneuservis",,
  "Náhradné vozidlo pri nehode alebo servise",
  "Komplexná starostlivosť o vozidlá pre firmy aj súkromné osoby",
];

function BrandLogo() {
  return (
    <div
      className="flex min-w-[150px] select-none flex-col items-center justify-center text-center leading-none"
      style={{ fontFamily: "Calibri, Arial, sans-serif" }}
    >
      <div className="text-[31px] font-semibold uppercase tracking-[0.16em] text-white md:text-[36px]">
        PMG
      </div>

      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.48em] text-white/78 md:text-[12px]">
        Slovakia
      </div>

      <div className="mt-2 text-[7px] font-semibold uppercase tracking-[0.32em] text-white/40 md:text-[8px]">
        Premium Mobility Group
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      <header className="fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-[2rem] bg-[#05070c]/78 shadow-[0_14px_55px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          <a href="#" aria-label="PMG Slovakia domov">
            <BrandLogo />
          </a>

          <nav className="hidden gap-8 text-sm text-white/72 md:flex">
            <a href="#ako" className="transition hover:text-[#d7b66f]">
              Ako to funguje
            </a>
            <a href="#sluzby" className="transition hover:text-[#d7b66f]">
              Služby
            </a>
            <a href="#preco" className="transition hover:text-[#d7b66f]">
              Prečo PMG
            </a>
            <a href="#kontakt" className="transition hover:text-[#d7b66f]">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-[#d7b66f] px-5 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(215,182,111,0.28)] transition hover:bg-[#f0cf86]"
          >
            Získať ponuku
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-6 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(215,182,111,0.18),transparent_30%),linear-gradient(90deg,#05070c_0%,#07101d_40%,#05070c_100%)]" />
        <div className="gold-orb left-[8%] top-[22%]" />
        <div className="gold-orb right-[10%] top-[18%]" />

        <div className="relative z-10 mx-auto grid min-h-[84vh] max-w-7xl items-center gap-10 md:grid-cols-[0.72fr_1.28fr]">
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
              <a
                href="#kontakt"
                className="rounded-full bg-[#d7b66f] px-8 py-4 text-center font-bold text-black shadow-[0_0_40px_rgba(215,182,111,0.28)] transition hover:bg-[#f0cf86]"
              >
                Chcem ponuku
              </a>

              <a
                href="#sluzby"
                className="rounded-full border border-white/20 px-8 py-4 text-center font-bold transition hover:bg-white/10"
              >
                Pozrieť služby
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-sm text-white/60">
              <div>
                <strong className="block text-2xl text-white">24/7</strong>
                pomoc s mobilitou
              </div>
              <div>
                <strong className="block text-2xl text-white">1</strong>
                partner pre všetko
              </div>
              <div>
                <strong className="block text-2xl text-white">0</strong>
                zbytočných starostí
              </div>
            </div>
          </div>

          <div className="relative h-[560px] md:h-[720px]">
            <div className="absolute -inset-10 rounded-[3rem] bg-[#d7b66f]/14 blur-3xl" />

            <div className="relative h-full overflow-hidden rounded-[2rem] shadow-[0_35px_90px_rgba(0,0,0,0.65)]">
              <Image
                src="/bmw-m5-hero.png"
                alt="BMW M5 PMG Slovakia"
                fill
                className="object-cover object-center"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#05070c]/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#d7b66f] to-transparent opacity-55" />
      </section>

      <section id="ako" className="bg-[#f7f5f0] px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.42em] text-[#b79252]">
            Ako to funguje
          </p>

          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Jednoduchý postup. Prémiový výsledok.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1"
              >
                <p className="text-sm font-bold text-[#b79252]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{step.text}</p>
              </div>
            ))}
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
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] bg-white/[0.045] p-7 shadow-2xl ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.075] hover:ring-[#d7b66f]/50"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7b66f] text-xl text-black shadow-[0_0_26px_rgba(215,182,111,0.28)]">
                  ✦
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-[#d7b66f]">
                  {service.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/62">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="bg-[#f7f5f0] px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.42em] text-[#b79252]">
              Prečo PMG
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Neprenajímame len autá.
              <span className="block text-[#b79252]">Riešime mobilitu.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/65">
              PMG Slovakia je partner pre ľudí a firmy, ktoré nechcú strácať čas
              servisom, papiermi, STK, pneuservisom ani hľadaním náhradného
              vozidla.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl bg-white p-6 text-lg shadow-sm ring-1 ring-black/10"
              >
                ✓ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/[0.045] p-10 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
              Kontakt
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Získajte individuálnu ponuku
            </h2>

            <p className="mt-5 leading-7 text-white/62">
              Ozvite sa nám a pripravíme riešenie podľa toho, či potrebujete
              vozidlo, náhradnú mobilitu alebo správu vozového parku.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href="tel:+421910595835"
                className="rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                +421 910 595 835
              </a>

              <a
                href="tel:+421948027374"
                className="rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                +421 948 027 374
              </a>

              <a
                href="mailto:info@pmgslovakia.sk"
                className="rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                info@pmgslovakia.sk
              </a>

              <div className="rounded-xl bg-white/5 p-4">
                Daxnerova 9, 010 01 Žilina
              </div>
            </div>

            <a
              href="https://wa.me/421910595835"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#25D366] px-7 py-4 font-bold text-black transition hover:opacity-90"
            >
              WhatsApp kontakt
            </a>
          </div>

          <form className="rounded-[2rem] bg-white/[0.045] p-10 ring-1 ring-white/10">
            <div className="grid gap-5">
              <input
                className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-[#d7b66f]"
                placeholder="Meno a priezvisko"
              />

              <input
                className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-[#d7b66f]"
                placeholder="Telefón"
              />

              <input
                className="rounded-xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-[#d7b66f]"
                placeholder="Email"
              />

              <textarea
                className="min-h-36 rounded-xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-[#d7b66f]"
                placeholder="Čo potrebujete vyriešiť?"
              />

              <button className="rounded-full bg-[#d7b66f] px-8 py-4 font-bold text-black transition hover:bg-[#f0cf86]">
                Odoslať požiadavku
              </button>
            </div>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/421910595835"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-7 right-7 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-[0_0_40px_rgba(37,211,102,0.55)] transition hover:scale-110"
        aria-label="WhatsApp kontakt"
      >
        💬
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        PMG SLOVAKIA, s.r.o. · IČO: 57 381 411 · Mobilita bez starostí
      </footer>
    </main>
  );
}