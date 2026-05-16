import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import Ornament from "@/components/Ornament";

export const metadata = {
  title: "Producten — Atelier Kim Jansen",
  description: "Herinneringsjasjes, dekens, kussens, sjaals en maatwerk. Een overzicht van wat ik maak.",
};

const products = [
  {
    title: "Herinneringsjasjes",
    sub: "Spijker · leer · katoen",
    tone: "rose" as const,
    pattern: "botanical" as const,
    body: "Een jasje gemaakt van of met kleding van iemand die er niet meer is. Of een jasje voor jezelf, met daarin stof, knopen, voering die een verhaal dragen. Spijkerjasje, blazer, bomber — wat past bij wie het gaat dragen.",
    details: ["Maatwerk in jouw maat", "Geborduurde details mogelijk", "Knopen, labels of zakken van de originele kleding"],
    price: "vanaf € 295",
  },
  {
    title: "Herinneringsdekens",
    sub: "Quilt · patchwork · gevoerd",
    tone: "sage" as const,
    pattern: "weave" as const,
    body: "Een deken waarin alle kleding samenkomt. Overhemden van vader, blouses van moeder, T-shirts van een broer — een patchwork dat onder je armen past, in de auto, op de bank. Zacht gevoerd, met aandacht voor de naden.",
    details: ["Tafelkleedformaat tot 2-persoonsformaat", "Achterzijde in egale stof of fleece", "Eventueel handgeborduurde naam of datum"],
    price: "vanaf € 425",
  },
  {
    title: "Herinneringskussens",
    sub: "Klein · dichtbij · zacht",
    tone: "taupe" as const,
    pattern: "stitch" as const,
    body: "Een kussen om aan vast te houden. Vaak gemaakt van één bijzonder kledingstuk — een lievelingsblouse, een trui die nog naar hem rook. Kleiner formaat, met aandacht voor het detail. Soms met een knoop van het origineel.",
    details: ["35×35 of 45×45 cm", "Met of zonder vulling", "Originele knoop of zak verwerkt"],
    price: "vanaf € 145",
  },
  {
    title: "Herinneringssjaals",
    sub: "Om je heen · mee te nemen",
    tone: "cream" as const,
    pattern: "flower" as const,
    body: "Iets om om je schouders te slaan in de auto, op het werk, op een dag dat het zwaar is. Lichter dan een deken, dichterbij dan een jasje. Vaak gemaakt van zachtere stoffen — overhemden van katoen, blouses van zijde.",
    details: ["Smal of breed model", "Eventueel met handgenaaide rand", "Geschikt voor dagelijks dragen"],
    price: "vanaf € 175",
  },
];

