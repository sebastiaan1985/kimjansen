import Ornament from "@/components/Ornament";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact — Atelier Kim Jansen",
  description: "Vraag de mogelijkheden aan. Vertel me wat je in gedachten hebt — ik antwoord persoonlijk.",
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
          <form
            method="post"
            action="#"
            className="bg-white/70 backdrop-blur-sm border border-[var(--color-taupe-100)] rounded-[var(--radius-lg)] p-8 md:p-12 shadow-[var(--shadow-soft)] space-y-7"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Je naam" name="name" required />
              <Field label="E-mail" name="email" type="email" required />
            </div>
            <Field label="Telefoon (optioneel)" name="phone" type="tel" />

            <FieldSelect
              label="Wat heb je in gedachten?"
              name="product"
              options={[
                "Een herinneringsjasje",
                "Een herinneringsdeken",
                "Een herinneringskussen",
                "Een sjaal",
                "Iets anders / weet ik nog niet",
              ]}
            />

            <FieldTextarea
              label="Vertel me iets meer"
              hint="Voor wie? Welke kleding heb je in gedachten? Schrijf gerust een paar zinnen of een hele bladzijde — wat goed voelt."
              name="message"
              rows={6}
              required
            />

            <FieldSelect
              label="Voorkeur voor het gesprek"
              name="preference"
              options={[
                "Bij mij in het atelier",
                "Bij mij thuis (op bezoek)",
                "Online (videogesprek)",
                "Telefonisch eerst",
                "Maakt niet uit",
              ]}
            />

            <div className="flex items-start gap-3 text-sm">
              <input
                id="privacy"
                type="checkbox"
                required
                className="mt-1 w-4 h-4 rounded border-[var(--color-taupe-200)] accent-[var(--color-rose-300)]"
              />
              <label htmlFor="privacy" className="text-[var(--color-ink-soft)]">
                Ik ga ermee akkoord dat Kim mijn gegevens gebruikt om contact
                op te nemen. Ze worden niet gedeeld.
              </label>
            </div>

            <div className="pt-2">
              <button type="submit" className="btn btn-primary w-full sm:w-auto text-base px-8 py-4">
                Verstuur — vraag de mogelijkheden aan
              </button>
              <p className="mt-4 text-xs text-[var(--color-ink-mute)]">
                Liever bellen of appen? Geen probleem — gebruik{" "}
                <a href="tel:+31610137351" className="link-underline">
                  06 — 1013 7351
                </a>{" "}
                of de WhatsApp-knop hiernaast.
              </p>
            </div>
          </form>

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
                  <a className="link-underline" href="tel:+31610137351">
                    06 — 1013 7351
                  </a>
                  <span className="block text-xs text-[var(--color-ink-mute)] mt-1">
                    Ma–vr, 09–17u. Op andere momenten gerust een berichtje.
                  </span>
                </li>
                <li>
                  <span className="block eyebrow mb-1">WhatsApp</span>
                  <WhatsAppButton
                    variant="inline"
                    label="Stuur Kim een WhatsApp"
                  />
                  <span className="block text-xs text-[var(--color-ink-mute)] mt-2">
                    Vaak het snelst — antwoord meestal binnen een dag.
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
                <li>Ik lees je bericht — meestal dezelfde dag.</li>
                <li>Binnen drie werkdagen krijg je een persoonlijk antwoord.</li>
                <li>We plannen een gesprek op een tijd die past.</li>
                <li>Vanaf daar gaat het zoals beschreven in de werkwijze.</li>
              </ol>
            </div>

            <div className="rounded-[var(--radius-lg)] p-6 bg-[var(--color-linen)] border border-[var(--color-taupe-100)]">
              <h3 className="display text-xl mb-2">Atelier</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                Nederland — adres op aanvraag<br />
                Op afspraak welkom op woensdag en zaterdag.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-taupe-100)] bg-white/80 px-4 py-3 text-[15px] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-200)] focus:border-transparent transition"
      />
    </label>
  );
}

function FieldSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-taupe-100)] bg-white/80 px-4 py-3 text-[15px] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-200)] transition"
      >
        <option value="" disabled>
          Maak een keuze…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({
  label,
  hint,
  name,
  rows = 5,
  required = false,
}: {
  label: string;
  hint?: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && " *"}</span>
      {hint && (
        <span className="block text-xs text-[var(--color-ink-mute)] mb-3 leading-relaxed">
          {hint}
        </span>
      )}
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-taupe-100)] bg-white/80 px-4 py-3 text-[15px] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-200)] focus:border-transparent transition resize-y"
      />
    </label>
  );
}
