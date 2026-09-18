export interface ServicePackage {
  name: string;
  description: string;
  features: string[];
}

export interface ServiceDefinition {
  slug: string;
  navTitle: string;
  navLabel: string;
  tileLabel: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  highlightsTitle?: string;
  highlightsDescription?: string;
  descriptionSecondary?: string;
  packages: ServicePackage[];
  extraOptions?: string[];
  extraOptionsDescription?: string;
  note?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  video?: string;
  videoAlt?: string;
  videoInMainBox?: boolean;
}

export const services: ServiceDefinition[] = [
  {
    slug: 'detailing',
    navTitle: 'Detailing',
    navLabel: 'Detailing',
    tileLabel: 'Detailing',
    title: 'Detailing',
    tagline: 'Interieur en/of exterieur, afgestemd op jouw wagen',
    description:
      'Elke auto verdient een specifieke behandeling. Wij bieden jouw wagen een uitgebreide, transparante interieur- en/of exterieurbehandeling met aandacht voor jouw wensen. Geen standaardmethode, maar precies wat jouw lak en interieur nodig hebben.',
    highlights: [
      'Van binnen en buiten terug in uitstekende conditie',
      'Een behandeling afgestemd op jouw lak en interieur',
      'Persoonlijke service met een resultaat dat meteen opvalt',
    ],
    packages: [
      {
        name: 'Interieur detailing',
        description:
          'Een grondige interieurbehandeling met aandacht voor stoelen, dashboard, deurpanelen en alle details in de wagen.',
        features: [
          'Dieptereiniging van het interieur',
          'Aandacht voor stoelen, dashboard en details',
          'Afgestemd op leder of stoffen zetels',
        ],
      },
      {
        name: 'Exterieur detailing',
        description:
          'Een transparante exterieurbehandeling voor een frisse uitstraling en een lak die opnieuw tot zijn recht komt.',
        features: [
          'Grondige reiniging van het exterieur',
          'Velgen, banden en lak zorgvuldig behandeld',
          'Persoonlijke aanpak, zichtbaar resultaat',
        ],
      },
      {
        name: 'Combi detailing',
        description:
          'De volledige behandeling: interieur en exterieur samen, afgestemd op de staat, het gebruik en jouw wensen.',
        features: [
          'Volledige interieur- en exterieurreiniging',
          'Behandeling afgestemd op jouw voertuig',
          'De wagen rondom verzorgd en opgefrist',
        ],
      },
    ],
    extraOptions: [
      'Ozon- en geurbehandeling',
      'Veilige reiniging van Alcantara',
      'Dieptereiniging van stoffen bekleding',
      'Herstellen van krassen op interieurkunststof',
    ],
    note: 'Laat bij je aanvraag weten of je wagen stoffen, lederen of Alcantara zetels heeft. Zo kunnen we de juiste producten en technieken voorbereiden.',
    image: '/pictures/Black_mercedes_interieur_frontdash_clean.jpg',
    imageAlt: 'Grondig gereinigd interieur van een wagen',
  },
  {
    slug: 'wrapping-ppf',
    navTitle: 'Wrapping & PPF',
    navLabel: 'Wrapping & PPF',
    tileLabel: 'Wrapping\n& PPF',
    title: 'Wrapping & PPF',
    tagline: 'Bescherming en personalisatie op maat',
    description:
      'Of je nu een volledige kleurverandering wilt door middel van een strakke exterieur wrap, het bekleden van bepaalde interieurelementen of een onzichtbare Paint Protection Film (PPF) om je lak te beschermen tegen steenslag en krassen, wij garanderen een professionele afwerking.',
    highlights: [],
    highlightsDescription:
      'We combineren duurzame, hoogwaardige materialen met vakkundige montage en een scherp oog voor detail. Geen standaardadvies, maar oprecht advies op maat van jouw auto en wensen. Het resultaat is een zorgvuldig op maat gemaakte auto die zijn waarde behoudt en dagelijks opnieuw indruk maakt.',
    packages: [
      {
        name: 'Exterieur wrapping',
        description:
          'Een volledige of gedeeltelijke wrap verandert de look van je wagen zonder de originele lak te beschadigen. Ideaal voor een unieke uitstraling of een tijdelijke kleurverandering.',
        features: ['Volledige of gedeeltelijke wrap', 'Kleur- en afwerkingsopties op maat'],
      },
      {
        name: 'Paint Protection Film (PPF)',
        description:
          'PPF beschermt je lak tegen steenslag, krassen en chemische invloeden, met een onzichtbare en duurzame afwerking.',
        features: ['Bescherming tegen steenslag en krassen', 'Onzichtbare, duurzame afwerking'],
      },
      {
        name: 'Interieur bekleding',
        description:
          'We bekleden bepaalde interieurelementen met het materiaal en de kleur van jouw keuze, voor een interieur dat volledig aansluit bij jouw smaak.',
        features: ['Bekleding van interieuronderdelen', 'Persoonlijke materiaal- en kleurkeuze'],
      },
    ],
    image: '/pictures/Scherm_afbeelding 2026-09-02 om 14.42.44.png',
    extraOptions: [],
    extraOptionsDescription:
      'Wil je de bescherming écht naar een hoger niveau tillen? Laat je nieuwe wrap of PPF optioneel voorzien van een speciaal ontwikkelde keramische coating. Dit maakt de folie extreem vuil- en waterafstotend, versterkt de kleurintensiteit en zorgt ervoor dat je wagen veel sneller en gemakkelijker te onderhouden is.',
    imageAlt: 'Wagen in behandeling voor wrapping of PPF',
  },
  {
    slug: 'window-tinting',
    navTitle: 'Window Tinting',
    navLabel: 'Window Tinting',
    tileLabel: 'Window\nTinting',
    title: 'Window Tinting',
    tagline: 'Koeler, comfortabeler en beter beschermd',
    description:
      'Wij zorgen voor een koele, comfortabele rit en een interieur dat optimaal beschermd blijft tegen UV-schade. Door hitte en ongewenste blikken stijlvol buiten te houden, geniet u van een rustgevend interieur en een uitstraling die uw dagelijkse rijervaring net wat stijlvoller en gemakkelijker maakt.',
    highlights: [],
    highlightsDescription:
      'We onderscheiden ons door maatwerk en het gebruik van de beste folies op de markt. Nadat we samen de gewenste tint en uitstraling hebben gekozen, vormen en monteren we de folie met uiterste precisie naar de specifieke geometrie van uw ruiten. Zo transformeren we uw wagen met een strakke look, terwijl u vanaf de eerste rit geniet van minder hitte, extra privacy en bescherming tegen UV-schade.',
    packages: [
      {
        name: 'Window Tinting',
        description:
          'We kiezen samen de gewenste tint en uitstraling. Daarna vormen en monteren we de folie precies volgens de geometrie van jouw ruiten.',
        features: ['Maatwerkfolie van hoogwaardige kwaliteit', 'Minder hitte en extra privacy', 'Bescherming tegen UV-schade'],
      },
    ],
    image: '/pictures/Black_Audi_mercedes_frontpic.jpg',
    imageAlt: 'Wagen met getinte ramen',
    imagePosition: 'center 62%',
  },
  {
    slug: 'bestickering',
    navTitle: 'Business Vehicle Branding',
    navLabel: 'Business Vehicle Branding',
    tileLabel: 'Business Vehicle\nBranding',
    title: 'Business Vehicle Branding',
    tagline: 'Je merk. Onze nauwkeurigheid. De grootste impact.',
    description:
      'Uw bedrijfswagen is elke dag op weg naar klanten, partners en nieuwe mogelijkheden. Het is de eerste blik op uw bedrijf op de weg — een rijdend visitekaartje dat een gevoel van autoriteit en professionaliteit verspreid. Met onze hoogwaardige bestickering en elegante afwerking, transformeren we uw voertuig tot een effectief marketingmiddel.',
    highlights: [],
    highlightsTitle: 'Wat kan je verwachten:',
    highlightsDescription:
      'Een bedrijfswagen zou het werk voor je moeten uitvoeren. Wij transformeren jouw merk naar een strak, op maat gemaakt ontwerp en zorgen voor een zorgvuldige en duurzame plaatsing. Je ontvangt een krachtige, rijdende visitekaart die vanuit elke hoek klopt, meteen vertrouwen oproept en overal de aandacht trekt.',
    packages: [
      {
        name: 'Business Vehicle Branding',
        description:
          'We ontwerpen en plaatsen bestickering op maat van jouw merkidentiteit, zodat jouw bedrijfswagen overal opvalt.',
        features: ['Ontwerp op maat van je merkidentiteit', 'Professionele plaatsing en afwerking'],
      },
    ],
    image: '/pictures/branding.jpg',
    imageAlt: 'Bedrijfswagen met professionele branding',
  },
  {
    slug: 'keramische-coating',
    navTitle: 'Ceramic Coating',
    navLabel: 'Ceramic Coating',
    tileLabel: 'Ceramic\nCoating',
    title: 'Ceramic Coating',
    tagline: 'Wheels, Glass or Bodywork',
    description:
      'Met onze hoogwaardige keramische coatings zorgen we ervoor dat je velgen, ramen of hele carrosserie beschermd zijn tegen vuil en weersinvloeden. Zulke hoogwaardige keramische coatings bieden een intense glans en een zeer hydrofobe laag die externe elementen zonder moeite afstoot.',
    descriptionSecondary: 'Je selecteert de zone, terwijl wij de beste bescherming bieden.',
    highlights: [],
    highlightsDescription:
      'Een keramische coating biedt de perfecte aanvulling voor jouw auto: in tegenstelling tot een reguliere autowax hecht deze glascoating zich blijvend aan het oppervlak. Met onze persoonlijke, professionele aanpak stemmen we alles af op jouw specifieke wensen en behandelen we je wagen met absolute precisie. Kies voor je velgen, ramen of carrosserie en rijd dagelijks rond met een auto die in topstaat verkeert.',
    packages: [
      {
        name: 'Velgen',
        description:
          'Een keramische coating op je velgen zorgt voor een waterafstotende, glanzende afwerking waardoor vuil en remstof veel makkelijker verwijderd kunnen worden.',
        features: ['Waterafstotende, glanzende afwerking', 'Eenvoudiger onderhoud'],
      },
      {
        name: 'Ramen',
        description: 'Coating op je ruiten houdt water en vuil af voor beter zicht, zeker bij regenachtig weer.',
        features: ['Heldere, waterafstotende coating', 'Beter zicht bij regen'],
      },
      {
        name: 'Carrosserie',
        description:
          'Een coating op de carrosserie geeft een intense glans en diepte, en beschermt de lak langdurig tegen weersinvloeden en vervuiling.',
        features: ['Intense glans en diepte', 'Langdurige bescherming van de lak'],
      },
      {
        name: 'Softtop',
        description:
          'Een keramische coating voor je softtop beschermt het textiel tegen vuil en vocht, zodat water opnieuw mooi van het dak afglijdt en het materiaal langer verzorgd blijft.',
        features: ['Hydrofobe bescherming van het textiel', 'Minder vuil en vocht in de vezels'],
      },
    ],
    extraOptions: [],
    image: '/pictures/coatingback.jpg',
    imageAlt: 'Softtop met waterafstotende keramische coating',
    imagePosition: '60% center',
    video: '/pictures/coating.MP4',
    videoAlt: 'Water dat van een gecoate softtop glijdt',
  },
  {
    slug: 'interior-customisation',
    navTitle: 'Interior Customization',
    navLabel: 'Interior Customization',
    tileLabel: 'Interior\nCustomization',
    title: 'Interior Customization',
    tagline: 'Een interieur op jouw maat.',
    description:
      'Een standaard interieur past bij iedereen, maar jij zoekt maatwerk dat jouw stijl weerspiegelt. We creëren samen een bijzonder interieur dat volledig aansluit bij jouw stijl en voorkeuren. Wij verenigen vakmanschap met aandacht voor detail, zodat jij elke rit ervaart in een unieke ambiance van hoogstaand comfort en prestige.',
    highlights: [],
    highlightsDescription:
      'Het interieur zou net zo bijzonder moeten zijn als de bestuurder. Wij bouwen je cabine om tot een unieke locatie van pure luxe, ongeëvenaard comfort en een concrete status. Bij het eerste adviesgesprek heb jij volledige controle: van de kleinste stiksels tot een complete restyling, alles wordt tot in het kleinste detail afgestemd op jouw unieke stijl. Met ons uitstekende vakmanschap verhogen we de uitstraling naar het hoogste niveau, waardoor elke rit voelt als een volledig gerechtvaardigde, eersteklas ervaring.',
    packages: [
      {
        name: 'Interior Customization',
        description:
          'We bouwen je cabine om tot een unieke omgeving van luxe en comfort. Tijdens het eerste adviesgesprek krijg je volledige controle over elk detail van de restyling.',
        features: ['Persoonlijk advies en ontwerp', 'Maatwerk tot in de kleinste details', 'Vakkundige afwerking'],
      },
    ],
    image: '/pictures/starroof.png',
    imageAlt: 'Interieur met sterrenhemel op maat',
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}
