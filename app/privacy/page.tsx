import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Privacyverklaring — Atelier Kim Jansen",
  description: "Hoe Atelier Kim Jansen omgaat met persoonsgegevens.",
};

function H({ children }: { children: ReactNode }) {
  return <h2 className="display text-2xl mt-10 mb-3">{children}</h2>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3">
          <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[var(--color-rose-300)] shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <section className="bg-[var(--color-cream-50)] pt-20 md:pt-28 pb-24">
      <div className="container-prose max-w-3xl">
        <p className="eyebrow mb-5">Privacyverklaring</p>
        <h1 className="display text-4xl md:text-5xl mb-10 leading-[1.05]">
          Hoe ik met jouw gegevens omga.
        </h1>

        <div className="space-y-6 text-[1rem] leading-[1.85]">
          <p>
            Bij Atelier Kim Jansen deel je soms persoonlijke informatie en
            herinneringen. Ik vind het belangrijk dat je erop kunt vertrouwen
            dat ik daar zorgvuldig en met respect mee omga. In deze
            privacyverklaring lees je welke gegevens ik gebruik, waarom ik dat
            doe en hoe ik ze bescherm.
          </p>

          <H>Wie ben ik?</H>
          <p>
            <strong>Kim Jansen</strong>, handelend onder de naam{" "}
            <strong>Atelier Kim Jansen</strong>
            <br />
            Website:{" "}
            <a className="link-underline" href="https://www.atelierkimjansen.nl">
              https://atelierkimjansen.nl
            </a>
            <br />
            E-mail:{" "}
            <a className="link-underline" href="mailto:info@atelierkimjansen.nl">
              info@atelierkimjansen.nl
            </a>
            <br />
            Vestigingsadres: Waterkers 25, 7443 LN Nijverdal
            <br />
            KvK-nummer: 42062034
          </p>
          <p>
            Ik ben verantwoordelijk voor de verwerking van jouw
            persoonsgegevens.
          </p>

          <H>Welke gegevens bewaar ik?</H>
          <p>
            Wanneer je contact met mij opneemt of een opdracht bij mij
            plaatst, kan ik de volgende gegevens verwerken:
          </p>
          <List
            items={[
              "Je naam, e-mailadres en telefoonnummer.",
              "Je adres- en factuurgegevens wanneer dat nodig is voor de administratie.",
              "Informatie die je zelf met mij deelt over de opdracht en de herinneringen die daarbij horen.",
              "Foto's van het herinneringsproduct en gespreksnotities, maar alleen wanneer je daar vooraf toestemming voor hebt gegeven.",
            ]}
          />
          <p>Ik vraag niet meer gegevens dan nodig is.</p>

          <H>Waarom gebruik ik deze gegevens?</H>
          <p>
            Ik gebruik je gegevens om contact met je te onderhouden, vragen te
            beantwoorden, een opdracht uit te voeren en mijn administratie bij
            te houden. Ook moet ik bepaalde gegevens bewaren om aan mijn
            wettelijke verplichtingen te voldoen.
          </p>

          <H>Foto's en persoonlijke verhalen</H>
          <p>
            Foto's van herinneringsproducten en persoonlijke gespreksnotities
            bewaar ik alleen wanneer je daarvoor toestemming hebt gegeven.
          </p>
          <p>
            Foto's van mijn werk bewaar ik op mijn eigen, beveiligde computer.
            Of ik foto's van jouw herinneringsproduct of jouw persoonlijke
            verhaal deel op mijn website, sociale media of in andere
            publicaties, vraag ik altijd vooraf. Dit gebeurt nooit zonder jouw
            uitdrukkelijke toestemming.
          </p>
          <p>
            Je bent uiteraard vrij om hiervoor wel of geen toestemming te
            geven. Dit heeft geen invloed op de uitvoering van je opdracht.
          </p>

          <H>Hoe lang bewaar ik jouw gegevens?</H>
          <p>
            Ik bewaar persoonsgegevens niet langer dan nodig is voor het doel
            waarvoor ze zijn verzameld.
          </p>
          <List
            items={[
              "Boekhoudkundige gegevens bewaar ik zeven jaar. Dit is wettelijk verplicht.",
              "Overige communicatie bewaar ik niet langer dan nodig is voor het contact en de uitvoering van de opdracht.",
              "Foto's en gespreksnotities waarvoor je toestemming hebt gegeven, bewaar ik zolang dat nodig is voor het afgesproken doel. Je kunt je toestemming hiervoor altijd intrekken.",
            ]}
          />

          <H>Google en mijn website</H>
          <p>
            Ik maak gebruik van Google Search Console om te bekijken hoe mijn
            website wordt gevonden via Google. Hiermee kan ik bijvoorbeeld zien
            hoe vaak mijn website in de zoekresultaten verschijnt en op welke
            zoekopdrachten bezoekers mijn website vinden.
          </p>
          <p>
            Google verwerkt hiervoor gegevens over de prestaties van mijn
            website. Meer informatie hierover vind je in het privacybeleid van
            Google.
          </p>
          <p>
            Mijn website kan daarnaast functionele cookies gebruiken die nodig
            zijn om de website goed te laten werken. Voor eventuele andere
            cookies informeer ik je vooraf en vraag ik toestemming wanneer dat
            wettelijk verplicht is.
          </p>

          <H>Delen en beveiligen van gegevens</H>
          <p>
            Ik deel jouw gegevens niet zomaar met anderen. Wanneer dit
            noodzakelijk is voor bijvoorbeeld mijn boekhouding, websitebeheer
            of het uitvoeren van mijn administratie, kunnen gegevens worden
            verwerkt door betrokken dienstverleners. Ook kan ik wettelijk
            verplicht zijn gegevens te verstrekken.
          </p>
          <p>
            Ik ga zorgvuldig met jouw gegevens om en neem passende maatregelen
            om ze te beschermen tegen verlies, misbruik en onbevoegde toegang.
          </p>

          <H>Jouw rechten</H>
          <p>Je hebt het recht om:</p>
          <List
            items={[
              "Je persoonsgegevens in te zien.",
              "Onjuiste gegevens te laten corrigeren.",
              "Gegevens te laten verwijderen wanneer dat mogelijk is.",
              "Bezwaar te maken tegen het gebruik van je gegevens.",
              "Je toestemming in te trekken.",
            ]}
          />
          <p>
            Wil je hiervan gebruikmaken? Stuur dan een e-mail naar{" "}
            <a className="link-underline" href="mailto:info@atelierkimjansen.nl">
              info@atelierkimjansen.nl
            </a>
            .
          </p>
          <p>
            Heb je een klacht over de manier waarop ik met jouw gegevens omga?
            Dan kun je contact opnemen met de Autoriteit Persoonsgegevens.
          </p>

          <p className="mt-12 text-sm text-[var(--color-ink-mute)]">
            <strong>Laatst bijgewerkt: november 2026.</strong> Heb je nog
            vragen?{" "}
            <Link href="/contact" className="link-underline">
              Neem contact op
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
