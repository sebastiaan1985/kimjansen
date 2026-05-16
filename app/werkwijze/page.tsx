import Link from "next/link";
import Ornament from "@/components/Ornament";

export const metadata = {
  title: "Werkwijze — Atelier Kim Jansen",
  description: "Zo verloopt het proces: van het eerste gesprek tot het moment dat je het in handen hebt.",
};

const steps = [
  {
    n: "01",
    title: "Het eerste contact",
    sub: "Een formulier, een mail, een berichtje",
    body: "Het begint zoals jij wilt. Vul het formulier in, stuur een mail, app me via Instagram. Vertel zo veel of zo weinig als comfortabel voelt. Soms is dat een paar zinnen, soms een paar pagina's.",
    note: "Ik antwoord meestal binnen drie werkdagen — persoonlijk, geen autoreply.",
  },
  {
    n: "02",
    title: "Het gesprek",
    sub: "Bij jou, bij mij, of online",
    body: "Dit is het belangrijkste deel. We gaan zitten, met thee of koffie, en je vertelt. Over wie deze persoon was, of is. Over de kleding die voor je ligt. Over wat je hoopt, wat je vreest, wat je niet weet. Er is geen vragenlijst. Er is alleen tijd en ruimte.",
    note: "Het gesprek duurt meestal anderhalf tot twee uur. Bij jou thuis of in mijn atelier (Nederland). Online kan ook.",
  },
  {
    n: "03",
    title: "Jij kiest, of laat mij kiezen",
    sub: "Jasje, deken, kussen — of iets dat we samen ontdekken",
    body: "Vaak weet je al wat je wilt — een jasje van vaders overhemden, een deken van moeders blouses. Soms ook niet. Dan voelen we het samen. Het kan zelfs zijn dat we tijdens het gesprek tot iets anders komen dan waar je mee begon. Dat is geen probleem. Dat is precies hoe het hoort te gaan.",
  },
  {
    n: "04",
    title: "De stoffen komen naar mij",
    sub: "Voorzichtig, met aandacht",
    body: "Je stuurt de kleding op, of ik haal het bij je op. We maken duidelijke afspraken over wat er gebeurt met wat overblijft — sommige mensen willen alle restanten terug, anderen geven me toestemming om ze te gebruiken voor toekomstige werken.",
    note: "Alles wordt verzekerd verzonden. Knopen, labels, naamlabels — ik bewaar alles tot ik weet wat ik ermee doe.",
  },
  {
    n: "05",
    title: "Ik ga aan het werk",
    sub: "Geen voorbeeld vooraf, en daar is een reden voor",
    body: "Vanaf hier wordt het stil. Ik laat geen schetsen zien, geen mood boards, geen tussenfoto's. Niet omdat ik geheimzinnig wil doen — maar omdat het maakproces vrij moet zijn. Een ontwerp vooraf legt vast wat juist moet kunnen ademen. Ik werk vanuit wat het gesprek heeft achtergelaten, en uit de stoffen die voor me liggen. Vertrouwen is wat je hier geeft. Aandacht is wat je terugkrijgt.",
    note: "Wachttijd: meestal vier tot acht weken. Bij grotere stukken soms langer. Ik hou je op de hoogte van waar ik sta — alleen niet hoe het eruit gaat zien.",
  },
  {
    n: "06",
    title: "Het komt thuis",
    sub: "Persoonlijk, ingepakt met aandacht",
    body: "Wanneer het klaar is, hoor je het. We spreken af of je het komt halen of dat ik het opstuur. Het wordt ingepakt zoals het bedoeld is om geopend te worden — niet alsof het uit een webshop komt. Vaak schrijf ik er een korte notitie bij over wat ik in het gesprek heb meegenomen.",
  },
];

