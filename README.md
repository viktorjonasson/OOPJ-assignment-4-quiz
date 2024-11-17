_Hoppa direkt till ["Backlog (kravspec funktionalitet)"](#backlog)_
# Intro

## Bakgrund

Er mormor (eller en annan, liknande, person) har länge älskat att spela fråge-mobilspelet Quizkampen. Men på sistone har det gått utför med spelet! Det har lagts till massa extra funktionalitet så att mormor knappt känner igen sig. Det är galet mycket reklam, irrelevanta ”side quests” och dessutom är allt så litet och plottrigt på mobilen at man knappt ser nåt.

Nu frågar mormor dig: ”Du som är programmerare, kan inte du skriva ett likadant spel till mig, fast bättre? Det ska helst bara ha grundfunktionaliteten från QuizKampen (se nedan), gå att köra i laptopen, ingen reklam och helst med lite roligare frågor också?”

Och det är såklart ni kan!

Spelet Quizkampen går ut på att man tävlar, två och två per spel, på att svara rätt på quizfrågor. Frågorna har olika kategorier och spelarna turas om att välja vilken kategori de ska få frågor ifrån. Under en omgång får spelarna frågor från en vald kategori, efter varje omgång summeras poängställningen. Man spelar ett visst antal omgångar innan den totala poängen räknas. Den spelare som har flest poäng när spelet är slut har vunnit.

## Omfattning

Ni behöver bara implementera den spel-funktionalitet som kallas för ”Klassiskt läge” och där man spelar mot en slumpad spelare, den funktionalitet som nås från de två röda ringarna på de första 2 bilderna.

![Screenshot_2024-11-17_at_19 41 18](https://github.com/user-attachments/assets/a37e985c-8e65-4e01-8d71-d3eb2bbc1e1f)

När spelat startar får spelare 1 (=förste spelaren som ansluter till ett spel) välja kategori och sedan får hen svara på 3 frågor i den valda kategorin. Spelare 2 (den andre som ansluter till ett spel) får börja med att svara på frågorna i den kategori som spelare 1 har valt. Sedan får spelare 2 välja kategori och så håller det på tills 6 olika kategorier har avverkats. Den som har flest rätta svar då blir spelets vinnare.

![Screenshot_2024-11-17_at_19 40 22](https://github.com/user-attachments/assets/4b98a737-2d04-4204-bdae-758be1c3c304)

För att ordentligt förstå vad spelet går ut på, ladda ner gratis-versionen av Quizkampen och spela några omgångar innan ni börjar planera grupparbetet! Läs också backloggen (se nedan) noggrant innan ni kör igång.

# Arbetssätt

Grupparbetet ska genomföras på samma sätt som i ett riktigt Agilt IT-projekt, dvs, ni strävar efter att alltid ha en fungerande version av programmet att visa upp medan ni jobbar er fram med ärendena i backloggen.

Backloggen är beställarens ”önskelista”. Den innehåller allt som beställaren vill att ni bygger. Vissa beställningar är enklare, vissa är mer komplexa. Det är er uppgift i teamet att fundera kring beställningarna. Vad innebär varje beställning? Hur kan varje beställning byggas? Vilka beställningar måste göras före andra beställningar? 

**Notera att vissa av punkterna i backloggen är delmål, och dessa vill jag alltså inte se i den slutgiltiga applikationen, utan de är rekommendationer om i vilken ordning ni bör bygga ut appen**. **Dessa pukter är märkta med DELMÅL.**

Arbetet struktureras genom att ni jobbar i sprintar med vissa återkommande aktiviteter. Ni bestämmer själva hur långa sprintarna ska vara, **3-4 dagar kan vara rimligt**.

## Sprintplanering

- Ett längre möte som hålls första dagen i varje sprint.
- Börja längst upp i backloggen och fundera, för varje beställning, hur den kan byggas. Börja med de obligatoriska punkterna och ta övriga i mån av tid.
- Bryt ner byggandet av varje punkt i exakta steg som beskriver exakt hur den ska implementeras. Ingen punkt bör ta längre än en timme att bygga (att saker ibland kan ta längre tid än man tror är inget ni behöver ta hänsyn till i planeringen).
- Lista alla steg och lägg upp dem som lappar på en ScrumBoard (t.ex på Trello.com). De steg som måste göras först ska ligga högst upp, sedan följer efterstående, i bygg- och prioritetsordning. Det som är mest prioriterat, i stunden, är alltid det som ska göras först.

## Daily stand-ups

- Kortare avstämningsmöte som hålls varje dag.
- Alla gruppmedlemmar berättar vilket ärende de jobbar med, hur det går, när det beräknas vara klart, om det finns några förhinder att jobba under dagen.
- Om någon uppgift visar sig vara svårare än man trodde initialt, ventilera detta på mötet och hitta en ny strategi att angripa uppgiften. Kanske behöver ni vara flera som hjälps åt att jobba med den? Kanske är det bättre att skjuta på denna uppgift tills vidare? Backa då lappen på scrumboarden och ta en annan lapp tills vidare.

## Retrospektiv

- Ett möte som hålls i slutet av varje sprint.
- Alla i gruppen listar vad de tycker har funkat bra och vad som har funkat mindre bra (”Start, Stop, Continue” är en enkel modell att hålla sig till). Bara konstruktiv kritik!
- Fundera på hur ni kan dra lärdom av eventuella missar i denna sprint för att göra nästa sprint bättre.
- Det går givetvis jättebra att prata med varandra i gruppen även utanför dessa, formaliserade, möten. Det går också bra att prata med personer i andra grupper.

## Arbetets gång

1. Alla delmoment till de beställningar ni jobbar på ska vara listade på projektets ScrumBoard.
2. När ni ska börja jobba med ett delmoment tar ni delmomentets lapp på ScrumBoarden och flyttar den för att markera att ”nu är det någon som jobbar med detta ärende”. Jobba gärna i feature-brancher i git som ni sedan mergar successivt. 
3. När ni gjort klart ett delmoment, flytta lappen till ”Klar”-kolumnen. Turas om att testa varandras kod för att säkerställa att allt funkar som det ska. GitHub har stöd för ”Pull Requests” vilket innebär att man ber andra i gruppen att dra ner ens kod och godkänna den innan den mergas in, testa gärna detta.

Observera att ni bestämmer själva vilka ärenden ni ska jobba med. Det är inget krav, för att bli godkänd på uppgiften, att allt absolut ska göras (det finns inget verkligt IT-projekt som någonsin blivit ”klart”, projekten självdör när produkten är tillräckligt mogen och andra, högre prioriterade saker dyker upp, eller när kunden inte vill betala längre). 

Notera att detta INTE betyder att det är ok att inte göra något utöver att implementera den obligatoriska funktionaliteten, alla grupper förväntas implementera så mycket funktionalitet som hinns med under tiden projektet pågår. All resterande tid av ”Objektorientering och Java”-kursen är vigd åt detta grupparbete.

# Redovisning

- Redovisning sker inför hela klassen **fredagen den 29 nov (distansklassen)**.
- Varje grupp förväntas demonstrera sitt spel, berätta om arbetets gång, dela med sig av lärdomar, vad ni har lärt er och visa de mest spännande delarna av koden.
- Varje gruppmedlem ska berätta vad den personen har bidragit med och visa kod som de har skrivit.
- Varje grupp kommer att ha ca 20 min till sitt förfogande. Vi börjar direkt på morgonen och är klara för dagen när sista gruppen har redovisat.

# Betygskriterier

Enbart G ges för denna uppgift. Det är obligatoriskt att delta i grupparbetet, med godkänt resultat, för att kunna bli godkänd på kursen.

Krav för G:

- De beställningar som är märkta med **OBL** ska vara implementerade.
- Sigrun måste vara inbjuden till erat gitHub-projekt.
- Samtliga medlemmar som redovisar uppgiften ska ha deltagit i grupparbetet.
- Samtliga gruppmedlemmar som redovisar uppgiften ska ha checkat in kod i ert projekts repo på gitHub.
- Samtliga gruppmedlemmar som redovisar uppgiften ska ha tagit lappar på ScrumBoarden och jobbat med dem.
- Samtliga gruppmedlemmar som redovisar uppgiften måste förstå all kod i ert projekt.
- **Er applikation ska använda sig av client-server-arkitektur, era klienter måste kunna koppla upp sig, till servern, från en annan dator, och spela parvis.**

# Startläge

**Jag rekommenderar starkt att ni startar med att bygga en liten mikro-variant på spelet, som sedan successivt byggs ut, under kontrollerade former, istället för att dela upp all funktionalitet, låta var och en bygga sin del och sedan försöka foga ihop allt på slutet.**

Förslag för att komma igång: Börja med att bygga en enkelt client-server-applikation där en klient kopplar upp sig mot en server. Klienten laddar sedan ner en fråga med 4 svarsalternativ från servern. Användaren svarar på frågan i klientapplikationen och får feedback om svaret är rätt eller fel. Pusha upp koden till ett eget repo på GitHub dit samtliga i gruppen har collaborator-access. **Denna applikationer ska sedan successivt byggas ut för att bli så lika den ”riktiga” Quizkampen som möjligt.**

<a id="backlog"></a>
# Backlog (kravspec funktionalitet)

- Det ska vara minst 2 frågor per spel. (I det riktiga spelet har man 3 frågor, i 6 olika kategorier, per spel, men detta kommer att ta lång tid att testa av om ni bygger från början. Börja med bara två frågor och få det att funka först, sen kan ni bygga ut) **(OBL, DELMÅL)**
- Frågorna ska vara indelade i olika ämneskategorier. **(OBL)**
- Frågorna i spelet ska vara uppdelade i ronder med initialt 2 frågor/rond så att vi sammanlagt har 2 ronder/spel och sammanlagt 4 frågor/spel. (Även denna punkt är till för att få till rond- hanteringen initialt utan att det tar för lång tid att testa av, ni kommer att behöva bygga ut detta sen) **(OBL, DELMÅL)**
- Det ska gå att ställa in hur många frågor som ska finnas i en rond och hur många ronder som ska ingå i ett spel, via en Properties-fil. Denna fil ska ligga på server-sidan och är tänkt för en administratör att ändra properties i. **(OBL)**
- De frågor som ingår i samma rond ska tillhöra samma kategori. **(OBL)**
- Programmet ska hålla reda på antal poäng som en användare har per rond. **(OBL)**
- **Ni har viss frihet när ni bygger spelmotorn, det måste inte vara *exakt* som den riktiga Quizkampen, så länge som vi har, i princip, samma spelupplevelse. Här är 2 förslag på hur spelet kan funka**
    - **Alternativ 1:** En användare ska kunna ansöka om att få spela från klienten (kan ske implicit när klienten startas). När servern har mottagit ”spelansökningar” från två olika klienter sätts ett spel igång och dessa två användare får spela mot varandra.
    - **Alternativ 2:** När en spelare ansluter börjar hens spel och hen får svara på den första rundan frågor tills vidare, när nästa spelare ansluter blir hen inkopplad i det påbörjade spelet och får göra frågorna i rond 1. (detta är liknande funktionalitet som i ”Spel mot slumpad spelare” i riktiga Quizkampen)
    - Ett av alternativen är **(OBL)**
- Man ska kunna vara två spelare per spel som spelar mot varandra och turas om att svara på frågorna i en rond på ett koordinerat sätt. **(OBL)**
- Klientapplikationen ska ha ett grafiskt interface där varje fråga och de fyra svarsalternativen visas. Svarsalternativen visas på var sin knapp. När användaren trycker på en knapp ska den byta färg och för att markera om användaren svarade rätt eller fel. **GUI:t måste inte likna den riktiga Quizkampen, ni har konstnärlig frihet att låta appen se hur hur ni vill så länge som den implementerar grundfunktioneliteten som finns i Quizkampen (OBL)**
- Godtyckligt antal spelare ska kunna spela parallellt, två och två. **(OBL)**
- ***Utvisning av resultat:***
    - När en användare börjar spela i en rond ska användarens resultat för ronden vara dolt för motståndaren tills motståndaren också har svarat. **(OBL)**
    - Vice versa: När en användares motståndare börjar spela i en rond ska motståndarens resultat för ronden vara dolt för användaren tills användaren har svarat klart. **(OBL)**
    - När ett spel avslutas ska bägge spelare kunna se resultat för bägge spelare. **(OBL)**
    - När bägge spelare har spelat en rond ska bägge spelare få se bägge spelares resultat för ronden. **(OBL)**
    - När bägge spelare har spelat en rond ska bägge spelare få se bägge spelares resultat för denna rond och för tidigare spelade ronder i detta spel. **(OBL)**

***Ej obligatoriskt:***

- Det ska finnas en ”Ge Upp”-knapp som avbryter en användares spel (jmf. den vita flaggan längst upp till vänster i riktiga Qiuzkampen).
- Det ska finnas en tidsgräns för hur länge det får ta att svara på varje fråga. När denna tidsgräns har överskridits räknas det som om användaren har svarat fel.
- En användare ska kunna ändra bakgrundsfärg på klientappen.
- Varje användare ska kunna välja mellan några olika avatarer, spelarens avatar visas under spelets gång.
- När en spelare spelar mot en motståndare ska bägges avatarer visas i klientappen.
- En användare ska kunna registrera sig från klienten. (Det räcker att skriva in sitt användarnamn i en textruta, sedan kan detta namn mappas mot eventuellt sparat användardata på serversidan, ingen lösenordshantering behövs om ni inte gärna vill implementera detta).
- En användare ska kunna ansöka om att få spela mot en annan, registrerad, spelare genom att ange den spelarens namn.
- Programmet ska spara användarstatistik om varje spelare, hur många rätt och fel hen har. Det ska, i klientappen, gå att titta på en topplista över alla spelares resultat.
- De två spelare som spelar ska kunna chatta med varandra.
- All funktionalitet i den riktiga Quizkampen, som inte omnämns i denna backlogg, får gärna implementeras av gruppen (se bara till att den inte stör mormors preferenser för den ”klassiska spelupplevelsen”)
- Om ni kommer på features som skulle förhöja spelupplevelsen, men som inte finns i orginalspelet, får ni gärna bygga dessa, så länge de obligatoriska önskemålen fortfarande är implementerade.

# Tips

*Tips för en smidig grupparbetes-upplevelse:*

- **Bli inte överväldigade!** Tänk, vad är basfunktionaliteten i spelet? Börja att implementera den, planera inte att ni ska göra ”allt” från början. När ni är klara med den absoluta grunden kan ni bygga ut i mån av tid, men gör ingen utbyggnad förrän grunden är på plats.
- **Snälltolka varandra!**!! Om det uppstår gnissel i gruppen är det bättre att reda ut det på en gång. Att sitta hemma och sura har aldrig varit till nytta för någon.
- Det finns inga krav på att spelet ska se snyggt ut. Korrekt funktionalitet är viktigare än design. Om ni måste prioritera, prioritera funktionalitet.
- Om ni delar upp arbetet, det räcker inte att bara bestämma vem som ska göra vad, ni måste också se till att alla parter har en mycket tydlig bild av hur delarna ska fogas samman. Det är ofta betydligt svårare att pussla ihop färdiga delar av ett program än att skriva delarna i fråga.
- För ett exempel för hur man kan koordinera spel för oändligt antal spelare, som spelar 2 i taget, kolla gärna TicTacToeSimple-exemplet i Sigruns github (Ligger i Sprint 4-repot)
- Det svåraste i denna uppgift är att få till spelmotorn. Prioritera den funktionaliteten! Snygg grafik och vettiga quiz-frågor är sekundärt.
- Var, från början, extremt tydliga med om ni har begränsningar på det arbete ni kan göra (t.ex. barn varannan vecka, risk för VAB, jobb). Respektera varandra och visa hänsyn så kommer arbetet att kunna flyta på trots att vi alla har olika förutsättningar.
- ObjectOutputStream cachar ibland sina objekt. Om ni skickar samma objekt igen och igen i en ObjectOutputStream, och uppdaterar objektet mellan varven, men uppdateringarna verkar inte komma igenom när ni skickar objektet, kör en **reset**() på strömmen efter att ni skickar, så brukar det fixa sig.
- Målet med grupparbetet är inte att ni, i första hand, ska få ha en harmonisk upplevelse utan att ni **ska lära er så mycket som möjligt**. Om det uppstår jobbigheter, det kan vara missförstånd mellan gruppmedlemmar, git-kaos, svårigheter att sätta ihop delarna till programmet mm, se detta som fantastiska möjligheter att lära er hantera saker som ni aldrig hade stött på om allt bara hade gått smidigt. Jobbigt är **BRA**. Grupparbetet är ingen bestraffning, se det som en fantastisk möjligheter att uppleva autentiska situationer som dagligen uppstår på våra IT-företag.
