import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Locale.module.css';

interface Props {
  locale: string;
  toggleLocale(locale: string): void;
}

const Locale: React.FC<Props> = ({ locale, toggleLocale }) => {
  const ua: string = locale === 'UA' ? styles.active : styles.item;
  const ru: string = locale === 'RU' ? styles.active : styles.item;
  const en: string = locale === 'EN' ? styles.active : styles.item;

  return (
    <>
      <Helmet>
        <html lang={locale.toLowerCase()} />
      </Helmet>

      <ul className={styles.list}>
        <li>
          <button className={ua} onClick={() => toggleLocale('UA')}>
            UA
          </button>
        </li>
        <li>
          <button className={ru} onClick={() => toggleLocale('RU')}>
            RU
          </button>
        </li>
        <li>
          <button className={en} onClick={() => toggleLocale('EN')}>
            EN
          </button>
        </li>
      </ul>
    </>
  );
};

export default Locale;
