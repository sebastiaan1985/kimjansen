# Sitestructuur Atelier Kim Jansen

De XML-sitemap wordt door Next.js gegenereerd op:

- `https://www.atelierkimjansen.nl/sitemap.xml`

## Opgenomen pagina's

| URL | Functie |
| --- | --- |
| `/` | Homepage |
| `/producten` | Producten en mogelijkheden |
| `/portfolio` | Portfolio |
| `/werkwijze` | Werkwijze |
| `/over` | Over Kim |
| `/contact` | Contact |
| `/privacy` | Privacyverklaring |
| `/algemene-voorwaarden` | Algemene voorwaarden |

## Technische afspraken

- Alleen publieke pagina's met een HTTP 200-respons staan in de sitemap.
- De 404-pagina en technische routes staan niet in de sitemap.
- `lastmod` wordt pas toegevoegd wanneer er betrouwbare wijzigingsdatums per pagina beschikbaar zijn.
- Verouderde sitemapvelden zoals `priority` en `changefreq` worden niet gebruikt.
- `robots.txt` verwijst zoekmachines naar de XML-sitemap.
