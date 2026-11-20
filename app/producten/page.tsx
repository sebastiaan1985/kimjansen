import Link from "next/link";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import ProductGallery, { type GalleryImage } from "@/components/ProductGallery";

export const metadata = {
  title: "Producten — Atelier Kim Jansen",
  description:
    "Herinneringsjasjes, dekens, kussens, tassen en kunstwerken, handgemaakt van kleding van wie je dierbaar was. Met vaste totaalprijzen en maatwerk in overleg.",
};

type Product = {
  title: string;
  sub: string;
  tone: "rose" | "sage" | "taupe" | "cream";
  images: GalleryImage[];
  lead?: string;
  paragraphs: string[];
  sizes?: { label: string; price: string }[];
  after?: string[];
  price: string;
};

const products: Product[] = [
  {
    title: "Herinneringsjasjes",
    sub: "Draagbaar · uniek · persoonlijk",
    tone: "rose",
    images: [
      { src: "/images/jasje-colbert-geheel.jpg", alt: "Herinneringsjasje van colbertstoffen, geheel" },
      { src: "/images/jasje-colbert-voorkant.jpg", alt: "Herinneringsjasje, voorkant met label Kim Jansen" },
      { src: "/images/jasje-colbert-zak.jpg", alt: "Herinneringsjasje, detail van de zak met knoopje" },
      { src: "/images/jasje-colbert-knopen.jpg", alt: "Herinneringsjasje, bloem van originele knopen" },
    ],
    lead: "Een kledingstuk vol herinneringen, opnieuw tot leven gebracht.",
    paragraphs: [
      "Van kleding die gedragen werd door iemand die je dierbaar is, maak ik een nieuw jasje. Verschillende kledingstukken krijgen samen een nieuwe vorm en worden verwerkt tot een uniek kledingstuk.",
      "Denk bijvoorbeeld aan colbertjes, overhemden of andere kledingstukken die een bijzondere betekenis hebben. Ieder jasje is anders en vertelt zijn eigen verhaal.",
      "Zo draag je niet alleen een mooie herinnering met je mee, maar ook letterlijk een stukje van degene die je mist.",
    ],
    price: "€895",
  },
  {
    title: "Herinneringsdekens",
    sub: "Warm · persoonlijk · samen",
    tone: "sage",
    images: [{ src: "/images/deken-producten.png", alt: "Herinneringsdeken" }],
    paragraphs: [
      "Een deken vol herinneringen, gemaakt van kleding die een bijzondere betekenis heeft. Een overhemd dat je direct herkent, een favoriete blouse of een T-shirt dat je doet denken aan mooie momenten samen.",
      "De verschillende kledingstukken worden met aandacht samengebracht in een persoonlijk patchwork. Zo ontstaat een unieke deken waarin kleuren, stoffen en herkenbare details samen een verhaal vertellen.",
      "Een tastbare herinnering om lekker onder weg te kruipen, om je heen te slaan of een mooi plekje te geven in huis.",
    ],
    sizes: [
      { label: "100 × 150 cm", price: "€475" },
      { label: "90 × 200 cm", price: "€595" },
      { label: "130 × 200 cm", price: "€795" },
    ],
    after: [
      "Andere formaten zijn mogelijk in overleg.",
      "De achterzijde wordt gemaakt van katoen. Het is ook mogelijk om hiervoor een eigen dekbedovertrek te gebruiken of een andere stof te kiezen.",
    ],
    price: "Vanaf €475",
  },
  {
    title: "Herinneringskussens",
    sub: "Klein · dichtbij · zacht",
    tone: "taupe",
    images: [{ src: "/images/kussen-producten.png", alt: "Herinneringskussen in patchwork" }],
    paragraphs: [
      "Een kussen om vast te houden, tegen je aan te trekken of een mooie plek in huis te geven. Gemaakt van één of meerdere kledingstukken die een bijzondere betekenis hebben.",
      "Soms ontstaat er een rustig en eenvoudig ontwerp uit één kledingstuk, soms komen verschillende stoffen samen in een persoonlijk patchwork. Bijzondere details, zoals originele knopen, labels of naden, kunnen waar mogelijk behouden blijven en een plek krijgen in het ontwerp.",
      "Zo ontstaat een uniek kussen waarin dierbare herinneringen op een mooie manier samenkomen.",
    ],
    price: "€295",
  },
  {
    title: "Herinneringskussen – Canadees smokwerk",
    sub: "Patroon · diepte · structuur",
    tone: "rose",
    images: [
      { src: "/images/kussen-smokwerk.jpg", alt: "Herinneringskussen met Canadees smokwerk" },
      { src: "/images/kussen-overhemd.jpg", alt: "Herinneringskussen Canadees smokwerk, andere zijde van overhemdstof" },
    ],
    lead: "Een bijzondere herinnering, verwerkt in een uniek patroon.",
    paragraphs: [
      "Met Canadees smokwerk krijgen dierbare kledingstukken een verrassende nieuwe vorm. Door kleine delen stof op een speciale manier met elkaar te verbinden, ontstaat een bijzonder patroon met diepte, structuur en een speels lijnenspel.",
      "Verschillende kleuren en stoffen komen samen in een uniek geheel. Zo ontstaat een bijzonder herinneringskussen waarin de oorspronkelijke kleding een nieuw leven krijgt. Een handgemaakt kunstwerk om neer te zetten, op de bank te leggen of een mooie plek in huis te geven.",
    ],
    price: "€395",
  },
  {
    title: "Herinneringstassen",
    sub: "Draagbaar · persoonlijk · tijdloos",
    tone: "cream",
    images: [{ src: "/images/tas-oma-producten.png", alt: "Herinneringstas" }],
    paragraphs: [
      "Een tas die je iedere dag met je mee kunt dragen, gemaakt van kleding die een bijzondere betekenis heeft. Verschillende stoffen en kledingstukken komen samen in een persoonlijk patchwork, waardoor een unieke tas ontstaat met een eigen verhaal.",
      "Bijzondere details, zoals originele knopen, labels, zakken of herkenbare naden, kunnen waar mogelijk behouden blijven en een plek krijgen in het ontwerp. Zo krijgen dierbare kledingstukken een nieuw leven en draag je een stukje herinnering met je mee.",
      "Iedere tas wordt met aandacht ontworpen, passend bij de aangeleverde kleding en jouw persoonlijke wensen.",
    ],
    price: "€350",
  },
  {
    title: "Herinneringskunstwerk in houten lijst",
    sub: "Klein · persoonlijk · om neer te zetten",
    tone: "taupe",
    images: [{ src: "/images/kunstwerk-hart-lijst.jpg", alt: "Hart van reststoffen in een houten lijst" }],
    lead: "Een kleine herinnering met een bijzondere betekenis.",
    paragraphs: [
      "Soms is een klein stukje stof al genoeg om een dierbare herinnering dichtbij te houden. Van reststoffen uit kleding die een bijzondere betekenis heeft, maak ik een persoonlijk kunstwerk in de vorm van bijvoorbeeld een hart of ander herkenbaar symbool.",
      "De verschillende stoffen krijgen samen een nieuwe vorm en worden met aandacht verwerkt in een houten lijst. Zo ontstaat een uniek en persoonlijk kunstwerk dat een mooi plekje verdient in huis.",
    ],
    price: "€145",
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
            Herinneringen krijgen{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              een nieuwe vorm.
            </em>
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85]">
            <p>
              Van dierbare kleding maak ik persoonlijke herinneringsstukken.
              Soms begint dat met een deken, een kussen, een tas of een
              bijzonder kunstwerk. Maar er is nog veel meer mogelijk.
            </p>
            <p>
              Misschien wordt het een wandkleed, een babydeken voor een
              kleinkind of juist iets heel anders. We kijken samen naar de
              kleding, de herinneringen en de mogelijkheden.
            </p>
            <p>
              Want niet ieder verhaal past in een vast product. En dat hoeft
              ook niet.
            </p>
          </div>
        </div>
      </section>

      <div className="container-prose">
        <div className="divider-stitched" />
      </div>

      {/* ONTDEK DE MOGELIJKHEDEN */}
      <section className="bg-[var(--color-cream-50)] pt-16 md:pt-20">
        <div className="container-prose">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-5 text-[1.05rem] leading-[1.85]">
              <h2 className="display text-3xl md:text-4xl leading-[1.05]">
                Ontdek de mogelijkheden
              </h2>
              <p>
                Hieronder vind je een aantal herinneringsproducten die ik al
                eerder heb gemaakt, met de bijbehorende formaten en prijzen. Ze
                geven je een idee van wat er mogelijk is.
              </p>
              <p>
                Heb je zelf een ander idee of iets in gedachten dat je hier
                niet tussen ziet staan? Ook dat is welkom. Samen bespreken we
                de mogelijkheden en kijken we wat bij jouw verhaal past. Voor
                een product op maat bepalen we in overleg een passende prijs.
              </p>
            </div>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-taupe-100)] bg-[var(--color-linen)] p-8 md:p-10">
              <p className="eyebrow mb-4">
                Wat je bij elk product van mij kan verwachten
              </p>
              <p className="text-[15px] leading-relaxed">
                Bij iedere opdracht horen een{" "}
                <strong className="text-[var(--color-ink)]">persoonlijk intakegesprek</strong>{" "}
                en een{" "}
                <strong className="text-[var(--color-ink)]">afrondend gesprek</strong>{" "}
                bij de overhandiging. We{" "}
                <strong className="text-[var(--color-ink)]">bepalen samen het ontwerp</strong>,
                met aandacht voor{" "}
                <strong className="text-[var(--color-ink)]">bijzondere details</strong>{" "}
                en{" "}
                <strong className="text-[var(--color-ink)]">herkenbare elementen</strong>{" "}
                uit de oorspronkelijke kleding. Alle{" "}
                <strong className="text-[var(--color-ink)]">benodigde materialen zijn inbegrepen</strong>{" "}
                en ieder product wordt met zorg en volledig met de hand{" "}
                <strong className="text-[var(--color-ink)]">door mij gemaakt</strong>.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed font-semibold text-[var(--color-ink)]">
                De prijzen op de website zijn totaalprijzen, zonder bijkomende
                kosten achteraf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT BLOCKS */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
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
                <ProductGallery images={p.images} tone={p.tone} />
              </div>
              <div>
                <p className="eyebrow mb-3">{p.sub}</p>
                <h2 className="display text-3xl md:text-4xl leading-[1.05] mb-5">
                  {p.title}
                </h2>
                {p.lead && (
                  <p className="font-[family-name:var(--font-cormorant)] italic text-xl md:text-2xl text-[var(--color-ink)] leading-snug mb-5">
                    {p.lead}
                  </p>
                )}
                <div className="space-y-4 leading-[1.85] mb-6">
                  {p.paragraphs.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
                {p.sizes && (
                  <div className="mb-6">
                    <p className="eyebrow mb-3">Formaten en prijzen</p>
                    <ul className="divide-y divide-[var(--color-taupe-100)] border-y border-[var(--color-taupe-100)]">
                      {p.sizes.map((s) => (
                        <li key={s.label} className="flex items-center justify-between py-2.5 text-[15px]">
                          <span className="text-[var(--color-ink-soft)]">{s.label}</span>
                          <span className="font-medium text-[var(--color-ink)]">{s.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {p.after && (
                  <div className="space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-soft)] mb-6">
                    {p.after.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                )}
                <div className="pt-4 border-t border-[var(--color-taupe-100)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-[family-name:var(--font-cormorant)] italic text-2xl text-[var(--color-ink)]">
                      {p.price}
                    </span>
                    <Link href="/contact" className="link-underline text-sm tracking-wide">
                      Bespreek de mogelijkheden →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IN ONTWIKKELING */}
      <section className="bg-[var(--color-cream-50)] pb-12">
        <div className="container-prose max-w-3xl">
          <Reveal className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-taupe-200)] bg-white/50 p-8 md:p-10">
            <p className="eyebrow mb-3">In ontwikkeling</p>
            <h2 className="display text-2xl md:text-3xl leading-[1.1] mb-5">
              Kleding voor een natuurlijk afscheid
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <p>
                Naast het maken van herinneringsproducten ben ik bezig met een
                nieuwe uitbreiding binnen Atelier Kim Jansen: het maken en
                vermaken van kleding voor een natuurlijk afscheid.
              </p>
              <p>
                Hierbij werk ik met natuurlijke materialen, zoals linnen en
                katoen, en besteed ik aandacht aan details die passen bij een
                natuurbegrafenis. Denk aan kleding zonder ritsen, kunststof
                knopen of andere niet-natuurlijke onderdelen.
              </p>
              <p>
                Een laatste kledingstuk, met aandacht en respect voor zowel de
                mens als de natuur.
              </p>
              <p>De mogelijkheden en wensen bespreek ik graag persoonlijk.</p>
            </div>
            <Link href="/contact" className="inline-block mt-6 link-underline text-sm tracking-wide">
              Neem contact op →
            </Link>
          </Reveal>
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
                <strong className="text-[var(--color-ink)]">Totaalprijzen.</strong>{" "}
                De prijzen bij de producten zijn totaalprijzen, zonder
                bijkomende kosten achteraf. Heb je een ander idee? Dan bepalen
                we in overleg een passende prijs.
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
