import Link from "next/link";
import Ornament from "@/components/Ornament";

export default function NotFound() {
  return (
    <section className="bg-[var(--color-cream-50)] py-32 md:py-44">
      <div className="container-prose text-center max-w-2xl">
        <Ornament variant="stem" className="w-24 h-8 mx-auto mb-10" />
        <p className="eyebrow mb-5">Niets gevonden</p>
        <h1 className="display text-4xl md:text-6xl leading-[1.05]">
          Deze pagina is{" "}
          <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
            er niet (meer).
          </em>
        </h1>
        <p className="mt-8 leading-[1.85]">
          Soms verdwijnen dingen. Soms blijven ze, in een andere vorm. Wat je
          zocht, kan ik niet meer voor je openen — maar de andere pagina's
          staan voor je open.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Terug naar de startpagina
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
