export type OrderStyle = "numbered_dot" | "numbered_parenthesis" | "dot";

export interface Rule {
    text: string
    orderStyle?: OrderStyle
    rules?: Rule[]
}

export interface Standard {
    title: string,
    orderStyle?: OrderStyle
    rules: Rule[]
}

export const standards: Standard[] = [
    {
       title: "Zasady zapewniające bezpieczne relacje między Dzieckiem a Personelem Zboru. Zachowania niedozwolone wobec Dzieci.",
       rules: [
        {text: "Personelem Zboru są wszyscy Pracownicy Zboru niezależnie od łączącego ich ze Zborem stosunku prawnego, w szczególności duchowni, pracownicy, wolontariusze, liderzy służb zborowych, nauczyciele szkółek niedzielnych, etc."},
        {text: "Pracownicy Zboru są zobowiązani:", orderStyle: "numbered_parenthesis", rules: [
            {text: "Odnosić się do Dzieci z uważnością, szacunkiem, cierpliwością i wyrozumiałością;"},
            {text: "Uwzględniać w sposobie prowadzenia zajęć i relacjach z Dziećmi ich wiek i dojrzałość intelektualną i emocjonalną, a także niepełnosprawność i specjalne potrzeby edukacyjne;"},
            {text: "Czuwać nad bezpieczeństwem Dzieci."}
        ]},
        {text: "Pracownikom Zboru zakazuje się", orderStyle: "numbered_parenthesis", rules: [
            {text: "stosowania jakichkolwiek form przemocy fizycznej wobec Dzieci, za wyjątkiem sytuacji w których jest ona niezbędna w celu uniknięcia grożącego Dziecku bezpośredniego niebezpieczeństwa;"},
            {text: "niestosownego kontaktu fizycznego z Dziećmi, w szczególności kontaktu niejawnego, ukrywanego, podejmowanego bez zgody Dziecka, nieadekwatnego do sytuacji, wieku i dojrzałości Dziecka; dopuszczalny kontakt fizyczny powinien być w naturalny sposób związany z zabawą, pomocą Dziecku w czynnościach higienicznych, koniecznością zapewnienia Dziecku bezpieczeństwa, potrzebą uspokojenia Dziecka;"},
            {text: "stosowania jakichkolwiek form przemocy psychicznej wobec Dzieci, w szczególności ośmieszania, zawstydzania, upokarzania, lekceważenia, lub obrażania Dzieci;"},
            {text: "dyskryminowania i nierównego traktowania Dzieci z jakiegokolwiek powodu;"},
            {text: "nawiązywania z Dziećmi relacji o charakterze romantycznym, lub erotycznym,"},
            {text: "nawiązywania z Dziećmi jakichkolwiek relacji utrzymywanych w tajemnicy przed Rodzicami, lub Opiekunami;"},
            {text: "kontaktowania z Dziećmi poza zajęciami, w szczególności drogą elektroniczną, bez wiedzy Rodziców, lub Opiekunów;"},
            {text: "ujawniania jakichkolwiek informacji wrażliwych i poufnych dotyczących Dziecka, w szczególności jego sytuacji osobistej, rodzinnej, ekonomicznej i zdrowotnej,"},
            {text: "utrwalania i wykorzystywania wizerunku Dzieci bez uprzedniej zgody Rodziców, lub Opiekunów"},
            {text: "przebywania z Dzieckiem sam na sam w zamkniętym pomieszczeniu;"},
            {text: "spania w tym samym pokoju, lub namiocie co Dziecko podczas obozów, biwaków i innych wyjazdów, za wyjątkiem zbiorczych sal noclegowych w hostelach i schroniskach;"},
            {text: "prezentowania Dzieciom niestosownych treści"},
            {text: "zachęcania Dzieci do spożywania alkoholu, lub innych środków odurzających."}
        ]}
       ] 
    },
    {
        title: "Wymogi dotyczące bezpiecznych relacji pomiędzy Dziećmi. Zachowania niedozwolone.",
        rules: [
            {text: "Pracownicy Zboru dbają o to, aby relacje pomiędzy Dziećmi były pełne wzajemnego szacunku i życzliwości"},
            {text: "Pracownicy Zboru stanowczo i niezwłocznie reagują na niedozwolone zachowania Dzieci względem siebie nawzajem, takie jak:", orderStyle: "numbered_parenthesis", rules: [
                {text: "przemoc fizyczna;"},
                {text: "przemoc psychiczna, w szczególności ośmieszanie, zawstydzanie, upokarzanie, lekceważenie, lub obrażanie;"},
                {text: "wulgarne słownictwo;"},
                {text: "niestosowny kontakt fizyczny"},
                {text: "zachowania niebezpieczne dla życia, lub zdrowia."}
            ]}
        ]
    },
    {
        title: "Zasady i procedura podejmowania interwencji w sytuacji podejrzenia krzywdzenia lub posiadania informacji o krzywdzeniu dziecka, oraz zasady ustalania planu wsparcia małoletniego po ujawnieniu krzywdzenia.",
        rules: [
            {text: "Pastor odpowiada za przyjmowanie zgłoszeń ujawnień, incydentów/zdarzeń i podejrzeń krzywdzenia małoletnich."},
            {text: "Do zadań pastora, w zakresie, o którym mowa w pkt.1, należy w szczególności:", orderStyle: "numbered_dot", rules: [
                {text: "nadzór nad realizacją Standardów;"},
                {text: "przyjmowanie zgłoszeń naruszenia Standardów;"},
                {text: "informowanie organów ścigania o podejrzeniu popełnienia przestępstwa"},
                {text: "monitorowanie realizacji Standardów;"},
                {text: "reagowanie na sygnały naruszenia Standardów;"},
                {text: "proponowanie zmian w Standardach;"},
                {text: "nadzór nad realizacją Standardów;"},
                {text: "przekazywanie koordynatorowi z ramienia Rady Kościoła informacji o podjętych interwencjach."},
            ]},
            {text: "W przypadku podejrzenia, że życie małoletniego jest zagrożone lub grozi mu ciężki uszczerbek na zdrowiu każdy członek personelu ma obowiązek zadbać o bezpieczeństwo małoletniego i niezwłocznie poinformować o zagrożeniu odpowiednie służby (Policja, pogotowie ratunkowe), dzwoniąc pod numer 112 lub inny lokalny numer alarmowy"},
            {text: "Poinformowania służb dokonuje osoba, która pierwsza powzięła informację o zagrożeniu"},
            {text: "W przypadku podjęcia przez członka personelu podejrzenia, że dziecko jest krzywdzone, każdy członek personelu ma obowiązek niezwłocznego udzielenia małoletniemu wsparcia (zgodnie z posiadanymi możliwościami/kompetencjami) i zadbania o jego bezpieczeństwo"},
            {text: "Wszyscy członkowie personelu i inne osoby, które w związku z wykonywaniem obowiązków służbowych podjęły informację o krzywdzeniu dziecka lub informacje z tym związane, są zobowiązane do zachowania tych informacji w tajemnicy, wyłączając informacje przekazywane uprawnionym instytucjom w ramach działań interwencyjnych."},
            {text: "Rada Zboru w porozumieniu z Pastorem podejmuje działania zmierzające do wyjaśnienia sytuacji i udzielenia pomocy Dziecku."},
            {text: "Działania zmierzające do wyjaśnienia sytuacji i udzielenia pomocy Dziecku podejmowane są we współpracy z rodzicami, lub opiekunami Dziecka, o ile nie zagraża to dobru Dziecka."},
            {text: "Jeżeli wskazane jest podjęcie działań wykraczających poza doraźną pomoc, Rada Zboru w porozumieniu z pracownikami zaangażowanymi w działalność katechetyczną i duszpasterską opracowuje na piśmie plan wsparcia małoletniego."}
        ]
    },
    {
        title: "Procedury składania zawiadomień o podejrzeniu popełnienia przestępstwa na szkodę Dziecka i zawiadamiania sądu opiekuńczego.",
        rules: [
            {text: "Każdy, kto posiada informację, lub poweźmie uzasadnione podejrzenie:", orderStyle: "dot", rules: [
                {text: "wystąpienia obcowania płciowego z Dzieckiem poniżej lat 15;"},
                {text: "dopuszczania się wobec takiej osoby innej czynności seksualnej, doprowadzenia jej do poddania się takim czynnościom albo do ich wykonania"},
                {text: "prezentowania Dziecku, które nie ukończyło lat 15 treści pornograficznych lub udostępniania mu przedmiotów mających taki charakter albo rozpowszechnia treści pornograficznych w sposób umożliwiający takiemu małoletniemu zapoznanie się z nimi;"},
                {text: "prezentowania małoletniemu poniżej lat 15 wykonywania czynności seksualnej w celu swojego zaspokojenia seksualnego lub zaspokojenia seksualnego innej osoby,"},
                {text: "prowadzenia reklamy lub promocji działalności polegającej na rozpowszechnianiu treści pornograficznych w sposób umożliwiający zapoznanie się z nimi małoletniemu poniżej lat 15, ma obowiązek powiadomienia organów ścigania pod rygorem odpowiedzialności karnej z art. 240 Kodeksu Karnego."}
            ]},
            {text: "Jeżeli postępowanie wyjaśniające, o którym mowa w § 3 niniejszych Standardów potwierdzi uzasadnione podejrzenie popełnienia przestępstwa na szkodę Dziecka, Rada Zboru w porozumieniu z osobą odpowiedzialną za przyjmowanie zgłoszeń o zdarzeniach zagrażających Dziecku i udzielenie mu wsparcia niezwłocznie zawiadamia organy ścigania."},
            {text: "Jeżeli postępowanie wyjaśniające, o którym mowa w § 3 niniejszych Standardów potwierdzi uzasadnione podejrzenie, że doszło do krzywdzenia Dziecka, Rada Zboru w porozumieniu z osobą odpowiedzialną za przyjmowanie zgłoszeń o zdarzeniach zagrażających Dziecku i udzielenie mu wsparcia powiadamia właściwe organy, lub instytucje w zakresie ich właściwości, w szczególności szkołę, sąd rodzinny, ośrodek pomocy społecznej bądź przewodniczącego zespołu interdyscyplinarnego (procedura „Niebieskie Karty”) w zależności od zdiagnozowanego typu krzywdzenia i skorelowanej z nim koniecznej interwencji."},
            {text: "Każdy z członków Rady Zboru, oraz osoba odpowiedzialna za przyjmowanie zgłoszeń o zdarzeniach zagrażających Dziecku i udzielenie mu wsparcia odpowiada osobiście za dopełnienie obowiązku dokonania zgłoszeń przewidzianych niniejszymi Standardami."},
            {text: "Zawiadomienia i zgłoszenia przewidziane niniejszymi Standardami dokonywane są we współpracy z rodzicami, lub opiekunami Dziecka, o ile nie zagraża to dobru Dziecka."}
        ]
    },
    {
        title: "Sposób dokumentowania i zasady przechowywania ujawnionych lub zgłoszonych incydentów lub zdarzeń zagrażających dobru małoletniego.",
        rules: [
            {text: "Przebieg postępowania wyjaśniającego i pomocowego jest dokumentowany na piśmie."},
            {text: "Za dokumentowanie i archiwizację postępowania odpowiada Pastor Zboru."},
            {text: "Dokumentacja przechowywana jest w sposób zapewniający ochronę przed dostępem osób trzecich, na zasadach przewidzianych dla danych osobowych."}
        ]
    },
    {
        title: "Zasady korzystania z urządzeń elektronicznych z dostępem do sieci Internet. Procedury ochrony dzieci przed treściami szkodliwymi i zagrożeniami w sieci Internet oraz utrwalonymi w innej formie.",
        rules: [
            {text: "W ramach działalności duszpasterskiej i katechetycznej Zboru Dzieci korzystają z urządzeń elektronicznych z dostępem do sieci Internet wyłącznie podczas zajęć, pod osobistą i bezpośrednią opieką pracownika Zboru."},
            {text: "Udostępniane Dzieciom urządzenia są zabezpieczone nowoczesnym oprogramowaniem chroniącym przed dostępem do nieodpowiednich treści, a zawartość nośników pamięci jest każdorazowo przed udostępnieniem urządzenia Dziecku sprawdzana przez pracownika Zboru."},
            {text: "Kościelna sieć wi-fi nie jest udostępniana Dzieciom do użytku przy pomocy prywatnych urządzeń."}
        ]
    },
    {
        title: "Zasady i sposób udostępniania rodzicom albo opiekunom prawnym lub faktycznym oraz Dzieciom Standardów do zaznajomienia się z nimi i ich stosowania.",
        rules: [
            {text: "Niniejsze Standardy udostępnione są na stronie internetowej Zboru."},
            {text: "Na tablicy ogłoszeniowej w siedzibie Zboru (w kaplicy) udostępniono wersję skróconą Standardów zawierającą informacje istotne dla małoletnich"}
        ]
    },
    {
        title: "Zasady przygotowania personelu do stosowania Standardów, oraz sposób dokumentowania tej czynności.",
        rules: [
            {text: "Rekrutacja pracowników Zboru zaangażowanych w działalność duszpasterską i katechetyczną adresowaną do Dzieci odbywa się według zasad określonych <span class='font-bold'>w załączniku nr 1 do niniejszych Standardów.</span>"},
            {text: "Osoba odpowiedzialna za przygotowanie Personelu Zboru do stosowania Standardów zaznajamia osobiście każdego pracownika ze Standardami przed powierzeniem pracownikowi jakichkolwiek zadań."},
            {text: "Pracownik na piśmie potwierdza zaznajomienie się ze Standardami i zobowiązuje się do ich bezwzględnego przestrzegania."}
        ]
    },
    {
        title: "Zasady przeglądu i aktualizacji Standardów.",
        rules: [
            {text: "Co najmniej raz na dwa lata Zbór dokonuje oceny Standardów w celu zapewnienia ich dostosowania do aktualnych potrzeb oraz zgodności z obowiązującymi przepisami."},
            {text: "W procesie oceny Standardów biorą udział wszyscy pracownicy Zboru zaangażowani w działalność katechetyczną i duszpasterską adresowaną do Dzieci, członkowie Rady Zboru, oraz osoba odpowiedzialna za przyjmowanie zgłoszeń o zdarzeniach zagrażających Dziecku."},
            {text: "Wnioski z przeprowadzonej oceny są utrwalane w formie pisemnego protokołu, który archiwizuje Rada Zboru."}
        ]
    }
]



