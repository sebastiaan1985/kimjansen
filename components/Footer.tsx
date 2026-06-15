import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--color-taupe-100)]/60 bg-[var(--color-cream-100)]">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-5">
            <Logo size="md" href={null} />
          </div>
          <p className="max-w-sm text-sm">
            Met liefde gemaakte herinneringsproducten. Van geliefde kleding
            maken we iets om vast te houden — voor jou, of voor degene die
            achterblijft.
          </p>
          <p className="mt-6 font-[family-name:var(--font-caveat)] text-2xl text-[var(--color-sage-300)]">
            Wat blijft, draag je.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Op deze site</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/over" className="link-underline">Over Kim</Link></li>
            <li><Link href="/producten" className="link-underline">Producten</Link></li>
            <li><Link href="/werkwijze" className="link-underline">Werkwijze</Link></li>
            <li><Link href="/portfolio" className="link-underline">Portfolio</Link></li>
            <li><Link href="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:info@atelierkimjansen.nl" className="link-underline">
                info@atelierkimjansen.nl
              </a>
            </li>
            <li>
              <a href="tel:+31625145304" className="link-underline">
                06 — 2514 5304
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/31625145304?text=Hoi%20Kim%2C%20ik%20heb%20een%20vraag"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline"
              >
                Stuur een WhatsApp
              </a>
            </li>
            <li className="pt-2 flex gap-4">
              <a
                href="https://instagram.com/atelier.kimjansen"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@atelierkimjansen"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-taupe-100)]/60">
        <div className="container-prose py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-[var(--color-ink-mute)]">
          <p>© {year} Atelier Kim Jansen. Alle rechten voorbehouden.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/privacy" className="link-underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/algemene-voorwaarden" className="link-underline">
                Algemene voorwaarden
              </Link>
            </li>
            <li>KvK 42062034 · BTW NL005467109B21</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
