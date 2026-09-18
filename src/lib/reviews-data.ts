export type ReviewSource = 'instagram' | 'trustpilot';

export interface ReviewDefinition {
  name: string;
  service: string;
  text: string;
  title?: string;
  rating: number;
  source: ReviewSource;
  href: string;
}

export const reviews: ReviewDefinition[] = [
  {
    name: 'Jente Raes',
    service: 'Detailing',
    text: 'Ik ben super tevreden over de geleverde service! Mijn auto heeft er nog nooit zo proper uitgezien. De aandacht voor detail en de kwaliteit van het werk zijn top. Zeker voor herhaling vatbaar!',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'Yasin Helouaoui',
    service: 'Detailing',
    text: 'ik herken mijn auto niet meer😂 merci mannen👏🫶',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'Factum Vastgoed',
    service: 'Detailing',
    text: 'Fantastisch werk ! Bravo👏',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'VerheyenCarTechnics',
    service: 'Detailing',
    text: 'Binnenkort mag je hem nog eens onder handen nemen 🤝',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'Boerentuin',
    service: 'Detailing',
    text: 'De camionette was super proper en tot in de puntjes verzorgd. Altijd fijn om met zo’n nette en frisse wagen de baan op te kunnen. Echt een aanrader!',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'Boze_GTI',
    service: 'Detailing',
    text: 'Super service, dikke merci mannen!',
    rating: 5,
    source: 'instagram',
    href: 'https://www.instagram.com/ynscarcare/',
  },
  {
    name: 'Oscar Roekeloos',
    service: 'Carplay installatie',
    title: 'Snelle carplay installatie',
    text: 'Was gegaan voor installatie carplay en op paar uurtjes was het volledig in orde. Heel vriendelijke en professionele service!',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl.trustpilot.com/reviews/6aa7eedb563a7cf7e74d4b7a',
  },
  {
    name: 'Nathan Mertens',
    service: 'Detailing',
    title: 'Ozon behandeling',
    text: 'Ik nam een combined pakket met extra optie ozon behandeling. De uitslag was als verwacht. Vriendelijk jongen',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/6a23120de7a9c0c67226ad6a',
  },
  {
    name: 'Simon',
    service: 'Detailing',
    title: 'Top service!',
    text: 'Heb deze jonge ondernemer doorverwezen naar mijn moeder, en wat was ze content! “De auto is nog nooit zo proper geweest” was het eerste wat ik te horen kreeg😁. De binnenkant werd tot in de puntjes gereinigd en zelfs oude krassen werden weggewerkt. Jazeker, er komt een volgende keer!',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/6a22fca3b453456455ce5103',
  },
  {
    name: 'Kyli',
    service: 'Detailing',
    title: '2 wagens al binnen gedaan en pico bello…',
    text: '2 wagens al binnen gedaan en pico bello terug gekregen',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/6a22b79e3b92eac45d9e7416',
  },
  {
    name: 'Mauro Verstraeten',
    service: 'Detailing',
    title: 'Vriendelijke mensen en super vakmanschap!!!',
    text: 'Vriendelijke mensen en super vakmanschap!!!',
    rating: 4,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/6a22b40bb93ffc9b740d4178',
  },
  {
    name: 'Yasin Helouaoui',
    service: 'Detailing',
    title: 'Super tevreden over mijn Audi A4',
    text: 'Ik ben super tevreden over de detailbeurt van mijn Audi A4. De wagen ziet er weer uit alsof hij net uit de showroom komt. Zowel het interieur als exterieur zijn tot in de puntjes verzorgd, met aandacht voor elk detail. Mijn A4 voelt weer als nieuw!',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/69f12ec1e8cab374b828db19',
  },
  {
    name: 'Lulu Abied',
    service: 'Detailing',
    title: 'Geweldige resultaten',
    text: 'Geweldige resultaten na het binnenbrengen van mijn wagen. Enorm klantvriendelijk en de communicatie verliep vlot!',
    rating: 5,
    source: 'trustpilot',
    href: 'https://nl-be.trustpilot.com/reviews/69f0e1ba9f4de147ba90e490',
  },
];