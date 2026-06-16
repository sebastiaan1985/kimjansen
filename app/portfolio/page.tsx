import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Inspiratie — Atelier Kim Jansen",
  description:
    "Eerder gemaakte stukken met de verhalen erbij. Een collega's kinderkleertjes-tas, een tas voor Christina, herinneringen aan oma, en mijn eerste patchworkdeken.",
};

type Piece = {
  title: string;
  type: string;
  tone: "rose" | "sage" | "taupe" | "cream";
  pattern: "botanical" | "weave" | "stitch" | "flower";
  paragraphs: string[];
  src?: string;
  objectPosition?: string;
};

const pieces: Piece[] = [
  {
    title: "Een tas vol kinderherinneringen",
    type: "Tas · kinderkleertjes",
    tone: "rose",
    pattern: "botanical",
    paragraphs: [
      "Een collega vroeg mij of ik van haar eigen kinderkleertjes een tas wilde maken. De kledingstukken waren te bijzonder om weg te doen, maar er was niet genoeg stof beschikbaar om daar een complete tas van te maken.",
      "Samen gingen we op zoek naar een oplossing. We kozen ervoor om de dierbare stoffen te combineren met een zachte ribstof, waardoor de kinderkleertjes alle aandacht kregen die ze verdienen.",
      "De verschillende applicaties, borduursels en stofjes vertellen ieder hun eigen verhaal. Stukjes uit haar kindertijd, verwerkt in een tas die niet in een kast verdwijnt, maar juist gebruikt kan worden in het dagelijks leven.",
      "Zo kregen herinneringen die jarenlang waren bewaard een nieuwe plek en een nieuw doel.",
    ],
    src: "/images/tas-collega.jpg",
  },
  {
    title: "Een tas die gebruikt mag worden",
    type: "Tas · babykleertjes · cadeau",
    tone: "cream",
    pattern: "flower",
    paragraphs: [
      "Voor Christina maakte ik een tas van dierbare babykleertjes. De verschillende stofjes en details vormen samen een uniek ontwerp dat helemaal bij haar past.",
      "Bij het ontwerpen heb ik rekening gehouden met de kleuren waar zij van houdt, zodat het niet alleen een tas vol herinneringen werd, maar ook een tas die ze graag zou gebruiken. Aan de binnenkant maakte ik verschillende vakjes, zodat de tas niet alleen mooi is, maar ook praktisch in het dagelijks gebruik.",
      "Ik gaf de tas cadeau voor haar verjaardag. Inmiddels wordt hij veel gebruikt, en dat vind ik misschien wel het mooiste compliment dat een handgemaakt product kan krijgen.",
    ],
    src: "/images/tas-christina.jpg",
  },
  {
    title: "Herinneringen aan mijn oma",
    type: "Tas + kussen · december 2025",
    tone: "taupe",
    pattern: "stitch",
    paragraphs: [
      "In december 2025 overleed mijn oma. Ik ben enorm dankbaar dat ik kleding van haar heb gekregen. Ik wist al dat ik daar graag iets van wilde maken en daarom betekent het veel voor mij dat ik die kleding heb mogen ontvangen.",
      "Als eerste maakte ik een tas. Die gebruik ik nog steeds bijna iedere dag. Het voelt fijn om iets van mijn oma bij me te hebben. Een stukje van haar te zien wanneer ik naar de tas kijk. Daarnaast krijg ik er veel complimenten over, wat het extra bijzonder maakt.",
      "Daarna maakte ik een kussen. Dat gaf weer een heel andere beleving. Ik kan mijn hoofd erop leggen, het vasthouden of ermee op de bank zitten. De herinnering is hetzelfde, maar de ervaring is heel anders.",
      "Wat dit project voor mij extra bijzonder maakte, was het maakproces zelf. Mijn hele atelier rook naar de kleding van mijn oma. Terwijl ik met de stoffen bezig was, dacht ik aan wie ze was en aan de herinneringen die we samen hebben gemaakt. Met haar in gedachten maakte ik producten die niet alleen mooi zijn, maar ook een blijvende herinnering vormen.",
      "Dit project liet mij zien hoe waardevol het is om herinneringen niet alleen te bewaren, maar ze ook een plek te geven in het dagelijks leven.",
    ],
  },
  {
    title: "Mijn eerste patchworkdeken",
    type: "Deken · eigen kleding · oefenproject",
    tone: "sage",
    pattern: "weave",
    paragraphs: [
      "Toen ik wist dat ik herinneringsproducten wilde gaan maken, wilde ik natuurlijk ook zelf ervaren hoe het is om van verschillende kledingstukken iets nieuws te creëren.",
      "Het idee van patchwork sprak me al langer aan. Eerder maakte ik al een bevrijdingsrok, waarbij verschillende stoffen samen een nieuw verhaal vormen. Met datzelfde gevoel begon ik aan deze deken.",
      "Voor deze deken gebruikte ik kleding die ik zelf niet meer droeg. Verschillende stoffen, kleuren en herinneringen kwamen samen in één nieuw product. Niet om iets ouds te vervangen, maar om er iets nieuws van te maken.",
      "Het resultaat is een deken waar ik graag onder lig op de bank, maar die ook prachtig staat als sprei. Voor mij was dit project niet alleen een oefening in techniek, maar ook een bevestiging van hoe bijzonder het is om bestaande stoffen een tweede leven te geven.",
    ],
    src: "/images/deken.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Inspiratie</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Vier projecten, met{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              hun verhalen erbij.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85]">
            Een tas van kinderkleertjes, een tas die elke dag gebruikt mag
            worden, herinneringen aan mijn oma, en mijn eerste patchworkdeken
            van eigen kleding. Kleine en grote projecten — wat ze delen is
            wat ze zijn geworden.
          </p>
        </div>
      </section>

      <div className="container-prose">
        <div className="divider-stitched" />
      </div>

      {/* PROJECT BLOCKS */}
      <section className="bg-[var(--color-cream-50)] pt-16 md:pt-24 pb-12">
        <div className="container-prose space-y-24 md:space-y-32">
          {pieces.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:sticky md:top-28">
                <ImageCard tone={p.tone} pattern={p.pattern} aspect="portrait" src={p.src} alt={p.title} objectPosition={p.objectPosition} />
              </div>
              <div>
                <p className="eyebrow mb-3">{p.type}</p>
                <h2 className="display text-3xl md:text-4xl leading-[1.05] mb-6">
                  {p.title}
                </h2>
                <div className="space-y-5 leading-[1.85] text-[1rem]">
                  {p.paragraphs.map((par, idx) => (
                    <p key={idx}>{par}</p>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Ornament variant="stem" className="w-16 h-5" />
                  <span className="font-[family-name:var(--font-caveat)] text-xl text-[var(--color-rose-300)]">
                    — Kim
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOCIAL TEASER */}
      <section className="bg-[var(--color-linen)] py-20 md:py-28 mt-16">
        <div className="container-prose grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Meer zien?</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Op Instagram en TikTok deel ik meer.
            </h2>
            <p className="mt-5 text-[1.05rem] leading-[1.85] max-w-lg">
              Werk-in-uitvoering, korte verhalen, en de details die niet op
              foto's passen. Volg mee als je wilt.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://instagram.com/atelier.kimjansen"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                @atelier.kimjansen
              </a>
              <a
                href="https://tiktok.com/@atelierkimjansen"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                TikTok
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <ImageCard tone="rose" pattern="botanical" aspect="square" src="/images/tas-collega-detail.jpg" alt="Detail van een herinneringstas met teddybeertjes" />
            <ImageCard tone="sage" pattern="weave" aspect="square" className="mt-6" src="/images/jasje-detail.jpg" alt="Borduurdetail op een herinneringsjasje" blend />
            <ImageCard tone="taupe" pattern="stitch" aspect="square" src="/images/tas-disney.jpg" alt="Herinneringstas met hartmotief" />
            <ImageCard tone="cream" pattern="flower" aspect="square" className="mt-6" src="/images/jasje-label.jpg" alt="Custom made by Kim Jansen label" objectPosition="center" />
            <ImageCard tone="rose" pattern="flower" aspect="square" src="/images/kim-atelier.jpg" alt="Kim aan het werk in haar atelier" />
            <ImageCard tone="sage" pattern="botanical" aspect="square" className="mt-6" src="/images/tas-christina.jpg" alt="Patchworktas in het veld" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-28">
        <div className="container-prose text-center">
          <h2 className="display text-3xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Heb je zelf een verhaal{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              dat je graag wil bewaren?
            </em>
          </h2>
          <Link href="/contact" className="btn btn-primary mt-10 text-base px-8 py-4">
            Vraag de mogelijkheden aan
          </Link>
        </div>
      </section>
    </>
  );
}
