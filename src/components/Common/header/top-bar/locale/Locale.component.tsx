import React, { MouseEvent, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import css from './Locale.module.css';

interface Props {
  locale: string;
  toggleLocale(locale: string): void;
}

const Locale = ({ locale, toggleLocale }: Props): ReactElement => {
  const handleLang = (event: MouseEvent<HTMLElement>): void => {
    toggleLocale(event.target.dataset.lang);
  };
  return (
    <>
      <Helmet>
        <html lang={locale.toLowerCase()} />
      </Helmet>

      <ul className={css.list}>
        <li>
          <button
            data-lang="UA"
            className={locale === 'UA' ? css.active : css.item}
            onClick={handleLang}
          >
            UA
          </button>
        </li>
        <li>
          <button
            data-lang="RU"
            className={locale === 'RU' ? css.active : css.item}
            onClick={handleLang}
          >
            RU
          </button>
        </li>
        <li>
          <button
            data-lang="EN"
            className={locale === 'EN' ? css.active : css.item}
            onClick={handleLang}
          >
            EN
          </button>
        </li>
      </ul>
    </>
  );
};

export default Locale;
