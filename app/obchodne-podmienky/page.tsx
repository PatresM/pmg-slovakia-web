export const metadata = {
  title: "Obchodné podmienky | PMG Slovakia",
  description:
    "Obchodné podmienky spoločnosti PMG SLOVAKIA, s.r.o. pre služby mobility, prenájmu vozidiel, náhradnej mobility a starostlivosti o vozidlá.",
};

export default function ObchodnePodmienky() {
  return (
    <main className="min-h-screen bg-[#05070c] px-6 py-20 text-white">
      <section className="mx-auto max-w-4xl rounded-[2rem] bg-white/[0.06] p-8 ring-1 ring-white/10 md:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-[#d7b66f]">
          PMG Slovakia
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Obchodné podmienky
        </h1>

        <p className="mt-6 leading-8 text-white/65">
          Tieto obchodné podmienky upravujú základné pravidlá poskytovania
          služieb spoločnosti PMG SLOVAKIA, s.r.o. prostredníctvom webovej
          stránky pmgslovakia.sk.
        </p>

        <div className="mt-12 grid gap-10 text-white/70">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Prevádzkovateľ
            </h2>
            <p className="mt-4 leading-8">
              PMG SLOVAKIA, s.r.o.
              <br />
              Daxnerova 9
              <br />
              010 01 Žilina
              <br />
              IČO: 57 381 411
              <br />
              E-mail: info@pmgslovakia.sk
              <br />
              Web: https://pmgslovakia.sk
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Predmet služieb
            </h2>
            <p className="mt-4 leading-8">
              Spoločnosť PMG SLOVAKIA, s.r.o. poskytuje služby v oblasti
              mobility a starostlivosti o vozidlá, najmä prenájom vozidiel,
              predplatné vozidiel, náhradnú mobilitu, Help Car, Fleet Care,
              správu vozových parkov a súvisiace poradenské a servisné služby.
            </p>
            <p className="mt-4 leading-8">
              Konkrétne podmienky jednotlivých služieb sa určujú individuálnou
              zmluvou, cenovou ponukou alebo osobitnou dohodou so zákazníkom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Dopytové formuláre
            </h2>
            <p className="mt-4 leading-8">
              Odoslanie kontaktného alebo dopytového formulára na webovej
              stránke nepredstavuje uzatvorenie zmluvy. Formulár slúži výhradne
              na získanie informácií, kontaktovanie záujemcu a prípravu
              individuálnej ponuky.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Ceny služieb
            </h2>
            <p className="mt-4 leading-8">
              Ceny služieb sú stanovované individuálne podľa rozsahu
              požadovaných služieb, typu vozidla, dĺžky využívania, lokality a
              konkrétnych potrieb zákazníka.
            </p>
            <p className="mt-4 leading-8">
              Aktuálna cenová ponuka je zákazníkovi poskytnutá pred uzatvorením
              zmluvného vzťahu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Zodpovednosť
            </h2>
            <p className="mt-4 leading-8">
              Informácie uvedené na webovej stránke majú informačný charakter.
              Prevádzkovateľ nezodpovedá za škody vzniknuté nesprávnym použitím
              informácií uvedených na webovej stránke alebo ich nesprávnym
              výkladom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Ochrana osobných údajov
            </h2>
            <p className="mt-4 leading-8">
              Spracovanie osobných údajov sa riadi dokumentom Ochrana osobných
              údajov, ktorý je dostupný na webovej stránke prevádzkovateľa.
            </p>
            <a
              href="/ochrana-osobnych-udajov"
              className="mt-4 inline-flex text-[#d7b66f] underline underline-offset-4"
            >
              Ochrana osobných údajov
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Cookies
            </h2>
            <p className="mt-4 leading-8">
              Webová stránka môže používať súbory cookies za účelom správneho
              fungovania webu, analytiky návštevnosti a zlepšovania služieb.
              Viac informácií je uvedených v dokumente Cookies.
            </p>
            <a
              href="/cookies"
              className="mt-4 inline-flex text-[#d7b66f] underline underline-offset-4"
            >
              Cookies
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Záverečné ustanovenia
            </h2>
            <p className="mt-4 leading-8">
              Tieto obchodné podmienky nadobúdajú účinnosť dňom ich zverejnenia
              na webovej stránke prevádzkovateľa.
            </p>
            <p className="mt-4 leading-8">
              Prevádzkovateľ si vyhradzuje právo tieto obchodné podmienky
              primerane aktualizovať.
            </p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-[#d7b66f]/20 bg-[#d7b66f]/10 p-5 text-sm leading-6 text-white/60">
          Posledná aktualizácia: 13. 6. 2026
        </div>
      </section>
    </main>
  );
}