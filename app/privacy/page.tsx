import Link from "next/link";

export const metadata = {
  title: "Privacyverklaring — Atelier Kim Jansen",
  description: "Hoe Atelier Kim Jansen omgaat met persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-24">
      <div className="container-prose max-w-3xl">
        <p className="eyebrow mb-5">Privacyverklaring</p>
        <h1 className="display text-4xl md:text-5xl mb-10 leading-[1.05]">
          Hoe ik met jouw gegevens omga.
        </h1>

        <div className="space-y-6 text-[1rem] leading-[1.85]">
          <p>
            Atelier Kim Jansen vindt jouw privacy belangrijk — ook omdat veel
            van wat je hier deelt persoonlijk en gevoelig is. Hieronder lees
            je in gewone taal hoe ik met je gegevens omga.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Wat ik bewaar</h2>
          <p>
            Naam, e-mail, telefoonnummer, en wat je in een bericht of in het
            gesprek met me deelt. Voor de boekhouding ook adres- en
            factureringsgegevens. Niets meer dan nodig.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Waarom</h2>
          <p>
            Om met je in contact te kunnen blijven over je opdracht, om de
            opdracht te kunnen uitvoeren, en om aan mijn wettelijke
            verplichtingen (zoals fiscale bewaartermijnen) te voldoen.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Hoe lang</h2>
          <p>
            Communicatie rond een opdracht bewaar ik twee jaar na oplevering.
            Boekhoudkundige gegevens zeven jaar (wettelijk verplicht). Daarna
            verwijder ik ze.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Foto's van je stuk</h2>
          <p>
            Ik maak foto's van wat ik maak voor mijn portfolio. Of ik die
            online deel, vraag ik altijd vooraf. Je mag nee zeggen, of vragen
            om naamsverandering. Foto's worden nooit verkocht of doorgegeven.
          </p>

          <h2 className="display text-2xl mt-10 mb-3">Jouw rechten</h2>
          <p>
            Je hebt het recht om je gegevens in te zien, te corrigeren of te
            laten verwijderen. Stuur een mail naar{" "}
            <a className="link-underline" href="mailto:hallo@atelierkimjansen.nl">
              hallo@atelierkimjansen.nl
            </a>{" "}
            en ik handel het binnen twee weken af.
          </p>

          <p className="mt-12 text-sm text-[var(--color-ink-mute)]">
            Laatst bijgewerkt: nog in te vullen door Kim. Heb je toch vragen?{" "}
            <Link href="/contact" className="link-underline">
              Neem contact op
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
