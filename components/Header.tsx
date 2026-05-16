"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/over", label: "Over Kim" },
  { href: "/producten", label: "Producten" },
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-cream-50)]/85 backdrop-blur-md border-b border-[var(--color-taupe-100)]/60">
      <div className="container-prose flex items-center justify-between py-5">
        <Logo size="md" />


        <nav className="hidden md:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] link-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">
            Vraag de mogelijkheden aan
          </Link>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-[var(--color-ink)]"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-taupe-100)]/60 bg-[var(--color-cream-50)]">
          <nav className="container-prose flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] border-b border-[var(--color-taupe-100)]/40 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary text-sm mt-4 self-start"
            >
              Vraag de mogelijkheden aan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
