import React, { ReactElement } from 'react';

import css from '../Experiance.module.css';

const Resume = (): ReactElement => {
  return (
    <ul className={css.works}>
      <li>
        <a
          href="https://imykhailychenko.github.io/resume-v2/dist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture className={css.img}>
            <source
              src="/images/content/experiance/experiance-5.webp"
              type="image/webp"
            />
            <img src="/images/content/experiance/experiance-5.png" alt="" />
          </picture>
        </a>
      </li>
      <li>
        <a
          href="https://imykhailychenko.github.io/resume/build/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture className={css.img}>
            <source
              src="/images/content/experiance/experiance-6.webp"
              type="image/webp"
            />
            <img src="/images/content/experiance/experiance-6.png" alt="" />
          </picture>
        </a>
      </li>
    </ul>
  );
};

export default Resume;