export default function WerkwijzePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Werkwijze</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Zes stappen, en{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              een hoop vertrouwen.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85]">
            Dit is hoe het gaat — van het allereerste berichtje tot het moment
            dat je het in je handen hebt. Er zit geen haast in. Er zit geen
            opdringerigheid in. Er zit vooral veel luisteren in.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[var(--color-cream-50)] pb-24 md:pb-32">
        <div className="container-prose">
          <ol className="relative">
            <span className="hidden md:block absolute left-[58px] top-12 bottom-12 w-px bg-[var(--color-taupe-100)]" aria-hidden />
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-b border-[var(--color-taupe-100)]/60 last:border-b-0"
              >
                <div className="relative">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-cream-50)] border border-[var(--color-taupe-100)] display text-2xl text-[var(--color-ink)] relative z-10">
                    {s.n}
                  </span>
                </div>
                <div className="max-w-2xl">
                  <p className="eyebrow mb-2">{s.sub}</p>
                  <h2 className="display text-2xl md:text-4xl mb-5 leading-[1.1]">{s.title}</h2>
                  <p className="leading-[1.85]">{s.body}</p>
                  {s.note && (
                    <p className="mt-5 pl-5 border-l-2 border-[var(--color-rose-200)] text-[14px] italic text-[var(--color-ink-mute)]">
                      {s.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST EXPLANATION */}
      <section className="bg-[var(--color-ink)] text-[var(--color-cream-50)] py-24 md:py-32">
        <div className="container-prose grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
          <div>
            <Ornament variant="stem" className="w-24 h-8 mb-6" color="var(--color-rose-200)" />
            <p className="eyebrow text-[var(--color-rose-200)] mb-4">Waarom geen ontwerp vooraf</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05] text-[var(--color-cream-50)]">
              Een uitleg, geen verdediging.
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-[1.85] text-[var(--color-cream-100)]/85">
            <p>
              Ik snap dat het ongebruikelijk is. Je geeft me kleding die niet
              te vervangen is, je betaalt vooraf een aanbetaling, en ik laat
              je niet zien wat ik aan het maken ben. Dat vraagt iets.
            </p>
            <p>
              Maar in de jaren dat ik dit doe, heb ik gemerkt: zodra ik een
              schets laat zien, gaat het mis. Niet omdat de schets niet
              klopte, maar omdat een ontwerp vooraf de eindigheid vasthoudt.
              Het haalt het ademen weg. Het maakt van een herinnering een
              product.
            </p>
            <p>
              In het gesprek vertel je me wat ik moet weten. Welke kleur ze
              droeg op haar bruiloft. Het overhemd waarin hij in zijn tuin
              zat. De broek die je liever niet ziet. Dat zit allemaal in mijn
              hoofd als ik werk. Niet als een opdracht — als een richting.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] italic text-xl text-[var(--color-rose-100)]">
              &ldquo;Je krijgt geen verrassing — je krijgt wat ik van het
              gesprek heb meegenomen.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream-50)] py-24 md:py-32">
        <div className="container-prose">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Veelgestelde vragen</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Wat mensen vaak willen weten.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
            {[
              {
                q: "Wat als ik toch graag iets vooraf wil zien?",
                a: "Dat snap ik. We kunnen samen voorbeelden bekijken van eerder werk, om een gevoel te krijgen van mijn stijl. Maar voor het specifieke stuk dat ik voor jou maak — daarvan zie je het eindresultaat als eerste.",
              },
              {
                q: "Kun je werken met heel beperkte kleding?",
                a: "Ja. Ik heb stukken gemaakt van één overhemd. Of van een paar T-shirts. Soms maakt minder het juist mooier — er is dan ruimte voor andere stof eromheen.",
              },
              {
                q: "Wat als ik het niet mooi vind?",
                a: "Dat is zeldzaam — bijna iedereen heeft een reactie die voorbij 'mooi' gaat. Maar als het echt niet werkt voor jou, praten we erover. Sommige dingen kunnen we aanpassen.",
              },
              {
                q: "Hoe zit het met aanbetaling en eigendom?",
                a: "Bij opdracht betaal je 30% aanbetaling. De rest bij oplevering. De originele kleding die je opstuurt blijft van jou — alleen wat ik erin verwerk, wordt onderdeel van het nieuwe stuk.",
              },
              {
                q: "Werk je ook voor mensen die nog leven?",
                a: "Zeker. Een jasje van je eigen vroegere kleding, een deken voor een nieuwgeboren kleinkind, een sjaal als afscheidscadeau bij pensioen — al die verhalen zijn welkom.",
              },
              {
                q: "Hoe ver in Nederland kom je voor een gesprek?",
                a: "Voor het kennismakingsgesprek kom ik in heel Nederland langs. Reistijd vanaf een uur bereken ik tegen onkostenvergoeding. Online werkt ook vaak prima.",
              },
            ].map((f) => (
              <div key={f.q}>
                <h3 className="display text-xl mb-3">{f.q}</h3>
                <p className="text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-28">
        <div className="container-prose text-center">
          <h2 className="display text-3xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Klaar voor stap één?
          </h2>
          <p className="mt-5 max-w-xl mx-auto">
            Het eerste contact is altijd vrijblijvend. Vertel me wat je in
            gedachten hebt — ik antwoord persoonlijk.
          </p>
          <Link href="/contact" className="btn btn-primary mt-10 text-base px-8 py-4">
            Vraag de mogelijkheden aan
          </Link>
        </div>
      </section>
    </>
  );
}
