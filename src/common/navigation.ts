export type NavigationLink = {
  text: string;
  href?: string;
  children?: NavigationLink[];
};


export const links: NavigationLink[] = [
  {
    text: 'Начало',
    href: '/',
  },
  {
    text: 'Събития',
    children: [
      {
        text: 'График на събитията',
        href: '/grafik'
      },
      {
        text: 'Как да се запиша за събитие?',
        href: '/grafik#kak-da-se-zapisha'
      },
      {
        text: 'Цени',
        href: '/ceni'
      },
      {
        text: 'Заявете събитие',
        href: '/zayavete-sabitie',
      },
    ],
  },
  {
    text: 'Блог',
    href: '/blog',
  },
  {
    text: 'За нас',
    children: [
      {
        text: 'Кои сме ние',
        href: '/koi-sme-nie',
      },
      {
        text: 'Дарения',
        href: '/darenia',
      },
      {
        text: 'Станете корпоративен партньор',
        href: '/stanete-korporativen-partnior',
      },
      {
        text: 'Често задавани въпроси',
        href: '/chesto-zadavani-vaprosi',
      }
    ]
  },
  {
    text: 'Контакти',
    href: '/kontakti',
  }
]