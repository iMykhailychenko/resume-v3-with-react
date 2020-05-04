import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Locale.module.css';

interface Props {
  locale: string;
  toggleLocale(locale: string): void;
}

const Locale: React.FC<Props> = ({ locale, toggleLocale }) => {
  const ua = locale === 'UA' ? styles.active : styles.item;
  const ru = locale === 'RU' ? styles.active : styles.item;

  return (
    <>
      <Helmet>
        <html lang={locale.toLowerCase()} />
      </Helmet>
      <ul className={styles.list}>
        <li className={ua} onClick={() => toggleLocale('UA')}>
          UA
        </li>
        <li className={ru} onClick={() => toggleLocale('RU')}>
          RU
        </li>
      </ul>
    </>
  );
};

export default Locale;
