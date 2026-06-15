import Link from "next/link";
import Ornament from "@/components/Ornament";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Over Kim — Atelier Kim Jansen",
  description:
    "Kim Jansen woont in Twente met haar drie kinderen. Verzorgende IG, naaister, en maker van herinneringsproducten van kleding van geliefden.",
};

export default function OverPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Over Kim</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Veel meer dan{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              het maken van producten.
            </em>
          </h1>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="bg-[var(--color-cream-50)] pb-20 md:pb-28">
        <div className="container-prose grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-start">
          <div className="md:sticky md:top-28">
            <HeroVideo src="/kim.mp4" aspect="portrait" />
            <p className="mt-5 font-[family-name:var(--font-caveat)] text-2xl text-[var(--color-rose-300)]">
              Hoi, ik ben Kim.
            </p>
          </div>

          <div className="space-y-6 text-[1.05rem] leading-[1.85] text-[var(--color-ink-soft)]">
            <p>
              Ik ben Kim Jansen en ik woon met mijn drie kinderen in het mooie
              Twente. Al van jongs af aan ben ik creatief bezig. Iets met mijn
              handen maken is het mooiste dat er is. Mijn moeder naaide vroeger
              al onze kleertjes — creativiteit zit zeker in de familie.
            </p>
            <p>
              Ik maakte als kind al eens kennis met de naaimachine toen ik mijn
              vinger onder de naald deed en hij door mijn vinger heen ging.
              Deze onhandige ervaring heeft me er niet van weerhouden de hobby
              van het naaien zo ver te ontwikkelen dat ik er mijn beroep van
              wil maken.
            </p>
            <p>
              Een lange tijd heb ik nagedacht in welke vorm dit er precies uit
              moest komen te zien. Toen ik een herinneringsdeken voorbij zag
              komen, viel alles op z'n plek.{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-ink)]">
                Dit is het!
              </em>{" "}
              Het idee ontvouwde zich in mijn hoofd tot een groot plan.
            </p>
            <p>
              Herinneringsproducten maken van kleding van mensen die zijn
              overleden. En dan juist niet alleen het maken van producten. Met
              mijn achtergrond als verzorgende IG en mijn levenservaring weet
              ik hoe waardevol het is om te praten met mensen over
              gebeurtenissen in je leven. Dus dit is een onderdeel van mijn
              traject — voor de mensen die iemand verloren zijn, én voor
              mezelf. Want ik vind het waardevol om te weten wie de persoon
              achter de kleding is. Om met deze energie de producten te kunnen
              maken.
            </p>
            <p className="text-[1.1rem] font-[family-name:var(--font-cormorant)] italic text-[var(--color-ink)] py-2">
              Het is dus veel meer dan het maken van producten op zich. We
              voeren een gesprek, en als het vertrouwen er is hoor ik graag
              jouw verhaal.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Ornament variant="stem" className="w-20 h-6" />
              <p className="text-sm tracking-[0.18em] uppercase text-[var(--color-taupe-300)]">
                Liefs, Kim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MIJN EIGEN ERVARING — oma */}
      <section className="bg-[var(--color-rose-50)] py-24 md:py-28">
        <div className="container-prose">
          <Reveal className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="eyebrow mb-4">Mijn eigen ervaring</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                In december 2025{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  overleed mijn oma.
                </em>
              </h2>
            </div>
            <div className="space-y-5 text-[1.05rem] leading-[1.85] text-[var(--color-ink-soft)]">
              <p>
                Ik ben enorm dankbaar voor alle kleding die ik heb mogen
                ontvangen waar ik, met haar in gedachten en haar geur om me
                heen, iets van kon maken. Ik maakte eerst een tas. Ik gebruik
                hem nu dagelijks en dat voelt heel fijn.
              </p>
              <p>
                Daarna maakte ik een kussen en ik merkte dat dat weer een heel
                andere beleving geeft. Hier kan ik mijn hoofd op leggen, het
                vasthouden en ermee slapen.
              </p>
              <p className="text-[1.1rem] font-[family-name:var(--font-cormorant)] italic text-[var(--color-ink)] py-2">
                Ik gun iedereen zo'n waardevolle herinnering. Dit draag jij
                voor de rest van je leven bij je.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERINNERINGEN AAN OPGROEIEN */}
      <section className="bg-[var(--color-cream-50)] py-24 md:py-28">
        <div className="container-prose">
          <Reveal className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="eyebrow mb-4">Herinneringen aan opgroeien</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                Afscheid is niet alleen bij overlijden,{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
                  maar ook bij leeftijden die niet meer terugkomen.
                </em>
              </h2>
            </div>
            <div className="space-y-5 text-[1.05rem] leading-[1.85] text-[var(--color-ink-soft)]">
              <p>
                Ik kan me zo goed herinneren dat ik de kast van mijn zoon moest
                uitruimen. Een klus die ik al te lang had uitgesteld. Ik voelde
                bij elk kledingstuk een herinnering: deze kreeg hij van oma en
                deze van omi. Dit boxpakje was zo fijn, want ik kon in één
                beweging over zijn ruggetje wrijven zonder de rand van een
                broekje te voelen.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-ink)] text-[1.1rem] py-2">
                Herinneringen zo klein en toch zo waardevol.
              </p>
              <p>
                Ik zat te huilen bij mijn kast, omdat de tijd dat ik dit
                voelde geweest was en niet meer terugkomt. En uiteraard maak
                je in dit geval nieuwe herinneringen. En toch vind ik het mooi
                om de oude herinneringen die je in de kleding voelt, te
                bewaren en te verwerken in iets dat ook de kinderen zelf nog
                kunnen gebruiken.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WAARDEN */}
      <section className="bg-[var(--color-linen)] py-24 md:py-32">
        <div className="container-prose">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Waar ik in geloof</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Drie dingen waar ik nooit aan torn.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luisteren",
                body: "Ieder kledingstuk heeft een verhaal. Daarom neem ik graag de tijd om te luisteren naar wie de persoon achter de kleding was. De herinneringen, eigenschappen en kleine verhalen helpen mij om niet alleen een product te maken, maar een waardevolle herinnering.",
              },
              {
                title: "Eerlijkheid",
                body: "Ik ben eerlijk over wat wel en niet mogelijk is. Ook laat ik geen ontwerp vooraf zien. Niet omdat ik geheimzinnig wil doen, maar omdat het creatieve proces ruimte nodig heeft om te ontstaan. Dat vraagt vertrouwen, en dat vertrouwen neem ik serieus.",
              },
              {
                title: "Tijd",
                body: "Goed werk laat zich niet haasten. Ik neem de tijd voor het gesprek, het ontwerp en het maakproces. Wat je ontvangt is met aandacht gemaakt, zodat het niet alleen mooi is, maar ook echt betekenis heeft.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} as="article" delay={i * 100}
                className="relative p-8 bg-[var(--color-cream-50)] rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]"
              >
                <span className="absolute top-6 right-6 display text-3xl text-[var(--color-rose-200)]">
                  0{i + 1}
                </span>
                <h3 className="display text-2xl mb-3">{v.title}</h3>
                <p className="text-[15px] leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-sage-50)] py-24 md:py-28">
        <div className="container-prose text-center">
          <h2 className="display text-3xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Heb je een verhaal{" "}
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
