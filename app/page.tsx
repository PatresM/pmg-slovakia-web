import Image from "next/image";

const services = [
  {
    icon: "🚘",
    title: "Subscription PMG",
    subtitle: "Vozidlo ako predplatné",
    text: "Flexibilné využívanie vozidla formou mesačného predplatného. Ideálne riešenie pre klientov, ktorí nechcú riešiť klasický leasing, dlhé záväzky ani starosti so servisom.",
  },
  {
    icon: "🛟",
    title: "Zero-stress mobility",
    subtitle: "Služby najvyššieho štandardu",
    text: "Pomoc v situáciách, keď vaše vozidlo stojí pre nehodu, poruchu alebo servis. Zabezpečíme náhradné vozidlo a pomôžeme vám zostať mobilný bez výpadku.",
  },
  {
    icon: "🏢",
    title: "Fleet Care",
    subtitle: "Starostlivosť o firemné vozidlá",
    text: "Komplexná starostlivosť o firemný vozový park. Servis, STK, EK, pneuservis, umývanie, logistika a náhradná mobilita pod jednou strechou.",
  },
  {
    icon: "🔑",
    title: "Premium Concierge",
    subtitle: "Prémiová starostlivosť",
    text: "Vyzdvihnutie a pristavenie vozidla, vybavenie servisu, STK, prezutia alebo umývania. Vy sa venujete svojmu dňu, my sa postaráme o vozidlo.",
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

const audiences = [
  {
    title: "Firmy a s.r.o.",
    text: "Pre spoločnosti, ktoré potrebujú spoľahlivú mobilitu bez toho, aby zamestnanci strácali čas servisom, STK, pneuservisom alebo riešením náhradných vozidiel.",
  },
  {
    title: "Podnikatelia",
    text: "Pre ľudí, ktorých čas má hodnotu. Ak potrebujete byť mobilní, riešiť klientov a nie servis auta, PMG preberá starosti za vás.",
  },
  {
    title: "Súkromné osoby",
    text: "Pre klientov, ktorí chcú pohodlné riešenie pri servise, nehode, poruche alebo potrebe krátkodobej či dlhodobej mobility.",
  },
  {
    title: "Majitelia viacerých vozidiel",
    text: "Pre majiteľov flotíl, rodinných vozidiel alebo firemných áut, ktorí chcú mať servis, logistiku a náhradnú mobilitu pod jednou strechou.",
  },
];

const businessFeatures = [
  "pravidelný servis a údržba vozidiel",
  "STK, EK a administratíva",
  "pneuservis a sezónne prezutie",
  "náhradné vozidlo počas výpadku",
  "vyzdvihnutie a pristavenie vozidla",
  "umývanie a príprava vozidiel",
  "riešenie poistných udalostí",
  "starostlivosť o firemné flotily",
];

const benefits = [
  "Mobilita aj vtedy, keď vaše vozidlo stojí",
  "Jedno miesto pre servis, STK, pneuservis a náhradné vozidlá",
  "Menej administratívy a menej strateného času",
  "Individuálne riešenia pre firmy, podnikateľov aj súkromné osoby",
];

const faqs = [
  {
    question: "Je PMG Slovakia klasická požičovňa áut?",
    answer:
      "Nie. PMG Slovakia nie je len klasická autopožičovňa. Naším cieľom je riešiť mobilitu komplexne – od predplatného vozidiel cez náhradné vozidlá až po starostlivosť o firemné flotily.",
  },
  {
    question: "Čo znamená vozidlo ako predplatné?",
    answer:
      "Ide o flexibilný model mobility, pri ktorom klient využíva vozidlo mesačne podľa dohody. Oproti bežnému leasingu je cieľom väčšia jednoduchosť, menej starostí a možnosť nastaviť službu podľa potrieb klienta.",
  },
  {
    question: "Viete zabezpečiť náhradné vozidlo počas servisu alebo nehody?",
    answer:
      "Áno. Jednou z hlavných služieb je zabezpečiť náhradnú mobilitu v čase, keď je vaše vozidlo nepojazdné, v servise alebo riešite poistnú udalosť.",
  },
  {
    question: "Pomáhate aj firmám s vozovým parkom?",
    answer:
      "Áno. Fleet Care je určené pre firmy, ktoré chcú odbremeniť svoj tím od riešenia servisu, STK, pneuservisu, umývania, logistiky vozidiel a náhradnej mobility.",
  },
  {
    question: "Viete vozidlo vyzdvihnúť a pristaviť späť?",
    answer:
      "Áno. V rámci Premium Concierge vieme podľa dohody zabezpečiť vyzdvihnutie vozidla, vybavenie potrebného úkonu a následné pristavenie vozidla späť klientovi.",
  },
  {
    question: "Dá sa pripraviť individuálna ponuka?",
    answer:
      "Áno. Každé riešenie nastavujeme individuálne podľa typu klienta, počtu vozidiel, požadovanej služby a rozsahu starostlivosti.",
  },
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
      <header className="fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-[2rem] bg-[#05070c]/80 shadow-[0_14px_55px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          <a href="#" aria-label="PMG Slovakia domov">
            <BrandLogo />
          </a>

          <nav className="hidden gap-7 text-sm text-white/72 lg:flex">
            <a href="#ako" className="transition hover:text-[#d7b66f]">
              Ako to funguje
            </a>
            <a href="#sluzby" className="transition hover:text-[#d7b66f]">
              Služby
            </a>
            <a href="#pre-koho" className="transition hover:text-[#d7b66f]">
              Pre koho
            </a>
            <a href="#firmy" className="transition hover:text-[#d7b66f]">
              Pre firmy
            </a>
            <a href="#faq" className="transition hover:text-[#d7b66f]">
              FAQ
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
                <strong className="block text-2xl text-white">100%</strong>
                individuálny prístup
              </div>
              <div>
                <strong className="block text-2xl text-white">1</strong>
                partner pre všetko
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/20 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <Image
                src="/bmw-m5-hero.png"
                alt="BMW M5 PMG Slovakia"
                width={1400}
                height={900}
                priority
                className="w-full rounded-[2.5rem] object-cover transition duration-700 hover:scale-[1.02]"
              />
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
                className="rounded-[2rem] bg-white/5 p-7 shadow-2xl ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10 hover:ring-[#d7b66f]/50"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d7b66f] text-3xl text-black shadow-[0_0_30px_rgba(215,182,111,0.32)]">
                  {service.icon}
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

      <section id="pre-koho" className="bg-[#f7f5f0] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.42em] text-[#b79252]">
            Pre koho je PMG
          </p>

          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Riešenia pre každého, kto potrebuje mobilitu bez starostí.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold">{audience.title}</h3>
                <p className="mt-4 leading-7 text-black/60">
                  {audience.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="firmy" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,182,111,0.14),transparent_32%),linear-gradient(135deg,#05070c_0%,#0c1420_50%,#05070c_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
              Pre firmy
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Venujte sa podnikaniu.
              <span className="block text-[#d7b66f]">
                Vozidlá nechajte na nás.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/68">
              Pomáhame firmám zabezpečiť každodennú mobilitu bez zbytočnej
              administratívy. Servis, STK, EK, pneuservis, umývanie, náhradné
              vozidlá a logistiku vozidiel riešime za vás.
            </p>

            <a
              href="#kontakt"
              className="mt-8 inline-flex rounded-full bg-[#d7b66f] px-8 py-4 font-bold text-black transition hover:bg-[#f0cf86]"
            >
              Chcem firemné riešenie
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {businessFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
              >
                <span className="text-[#d7b66f]">✓</span> {feature}
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

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
            FAQ
          </p>

          <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl">
            Najčastejšie otázky
          </h2>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition open:bg-white/10"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-white/62">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(215,182,111,0.12),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-white/5 p-10 ring-1 ring-white/10">
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
                href="tel:+421910565835"
                className="rounded-xl bg-white/5 p-4 transition hover:bg-white/10"
              >
                +421 910 565 835
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

            <div className="mt-8 rounded-2xl border border-[#d7b66f]/20 bg-[#d7b66f]/10 p-5">
              <p className="text-sm font-semibold text-[#d7b66f]">
                Rýchla reakcia
              </p>
              <p className="mt-2 text-sm leading-6 text-white/58">
                Po odoslaní požiadavky sa vám ozveme späť a doladíme riešenie
                podľa vašej situácie.
              </p>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="relative overflow-hidden rounded-[2.2rem] bg-white/[0.07] p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur md:p-10"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d7b66f]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8">
                <div className="inline-flex rounded-full border border-[#d7b66f]/25 bg-[#d7b66f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#d7b66f]">
                  Nezáväzná požiadavka
                </div>

                <h3 className="mt-5 text-3xl font-semibold md:text-4xl">
                  Napíšte nám, čo potrebujete vyriešiť
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                  Vyplňte krátky formulár a pripravíme pre vás návrh mobility,
                  servisu alebo firemnej starostlivosti.
                </p>
              </div>

              <input
                type="hidden"
                name="access_key"
                value="09968a68-c7d5-41c4-9923-4ec931cdde61"
              />

              <input
                type="hidden"
                name="subject"
                value="Nová požiadavka z webu PMG Slovakia"
              />

              <input
                type="hidden"
                name="from_name"
                value="PMG Slovakia web"
              />

              <input
                type="hidden"
                name="redirect"
                value="https://pmgslovakia.sk/dakujeme"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Meno a priezvisko
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="Napríklad: Peter Novák"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Telefón
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="+421 ..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="vas@email.sk"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Typ služby
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c] p-4 text-white outline-none transition focus:border-[#d7b66f]"
                  >
                    <option
                      className="bg-[#05070c] text-white"
                      value=""
                      disabled
                    >
                      Vyberte službu
                    </option>
                    <option
                      className="bg-[#05070c] text-white"
                      value="Subscription PMG"
                    >
                      Subscription PMG
                    </option>
                    <option
                      className="bg-[#05070c] text-white"
                      value="Zero-stress mobility"
                    >
                      Zero-stress mobility
                    </option>
                    <option
                      className="bg-[#05070c] text-white"
                      value="Fleet Care"
                    >
                      Fleet Care
                    </option>
                    <option
                      className="bg-[#05070c] text-white"
                      value="Premium Concierge"
                    >
                      Premium Concierge
                    </option>
                    <option
                      className="bg-[#05070c] text-white"
                      value="Individuálna požiadavka"
                    >
                      Individuálna požiadavka
                    </option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Správa
                  </label>
                  <textarea
                    name="message"
                    required
                    className="min-h-40 w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="Napíšte nám, čo potrebujete vyriešiť, kedy vozidlo potrebujete alebo akú starostlivosť očakávate..."
                  />
                </div>

                <label className="md:col-span-2 flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/58">
                  <input
                    type="checkbox"
                    required
                    name="gdpr_consent"
                    value="Súhlas udelený"
                    className="mt-1"
                  />

                  <span>
                    Súhlasím so spracovaním osobných údajov za účelom
                    kontaktovania a vybavenia mojej požiadavky. Viac informácií
                    nájdete v časti{" "}
                    <a
                      href="/ochrana-osobnych-udajov"
                      className="text-[#d7b66f] underline underline-offset-4"
                    >
                      Ochrana osobných údajov
                    </a>
                    .
                  </span>
                </label>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#d7b66f] px-8 py-5 text-base font-bold text-black shadow-[0_0_35px_rgba(215,182,111,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f0cf86]"
                  >
                    Odoslať požiadavku →
                  </button>

                  <p className="mt-4 text-center text-xs text-white/38">
                    Vaše údaje použijeme iba na vybavenie požiadavky.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/50">
        <div
          className="mb-4 flex select-none flex-col items-center justify-center text-center leading-none"
          style={{ fontFamily: "Calibri, Arial, sans-serif" }}
        >
          <div className="text-[26px] font-semibold uppercase tracking-[0.16em] text-white">
            PMG
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.48em] text-white/70">
            Slovakia
          </div>
          <div className="mt-2 text-[7px] font-semibold uppercase tracking-[0.32em] text-white/35">
            Premium Mobility Group
          </div>
        </div>

        <p>
          PMG SLOVAKIA, s.r.o. · IČO: 57 381 411 · Daxnerova 9, 010 01 Žilina
        </p>

        <p className="mt-2">
          info@pmgslovakia.sk · +421 910 565 835 · +421 948 027 374
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/421910565835"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366] text-xl shadow-[0_0_22px_rgba(37,211,102,0.32)] transition hover:-translate-y-1 hover:scale-105"
          >
            💬
          </a>

          <a
            href="https://www.instagram.com/pmg_slovakia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-xl text-white shadow-[0_0_22px_rgba(253,29,29,0.28)] transition hover:-translate-y-1 hover:scale-105"
          >
            ◎
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61590827006457&locale=sk_SK"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1877F2] text-xl font-bold text-white shadow-[0_0_22px_rgba(24,119,242,0.32)] transition hover:-translate-y-1 hover:scale-105"
          >
            f
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-5 text-xs text-white/40">
          <a
            href="/ochrana-osobnych-udajov"
            className="transition hover:text-white"
          >
            Ochrana osobných údajov
          </a>

          <a href="/cookies" className="transition hover:text-white">
            Cookies
          </a>
          <a href="/obchodne-podmienky" className="transition hover:text-white">
            Obchodné podmienky
          </a>
        </div>
      </footer>
    </main>
  );
}