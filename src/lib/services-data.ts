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
  packages: ServicePackage[];
  extraOptions?: string[];
  note?: string;
  image: string;
  imageAlt: string;
}

export const services: ServiceDefinition[] = [
  {
    slug: 'detailing',
    navTitle: 'Detailing',
    navLabel: 'Detailing',
    tileLabel: 'Detailing',
    title: 'Detailing',
    tagline: 'Interieur en/of exterieur',
    description:
      'Een grondige reiniging en verzorging van interieur en/of exterieur, afgestemd op wat jouw wagen nodig heeft. Nadien kan je nog extra opties toevoegen.',
    highlights: [
      'Grondige reiniging van interieur en/of exterieur',
      'Behandeling afgestemd op jouw voertuig',
      'Persoonlijke aanpak, zichtbaar resultaat',
    ],
    packages: [
      {
        name: 'Interieur detailing',
        description:
          'Een grondige reiniging van het interieur, met aandacht voor stoelen, dashboard, deurpanelen en alle details in de wagen.',
        features: [
          'Dieptereiniging van het interieur',
          'Aandacht voor stoelen, dashboard en details',
          'Afgestemd op leder of stoffen zetels',
        ],
      },
      {
        name: 'Exterieur detailing',
        description:
          'Een grondige reiniging en verzorging van het exterieur, voor een frisse uitstraling en een verzorgd resultaat.',
        features: [
          'Grondige reiniging van het exterieur',
          'Velgen, banden en lak zorgvuldig behandeld',
          'Persoonlijke aanpak, zichtbaar resultaat',
        ],
      },
      {
        name: 'Combi detailing',
        description:
          'De volledige behandeling: interieur en exterieur samen, afgestemd op de staat en het gebruik van jouw wagen.',
        features: [
          'Volledige interieur- en exterieurreiniging',
          'Behandeling afgestemd op jouw voertuig',
          'De wagen rondom verzorgd en opgefrist',
        ],
      },
    ],
    extraOptions: [
      'Ozon- en geurbehandeling',
      'Herstellen van krassen op interieurkunststof',
      'Dieptereiniging van stoffen zetels',
    ],
    note: 'Geef in je aanvraag zeker mee of je wagen leren of stoffen zetels heeft, dit bepaalt de behandeling.',
    image: '/pictures/Black_mercedes_interieur_frontdash_clean.jpg',
    imageAlt: 'Grondig gereinigd interieur van een wagen',
  },
  {
    slug: 'wrapping-ppf',
    navTitle: 'Wrapping & PPF',
    navLabel: 'Wrapping & PPF',
    tileLabel: 'Wrapping\n& PPF',
    title: 'Wrapping & PPF',
    tagline: 'Exterieur wrap, PPF en interieur bekleding',
    description:
      'Van een volledige exterieur wrap tot Paint Protection Film (PPF) en het bekleden van interieuronderdelen: we beschermen en personaliseren je wagen op maat.',
    highlights: [
      'Bescherming en personalisatie in één',
      'Vakkundige plaatsing, duurzame afwerking',
      'Advies op maat van jouw wagen',
    ],
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
          'We bekleden interieuronderdelen met het materiaal en de kleur van jouw keuze, voor een interieur dat volledig aansluit bij jouw smaak.',
        features: ['Bekleding van interieuronderdelen', 'Persoonlijke materiaal- en kleurkeuze'],
      },
    ],
    image: '/pictures/Scherm_afbeelding 2026-09-02 om 14.42.44.png',
    imageAlt: 'Wagen in behandeling voor wrapping of PPF',
  },
  {
    slug: 'window-tinting',
    navTitle: 'Raamtinting',
    navLabel: 'Window Tinting',
    tileLabel: 'Raamtinting',
    title: 'Raamtinting',
    tagline: 'Minder hitte, meer privacy',
    description:
      'Raamtinting vermindert hitte en inkijk, beschermt het interieur tegen UV-schade en geeft je wagen een strakke, verzorgde uitstraling.',
    highlights: [
      'Minder hitte en inkijk',
      'Bescherming tegen UV-schade',
      'Strakke, verzorgde uitstraling',
    ],
    packages: [
      {
        name: 'Raamtinting',
        description:
          'Raamtinting vermindert hitte en inkijk, beschermt het interieur tegen UV-schade en geeft je wagen in één keer een strakkere, verzorgde uitstraling.',
        features: ['Minder hitte en inkijk', 'Bescherming tegen UV-schade', 'Strakke, verzorgde uitstraling'],
      },
    ],
    image: '/pictures/Black_Audi_mercedes_frontpic.jpg',
    imageAlt: 'Wagen met getinte ramen',
  },
  {
    slug: 'bestickering',
    navTitle: 'Bedrijfsreclame bestickeren',
    navLabel: 'Business Vehicle Branding',
    tileLabel: 'Bedrijfsreclame\nbestickeren',
    title: 'Bedrijfsreclame bestickeren',
    tagline: 'Een rijdend visitekaartje',
    description:
      'Laat je bedrijfswagen opvallen met professionele bestickering. Een rijdend visitekaartje: de eerste indruk zegt alles.',
    highlights: [
      'Ontwerp op maat van je huisstijl',
      'Professionele plaatsing en afwerking',
      'Een rijdend visitekaartje voor je bedrijf',
    ],
    packages: [
      {
        name: 'Bedrijfsreclame bestickeren',
        description:
          'We ontwerpen en plaatsen bestickering op maat van jouw huisstijl, zodat je bedrijfswagen overal opvalt als een rijdend visitekaartje.',
        features: ['Ontwerp op maat van je huisstijl', 'Professionele plaatsing en afwerking'],
      },
    ],
    image: '/pictures/Black_mercedes_frontPic.jpg',
    imageAlt: 'Bedrijfswagen klaar voor bestickering',
  },
  {
    slug: 'keramische-coating',
    navTitle: 'Keramische coating',
    navLabel: 'Ceramic Coating',
    tileLabel: 'Keramische\ncoating',
    title: 'Keramische coating',
    tagline: 'Velgen, ramen of carrosserie',
    description:
      'Duurzame bescherming met een intense glans en een waterafstotende finish. Kies een coating voor de velgen, de ramen, de carrosserie, of een combinatie.',
    highlights: [
      'Langdurige bescherming en glans',
      'Eenvoudiger onderhoud van je wagen',
      'Voor velgen, ramen of carrosserie',
    ],
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
    ],
    image: '/pictures/Scherm_afbeelding 2026-09-02 om 14.43.07.png',
    imageAlt: 'Wagen met keramische coating behandeling',
  },
  {
    slug: 'interior-customisation',
    navTitle: 'Interior customisation',
    navLabel: 'Interior Customization',
    tileLabel: 'Interior\ncustomisation',
    title: 'Interior customisation',
    tagline: 'Een interieur op jouw maat',
    description:
      'Van kleine accenten tot een volledig persoonlijke interieurbeleving: we bekijken samen met jou de mogelijkheden voor jouw wagen.',
    highlights: [
      'Persoonlijk advies op maat',
      'Van kleine accenten tot volledige make-over',
      'Unieke uitstraling voor jouw interieur',
    ],
    packages: [
      {
        name: 'Interior customisation',
        description:
          'Van kleine accenten tot een volledig persoonlijke interieurbeleving: we denken met je mee over de mogelijkheden en werken je wensen vakkundig uit.',
        features: ['Persoonlijk advies op maat', 'Van kleine accenten tot volledige make-over'],
      },
    ],
    image: '/pictures/Black_mercedes_interieur_backseat_Clean_After.jpg',
    imageAlt: 'Gepersonaliseerd interieur van een wagen',
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}
