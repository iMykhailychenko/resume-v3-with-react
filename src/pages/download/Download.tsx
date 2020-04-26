import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import styles from './Download.module.css';

// img
import emoji from '../../images/emoji/download.png';
import pdfImg from '../../images/content/dowload/pdf.png';
import wordImg from '../../images/content/dowload/word.png';

// files
import pdfUA from './files/resume-ua.pdf';
import pdfRU from './files/resume-ru.pdf';
import pdfEN from './files/resume-en.pdf';

import docUA from './files/resume-ua.docx';
import docRU from './files/resume-ru.docx';
import docEN from './files/resume-en.docx';


interface Props {
  content: {
    title: string;
    text: string;
    pdf: string;
    doc: string;
    btn: string;
    relink: string;
  };
}

const Download: React.FC<Props> = ({
  content: { title, text, pdf, doc, btn, relink },
}) => (
  <>
    <PageFirstBlock title="Загрузить резюме" img={emoji} />

    <PageText>
      <h3>{title}</h3>
      <p>{text}</p>
    </PageText>

    <section className={styles.section}>
      <Parallax
        className={styles.block}
        animation={{ x: 0, y: 0, opacity: 1 }}
        style={{
          transform: 'translateY(100px) translateX(-100px)',
          opacity: 0,
        }}
      >
        <img className={styles.img} src={pdfImg} alt="" />

        <div className={styles.files + ' border_top'}>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={pdfUA}
                download
              >
                {`${btn} pdf UA`}
              </a>
            </li>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={pdfRU}
                download
              >
                {`${btn} pdf RU`}
              </a>
            </li>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={pdfEN}
                download
              >
                {`${btn} pdf EN`}
              </a>
            </li>
          </ul>

          <p className={styles.text}>{pdf}</p>
        </div>
      </Parallax>

      <Parallax
        className={styles.block}
        animation={{ x: 0, y: 0, opacity: 1 }}
        style={{ transform: 'translateY(100px) translateX(100px)', opacity: 0 }}
      >
        <img className={styles.img} src={wordImg} alt="" />

        <div className={styles.files + ' border_top'}>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={docUA}
                download
              >
                {`${btn} doc UA`}
              </a>
            </li>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={docRU}
                download
              >
                {`${btn} doc RU`}
              </a>
            </li>
            <li>
              <a
                className={styles.link + ' reversBackground'}
                href={docEN}
                download
              >
                {`${btn} doc EN`}
              </a>
            </li>
          </ul>

          <p className={styles.text}>{doc}</p>
        </div>
      </Parallax>
    </section>

    <SplitLink path="/reason" text={relink} />
  </>
);

export default Download;
