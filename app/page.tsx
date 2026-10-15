import type { Metadata } from "next";
import Image from "next/image";
import CookieSettingsButton from "./components/CookieSettingsButton";
import MobileMenu from "./components/MobileMenu";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const icons = {
  key: (
    <>
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </>
  ),
  car: (
    <>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  bell: (
    <>
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
      <path d="M20 16a8 8 0 1 0-16 0" />
      <path d="M12 4v4" />
      <path d="M10 4h4" />
    </>
  ),
};

const services: {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
  text: string;
  includes?: string[];
  className: string;
}[] = [
  {
    icon: "key",
    title: "Prenájom vozidiel",
    subtitle: "Krátkodobo aj dlhodobo",
    text: "Prenájom z portfólia viac ako 300 vozidiel – na pár dní, týždňov alebo mesiacov. Vozidlo vyberieme podľa toho, na čo ho potrebujete, a vieme ho aj pristaviť.",
    className: "lg:col-span-3",
  },
  {
    icon: "car",
    title: "Subscription PMG",
    subtitle: "Vozidlo ako predplatné",
    text: "Model, ktorý je bežný vo Švajčiarsku, prinášame na Slovensko. Jedna mesačná platba namiesto leasingu, poistenia a servisu zvlášť – Vy len jazdíte a tankujete.",
    includes: [
      "PZP aj havarijné poistenie",
      "servis a údržba",
      "letné aj zimné pneumatiky",
      "diaľničná známka",
      "STK a EK",
      "náhradné vozidlo",
    ],
    className: "lg:col-span-3",
  },
  {
    icon: "lifebuoy",
    title: "Zero-stress mobility",
    subtitle: "Služby najvyššieho štandardu",
    text: "Pomoc v situáciách, keď Vaše vozidlo stojí pre nehodu, poruchu alebo servis. Zabezpečíme náhradné vozidlo a pomôžeme Vám zostať mobilný bez výpadku.",
    className: "lg:col-span-2",
  },
  {
    icon: "wrench",
    title: "Fleet Care",
    subtitle: "Starostlivosť o vozový park",
    text: "Komplexná starostlivosť o vozidlá firiem aj súkromných osôb. Servis, STK, EK, pneuservis, umývanie, logistika a náhradná mobilita pod jednou strechou.",
    className: "lg:col-span-2",
  },
  {
    icon: "bell",
    title: "Premium Concierge",
    subtitle: "Prémiová starostlivosť",
    text: "Vyzdvihnutie a pristavenie vozidla, vybavenie servisu, STK, prezutia alebo umývania. Vy sa venujete svojmu dňu, my sa postaráme o vozidlo.",
    className: "lg:col-span-2",
  },
];

const navLinks = [
  { href: "#ako", label: "Ako to funguje" },
  { href: "#sluzby", label: "Služby" },
  { href: "#pre-koho", label: "Pre koho" },
  { href: "#firmy", label: "Pre firmy" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "PMG SLOVAKIA, s.r.o.",
  alternateName: "PMG Slovakia",
  url: "https://www.pmgslovakia.sk",
  logo: "https://www.pmgslovakia.sk/icon.png",
  image: "https://www.pmgslovakia.sk/og-image.jpg",
  description:
    "Prenájom vozidiel, predplatné vozidiel, náhradná mobilita a starostlivosť o vozový park pre firmy aj súkromné osoby.",
  telephone: "+421910565835",
  email: "info@pmgslovakia.sk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Daxnerova 9",
    postalCode: "010 01",
    addressLocality: "Žilina",
    addressCountry: "SK",
  },
  areaServed: {
    "@type": "Country",
    name: "Slovensko",
  },
  sameAs: [
    "https://www.instagram.com/pmg_slovakia/",
    "https://www.facebook.com/profile.php?id=61590827006457",
  ],
};

const steps = [
  {
    number: "01",
    title: "Kontaktujete nás",
    text: "Poviete nám, čo potrebujete vyriešiť – vozidlo, servis, nehodu alebo firemnú flotilu.",
  },
  {
    number: "02",
    title: "Navrhneme riešenie",
    text: "Vyberieme vhodnú službu, vozidlo alebo kombináciu služieb podľa Vašej situácie.",
  },
  {
    number: "03",
    title: "Zostávate mobilný",
    text: "My riešime všetko okolo vozidla, Vy pokračujete bez zbytočných starostí.",
  },
];

const audiences = [
  {
    title: "Firmy a s.r.o.",
    text: "Pre spoločnosti, ktoré potrebujú spoľahlivú mobilitu bez toho, aby zamestnanci strácali čas servisom, STK, pneuservisom alebo riešením náhradných vozidiel.",
  },
  {
    title: "Podnikatelia",
    text: "Pre ľudí, ktorých čas má hodnotu. Ak potrebujete byť mobilný, riešiť klientov a nie servis auta, PMG preberá starosti za Vás.",
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
  "Mobilita aj vtedy, keď Vaše vozidlo stojí",
  "Jedno miesto pre servis, STK, pneuservis a náhradné vozidlá",
  "Menej administratívy a viac produktívneho času",
  "Individuálne riešenia pre firmy, podnikateľov aj súkromné osoby",
];

const faqs = [
  {
    question: "Je PMG Slovakia autopožičovňa?",
    answer:
      "Áno, ale nielen to. Prenajímame vozidlá krátkodobo aj dlhodobo z portfólia viac ako 300 vozidiel. Okrem toho ponúkame predplatné vozidiel, náhradnú mobilitu a starostlivosť o vozidlá firiem aj súkromných osôb.",
  },
  {
    question: "Čo znamená vozidlo ako predplatné?",
    answer:
      "Ide o model mobility, ktorý je bežný napríklad vo Švajčiarsku. Vozidlo využívate za jednu mesačnú platbu, v ktorej je poistenie, servis, pneumatiky, diaľničná známka aj STK. Dĺžku a podmienky nastavíme podľa Vašich potrieb.",
  },
  {
    question: "Aký je rozdiel oproti leasingu?",
    answer:
      "Pri leasingu splácate vozidlo a poistenie, servis, pneumatiky či STK riešite a platíte sami. Pri predplatnom PMG je to všetko v jednej mesačnej platbe a o vozidlo sa staráme my. Na konci obdobia vozidlo jednoducho vrátite alebo predplatné predĺžite.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="tel:+421910565835"
        aria-label="Zavolať PMG Slovakia"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7b66f] text-black shadow-[0_10px_35px_rgba(0,0,0,0.55)] transition hover:bg-[#f0cf86] lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      <header className="fixed left-1/2 top-5 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-[2rem] bg-[#05070c]/80 shadow-[0_14px_55px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-6">
          <a href="#" aria-label="PMG Slovakia domov">
            <BrandLogo />
          </a>

          <nav className="hidden gap-7 text-sm text-white/72 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#d7b66f]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="hidden whitespace-nowrap rounded-full bg-[#d7b66f] px-5 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(215,182,111,0.28)] transition hover:bg-[#f0cf86] sm:inline-flex"
            >
              Získať ponuku
            </a>

            <MobileMenu links={navLinks} />
          </div>
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
              Vaša mobilita.
              <span className="block text-[#d7b66f]">Naša starosť.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
              Prenájom a predplatné vozidiel, náhradná mobilita a komplexná
              starostlivosť o vozidlá pre firmy, podnikateľov aj súkromné osoby.
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
                <strong className="block text-2xl text-white">300+</strong>
                vozidiel v portfóliu
              </div>
              <div>
                <strong className="block text-2xl text-white">24/7</strong>
                pomoc s mobilitou
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
                src="/bmw-m5-hero.webp"
                alt="BMW M5 PMG Slovakia"
                width={1535}
                height={1024}
                priority
                sizes="(min-width: 1280px) 760px, (min-width: 768px) 60vw, 100vw"
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`${service.className} rounded-[2rem] bg-white/5 p-7 shadow-2xl ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10 hover:ring-[#d7b66f]/50`}
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d7b66f] text-black shadow-[0_0_30px_rgba(215,182,111,0.32)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[service.icon]}
                  </svg>
                </div>

                <p className="text-sm uppercase tracking-[0.25em] text-[#d7b66f]">
                  {service.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/62">{service.text}</p>

                {service.includes && (
                  <>
                    <p className="mt-6 text-sm font-semibold text-white">
                      V mesačnej platbe:
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[#d7b66f]/25 bg-[#d7b66f]/10 px-3 py-1.5 text-sm text-[#e8d3a3]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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
              vozidlá a logistiku vozidiel riešime za Vás.
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
                value="https://www.pmgslovakia.sk/dakujeme"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                    htmlFor="form-name"
                  >
                    Meno a priezvisko
                  </label>
                  <input
                    id="form-name"
                    autoComplete="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="Napríklad: Peter Novák"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                    htmlFor="form-phone"
                  >
                    Telefón
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    autoComplete="tel"
                    name="phone"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="+421 ..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                    htmlFor="form-email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    autoComplete="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#05070c]/80 p-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7b66f] focus:bg-[#05070c]"
                    placeholder="vas@email.sk"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                    htmlFor="form-service"
                  >
                    Typ služby
                  </label>
                  <select
                    id="form-service"
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
                      value="Prenájom vozidla"
                    >
                      Prenájom vozidla
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
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                    htmlFor="form-message"
                  >
                    Správa
                  </label>
                  <textarea
                    id="form-message"
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

        <p className="mt-5 text-xs text-white/35">
          © 2026 PMG SLOVAKIA, s.r.o. Všetky práva vyhradené.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/421910565835"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_0_22px_rgba(37,211,102,0.32)] transition hover:-translate-y-1 hover:scale-105"
          >
            <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
            <path d="M16.04 3C9.39 3 4 8.38 4 15.02c0 2.65.86 5.1 2.32 7.09L4.8 29l7.08-1.86a11.95 11.95 0 0 0 4.16.74C22.69 27.88 28 22.5 28 15.86 28 9.22 22.69 3 16.04 3Zm0 22.82c-1.32 0-2.61-.35-3.75-1.01l-.27-.16-4.2 1.1 1.12-4.08-.18-.28a9.86 9.86 0 0 1-1.6-5.37c0-5.48 4.45-9.94 9.92-9.94 5.48 0 9.86 4.46 9.86 9.94s-4.38 9.8-9.9 9.8Zm5.44-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
            </svg>
           </a>

          <a
            href="https://www.instagram.com/pmg_slovakia/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-[0_0_22px_rgba(253,29,29,0.28)] transition hover:-translate-y-1 hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
          </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61590827006457&locale=sk_SK"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook PMG Slovakia"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-[0_0_22px_rgba(24,119,242,0.32)] transition hover:-translate-y-1 hover:scale-105"
          >
           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
           <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.23 0-1.61.77-1.61 1.56v1.9h2.73l-.44 2.91h-2.29V22C18.34 21.24 22 17.08 22 12.06Z" />
           </svg> 
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

          <CookieSettingsButton className="transition hover:text-white" />
        </div>
      </footer>
    </main>
  );
}