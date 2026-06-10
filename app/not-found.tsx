import Link from "next/link";

function BrandLogo() {
  return (
    <div
      className="flex select-none flex-col items-center justify-center text-center leading-none"
      style={{ fontFamily: "Calibri, Arial, sans-serif" }}
    >
      <div className="text-[34px] font-semibold uppercase tracking-[0.16em] text-white">
        PMG
      </div>

      <div className="mt-1 text-[12px] font-semibold uppercase tracking-[0.48em] text-white/78">
        Slovakia
      </div>

      <div className="mt-2 text-[8px] font-semibold uppercase tracking-[0.32em] text-white/40">
        Premium Mobility Group
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#05070c] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(215,182,111,0.18),transparent_32%),linear-gradient(135deg,#05070c_0%,#07101d_45%,#05070c_100%)]" />

      <section className="relative z-10 mx-auto max-w-3xl rounded-[2rem] bg-white/5 p-10 text-center shadow-[0_35px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10 backdrop-blur">
        <div className="mb-10 flex justify-center">
          <BrandLogo />
        </div>

        <p className="text-sm uppercase tracking-[0.42em] text-[#d7b66f]">
          Stránka nenájdená
        </p>

        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
          404
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
          Táto stránka neexistuje alebo bola presunutá. Vráťte sa späť na úvod
          a pokračujte v prezeraní služieb PMG Slovakia.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="rounded-full bg-[#d7b66f] px-8 py-4 font-bold text-black transition hover:bg-[#f0cf86]"
          >
            Späť na úvod
          </Link>
        </div>
      </section>
    </main>
  );
}