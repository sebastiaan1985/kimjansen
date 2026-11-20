import Link from "next/link";

export const metadata = {
  title: "Algemene voorwaarden — Atelier Kim Jansen",
  description: "De afspraken bij een opdracht aan Atelier Kim Jansen.",
};

const articles: { title: string; paragraphs: string[] }[] = [
  {
    title: "Artikel 1: Toepasselijkheid",
    paragraphs: [
      "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, opdrachten en overeenkomsten van Atelier Kim Jansen.",
      "Door het verstrekken van een opdracht gaat de opdrachtgever akkoord met deze algemene voorwaarden.",
    ],
  },
  {
    title: "Artikel 2: Persoonlijk contact en opdracht",
    paragraphs: [
      "Iedere opdracht begint met een persoonlijk gesprek. Tijdens dit gesprek bespreken we de herinneringen, de betekenis van de kleding en de wensen van de opdrachtgever.",
      "Op basis daarvan bekijken we samen welk herinneringsproduct passend is en wat de mogelijkheden zijn.",
      "Een opdracht komt tot stand nadat de afspraken zijn besproken en bevestigd. De opdracht gaat daadwerkelijk van start zodra de kleding aan Atelier Kim Jansen is overgedragen.",
    ],
  },
  {
    title: "Artikel 3: Ontwerp, creatieve werkwijze en auteursrecht",
    paragraphs: [
      "Elk herinneringsproduct wordt met de hand en op persoonlijke wijze ontworpen en gemaakt. De opdrachtgever vertrouwt Atelier Kim Jansen de creatieve uitwerking toe, waarbij rekening wordt gehouden met de besproken wensen en mogelijkheden.",
      "Vooraf wordt geen uitgewerkte schets of proefmodel gemaakt, uiteraard kunnen wensen doorgegeven worden en deze zullen uitgevoerd worden. Ook worden er tijdens het maakproces geen tussentijdse voorbeelden of updates verstrekt. De opdrachtgever vertrouwt op de creatieve werkwijze en het vakmanschap van Atelier Kim Jansen.",
      "Alle originele ontwerpen, patronen, creatieve uitwerkingen en andere werken die door Atelier Kim Jansen zijn ontwikkeld of gemaakt, blijven eigendom van Atelier Kim Jansen, voor zover deze wettelijk beschermd zijn.",
      "Het is niet toegestaan om deze ontwerpen, patronen of creatieve uitwerkingen zonder voorafgaande schriftelijke toestemming geheel of gedeeltelijk te kopiëren, na te maken, te verspreiden of commercieel te gebruiken.",
      "Het door de opdrachtgever bestelde en betaalde herinneringsproduct mag uiteraard voor eigen gebruik worden gebruikt.",
    ],
  },
  {
    title: "Artikel 4: Aangeleverde kleding",
    paragraphs: [
      "De opdrachtgever levert de kleding aan die gebruikt wordt voor het herinneringsproduct.",
      "Atelier Kim Jansen gaat zorgvuldig met de kleding om. Vooraf wordt besproken welke kledingstukken en details geschikt zijn om te verwerken.",
      "De staat, samenstelling en eigenschappen van de aangeleverde kleding kunnen invloed hebben op het eindresultaat. Atelier Kim Jansen kan niet garanderen dat ieder kledingstuk of ieder detail behouden kan blijven.",
      "Kleding die niet wordt gebruikt, wordt na afronding van de opdracht netjes aan de opdrachtgever teruggegeven.",
    ],
  },
  {
    title: "Artikel 5: Prijzen en betaling",
    paragraphs: [
      "De prijzen worden vooraf besproken en vastgelegd. De prijs is afhankelijk van het gekozen product, het formaat en de hoeveelheid en bewerkelijkheid van de kleding.",
      "De betaling vindt plaats in twee delen: 50% bij aanvang van de opdracht en de resterende 50% bij afronding, vóór of bij de overhandiging van het herinneringsproduct.",
      "De vermelde prijzen zijn totaalprijzen. Hierbij zijn alle werkzaamheden en materialen inbegrepen die nodig zijn voor de afgesproken opdracht. Dit geldt ook voor het persoonlijke intakegesprek vooraf, het samen bespreken en bepalen van het ontwerp, de verwerking van de kleding en het afrondende gesprek bij de overhandiging van het herinneringsproduct. Er worden hiervoor geen afzonderlijke kosten in rekening gebracht.",
      "Wanneer een opdrachtgever een product of uitvoering wenst die niet binnen het bestaande aanbod of de vermelde prijzen valt, worden de mogelijkheden en de bijbehorende prijs in overleg besproken. De prijs wordt voorafgaand aan de opdracht samen vastgesteld en bevestigd. Er worden geen aanvullende werkzaamheden of kosten in rekening gebracht zonder voorafgaand overleg en akkoord van de opdrachtgever.",
    ],
  },
  {
    title: "Artikel 6: Uitvoering en levertijd",
    paragraphs: [
      "Ieder herinneringsproduct wordt met de hand gemaakt. De benodigde tijd verschilt per opdracht en is afhankelijk van het product, de hoeveelheid kleding en de bewerking.",
      "De verwachte levertijd wordt vooraf besproken. Omdat het om handwerk en persoonlijke opdrachten gaat, kan de daadwerkelijke levertijd afwijken.",
      "Wanneer er sprake is van een vertraging, wordt de opdrachtgever hierover geïnformeerd.",
    ],
  },
  {
    title: "Artikel 7: Annuleren van een opdracht",
    paragraphs: [
      "Omdat ieder herinneringsproduct speciaal op verzoek wordt gemaakt, is annuleren nadat de werkzaamheden zijn gestart niet zonder gevolgen mogelijk.",
      "Bij annulering worden de reeds gemaakte kosten en de uitgevoerde werkzaamheden in rekening gebracht. Wanneer de opdracht al grotendeels of volledig is uitgevoerd, kan het volledige afgesproken bedrag verschuldigd zijn.",
      "Eventuele bijzonderheden worden in overleg besproken.",
    ],
  },
  {
    title: "Artikel 8: Verzending en overdracht",
    paragraphs: [
      "De kleding en het uiteindelijke herinneringsproduct kunnen in overleg persoonlijk worden overgedragen of verzonden.",
      "Wanneer verzending wordt afgesproken, wordt de kleding en het eindproduct zorgvuldig verpakt.",
      "Eventuele verzendkosten worden vooraf besproken. Bij verzending wordt gebruikgemaakt van een passende verzendmethode.",
    ],
  },
  {
    title: "Artikel 9: Zorgvuldigheid en verantwoordelijkheid",
    paragraphs: [
      "Atelier Kim Jansen gaat met aandacht en zorg om met de aangeleverde kleding en de persoonlijke betekenis ervan.",
      "De opdrachtgever begrijpt dat het verwerken van gedragen kleding bepaalde risico's met zich meebrengt. Denk hierbij aan slijtage, kwetsbare stoffen, verkleuringen, oude naden of eerder aanwezige beschadigingen.",
      "Atelier Kim Jansen kan niet aansprakelijk worden gesteld voor gebreken die al aanwezig waren in de aangeleverde kleding en die tijdens het verwerken zichtbaar worden of invloed hebben op het eindresultaat.",
    ],
  },
  {
    title: "Artikel 10: Klachten",
    paragraphs: [
      "Is de opdrachtgever niet tevreden over het eindresultaat of zijn er vragen over de uitgevoerde opdracht? Dan wordt gevraagd dit zo snel mogelijk na ontvangst kenbaar te maken.",
      "Atelier Kim Jansen bespreekt de klacht persoonlijk en kijkt samen met de opdrachtgever naar een passende oplossing.",
    ],
  },
  {
    title: "Artikel 11: Reparatie en garantie",
    paragraphs: [
      "Atelier Kim Jansen biedt levenslange kosteloze reparatie bij gebreken die aantoonbaar zijn ontstaan door de manier waarop het herinneringsproduct is gemaakt.",
      "Hieronder vallen bijvoorbeeld een losgeraakte naad, een los stiksel of een onderdeel dat door een productiefout is losgekomen.",
      "Bij schade door gebruik, wassen, slijtage, ongelukken of huisdieren valt reparatie niet onder deze kosteloze regeling. In overleg wordt bekeken of herstel mogelijk is. Eventuele kosten worden vooraf besproken.",
    ],
  },
  {
    title: "Artikel 12: Foto's en persoonlijke verhalen",
    paragraphs: [
      "Atelier Kim Jansen kan tijdens of na het maakproces foto's maken van het herinneringsproduct en het creatieve proces.",
      "Het delen van foto's, persoonlijke verhalen of informatie over een opdracht op de website, sociale media of in andere publicaties gebeurt uitsluitend na voorafgaande uitdrukkelijke toestemming van de opdrachtgever.",
      "De opdrachtgever is vrij om hiervoor wel of geen toestemming te geven. Dit heeft geen invloed op de uitvoering van de opdracht.",
    ],
  },
  {
    title: "Artikel 13: Privacy en vertrouwelijkheid",
    paragraphs: [
      "Atelier Kim Jansen gaat zorgvuldig om met persoonlijke gegevens en informatie die tijdens gesprekken of gedurende de opdracht wordt gedeeld.",
      "Persoonlijke informatie, gespreksnotities en foto's van de opdrachtgever worden alleen bewaard wanneer daarvoor toestemming is gegeven of wanneer dit noodzakelijk is voor de uitvoering van de opdracht of een wettelijke verplichting.",
      "Gegevens worden niet zonder toestemming met derden gedeeld, tenzij dit noodzakelijk is voor de uitvoering van de opdracht of wettelijk verplicht is.",
      "Voor meer informatie wordt verwezen naar de privacyverklaring op de website van Atelier Kim Jansen.",
    ],
  },
  {
    title: "Artikel 14: Verschillen van inzicht en toepasselijk recht",
    paragraphs: [
      "Wanneer er tijdens of na de opdracht een verschil van inzicht ontstaat, proberen Atelier Kim Jansen en de opdrachtgever dit eerst samen en in goed overleg op te lossen.",
      "Op alle opdrachten en overeenkomsten is Nederlands recht van toepassing.",
    ],
  },
];

export default function AVPage() {
  return (
    <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-24">
      <div className="container-prose max-w-3xl">
        <p className="eyebrow mb-5">Algemene voorwaarden</p>
        <h1 className="display text-4xl md:text-5xl mb-4 leading-[1.05]">
          Algemene voorwaarden Atelier Kim Jansen
        </h1>
        <p className="mb-10 text-sm font-semibold text-[var(--color-ink-mute)]">
          Versie: november 2026
        </p>

        <div className="space-y-6 text-[1rem] leading-[1.85]">
          {articles.map((a) => (
            <div key={a.title} className="space-y-4">
              <h2 className="display text-2xl mt-10 mb-3">{a.title}</h2>
              {a.paragraphs.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          ))}

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
