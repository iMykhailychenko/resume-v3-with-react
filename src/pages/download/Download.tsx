import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import styles from './Download.module.css';

import emoji from '../../images/emoji/download.png';
import pdf from '../../images/content/dowload/pdf.png';
import word from '../../images/content/dowload/word.png';

interface Props {}

const Download: React.FC<Props> = () => (
  <>
    <PageFirstBlock title="Загрузить резюме" img={emoji} />

    <PageText>
      <h3>Consequuntur sapiente ad expedita?</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        obcaecati atque facilis, animi qui labore veritatis et aliquid dolorem
        accusantium ducimus. Sed accusamus, optio error labore delectus facilis
        temporibus voluptatum!
      </p>
    </PageText>

    <section className={styles.section}>
      <Parallax
        className={styles.block}
        animation={{ x: 0, opacity: 1, playScale: [0, 0.9] }}
        style={{ transform: 'translateX(-100%)', opacity: 0 }}
      >
        <img className={styles.img} src={pdf} alt="" />

        <div className="download_files">
          <ul className={styles.list}>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить pdf UA
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить pdf RU
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить pdf EN
              </a>
            </li>
          </ul>

          <p className={styles.text}>
            Это оформленный вариант резюме в PDF формате. Одинаково выглядит на
            всех устройствах.
          </p>
        </div>
      </Parallax>

      <Parallax
        className={styles.block}
        animation={{ x: 0, opacity: 1, playScale: [0, 0.9] }}
        style={{ transform: 'translateX(100%)', opacity: 0 }}
      >
        <img className={styles.img} src={word} alt="" />

        <div className="download_files">
          <ul className={styles.list}>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить doc UA
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить doc RU
              </a>
            </li>
            <li>
              <a className={styles.link + ' reversBackground'} href="http://" download>
                Загрузить doc EN
              </a>
            </li>
          </ul>

          <p className={styles.text}>
            Это текстовый вариант резюме в DOC формате, без оформления. На
            случай если вас интересует только текс.
          </p>
        </div>
      </Parallax>
    </section>

    <SplitLink path="/reason" text="Почему я меняю профессию?" />
  </>
);

export default Download;
