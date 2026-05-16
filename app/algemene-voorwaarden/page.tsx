import Link from "next/link";

export const metadata = {
  title: "Algemene voorwaarden — Atelier Kim Jansen",
  description: "De afspraken bij een opdracht aan Atelier Kim Jansen.",
};

export default function AVPage() {
  return (
    <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-24">
      <div className="container-prose max-w-3xl">
        <p className="eyebrow mb-5">Algemene voorwaarden</p>
        <h1 className="display text-4xl md:text-5xl mb-10 leading-[1.05]">
          De afspraken tussen jou en mij.
        </h1>

        <div className="space-y-6 text-[1rem] leading-[1.85]">
          <p className="italic text-[var(--color-ink-mute)]">
            Deze tekst is een werkversie. De definitieve algemene voorwaarden
            worden door Kim met juridisch advies vastgesteld voordat de eerste
            opdracht via deze site wordt aangenomen.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Een opdracht starten</h2>
          <p>
            Na het kennismakingsgesprek krijg je een offerte. Een opdracht
            start zodra je akkoord geeft op de offerte en de aanbetaling van
            30% hebt voldaan.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Aanbetaling en eindbetaling</h2>
          <p>
            30% bij aanvang, het resterende bedrag bij oplevering. Voor
            opdrachten boven € 300 is betaling in twee of drie termijnen in
            overleg mogelijk.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Materialen</h2>
          <p>
            De kleding die je opstuurt of overhandigt blijft eigendom van jou.
            Wat ik in het eindproduct verwerk wordt onderdeel van het stuk.
            Restanten retourneer ik, tenzij anders afgesproken.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Wachttijd</h2>
          <p>
            Gangbaar vier tot acht weken na het gesprek. Bij vertraging hou ik
            je op de hoogte. Spoed kan in uitzonderlijke gevallen besproken
            worden.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Annulering</h2>
          <p>
            Tot 14 dagen na akkoord op de offerte kun je kosteloos annuleren
            (mits ik nog niet ben begonnen). Daarna verreken ik de tot dan toe
            gemaakte uren en materiaalkosten.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Aansprakelijkheid</h2>
          <p>
            Ik werk zorgvuldig met onvervangbare materialen, maar kan geen
            absolute garantie geven. Bij verlies of beschadiging tijdens
            transport: zie verzekering. Voor schade tijdens het maakproces ben
            ik aansprakelijk tot het bedrag van de opdracht.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Reparatie en aftercare</h2>
          <p>
            Levenslange gratis reparatie bij normale slijtage. Verzendkosten
            voor jouw rekening, verwerking voor mijn rekening.
          </p>

          <p className="mt-12 text-sm text-[var(--color-ink-mute)]">
            Vragen?{" "}
            <Link href="/contact" className="link-underline">
              Stel ze gerust
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
