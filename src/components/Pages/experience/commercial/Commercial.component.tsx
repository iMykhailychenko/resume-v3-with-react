import React, { ReactElement } from 'react';

import css from '../Experience.module.css';

const projects: { link: string; src: string; source: string }[] = [
    {
        link: 'http://ilyashev.hd.kiev.ua/',
        source: '/images/content/experience/experience-7.webp',
        src: '/images/content/experience/experience-7.jpg',
    },
    {
        link: 'https://remens.ua/',
        source: '/images/content/experience/experience-1.webp',
        src: '/images/content/experience/experience-1.png',
    },
    {
        link: 'https://stalkanatsilur.com.ua/',
        source: '/images/content/experience/experience-2.webp',
        src: '/images/content/experience/experience-2.png',
    },
    {
        link: 'http://kraina.hd.kiev.ua/',
        source: '/images/content/experience/experience-3.webp',
        src: '/images/content/experience/experience-3.png',
    },
    {
        link: 'https://horizoncapital.com.ua/uk/',
        source: '/images/content/experience/experience-4.webp',
        src: '/images/content/experience/experience-4.png',
    },
    {
        link: 'https://taslife.com.ua/doktor-tas',
        source: '/images/content/experience/experience-8.webp',
        src: '/images/content/experience/experience-8.png',
    },
];

const Commercial = (): ReactElement => {
    return (
        <ul className={css.works}>
            {projects.map(({ link, src, source }) => (
                <li key={src}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <picture className={css.img}>
                            <source src={source} type="image/webp" />
                            <img src={src} alt="" />
                        </picture>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Commercial;
