// import images
import mainWeb from '../../../../images/nav/main.webp';
import reasonWeb from '../../../../images/nav/reason.webp';
import generalWeb from '../../../../images/nav/general.webp';
import educationWeb from '../../../../images/nav/education.webp';
import experienceWeb from '../../../../images/nav/experience.webp';
import skillsWeb from '../../../../images/nav/skills.webp';
import salaryWeb from '../../../../images/nav/salary.webp';
import contactsWeb from '../../../../images/nav/contacts.webp';
import downloadWeb from '../../../../images/nav/download.webp';

import main from '../../../../images/nav/main.jpg';
import reason from '../../../../images/nav/reason.jpg';
import general from '../../../../images/nav/general.jpg';
import education from '../../../../images/nav/education.jpg';
import experience from '../../../../images/nav/experience.jpg';
import skills from '../../../../images/nav/skills.jpg';
import salary from '../../../../images/nav/salary.jpg';
import contacts from '../../../../images/nav/contacts.jpg';
import download from '../../../../images/nav/download.jpg';

const navigationData: { [key: string]: string }[] = [
  {
    to: '/',
    contentKey: 'main',
    source: mainWeb,
    img: main,
    id: '0001',
  },
  {
    to: '/reason',
    contentKey: 'reason',
    source: reasonWeb,
    img: reason,
    id: '0002',
  },
  {
    to: '/general',
    contentKey: 'general',
    source: generalWeb,
    img: general,
    id: '0003',
  },
  {
    to: '/education',
    contentKey: 'education',
    source: educationWeb,
    img: education,
    id: '0004',
  },
  {
    to: '/experience',
    contentKey: 'experience',
    source: experienceWeb,
    img: experience,
    id: '0005',
  },
  {
    to: '/skills',
    contentKey: 'skills',
    source: skillsWeb,
    img: skills,
    id: '0006',
  },
  {
    to: '/salary',
    contentKey: 'salary',
    source: salaryWeb,
    img: salary,
    id: '0007',
  },
  {
    to: '/contacts',
    contentKey: 'contacts',
    source: contactsWeb,
    img: contacts,
    id: '0008',
  },
  {
    to: '/download',
    contentKey: 'download',
    source: downloadWeb,
    img: download,
    id: '0009',
  },
];

export default navigationData;
