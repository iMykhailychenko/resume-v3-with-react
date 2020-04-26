import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import { Parallax } from 'rc-scroll-anim';
import styles from './Reason.module.css';

import emoji from '../../images/emoji/reason.png';
import videoOne from '../../images/content/reason/reason-1.mp4';
import videoTwo from '../../images/content/reason/reason-2.mp4';

interface Props {
  content: {
    title: string;
    firstText: string[];
    secondText: string[];
    relink: string;
  };
}

const Reason: React.FC<Props> = ({
  content: { title, firstText, secondText, relink },
}) => (
  <>
    <PageFirstBlock title={title} img={emoji} />

    <section className={styles.content}>
      <div className={styles.blockLeft}>
        <Parallax
          animation={{ y: -100, scale: 1 }}
          style={{ transform: 'translateY(100px) scale(0.9)' }}
        >
          <video className={styles.video} loop autoPlay>
            <source src={videoOne} type="video/mp4" />
          </video>
        </Parallax>

        <Parallax
          className={styles.text + ' background'}
          animation={{ y: -180 }}
          style={{ transform: 'translateY(50px)' }}
        >
          {firstText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Parallax>
      </div>

      <div className={styles.blockRight}>
        <Parallax
          animation={{ y: -100, scale: 1 }}
          style={{ transform: 'translateY(100px)  scale(0.9)' }}
        >
          <video className={styles.video} loop autoPlay>
            <source src={videoTwo} type="video/mp4" />
          </video>
        </Parallax>

        <Parallax
          className={styles.text + ' background'}
          animation={{ y: -180 }}
          style={{ transform: 'translateY(50px)' }}
        >
          {secondText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Parallax>
      </div>
    </section>

    <SplitLink path="/general" text={relink} />
  </>
);

export default Reason;
