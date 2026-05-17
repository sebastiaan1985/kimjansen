import Link from "next/link";
import Ornament from "@/components/Ornament";
import ImageCard from "@/components/ImageCard";
import HeroVideo from "@/components/HeroVideo";

export const metadata = {
  title: "Over Kim — Atelier Kim Jansen",
  description: "Het verhaal achter het atelier. Wie is Kim, en waarom maakt ze herinneringsproducten?",
};

export default function OverPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-12">
        <div className="container-prose">
          <p className="eyebrow mb-6">Over Kim</p>
          <h1 className="display text-4xl md:text-6xl leading-[1.04] max-w-4xl">
            Ik maak van stof iets dat{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic text-[var(--color-rose-300)] font-light">
              langer blijft dan een mens.
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
              Ik ben begonnen met jasjes. Spijkerjasjes met borduurwerk,
              paisley-stof op de achterkant, kleur op plekken waar je het niet
              verwacht. Mensen vroegen om iets unieks, ik maakte het. Eerst
              voor vriendinnen. Toen voor vrienden van vriendinnen. Toen voor
              mensen die ik via Instagram nog nooit had ontmoet.
            </p>
            <p>
              Op een dag belde iemand of ik van de overhemden van haar vader
              iets kon maken. Hij was net overleden. Ze wist alleen dat ze die
              kleding niet wilde wegdoen, maar ook niet in een doos op zolder
              wilde laten verstoffen. Of ik wilde luisteren. En kijken wat
              eruit zou komen.
            </p>
            <p className="text-[1.1rem] font-[family-name:var(--font-cormorant)] italic text-[var(--color-ink)] py-2">
              Vanaf dat moment wist ik dit: dit is wat ik wil doen.
            </p>
            <p>
              Een jasje, een deken, een kussen, een sjaal — het maakt niet uit
              wat het wordt. Wat ertoe doet is dat het gemaakt is met aandacht,
              met luisteren, met de stoffen die iemand droegen toen die er nog
              was. Ik beloof geen perfectie. Ik beloof dat ik het maak alsof
              het van mezelf is.
            </p>
            <p>
              Mijn atelier is klein. Ik werk in mijn eigen tempo, met de
              naaimachine die ik van mijn moeder kreeg, omringd door stoffen
              die nog moeten worden wat ze gaan zijn. Ik neem niet meer
              opdrachten aan dan ik aandacht voor heb.
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

      {/* WAARDEN */}
      <section className="bg-[var(--color-linen)] py-24 md:py-32">
        <div className="container-prose">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Waar ik in geloof</p>
            <h2 className="display text-3xl md:text-5xl leading-[1.05]">
              Drie dingen waar ik nooit aan tornen.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tijd",
                body: "Goed werk laat zich niet haasten. Ik werk in seizoenen, niet in deadlines. Wat je krijgt is iets waar tijd in zit — zichtbaar en onzichtbaar.",
              },
              {
                title: "Luisteren",
                body: "Het gesprek is het halve werk. Soms zit het in een achteloze opmerking. In wat je niet zegt. In de stof die je aarzelend uit de tas trekt.",
              },
              {
                title: "Eerlijkheid",
                body: "Ik laat geen ontwerp vooraf zien. Niet omdat ik geheimzinnig wil doen, maar omdat het maakproces vrij moet zijn. Vertrouwen is de prijs.",
              },
            ].map((v, i) => (
              <article key={v.title} className="relative p-8 bg-[var(--color-cream-50)] rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]">
                <span className="absolute top-6 right-6 display text-3xl text-[var(--color-rose-200)]">
                  0{i + 1}
                </span>
                <h3 className="display text-2xl mb-3">{v.title}</h3>
                <p className="text-[15px] leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSPIRATIE - GALLERY STRIP */}
      <section className="bg-[var(--color-cream-50)] py-24 md:py-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
            <div>
              <p className="eyebrow mb-4">In het atelier</p>
              <h2 className="display text-3xl md:text-5xl leading-[1.05]">
                Hier wordt het gemaakt.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-[1.85]">
                Een naaimachine. Een lade vol garen. Een tafel onder een raam
                op het noorden. Stoffen die wachten, en stoffen die net klaar
                zijn. Ik werk alleen, en dat is precies hoe ik het wil.
              </p>
              <Link href="/portfolio" className="inline-block mt-6 link-underline text-sm tracking-wide">
                Bekijk gemaakte stukken →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <ImageCard tone="taupe" pattern="weave" aspect="portrait" />
              <ImageCard tone="rose" pattern="botanical" aspect="portrait" className="mt-8" />
              <ImageCard tone="sage" pattern="stitch" aspect="portrait" />
            </div>
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
