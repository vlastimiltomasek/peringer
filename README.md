# Masáže Martin Peringer Brno – webové stránky

Adresa webu: <https://www.masazeperingerbrno.cz>
Provozovna: Kubíčkova 19, Brno

## Struktura souborů

| Soubor | Co dělá |
|--------|---------|
| `index.html` | Jednostránkový web (Hero, Služby, Sportovcům, O mně, Etika, Kontakt, Galerie Bzenec). |
| `style.css` | Vzhled — část 1/2 (proměnné, hlavička, hero, motto, večerní pruh, služby). |
| `style2.css` | Vzhled — část 2/2 (sport, o mně, etika, kontakt, galerie, patička, breakpointy). |
| `script.js` | Mobilní menu, plynulé animace při scrollu, lehký parallax na hero. |
| `robots.txt` | Povolení indexace pro roboty + odkaz na sitemapu. |
| `sitemap.xml` | Mapa webu pro Google / Seznam. |
| `.htaccess` | Vynucení HTTPS, www, gzip, cache, bezpečnostní hlavičky (Apache). |

## Nahrání na server

1. Obsah celé této složky (`www upload/`) nahraj na svůj webhosting do kořene domény (typicky `/www/` nebo `/htdocs/` nebo `/public_html/`).
2. Soubor `.htaccess` patří **také do kořene** — vyžaduje Apache (běžné u většiny českých hostingů: Wedos, Forpsi, Active24, Vshosting).
3. Po nahrání ověř, že se web správně otevírá na `https://www.masazeperingerbrno.cz/` a že přesměrování `http://` → `https://` funguje.

## Fotografie

Web aktuálně používá fotografie z Unsplash (licence Unsplash — volné komerční využití bez nutnosti uvádění zdroje). Konkrétně:

- **Hero:** masér při práci – Jakub Klucký, Unsplash
- **Sekce Sportovcům:** detail masáže – Toa Heftiba & engin akyurt, Unsplash
- **Sekce Etika (textura na pozadí):** přírodní textil – Kier in Sight Archives, Unsplash

Fotky se načítají přímo z Unsplash CDN, neukládají se na vašem serveru. To znamená:
- ✅ rychlejší nasazení, žádné stahování,
- ❗ web vyžaduje funkční připojení k Unsplash CDN (běžně dostupné odkudkoliv),
- 🔧 pokud chcete fotky **hostovat lokálně**, stáhněte si je z Unsplash a změňte URL v `index.html` a `style.css` na lokální cestu (např. `images/hero.jpg`). Pro vlastní fotky maséra a salonu je to doporučený postup.

## Co bychom mohli časem doplnit

- Vlastní fotografie maséra a brněnské provozovny (vyšší důvěra).
- Plnohodnotný rezervační systém (Reservio, Booksy, Noona).
- Google Business Profile pro lokální SEO „masáže Brno“.
- Google Analytics / Plausible pro měření.
- Galerie reálných fotografií salonu.
- Reference / hodnocení klientů (např. import z Google).
