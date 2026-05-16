import Link from "next/link";
import ImageCard from "@/components/ImageCard";
import Ornament from "@/components/Ornament";

export const metadata = {
  title: "Portfolio — Atelier Kim Jansen",
  description: "Eerder gemaakte stukken, met de verhalen erbij. Met toestemming gedeeld.",
};

type Piece = {
  title: string;
  type: string;
  tone: "rose" | "sage" | "taupe" | "cream";
  pattern: "botanical" | "weave" | "stitch" | "flower";
  story: string;
  aspect: "portrait" | "square" | "wide";
  feature?: boolean;
};

const pieces: Piece[] = [
  {
    title: "Voor Erika",
    type: "Spijkerjasje · overhemden vader",
    tone: "rose",
    pattern: "botanical",
    aspect: "portrait",
    story: "Erika's vader had een kast vol blauwe overhemden. We gebruikten er vijf — geborduurd met wilde bloemen, omdat hij elke ochtend in zijn tuin begon.",
    feature: true,
  },
  {
    title: "Melissa's deken",
    type: "Patchwork · winterjas moeder",
    tone: "sage",
    pattern: "weave",
    aspect: "wide",
    story: "Van moeders winterjas, twee blouses en een zomerrok maakte ik een deken van 180×120. Voor op de bank waar ze samen altijd zaten.",
  },
  {
    title: "Voor mijn nichtje",
    type: "Babydekentje · trouwjurk oma",
    tone: "cream",
    pattern: "flower",
    aspect: "square",
    story: "De trouwjurk van oma, omgevormd tot een dekentje voor een achterkleinkind dat ze nooit heeft gekend. De kant van de jurk werd de rand.",
  },
  {
    title: "Linde's kussen",
    type: "Lievelingsblouse",
    tone: "taupe",
    pattern: "stitch",
    aspect: "square",
    story: "Eén blouse. De knopen zaten er nog op. Het kussen ligt nu op haar bureau — ze legt haar hand erop als ze schrijft.",
  },
  {
    title: "Voor Karin",
    type: "Sjaal · zijden blouse",
    tone: "rose",
    pattern: "flower",
    aspect: "portrait",
    story: "Een lichte sjaal van twee zijden blouses, met een handgenaaide rand. Karin draagt hem op het werk — &lsquo;zo heb ik haar bij me op moeilijke dagen.&rsquo;",
  },
  {
    title: "Bomber voor Joost",
    type: "Leren jas vader",
    tone: "taupe",
    pattern: "weave",
    aspect: "wide",
    story: "De oude leren jas van Joost's vader was te versleten om te dragen. We maakten er een bomber van, met voering uit een oude zakdoek.",
  },
  {
    title: "Wandkleed Hannah",
    type: "Patchwork · zes kledingstukken",
    tone: "sage",
    pattern: "botanical",
    aspect: "portrait",
    story: "Boven het bed van Hannah's vader hangt nu wat hij droeg — een rustig wandkleed van zes kledingstukken. Geen woorden, alleen stof.",
  },
  {
    title: "Tas voor Sanne",
    type: "Maatwerk · kostuum opa",
    tone: "cream",
    pattern: "stitch",
    aspect: "square",
    story: "Het tweed kostuum van Sanne's opa werd een schoudertas, met voering uit zijn zakdoek. Ze neemt hem mee als ze naar zijn graf gaat.",
  },
];

export default function PortfolioPage() {
  const featured = pieces.find((p) => p.feature)!;
  const rest = pieces.filter((p) => !p.feature);

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Portfolio</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Eerder gemaakt, met de{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              verhalen erbij.
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.85]">
            Met toestemming van de eigenaren. Sommige namen zijn aangepast,
            sommige verhalen ingekort. Wat overblijft is hoe deze stukken in
            de wereld kwamen — en bij wie ze nu zijn.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-[var(--color-cream-50)] pb-20 md:pb-24">
        <div className="container-prose grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">
          <ImageCard
            tone={featured.tone}
            pattern={featured.pattern}
            aspect="wide"
            caption={featured.title}
          />
          <div>
            <p className="eyebrow mb-3">{featured.type}</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05] mb-5">
              {featured.title}
            </h2>
            <p className="leading-[1.85] text-[1.05rem]">{featured.story}</p>
            <div className="mt-6 flex items-center gap-3">
              <Ornament variant="stem" className="w-16 h-5" />
              <span className="font-[family-name:var(--font-caveat)] text-xl text-[var(--color-rose-300)]">
                — Erika
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-prose">
        <div className="divider-stitched" />
      </div>

      {/* GRID */}
      <section className="bg-[var(--color-cream-50)] pt-16 md:pt-20 pb-24">
        <div className="container-prose">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {rest.map((p, i) => (
              <article key={p.title} className={i % 3 === 1 ? "lg:mt-12" : ""}>
                <ImageCard tone={p.tone} pattern={p.pattern} aspect={p.aspect} />
                <div className="mt-5">
                  <p className="eyebrow mb-2">{p.type}</p>
                  <h3 className="display text-2xl mb-3">{p.title}</h3>
                  <p className="text-[14.5px] leading-relaxed italic text-[var(--color-ink-mute)]">
                    {p.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL TEASER */}
      <section className="bg-[var(--color-linen)] py-20 md:py-28">
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
            <ImageCard tone="rose" pattern="botanical" aspect="square" />
            <ImageCard tone="sage" pattern="weave" aspect="square" className="mt-6" />
            <ImageCard tone="taupe" pattern="stitch" aspect="square" />
            <ImageCard tone="cream" pattern="flower" aspect="square" className="mt-6" />
            <ImageCard tone="rose" pattern="flower" aspect="square" />
            <ImageCard tone="sage" pattern="botanical" aspect="square" className="mt-6" />
          </div>
        </div>
      </section>
    </>
  );
}
