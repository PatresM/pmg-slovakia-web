"use client";

import { useState } from "react";

type Link = {
  href: string;
  label: string;
};

export default function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute left-0 right-0 top-full mt-3 grid gap-1 rounded-[1.5rem] bg-[#0a0e16] p-4 shadow-[0_14px_55px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base text-white/80 transition hover:bg-white/5 hover:text-[#d7b66f]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#d7b66f] px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-[#f0cf86] sm:hidden"
          >
            Získať ponuku
          </a>
        </nav>
      )}
    </div>
  );
}
