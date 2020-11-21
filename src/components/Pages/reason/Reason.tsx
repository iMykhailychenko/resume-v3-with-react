import { Parallax } from 'rc-scroll-anim';
import React from 'react';

import videoOne from '../../images/content/reason/reason-1.mp4';
import videoOneWeb from '../../images/content/reason/reason-1.webm';
import videoTwo from '../../images/content/reason/reason-2.mp4';
import videoTwoWeb from '../../images/content/reason/reason-2.webm';
import emoji from '../../images/emoji/reason.png';
import webp from '../../images/emoji/reason.webp';
import PageFirstBlock from '../../page-first-block/PageFirstBlock.component';
import SplitLink from '../../split-link/SplitLink';
import styles from './Reason.module.css';

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
}) => {
  const mobile = window.innerWidth < 768;

  return (
    <main className="container">
      <PageFirstBlock title={title} img={emoji} webp={webp} />

      <section className={styles.content}>
        <div className={styles.blockLeft}>
          {mobile ? (
            <>
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src={videoOneWeb} type="video/webm" />
                <source src={videoOne} type="video/mp4" />
              </video>

              <div className={styles.text + ' background'}>
                {firstText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </>
          ) : (
            <>
              <Parallax
                animation={{ y: -100, scale: 1 }}
                style={{ transform: 'translateY(100px) scale(0.9)' }}
              >
                <video autoPlay loop muted playsInline className={styles.video}>
                  <source src={videoOneWeb} type="video/webm" />
                  <source src={videoOne} type="video/mp4" />
                </video>
              </Parallax>

              <Parallax
                className={styles.text + ' background'}
                tabIndex={0}
                animation={{ y: -180 }}
                style={{ transform: 'translateY(50px)' }}
              >
                {firstText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </Parallax>
            </>
          )}
        </div>

        <div className={styles.blockRight}>
          {mobile ? (
            <>
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src={videoTwoWeb} type="video/webm" />
                <source src={videoTwo} type="video/mp4" />
              </video>

              <div className={styles.text + ' background'}>
                {secondText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </>
          ) : (
            <>
              <Parallax
                animation={{ y: -100, scale: 1 }}
                style={{ transform: 'translateY(100px)  scale(0.9)' }}
              >
                <video autoPlay loop muted playsInline className={styles.video}>
                  <source src={videoTwoWeb} type="video/webm" />
                  <source src={videoTwo} type="video/mp4" />
                </video>
              </Parallax>

              <Parallax
                className={styles.text + ' background'}
                animation={{ y: -180 }}
                tabIndex={0}
                style={{ transform: 'translateY(50px)' }}
              >
                {secondText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </Parallax>
            </>
          )}
        </div>
      </section>

      <SplitLink path="/general" text={relink} />
    </main>
  );
};

export default Reason;
