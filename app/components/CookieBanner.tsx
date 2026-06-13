"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-6KX27T9W8G";

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("pmg_cookie_consent");
    setConsent(savedConsent);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("pmg_cookie_consent", "accepted");
    setConsent("accepted");
  };

  const rejectOptional = () => {
    localStorage.setItem("pmg_cookie_consent", "necessary");
    setConsent("necessary");
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-5 left-1/2 z-[9999] w-[92%] max-w-4xl -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[#05070c]/95 p-6 text-white shadow-[0_25px_90px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7b66f]">
                Cookies
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Používame cookies
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Používame nevyhnutné cookies na fungovanie webu a analytické
                cookies na meranie návštevnosti pomocou Google Analytics.
                Analytické cookies spustíme iba po vašom súhlase.
              </p>

              <a
                href="/cookies"
                className="mt-3 inline-flex text-sm text-[#d7b66f] underline underline-offset-4"
              >
                Viac informácií o cookies
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <button
                onClick={acceptAll}
                className="rounded-full bg-[#d7b66f] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#f0cf86]"
              >
                Prijať všetko
              </button>

              <button
                onClick={rejectOptional}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Len nevyhnutné
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}