export default function ProductenPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Wat ik maak</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Vier vormen. En alles wat{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              daarnaast nog mogelijk is.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85]">
            Dit zijn de producten waar de meeste gesprekken bij beginnen. Maar
            het kan ook iets anders worden — een wandkleed, een tas, een
            babydeken voor een kleinkind dat oma nooit heeft gekend. In het
            gesprek voelen we wat past.
          </p>
        </div>
      </section>

      <div className="container-prose">
        <div className="divider-stitched" />
      </div>

      {/* PRODUCT BLOCKS */}
      <section className="bg-[var(--color-cream-50)] pt-16 md:pt-24 pb-12">
        <div className="container-prose space-y-24 md:space-y-32">
          {products.map((p, i) => (
            <article
              key={p.title}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImageCard tone={p.tone} pattern={p.pattern} aspect="wide" />
              </div>
              <div>
                <p className="eyebrow mb-3">{p.sub}</p>
                <h2 className="display text-3xl md:text-4xl leading-[1.05] mb-5">
                  {p.title}
                </h2>
                <p className="leading-[1.85] mb-6">{p.body}</p>
                <ul className="space-y-2 mb-6">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--color-rose-300)] shrink-0" />
                      <span className="text-[var(--color-ink-soft)]">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-taupe-100)]">
                  <span className="font-[family-name:var(--font-cormorant)] italic text-xl text-[var(--color-ink)]">
                    {p.price}
                  </span>
                  <Link href="/contact" className="link-underline text-sm tracking-wide">
                    Bespreek de mogelijkheden →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MAATWERK */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-32 mt-16">
        <div className="container-prose">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
            <div>
              <Ornament variant="flourish" className="w-16 h-16 mb-6" />
              <p className="eyebrow mb-4">Iets anders in gedachten?</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                Niet elk verhaal past in vier vormen.
              </h2>
            </div>
            <div className="space-y-5 text-[1.05rem] leading-[1.85]">
              <p>
                Een tas die jouw moeder gemaakt zou kunnen hebben. Een
                wandkleed boven het bed van je vader. Een babydeken voor een
                kleinkind dat hem nooit zal kennen. Een kostuum dat je opa
                droeg, omgevormd tot iets dat zijn dochter kan dragen.
              </p>
              <p>
                Alles wat van stof gemaakt kan worden, valt te bespreken. Soms
                weet ik vooraf wat het wordt, soms ontdek ik het pas in het
                gesprek. Vertel me wat je in gedachten hebt — of wat je nog
                niet kunt benoemen.
              </p>
              <Link href="/contact" className="btn btn-primary mt-4">
                Vraag de mogelijkheden aan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZORG & GARANTIE — promises that matter to grieving customers */}
      <section className="bg-[var(--color-sage-50)] py-24 md:py-28">
        <div className="container-prose">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Zorg & garantie</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Vier beloftes die ik{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                altijd nakom.
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Verzekerd verzonden",
                body: "Kleding die je opstuurt is onvervangbaar. Ik regel verzekerd transport — bij verlies of schade compenseer ik tot de werkelijke (emotionele) waarde voor zover dat überhaupt mogelijk is.",
              },
              {
                title: "Restanten in jouw hand",
                body: "Wat ik niet verwerk krijg je terug — in een doos, netjes gevouwen. Wil je dat ik restanten bewaar voor eventueel later werk? Ook prima. Jij beslist.",
              },
              {
                title: "Levenslange reparatie",
                body: "Slijtage hoort erbij — bij kleding én herinneringen. Een losse zoom, een vastgenaaide knoop, een gebroken steek: stuur op, ik herstel het zonder kosten.",
              },
              {
                title: "Verzorgingsgids",
                body: "Bij elk stuk een handgeschreven kaart met wasvoorschriften en bewaartips, zodat het blijft wat het bedoeld is om te zijn — iets dat met je meegaat door de jaren.",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-[var(--radius-lg)] bg-[var(--color-cream-50)] border border-[var(--color-taupe-100)] p-6"
              >
                <div className="w-9 h-9 rounded-full bg-[var(--color-sage-100)] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-sage-300)]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="display text-xl mb-2">{p.title}</h3>
                <p className="text-[14px] leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOTITIE */}
      <section className="bg-[var(--color-cream-50)] py-20">
        <div className="container-prose max-w-3xl">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-taupe-100)] bg-[var(--color-linen)] p-8 md:p-10">
            <p className="eyebrow mb-3">Goed om te weten</p>
            <h3 className="display text-2xl md:text-3xl mb-4">
              Over prijzen, wachttijd en het proces.
            </h3>
            <ul className="space-y-3 text-[15px] leading-relaxed">
              <li>
                <strong className="text-[var(--color-ink)]">Prijzen zijn richtprijzen.</strong>{" "}
                Wat ik voor jou maak hangt af van materiaal, complexiteit en de
                tijd die er in gaat zitten. Na het gesprek krijg je een
                offerte.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Wachttijd:</strong>{" "}
                meestal vier tot acht weken na het gesprek, afhankelijk van
                wat er al loopt in het atelier. Bij rouwende ouders met jonge
                kinderen, of bij een specifieke gedenkdatum — laat het weten,
                dan kijk ik wat er mogelijk is.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Ik laat geen ontwerp vooraf zien.</strong>{" "}
                Het maakproces is van mij — vanuit wat het gesprek heeft
                achtergelaten. Lees waarom dat zo is{" "}
                <Link href="/werkwijze" className="link-underline">
                  op de werkwijze-pagina
                </Link>
                .
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Betalen in termijnen kan.</strong>{" "}
                Voor stukken boven € 300 mag het in twee of drie keer.
                Bespreek het rustig in het gesprek.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
