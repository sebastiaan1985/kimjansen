import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Producten — Atelier Kim Jansen",
  description:
    "Herinneringsjasjes, dekens, kussens en tassen, handgemaakt van kleding van wie je dierbaar was. Met maatwerk en zorg & garantie.",
};

type Product = {
  title: string;
  sub: string;
  tone: "rose" | "sage" | "taupe" | "cream";
  pattern: "botanical" | "weave" | "stitch" | "flower";
  src?: string;
  body: string;
  details: string[];
  price: string;
  priceNote?: string;
};

const products: Product[] = [
  {
    title: "Herinneringsjasjes",
    sub: "Spijker · katoen",
    tone: "rose" as const,
    pattern: "botanical" as const,
    src: "/images/jasje-transparant.png",
    body: "Een jasje dat een verhaal met zich meedraagt. Een spijkerjasje, blazer of ander katoenen jasje wordt voorzien van zorgvuldig gekozen stukken kleding die een bijzondere betekenis hebben. Door middel van patchwork verwerk ik de stoffen tot een uniek ontwerp dat past bij de persoon die het gaat dragen. Zo ontstaat een draagbare herinnering waarin stoffen, kleuren en details samenkomen.",
    details: [
      "Maatwerk in jouw maat",
      "Knopen, labels of andere details uit de originele kleding kunnen worden verwerkt",
    ],
    price: "vanaf € 595,-",
  },
  {
    title: "Herinneringsdekens",
    sub: "Warm · persoonlijk · samen",
    tone: "sage" as const,
    pattern: "weave" as const,
    src: "/images/deken-producten.png",
    body: "Een deken waarin herinneringen samenkomen. Overhemden van vader, blouses van moeder, T-shirts van een broer — kleding die te waardevol is om weg te doen, verwerkt in een warm en persoonlijk patchwork. Een herinnering die je kunt vasthouden, om je heen kunt slaan of een mooie plek kunt geven in huis.",
    details: [
      "Standaardformaat: 90 × 200 cm (eenpersoons)",
      "Andere formaten mogelijk in overleg",
      "Achterzijde katoen, dit kan ook een dekbedovertrek zijn",
    ],
    price: "vanaf € 1.195,-",
  },
  {
    title: "Herinneringskussens",
    sub: "Klein · dichtbij · zacht",
    tone: "taupe" as const,
    pattern: "stitch" as const,
    src: "/images/kussen-producten.png",
    body: "Een kussen om vast te houden, tegen je aan te trekken of een mooie plek in huis te geven. Gemaakt van één of meerdere kledingstukken die een bijzondere betekenis hebben. Soms rustig en eenvoudig, soms verwerkt in een patchwork van verschillende stoffen. Altijd met aandacht voor de herinneringen die erin verweven zitten.",
    details: [
      "Formaat in overleg",
      "Patchwork of verwerkt uit één kledingstuk",
      "Originele knopen, labels of andere details kunnen worden verwerkt",
      "Inclusief binnenkussen en rits aan de onderzijde",
      "Kussens kunnen ook in combinatie met een deken worden gemaakt, passend bij elkaar",
    ],
    price: "vanaf € 225,-",
  },
  {
    title: "Herinneringstassen",
    sub: "Draagbaar · persoonlijk · tijdloos",
    tone: "cream" as const,
    pattern: "flower" as const,
    src: "/images/tas-oma-producten.png",
    body: "Een tas die je iedere dag met je mee kunt dragen. Gemaakt van kleding die een bijzondere betekenis heeft, verwerkt in een uniek patchwork van herinneringen. Zo krijgen dierbare stoffen een nieuwe plek in het dagelijks leven. Iedere tas wordt op maat ontworpen, passend bij de kleding, de herinneringen en jouw wensen. Originele details zoals knopen, labels, zakken of andere herkenbare elementen kunnen worden verwerkt, zodat het verhaal zichtbaar blijft in het eindresultaat.",
    details: [
      "Formaat in overleg",
      "Gemaakt met patchwork van één of meerdere kledingstukken",
      "Binnenzijde voorzien van praktische vakken",
    ],
    price: "vanaf € 795,-",
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
            het kan ook iets anders worden, een wandkleed, een babydeken voor
            een kleinkind, of iets wat nog geen vorm heeft. In het gesprek
            voelen we wat past.
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
            <Reveal
              key={p.title}
              as="article"
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <ImageCard tone={p.tone} pattern={p.pattern} aspect="wide" src={p.src} alt={p.title} blend={p.title === "Herinneringsjasjes"} />
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
                <div className="pt-4 border-t border-[var(--color-taupe-100)] space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-[family-name:var(--font-cormorant)] italic text-xl text-[var(--color-ink)]">
                      {p.price}
                    </span>
                    <Link href="/contact" className="link-underline text-sm tracking-wide">
                      Bespreek de mogelijkheden →
                    </Link>
                  </div>
                  {p.priceNote && (
                    <p className="text-xs text-[var(--color-ink-mute)] italic">
                      {p.priceNote}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MAATWERK — "Nog niet zeker wat bij je past?" */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-32 mt-16">
        <div className="container-prose">
          <Reveal className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
            <div>
              <Ornament variant="flourish" className="w-16 h-16 mb-6" />
              <p className="eyebrow mb-4">Nog niet zeker wat bij je past?</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                Dat is{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  helemaal niet erg.
                </em>
              </h2>
            </div>
            <div className="space-y-5 text-[1.05rem] leading-[1.85]">
              <p>
                Ben jij er nog niet helemaal uit welk product bij jou past?
                Vaak valt tijdens een gesprek de puzzel in elkaar en ontdekken
                we samen welke vorm het beste aansluit bij jouw herinneringen
                en wensen.
              </p>
              <p>
                Dat kan een tas zijn, een wandkleed, een babydekentje of een
                heel ander product dat past bij jouw verhaal. Soms ontstaat het
                idee vooraf, soms juist pas wanneer we samen in de kleding
                duiken en herinneringen ophalen.
              </p>
              <p>
                Alles wat van stof gemaakt kan worden, valt te bespreken. Soms
                weet ik vooraf wat het wordt, soms ontdek ik het pas in het
                gesprek. Vertel me wat je in gedachten hebt, of wat je nog
                niet kunt benoemen.
              </p>
              <Link href="/contact" className="btn btn-primary mt-4">
                Vraag de mogelijkheden aan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ZORG & GARANTIE */}
      <section className="bg-[var(--color-sage-50)] py-24 md:py-28">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Zorg & garantie</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Vier beloftes die ik{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                altijd nakom.
              </em>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Zorgvuldige behandeling",
                body: "De kleding die je aan mij toevertrouwt behandel ik met respect en aandacht. Tijdens het hele proces werk ik zorgvuldig met de stoffen, details en herinneringen die eraan verbonden zijn.",
              },
              {
                title: "Restanten in jouw hand",
                body: "Alle stof die ik niet verwerk krijg je terug. Netjes verzameld in een tas, zodat je deze kunt bewaren voor later. Misschien wil je er ooit nog iets van laten maken, misschien bewaar je het gewoon als herinnering. De keuze is aan jou.",
              },
              {
                title: "Levenslange reparatie",
                body: "Slijtage hoort erbij, bij kleding én herinneringen. Een losse zoom, een vastgenaaide knoop, een gebroken steek: stuur op, ik herstel het zonder kosten.",
              },
              {
                title: "Verzorgingsgids",
                body: "Bij elk stuk ontvang je een kaart met wasvoorschriften en bewaartips, zodat jouw herinneringsproduct mooi blijft en jarenlang mee kan gaan.",
              },
            ].map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                delay={i * 80}
                className="rounded-[var(--radius-lg)] bg-[var(--color-cream-50)] border border-[var(--color-taupe-100)] p-6"
              >
                <div className="w-9 h-9 rounded-full bg-[var(--color-sage-100)] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-sage-300)]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="display text-xl mb-2">{p.title}</h3>
                <p className="text-[14px] leading-relaxed">{p.body}</p>
              </Reveal>
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
                kinderen, of bij een specifieke gedenkdatum, laat het weten,
                dan kijk ik wat er mogelijk is.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Ik laat geen ontwerp vooraf zien.</strong>{" "}
                Het maakproces is van mij, vanuit wat het gesprek heeft
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
