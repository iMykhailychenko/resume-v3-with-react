import { Parallax } from 'rc-scroll-anim';
import React from 'react';

import pdfImg from '../../images/content/dowload/pdf.png';
import pdfImgWeb from '../../images/content/dowload/pdf.webp';
import wordImg from '../../images/content/dowload/word.png';
import wordImgWeb from '../../images/content/dowload/word.webp';
import emoji from '../../images/emoji/download.png';
// img
import webp from '../../images/emoji/download.webp';
import PageFirstBlock from '../../page-first-block/PageFirstBlock.component';
import PageText from '../../page-text/PageText.component';
import SplitLink from '../../split-link/SplitLink';
import styles from './Download.module.css';
import docEN from './files/resume-en.docx';
import pdfEN from './files/resume-en.pdf';
import docRU from './files/resume-ru.docx';
import pdfRU from './files/resume-ru.pdf';
import docUA from './files/resume-ua.docx';
// files
import pdfUA from './files/resume-ua.pdf';

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
  <main className="container">
    <PageFirstBlock title={title} img={emoji} webp={webp} />

    <PageText>
      <p>{text}</p>
    </PageText>

    <Parallax
      component="section"
      className={styles.section}
      animation={{ y: 0, opacity: 1 }}
      style={{ transform: 'translateY(100px)', opacity: 0 }}
    >
      <div className={styles.block}>
        <picture className={styles.img}>
          <source srcSet={pdfImgWeb} type="image/webp" />
          <img src={pdfImg} alt="" />
        </picture>

        <div className={styles.files + ' border-top'}>
          <ul className={styles.list}>
            <li>
              <a className={styles.link + ' reversBackground'} href={pdfUA} download>
                {`${btn} pdf UA`}
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href={pdfRU} download>
                {`${btn} pdf RU`}
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href={pdfEN} download>
                {`${btn} pdf EN`}
              </a>
            </li>
          </ul>

          <p className={styles.text}>{pdf}</p>
        </div>
      </div>

      <div className={styles.block}>
        <picture className={styles.img}>
          <source srcSet={wordImgWeb} type="image/webp" />
          <img src={wordImg} alt="" />
        </picture>

        <div className={styles.files + ' border-top'}>
          <ul className={styles.list}>
            <li>
              <a className={styles.link + ' reversBackground'} href={docUA} download>
                {`${btn} doc UA`}
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href={docRU} download>
                {`${btn} doc RU`}
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href={docEN} download>
                {`${btn} doc EN`}
              </a>
            </li>
          </ul>

          <p className={styles.text}>{doc}</p>
        </div>
      </div>
    </Parallax>

    <SplitLink path="/reason" text={relink} />
  </main>
);

export default Download;
