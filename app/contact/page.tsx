import Ornament from "@/components/Ornament";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Atelier Kim Jansen",
  description: "Vraag de mogelijkheden aan. Vertel me wat je in gedachten hebt, ik antwoord persoonlijk.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Vertel me wat je in{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              gedachten hebt.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85]">
            Geen verkooppraat, geen automatisch antwoord. Ik lees alles zelf en
            kom binnen drie werkdagen bij je terug. Schrijf zoveel of zo
            weinig als comfortabel voelt.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-[var(--color-cream-50)] pb-24 md:pb-32">
        <div className="container-prose grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-start">
          {/* FORM */}
          <ContactForm />

          {/* INFO */}
          <aside className="space-y-10">
            <div>
              <Ornament variant="stem" className="w-20 h-7 mb-5" />
              <h2 className="display text-2xl mb-2">Of direct</h2>
              <ul className="space-y-3 text-[15px]">
                <li>
                  <span className="block eyebrow mb-1">Mail</span>
                  <a className="link-underline" href="mailto:info@atelierkimjansen.nl">
                    info@atelierkimjansen.nl
                  </a>
                </li>
                <li>
                  <span className="block eyebrow mb-1">Telefoon</span>
                  <a className="link-underline" href="tel:+31625145304">
                    06 2514 5304
                  </a>
                  <span className="block text-xs text-[var(--color-ink-mute)] mt-1">
                    Mensen mogen altijd bellen. Ben ik even niet bereikbaar, spreek mijn voicemail in en ik bel zo snel mogelijk terug.
                  </span>
                </li>
                <li>
                  <span className="block eyebrow mb-1">WhatsApp</span>
                  <WhatsAppButton
                    variant="inline"
                    label="Stuur Kim een WhatsApp"
                  />
                  <span className="block text-xs text-[var(--color-ink-mute)] mt-2">
                    Vaak het snelst, antwoord meestal binnen een dag.
                  </span>
                </li>
                <li>
                  <span className="block eyebrow mb-1">Social</span>
                  <div className="flex gap-4">
                    <a
                      className="link-underline"
                      href="https://instagram.com/atelier.kimjansen"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      className="link-underline"
                      href="https://tiktok.com/@atelierkimjansen"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TikTok
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-[var(--radius-lg)] p-6 bg-[var(--color-rose-50)] border border-[var(--color-rose-100)]">
              <h3 className="display text-xl mb-2">Wat gebeurt er na verzenden?</h3>
              <ol className="space-y-2 text-sm text-[var(--color-ink-soft)] list-decimal pl-4">
                <li>Binnen drie werkdagen krijg je een persoonlijk antwoord.</li>
                <li>We plannen een gesprek op een tijd die past.</li>
                <li>Vanaf daar gaat het zoals beschreven in de werkwijze.</li>
              </ol>
            </div>

            <div className="rounded-[var(--radius-lg)] p-6 bg-[var(--color-linen)] border border-[var(--color-taupe-100)]">
              <h3 className="display text-xl mb-2">Atelier</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                Mijn atelier is gevestigd bij mij thuis in Nederland. Adres op aanvraag. Dit is uitsluitend te bezoeken op afspraak.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
