import React, { ReactElement } from 'react';

import css from '../Experience.module.css';

const Pet = (): ReactElement => {
    return (
        <ul className={css.works}>
            <li>
                <a href="http://phoqer.com/" target="_blank" rel="noopener noreferrer">
                    <picture className={css.img}>
                        <source src="/images/content/experience/experience-6.webp" type="image/webp" />
                        <img src="/images/content/experience/experience-6.png" alt="" />
                    </picture>
                </a>
            </li>
        </ul>
    );
};

export default Pet;
