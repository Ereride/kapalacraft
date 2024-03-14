![käpäläcraft](public/img/logo.png)
# Käpäläcraft - Luovuuden Nurkkaus

Tervetuloa Käpäläcraftin Luovuuden Nurkkaukseen, seikkailuun elämän kirjavan kudoksen parissa!

## Käyttötarkoitus

Käpäläcraft tarjoaa virtuaalisen nurkkauksen, jossa voi ilmaista luovuuttaan eri käsityömuodoissa ja jakaa iloa tekemisen kautta. Sivusto sisältää erilaisia luovia projekteja ja tarjoaa inspiraatiota sekä mahdollisuuden tutustua Minnan luomuksiin.

## Kuinka Käyttää

- **Ompelu, Virkkaus, Askartelu**: Selaa erilaisia käsityöprojekteja ja inspiraatiota Minnan toteuttamista töistä.
- **JavaScript Carousel**: Tutustu JavaScript-kuvakaruselliin, joka reagoi hiiren liikkeisiin. Voit myös muokata koodia omien tarpeidesi mukaan.
- **API Keyn Haku ja Datankeruu**: Voit hakea dataa Google Sheetsistä käyttämällä API-avainta. Seuraa ohjeita `.env`-tiedoston luomiseen ja API-avaimen sijoittamiseen.
- **Seuraa Suunniteltuja Lisäyksiä**: Tutustu tuleviin lisäyksiin, kuten kommentointialueeseen ja tähtiarvosteluun.

## Sovelluksen Ottaminen Käyttöön

### Noden avulla (tarvitset Node expressin)
1. Luo .env-tiedosto ja lisää siihen API-avain:
    - Aloita luomalla uusi tiedosto nimeltä .env projektisi juurikansioon.
    - Avaa .env-tiedosto tekstieditorilla ja lisää siihen seuraava rivi: API_KEY=API-avain-tähän
    - Korvaa teksti "API-avain-tähän" omalla Google Sheets -tietokantaasi liittyvällä API-avaimella. Voit hankkia tämän avaimen Google Cloud -palvelusta.
2. Käytä getSheetData()-funktiota hakemaan dataa Google Sheetsistä:
    - Käytä JavaScriptiä getSheetData()-funktion avulla datan hakemiseen Google Sheetsistä.
    - Varmista, että {documentId} ja {range} korvataan oikeilla arvoilla Google Sheetsissäsi.

### Ilman Nodea
Voit testata ilman Node-käyttöä lisäämällä API-avaimen suoraan koodiin:
1. Muokkaa getSheetData()-funktiota lisäämällä API-avain suoraan: const apiKey = "API-avain tähän"
    - Voit poistaa tai kommentoida fetch ('/api-key') funktio, koska sitä ei käytetä tässä tavassa
2. Muista kutsua getSheetData()-funktiota, jotta se suoritetaan

## Projektin Kuvaus

Projekti tarjoaa virtuaalisen luovuuden nurkkauksen eri käsityömuodoille. Vaikka projekti jäi hieman kesken, se tarjoaa hyvän pohjan tuleville kehityksille. Sivusto on julkaistu Renderillä ja saatavilla osoitteessa [Käpäläcraft - Luovuuden Nurkkaus](https://kapalacraft.onrender.com/).

## Suunnitellut Lisäykset

Tulevaisuuden suunnitelmiin kuuluu kommentointialueen, tähtiarvostelun, kävijälaskurin, portfoliosivun ja aside-alueiden käytön lisääminen sivustolle.

Tervetuloa tutkimaan luovuuden kiehtovaa maailmaa Käpäläcraftissa! Toivottavasti löydät inspiraatiota ja iloa omiin projekteihisi.

© 2024 Minna. Kaikki oikeudet pidätetään.