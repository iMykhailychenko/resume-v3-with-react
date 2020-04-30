import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import ListElement from './ListElement/ListElement';
import styles from './Education.module.css';

import webp from '../../images/emoji/education.webp';
import emoji from '../../images/emoji/education.png';

interface Props {
  content: {
    title: string;
    item: [
      {
        title: string;
        text: string;
        background: string;
        color: string;
        translate: string;
        x: string;
        y: string;
      },
    ];
    relink: string;
  };
}

const Education: React.FC<Props> = ({ content: { title, item, relink } }) => (
  <main className={styles.overflow}>
    <div className="container">
      <PageFirstBlock title={title} img={emoji} webp={webp} />

      <div className={styles.section}>
        <ul className={styles.list}>
          {item.map((element, id) => (
            <ListElement key={id} {...element} />
          ))}
        </ul>
      </div>

      <SplitLink path="/experience" text={relink} />
    </div>
  </main>
);

export default Education;
