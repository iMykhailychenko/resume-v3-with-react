import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import InfoBlock from './InfoBlock/InfoBlock';

import styles from './General.module.css';

import webp from '../../images/emoji/general.webp';
import imgWeb from '../../images/content/general/my-photo.webp';

import emoji from '../../images/emoji/general.png';
import img from '../../images/content/general/my-photo.jpeg';

interface Props {
  content: {
    title: string;
    tablet: string[][];
    text: string;
    relink: string;
  };
}

const General: React.FC<Props> = ({
  content: { title, tablet, text, relink },
}) => (
  <>
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
  </>
);

export default General;
