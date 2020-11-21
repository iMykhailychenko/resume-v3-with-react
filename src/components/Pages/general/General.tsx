import React from 'react';

import img from '../../images/content/general/my-photo.jpeg';
import imgWeb from '../../images/content/general/my-photo.webp';
import emoji from '../../images/emoji/general.png';
import webp from '../../images/emoji/general.webp';
import PageFirstBlock from '../../page-first-block/PageFirstBlock.component';
import SplitLink from '../../split-link/SplitLink';
import styles from './General.module.css';
import InfoBlock from './InfoBlock/InfoBlock';

interface Props {
  content: {
    title: string;
    tablet: string[][];
    text: string;
    relink: string;
  };
}

const General: React.FC<Props> = ({ content: { title, tablet, text, relink } }) => (
  <main className="container">
    <PageFirstBlock title={title} img={emoji} webp={webp} />

    <section className={styles.container}>
      <div className={styles.left}>
        <picture className={styles.img}>
          <source srcSet={imgWeb} type="image/webp" />
          <img src={img} alt="" />
        </picture>

        <p className={styles.general}>{text}</p>
      </div>

      <div className={styles.right}>
        {tablet.map((raw, id) => (
          <InfoBlock key={id} param={raw[0]} value={raw[1]} top={raw[2]} />
        ))}
      </div>
    </section>

    <SplitLink path="/education" text={relink} />
  </main>
);

export default General;