// Załącznik data
export const recrutationRules: string[] = [
    "Zasady bezpiecznej rekrutacji personelu opierają się na procedurze zamieszczonej w pkt. 2-14 niniejszego rozdziału.",
  
    "Przed dopuszczeniem osoby do każdej działalności związanej z wychowaniem, edukacją, wypoczynkiem, świadczeniem porad psychologicznych, rozwojem duchowym, uprawianiem sportu lub realizacją innych zainteresowań przez małoletnich, lub z opieką nad nimi, organizator wykonuje obowiązki określone w pkt. 5-11 niniejszego rozdziału organizator pobiera dane osobowe personelu, w tym dane potrzebne do sprawdzenia jego/jej danych w Rejestrze Sprawców Przestępstw na Tle Seksualnym. Przed dopuszczeniem osoby zatrudnianej/wolontariusza do wykonywania obowiązków związanych z wychowaniem, edukacją, wypoczynkiem małoletnich lub z opieką nad nimi, organizator uzyskuje informacje, czy dane osoby, o której mowa w pkt. 1 niniejszego rozdziału, są zamieszczone w Rejestrze z dostępem ograniczonym lub w Rejestrze osób, w stosunku do których Państwowa Komisja do spraw przeciwdziałania wykorzystaniu seksualnemu małoletnich poniżej lat 15 wydała postanowienie o wpisie w Rejestrze Sprawców Przestępstw na Tle Seksualnym.",
  
    "Aby sprawdzić osobę w Rejestrze Sprawców Przestępstw na Tle Seksualnym organizator potrzebuje następujących danych kandydata/ kandydatki: a. imię i nazwisko, b. data urodzenia, c. pesel, d. nazwisko rodowe, e. imię ojca, f. imię matki.",
  
    "Wydruk z Rejestru jest przechowywany w aktach osobowych personelu lub analogicznej dokumentacji dotyczącej wolontariusza/osoby dopuszczonej do działalności, o której mowa w punkcie 2 niniejszego rozdziału.",
  
    "Organizator pobiera od kandydata/kandydatki informację z Krajowego Rejestru Karnego o niekaralności w zakresie przestępstw określonych w rozdziale XIX i XXV Kodeksu karnego, w art. 189 a i art. 207 Kodeksu karnego oraz w ustawie z dnia 29 lipca 2005 r. o przeciwdziałaniu narkomanii (Dz. U. z 2023 r. poz. 172 oraz z 2022 r. poz. 2600) lub za odpowiadające tym przestępstwom czyny zabronione określone w przepisach prawa obcego.",
  
    "Osoba, o której mowa w pkt. 2 niniejszego rozdziału, posiadająca obywatelstwo innego państwa niż Rzeczpospolita Polska, ponadto przedkłada organizatorowi pisemną informację z rejestru karnego państwa obywatelstwa uzyskiwaną do celów działalności zawodowej lub wolontariackiej związanej z kontaktami z dziećmi.",
  
    "Osoba, o której mowa w pkt. 2, składa organizatorowi pisemne oświadczenie o państwie lub państwach, w których zamieszkiwała w ciągu ostatnich 20 lat, innych niż Rzeczpospolita Polska i państwo obywatelstwa, oraz jednocześnie przedkłada organizatorowi informację z rejestrów karnych tych państw uzyskiwaną do celów działalności zawodowej lub wolontariackiej związanej z kontaktami z dziećmi.",
  
    "Jeżeli prawo państwa, o którym mowa w pkt. 6 lub 7, nie przewiduje wydawania informacji do celów działalności zawodowej lub wolontariackiej związanej z kontaktami z dziećmi, kandydat na członka personelu przedkłada pisemną informację z rejestru karnego tego państwa.",
  
    "W przypadku, gdy prawo państwa, z którego ma być przedłożona informacja, o której mowa w pkt. 5–8 niniejszego rozdziału, nie przewiduje jej sporządzenia lub w danym państwie nie prowadzi się rejestru karnego, osoba, o której mowa w pkt. 2 niniejszego rozdziału, składa Organizatorowi pisemne oświadczenie o tym fakcie wraz z oświadczeniem, że nie była prawomocnie skazana w tym państwie za czyny zabronione odpowiadające przestępstwom określonym w rozdziale XIX i XXV Kodeksu karnego, w art. 189a i art. 207 Kodeksu karnego oraz w ustawie z dnia 29 lipca 2005 r. o przeciwdziałaniu narkomanii oraz nie wydano wobec niej innego orzeczenia, w którym stwierdzono, iż dopuściła się takich czynów zabronionych, oraz że nie ma obowiązku wynikającego z orzeczenia sądu, innego uprawnionego organu lub ustawy stosowania się do zakazu zajmowania wszelkich lub określonych stanowisk, wykonywania wszelkich lub określonych zawodów albo działalności, związanych z wychowaniem, edukacją, wypoczynkiem, leczeniem, świadczeniem porad psychologicznych, rozwojem duchowym, uprawianiem sportu lub realizacją innych zainteresowań przez małoletnich, lub z opieką nad nimi.",
  
    "Oświadczenia, o których mowa w pkt. 7 i 9 niniejszego rozdziału, składane są pod rygorem odpowiedzialności karnej za złożenie fałszywego oświadczenia. Składający oświadczenie jest obowiązany do zawarcia w nim klauzuli następującej treści: „Jestem świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia”. Klauzula ta zastępuje pouczenie organu o odpowiedzialności karnej za złożenie fałszywego oświadczenia.",
  
    "Informacje, o których mowa w pkt. 4 niniejszego rozdziału, organizator utrwala w formie wydruku i załącza do akt osobowych personelu albo dokumentacji dotyczącej osoby dopuszczonej do działalności związanej z wychowaniem, edukacją, wypoczynkiem, leczeniem, świadczeniem porad psychologicznych, rozwojem duchowym, uprawianiem sportu lub realizacją innych zainteresowań przez małoletnich, lub z opieką nad nimi. Informacje oraz oświadczenia, o których mowa w pkt. 5–9 niniejszego rozdziału, organizator załącza do akt osobowych pracownika albo dokumentacji dotyczącej osoby dopuszczonej do takiej działalności.",
  
    "Wykonanie obowiązków, o których mowa w pkt. 1–11 niniejszego rozdziału, nie jest wymagane przed dopuszczeniem do działalności związanej z wychowaniem, edukacją, wypoczynkiem, leczeniem, świadczeniem porad psychologicznych, rozwojem duchowym, uprawianiem sportu lub realizacją innych zainteresowań przez małoletnich, lub z opieką nad nimi, członka rodziny małoletniego, lub osoby znanej osobiście rodzicowi małoletniego albo przedstawicielowi ustawowemu małoletniego, gdy jest ona wykonywana w stosunku do małoletniego dziecka, którego rodzic albo przedstawiciel ustawowy są dopuszczającymi do działalności.",
  
    "Przez członka rodziny, o którym mowa w pkt.12 niniejszego rozdziału należy rozumieć osobę spokrewnioną albo osobę niespokrewnioną, pozostającą w faktycznym związku oraz wspólnie zamieszkującą i gospodarującą.",
  
    "Przed rozpoczęciem pracy, osoby nowozatrudnione, praktykanci, wolontariusze, oraz inne osoby dopuszczone do pracy z dziećmi, zapoznają się ze Standardami i potwierdzają zapoznanie się z nimi poprzez złożenia oświadczenia/podpisu."
  ];
  