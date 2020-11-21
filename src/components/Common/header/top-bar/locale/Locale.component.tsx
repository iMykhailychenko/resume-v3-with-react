import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { Locale } from '../../../../../types';
import css from './Locale.module.css';

interface Props {
  locale: Locale;
  toggleLocale(data: Locale): void;
}

const LocaleComponent = ({ locale, toggleLocale }: Props): ReactElement => {
  const handleLang = (data: Locale) => () => {
    toggleLocale(data);
  };

  return (
    <>
      <Helmet>
        <html lang={locale?.toLowerCase()} />
      </Helmet>

      <ul className={css.list}>
        <li>
          <button
            className={locale === 'UA' ? css.active : css.item}
            onClick={handleLang('UA')}
          >
            UA
          </button>
        </li>
        <li>
          <button
            className={locale === 'RU' ? css.active : css.item}
            onClick={handleLang('RU')}
          >
            RU
          </button>
        </li>
        <li>
          <button
            className={locale === 'EN' ? css.active : css.item}
            onClick={handleLang('EN')}
          >
            EN
          </button>
        </li>
      </ul>
    </>
  );
};

export default LocaleComponent;
