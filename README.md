> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# FDND Squad page
Bezoek de GitHub en persoonlijke website van alle FDND studenten en docenten per squad.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Met de squadpage kan je per squad alle members inzien. Een member heeft een eigen kaartje met daarin een avatar, GitHub link en persoonlijke link.
Ook is het mogelijk om een squad te sorteren op naam A-Z of naam Z-A.
<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://user-images.githubusercontent.com/112861614/230779231-650efe97-4f4b-4682-bcb0-2cbe2f8e42a8.png)

<!-- Voeg een link toe naar Github Pages 🌐-->
https://distinct-clam-sweatshirt.cyclic.app/ 

## Kenmerken

De FDND Squad page is gemaakt met Node.js, EJS en Express. De dynamische data van de members en squads worden uit de [WHOISAPI](https://whois.fdnd.nl/api/v1/squad/) gehaald.



Node is een zogehete JavaScript-runtime-omgeving. Dit betekent dat je met Node, niet vast zit aan client-side JavaScript. Met Node kan je een back-end opzetten en hiermee server-side JavaScript inzetten. Dit is betrouwbaarder en vooral voorspelbaarder dan wanneer je voor ieder verschillende browser, apparaat, verbinding, enz.. moet afstemmen. Daarnaast is server-side JavaScript (meestal) veel sneller, omdat deze code op een externe server wordt uitgevoerd.

EJS is een template framework waarmee je gebruikelijke JavaScript inline op de back-end kan laten uitvoeren. Dit maakt bijvoorbeeld een forEach loop mogelijk tussen de HTML code, zodat je templates kan vullen met data uit het framework.

Express brengt deze onderdelen samen en heeft ook functies als routing. Ook maakt Express het mogelijk om RESTful API's te bouwen en gebruiken met Node JS.

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

## Installatie
<!-- Bij Installatie staat stap-voor-stap beschreven hoe je de development omgeving moet inrichten om aan de repository te kunnen werken. -->
## ⬇️ Installatie
Fork het project en voer eerst `npm install` uit in de terminal om alle nodige packages en dependencies binnen te halen. Vervolgens maakt `npm start` een port vrij om de website te bekijken in de browser.

## Gebruik

Bezoek de FDND Squad page via de volgende link: https://distinct-clam-sweatshirt.cyclic.app/ .
De standaard geselecteerde squad is Squad B, aangezien ik ook in deze squad zit.

![image](https://user-images.githubusercontent.com/112861614/230780228-e6a19101-2de4-4282-87ca-63edd45c03bc.png)

Om een andere Squad te kunnen inzien, selecteer je links in de navigatie balk een andere Squad naam, zoals "Squad C".

![image](https://user-images.githubusercontent.com/112861614/230780295-44d290ee-3529-453e-aea6-abc0dd3a6a9b.png)

Vervolgens kun je nog sorteren op naam.
Klik rechts in de navigatie balk op het selectie blokje naast "Sorteren op: ". Selecteer "naam A-Z" om de members op alfabetische volgorde te sorteren of op "naam Z-A" voor het omgekeerde. De pagina ververst zichzelf en toont de aangevraagde sortering. 

![image](https://user-images.githubusercontent.com/112861614/230780494-1fb5acfc-b4c7-4a7c-8e31-7741efe558f0.png)

Als laatste kan je het GitHub profiel of persoonlijke link openen van een member, door op de bijbehorende ronde icoontjes te klikken.

![image](https://user-images.githubusercontent.com/112861614/230780584-a22e73d3-c19e-435e-91e5-a7fe0fb478b9.png)

## Bronnen

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
