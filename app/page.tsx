import Link from "next/link";
import Ornament from "@/components/Ornament";
import ImageCard from "@/components/ImageCard";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed video */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center isolate">
        <HeroVideo aspect="fill" />

        {/* Readability scrims */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,241,232,0.55) 0%, rgba(246,241,232,0.78) 35%, rgba(246,241,232,0.55) 75%, rgba(246,241,232,0.88) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(95deg, rgba(246,241,232,0.95) 0%, rgba(246,241,232,0.82) 30%, rgba(246,241,232,0.45) 55%, rgba(246,241,232,0.12) 80%, rgba(246,241,232,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-28 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(246,241,232,0.85) 0%, rgba(246,241,232,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(246,241,232,0.95) 0%, rgba(246,241,232,0.3) 60%, rgba(246,241,232,0) 100%)",
          }}
          aria-hidden
        />

        <div className="container-prose relative z-10 py-24 md:py-32 w-full">
          <div className="max-w-2xl fade-up">
            <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] text-[var(--color-ink)] drop-shadow-[0_1px_0_rgba(246,241,232,0.6)]">
              Herinneringen{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[var(--color-rose-300)]">
                om vast te
              </em>{" "}
              houden.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)] drop-shadow-[0_1px_0_rgba(246,241,232,0.7)]">
              Van kleding met een verhaal maak ik iets dat je tegen je aan
              kunt drukken. Een jasje, een deken, een kussen, een tas —
              gedragen door wie er niet meer is, of door wie er ooit nog was.
              Gedragen door jou.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn btn-primary">
                Vraag de mogelijkheden aan
              </Link>
              <Link href="/werkwijze" className="link-underline text-sm tracking-wide">
                Hoe werkt het?
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-5">
              <Ornament variant="stem" className="w-24 h-8" />
              <p className="font-[family-name:var(--font-caveat)] text-2xl text-[var(--color-sage-300)]">
                Wat blijft, draag je.
              </p>
            </div>
          </div>

          <p className="absolute bottom-8 right-6 md:right-10 font-[family-name:var(--font-caveat)] text-xl text-[var(--color-ink)]/70 drop-shadow-[0_1px_0_rgba(246,241,232,0.7)]">
            — handgemaakt, met liefde
          </p>
        </div>
      </section>

      {/* GENTLE ENTRY — afscheid in alle vormen */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-4 md:pb-8">
        <div className="container-prose">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-5">Voordat je verder leest</p>
            <p className="display text-2xl md:text-[1.95rem] leading-[1.35] text-[var(--color-ink)] font-light">
              Afscheid is niet alleen bij overlijden,{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)]">
                maar ook bij leeftijden die niet meer terugkomen.
              </em>{" "}
              Of je iemand verloren bent, of de kinderkleertjes die je
              jarenlang hebt bewaard nu een plek wilt geven — lees rustig. Er
              is geen "juiste" tijd. Je hoeft niet te weten wat je wilt om
              een gesprek aan te vragen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--color-cream-50)] py-20 md:py-28">
        <div className="container-prose">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <Reveal>
              <p className="eyebrow mb-4">Een tweede leven</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                Kleding bewaart wat woorden{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  niet kunnen vertellen.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-[1.05rem] leading-[1.85]">
              <p>
                De geur van je oma. Het overhemd waarin je vader altijd zat te
                lezen. Het vest dat je moeder droeg op die ene zomerdag.
                Kleding draagt herinneringen die in geen enkel fotoalbum
                passen.
              </p>
              <p>
                In een persoonlijk gesprek luister ik. Naar wie deze mens was —
                naar de stoffen, de verhalen, het kleine en het grote. Daarna
                ga ik aan het werk. Ik ontwerp niet vooraf; ik vertrouw op wat
                het gesprek heeft achtergelaten. Wat ik maak is geen
                opdrachtwerk, maar een vertaling. Iets om vast te houden.
              </p>
              <Link href="/over" className="inline-block link-underline pt-2 text-sm tracking-wide">
                Lees meer over Kim →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRODUCTEN */}
      <section className="bg-[var(--color-linen)] py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Wat ik maak</p>
              <h2 className="display text-3xl md:text-5xl max-w-xl leading-[1.05]">
                Vier vormen. Eindeloze mogelijkheden.
              </h2>
            </div>
            <p className="max-w-md text-[var(--color-ink-soft)]">
              Dit is waar we van starten. In het gesprek kan het iets anders
              worden — wat past, wat raakt. Jij kiest. Of je laat mij kiezen.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Jasjes", desc: "Spijker of katoen, voorzien van patchwork van bijzondere kleding. Een draagbare herinnering.", tone: "rose" as const, pattern: "botanical" as const, src: "/images/jasje.jpg" },
              { title: "Dekens", desc: "Een warm patchwork van overhemden, blouses en T-shirts. Om je heen, of een plek in huis.", tone: "sage" as const, pattern: "weave" as const, src: "/images/deken.jpg" },
              { title: "Kussens", desc: "Klein, dichtbij. Om aan vast te houden, op de bank, of mee te slapen.", tone: "taupe" as const, pattern: "stitch" as const, src: undefined },
              { title: "Tassen", desc: "Een patchwork-tas die je elke dag mee kunt nemen. Met praktische vakken aan de binnenkant.", tone: "cream" as const, pattern: "flower" as const, src: "/images/tas-collega.jpg" },
            ].map((p, i) => (
              <Reveal key={p.title} as="article" delay={i * 80} className="group">
                <ImageCard tone={p.tone} pattern={p.pattern} aspect="portrait" src={p.src} alt={`Herinnerings${p.title.toLowerCase()} van Atelier Kim Jansen`} />
                <h3 className="display text-2xl mt-5 mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/producten" className="btn btn-secondary">
              Bekijk alle mogelijkheden
            </Link>
          </div>
        </div>
      </section>

      {/* VOOR WIE — drie ingangen */}
      <section className="bg-[var(--color-cream-50)] py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Voor wie</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Drie wegen naar{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                hetzelfde gesprek.
              </em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                eyebrow: "Voor jezelf",
                title: "Iets om vast te houden",
                body: "Je hebt iemand verloren en wilt iets tastbaars — om te dragen, op je bed, in de stoel waar zij of hij altijd zat. Begin met een gesprek.",
                cta: "Vraag een gesprek aan",
              },
              {
                eyebrow: "Als cadeau",
                title: "Voor iemand die rouwt",
                body: "Soms is het mooiste wat je voor een ander kunt doen, dit cadeau geven. Een herinneringsdeken voor je moeder. Een kussen voor je zus. Cadeaubon mogelijk.",
                cta: "Vraag een cadeaubon aan",
              },
              {
                eyebrow: "Voor uitvaartondernemers",
                title: "Als bijzondere nazorg",
                body: "Werkt jouw uitvaartonderneming met nabestaanden die iets blijvends willen? Ik werk graag samen — als duurzame uitbreiding van wat jij biedt.",
                cta: "Partnership aanvragen",
              },
            ].map((c, i) => (
              <Reveal key={c.title} as="article" delay={i * 100}
                className="group relative bg-white/60 border border-[var(--color-taupe-100)] rounded-[var(--radius-lg)] p-7 md:p-8 hover:bg-white hover:-translate-y-1 transition-all duration-500 hover:shadow-[var(--shadow-soft-lg)] flex flex-col"
              >
                <p className="eyebrow mb-3">{c.eyebrow}</p>
                <h3 className="display text-2xl mb-4 leading-[1.15]">{c.title}</h3>
                <p className="text-[15px] leading-relaxed flex-1">{c.body}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] link-underline self-start"
                >
                  {c.cta} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE PREVIEW */}
      <section className="bg-[var(--color-linen)] py-24 md:py-36">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-20">
            <p className="eyebrow mb-4">Hoe het gaat</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Een gesprek, een paar weken stilte,{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                en dan iets om vast te houden.
              </em>
            </h2>
          </Reveal>

          <ol className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                n: "01",
                title: "We praten",
                body: "Bij jou thuis, bij mij in het atelier, of online. Een open gesprek over wie deze mens was. Geen vragenlijst — gewoon ruimte.",
              },
              {
                n: "02",
                title: "Je kiest het product",
                body: "Een jasje? Een deken? Een kussen om vast te houden? Samen voelen we wat past. Maar het kan ook anders worden.",
              },
              {
                n: "03",
                title: "Ik ga aan het werk",
                body: "Ik laat geen ontwerp vooraf zien. Het maakproces is van mij — vanuit wat het gesprek heeft achtergelaten. Vertrouw me hierin.",
              },
              {
                n: "04",
                title: "Het komt thuis",
                body: "Klaar als het klaar is — meestal vier tot acht weken. Ik stuur het op, of je haalt het op. Persoonlijk, met aandacht.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 100} className="relative pl-16">
                <span
                  className="absolute left-0 top-0 display text-5xl text-[var(--color-rose-200)]"
                  aria-hidden
                >
                  {s.n}
                </span>
                <h3 className="display text-2xl mb-2">{s.title}</h3>
                <p className="text-[15px] leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16">
            <Link href="/werkwijze" className="link-underline text-sm tracking-wide">
              Lees de volledige werkwijze →
            </Link>
          </div>
        </div>
      </section>

      {/* RECENTE PROJECTEN */}
      <section className="bg-[var(--color-cream-50)] py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 max-w-5xl">
            <div>
              <p className="eyebrow mb-4">Inspiratie</p>
              <h2 className="display text-3xl md:text-5xl max-w-2xl leading-[1.05]">
                Recent gemaakt, met{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  hun verhalen erbij.
                </em>
              </h2>
            </div>
            <p className="max-w-sm text-[var(--color-ink-soft)]">
              Kleine en grote projecten — uit eigen kast en uit gesprekken met
              anderen. Geen klantenreviews; echte stukken.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                eyebrow: "Tas · kinderkleertjes",
                title: "Een tas vol kinderherinneringen",
                excerpt: "Voor een collega — kinderkleertjes gecombineerd met zachte ribstof tot een tas die elke dag wordt gebruikt.",
                tone: "rose" as const,
                pattern: "botanical" as const,
                src: "/images/tas-collega.jpg",
              },
              {
                eyebrow: "Tas · babykleertjes",
                title: "Een tas die gebruikt mag worden",
                excerpt: "Voor Christina: dierbare babykleertjes verwerkt tot een patchwork-tas met praktische binnenvakken. Cadeau voor haar verjaardag.",
                tone: "cream" as const,
                pattern: "flower" as const,
                src: "/images/tas-christina.jpg",
              },
              {
                eyebrow: "Tas + kussen",
                title: "Herinneringen aan mijn oma",
                excerpt: "December 2025: van oma's kleding maakte ik eerst een tas, daarna een kussen. Het atelier rook nog wekenlang naar haar.",
                tone: "taupe" as const,
                pattern: "stitch" as const,
                src: undefined,
              },
              {
                eyebrow: "Deken · eigen kleding",
                title: "Mijn eerste patchworkdeken",
                excerpt: "Van kleding die ik zelf niet meer droeg. Op de bank een deken; over de bank een sprei. Een tweede leven voor bestaande stof.",
                tone: "sage" as const,
                pattern: "weave" as const,
                src: "/images/deken.jpg",
              },
            ].map((p, i) => (
              <Reveal key={p.title} as="article" delay={i * 80} className="group">
                <ImageCard tone={p.tone} pattern={p.pattern} aspect="portrait" src={p.src} alt={p.title} />
                <p className="eyebrow mt-5 mb-2">{p.eyebrow}</p>
                <h3 className="display text-xl mb-3 leading-[1.2]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {p.excerpt}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/portfolio" className="btn btn-secondary">
              Lees alle inspiratieverhalen
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <p className="eyebrow mb-4">Klaar om te beginnen?</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05] max-w-2xl">
                Geen haast. Geen verkoop.{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  Eerst een gesprek.
                </em>
              </h2>
              <p className="mt-6 max-w-xl">
                Vul het formulier in met wat je in gedachten hebt. Of bel,
                app me via WhatsApp, stuur een berichtje via Instagram — wat
                voor jou voelt. Ik neem altijd persoonlijk contact op.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary text-base px-8 py-4 whitespace-nowrap">
              Vraag de mogelijkheden aan →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
