interface IConfig {
  navigation: { [key: string]: string }[];
}

const config: IConfig = {
  navigation: [
    {
      to: '/',
      contentKey: 'main',
      source: '/images/nav/main.webp',
      img: '/images/nav/main.jpg',
      id: '0001',
    },
    {
      to: '/reason',
      contentKey: 'reason',
      source: '/images/nav/reason.webp',
      img: '/images/nav/reason.jpg',
      id: '0002',
    },
    {
      to: '/general',
      contentKey: 'general',
      source: '/images/nav/general.webp',
      img: '/images/nav/general.jpg',
      id: '0003',
    },
    {
      to: '/education',
      contentKey: 'education',
      source: '/images/nav/education.webp',
      img: '/images/nav/education.jpg',
      id: '0004',
    },
    {
      to: '/experience',
      contentKey: 'experience',
      source: '/images/nav/experience.webp',
      img: '/images/nav/experience.jpg',
      id: '0005',
    },
    {
      to: '/skills',
      contentKey: 'skills',
      source: '/images/nav/skills.webp',
      img: '/images/nav/skills.jpg',
      id: '0006',
    },
    {
      to: '/salary',
      contentKey: 'salary',
      source: '/images/nav/salary.webp',
      img: '/images/nav/salary.jpg',
      id: '0007',
    },
    {
      to: '/contacts',
      contentKey: 'contacts',
      source: '/images/nav/contacts.webp',
      img: '/images/nav/contacts.jpg',
      id: '0008',
    },
    {
      to: '/download',
      contentKey: 'download',
      source: '/images/nav/download.webp',
      img: '/images/nav/download.jpg',
      id: '0009',
    },
  ],
};

export default config;
