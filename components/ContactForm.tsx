"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwvdwbbe");

  if (state.succeeded) {
    return (
      <div className="bg-white/70 backdrop-blur-sm border border-[var(--color-taupe-100)] rounded-[var(--radius-lg)] p-8 md:p-12 shadow-[var(--shadow-soft)] flex flex-col items-center justify-center text-center min-h-[320px]">
        <svg
          className="w-16 h-16 text-[var(--color-rose-300)] mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="display text-2xl mb-3">Dankjewel!</h2>
        <p className="text-[var(--color-ink-soft)] max-w-sm leading-relaxed">
          Je bericht is verstuurd. Ik lees alles zelf en kom binnen drie
          werkdagen bij je terug.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-sm border border-[var(--color-taupe-100)] rounded-[var(--radius-lg)] p-8 md:p-12 shadow-[var(--shadow-soft)] space-y-7"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Je naam" name="name" required />
        <div>
          <Field label="E-mail" name="email" type="email" required />
          <ValidationError
            prefix="E-mail"
            field="email"
            errors={state.errors}
            className="text-red-600 text-xs mt-1"
          />
        </div>
      </div>

      <Field label="Telefoon (optioneel)" name="phone" type="tel" />

      <FieldSelect
        label="Wat heb je in gedachten?"
        name="product"
        options={[
          "Herinneringsdeken",
          "Kussen",
          "Jasje",
          "Tas",
        ]}
      />

      <div>
        <FieldTextarea
          label="Vertel me iets meer"
          hint="Voor wie? Welke kleding heb je in gedachten? Schrijf gerust een paar zinnen of een hele bladzijde, wat goed voelt."
          name="message"
          rows={6}
          required
        />
        <ValidationError
          prefix="Bericht"
          field="message"
          errors={state.errors}
          className="text-red-600 text-xs mt-1"
        />
      </div>

      <FieldSelect
        label="Voorkeur voor het gesprek"
        name="preference"
        options={[
          "Bij jou thuis",
          "Bij mij thuis",
          "Online",
          "Telefonisch eerst",
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
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary w-full sm:w-auto text-base px-8 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting
            ? "Bezig met versturen…"
            : "Verstuur, vraag de mogelijkheden aan"}
        </button>
        <p className="mt-4 text-xs text-[var(--color-ink-mute)]">
          Liever bellen of appen? Geen probleem, gebruik{" "}
          <a href="tel:+31625145304" className="link-underline">
            06 2514 5304
          </a>{" "}
          of de WhatsApp-knop hiernaast.
        </p>
      </div>
    </form>
  );
}

/* ── Sub-components (private to this file) ────────────────────────── */

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
