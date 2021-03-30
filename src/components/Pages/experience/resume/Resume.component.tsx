import React, { ReactElement } from 'react';

import css from '../Experience.module.css';

const Resume = (): ReactElement => {
    return (
        <ul className={css.works}>
            <li>
                <a href="https://imykhailychenko.github.io/resume-v2/dist/" target="_blank" rel="noopener noreferrer">
                    <picture className={css.img}>
                        <source src="/images/content/experience/experience-5.webp" type="image/webp" />
                        <img src="/images/content/experience/experience-5.png" alt="" />
                    </picture>
                </a>
            </li>
        </ul>
    );
};

export default Resume;
