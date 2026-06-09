import Image from "next/image";

const services = [
  {
    title: "Predplatné vozidiel",
    text: "Moderný spôsob mobility bez zbytočných záväzkov. Vozidlo používate, my riešime starosti.",
  },
  {
    title: "Náhradné vozidlá",
    text: "Pri nehode, servise alebo poruche vám pomôžeme zostať mobilný bez prerušenia.",
  },
  {
    title: "Fleet care pre firmy",
    text: "Servis, STK, pneuservis, umývanie, vyzdvihnutie a pristavenie vozidiel pre firmy.",
  },
  {
    title: "Servis, STK a pneuservis",
    text: "Zabezpečíme termíny, logistiku aj náhradné vozidlo, aby ste nestrácali čas.",
  },
  {
    title: "Help Car",
    text: "Pomoc motoristom pri nehode, poruche alebo výpadku mobility.",
  },
  {
    title: "Firemná mobilita",
    text: "Riešenia pre s.r.o., podnikateľov a flotily, ktoré nechcú riešiť vozidlá denne.",
  },
];

const benefits = [
  "Vozidlo pristavíme k vám",
  "Náhradné vozidlo pri servise alebo nehode",
  "Servis, STK, EK a pneuservis pod jednou strechou",
  "Individuálne riešenia pre firmy aj súkromné osoby",
  "Jeden kontakt pre všetko okolo vozidiel",
  "Mobilita bez zbytočnej administratívy",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <Image
            src="/pmg-logo.png"
            alt="PMG Slovakia"
            width={118}
            height={45}
            className="h-auto w-[118px]"
            priority
          />

          <nav className="hidden gap-8 text-sm text-white/75 md:flex">
            <a className="hover:text-[#c8a96a]" href="#sluzby">Služby</a>
            <a className="hover:text-[#c8a96a]" href="#preco">Prečo PMG</a>
            <a className="hover:text-[#c8a96a]" href="#firmy">Pre firmy</a>
            <a className="hover:text-[#c8a96a]" href="#kontakt">Kontakt</a>
          </nav>

          <a
            href="#kontakt"
            className="rounded-full bg-[#c8a96a] px-5 py-3 text-sm font-semibold text-black hover:bg-[#e2c27d]"
          >
            Získať ponuku
          </a>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden px-6 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(200,169,106,0.22),transparent_34%),linear-gradient(90deg,#05070c_0%,#101827_48%,#030407_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#c8a96a]">
              PMG Slovakia
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Vaše vozidlo.
              <span className="block text-[#c8a96a]">Naša starosť.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              Predplatné vozidiel, náhradná mobilita a komplexná starostlivosť
              o vozidlá pre firmy, podnikateľov aj súkromné osoby.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-[#c8a96a] px-8 py-4 text-center font-semibold text-black hover:bg-[#e2c27d]"
              >
                Chcem ponuku
              </a>
              <a
                href="#sluzby"
                className="rounded-full border border-white/25 px-8 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Pozrieť služby
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-white/65">
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

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#c8a96a]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/bmw-m5-hero.png"
                alt="Prémiové vozidlo PMG Slovakia"
                width={1100}
                height={720}
                className="h-[520px] w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#c8a96a]">
                  Premium mobility
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Mobilita, ktorá pokračuje aj keď vaše auto stojí.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-[#c8a96a]">
            Naše riešenia
          </p>
          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Všetko okolo mobility pod jednou strechou
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8a96a] text-xl text-black">
                  ✦
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="preco" className="bg-white px-6 py-24 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#b79252]">
              Prečo PMG
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Neprenajímame len autá.
              <span className="block text-[#b79252]">Riešime mobilitu.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/65">
              PMG Slovakia je partner pre ľudí a firmy, ktoré nechcú strácať
              čas servisom, papiermi, STK, pneuservisom ani hľadaním náhradného
              vozidla.
            </p>
          </div>

          <div className="grid gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-[#f7f5f0] p-5 text-lg shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="firmy" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#c8a96a]">
                Pre firmy
              </p>
              <h2 className="mt-4 text-4xl font-semibold">
                Venujte sa podnikaniu.
                <span className="block text-[#c8a96a]">
                  Vozidlá nechajte na nás.
                </span>
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/70">
              Pomáhame firmám a podnikateľom zabezpečiť každodennú mobilitu,
              správu vozového parku, náhradné vozidlá, servisné úkony a ďalšie
              služby bez zbytočného zaťaženia interného tímu.
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c8a96a]">
            Kontakt
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Získajte individuálnu ponuku
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Napíšte nám alebo zavolajte. Pripravíme riešenie podľa toho, či
            potrebujete vozidlo, náhradnú mobilitu alebo správu vozového parku.
          </p>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
            <a className="rounded-xl bg-white/5 p-5 hover:bg-white/10" href="tel:+421910595835">
              +421 910 595 835
            </a>
            <a className="rounded-xl bg-white/5 p-5 hover:bg-white/10" href="tel:+421948027374">
              +421 948 027 374
            </a>
            <a className="rounded-xl bg-white/5 p-5 hover:bg-white/10" href="mailto:info@pmgslovakia.sk">
              info@pmgslovakia.sk
            </a>
            <div className="rounded-xl bg-white/5 p-5">
              Daxnerova 9, 010 01 Žilina
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        PMG SLOVAKIA, s.r.o. · IČO: 57 381 411 · Mobilita bez starostí
      </footer>
    </main>
  );
}