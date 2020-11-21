import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './Reason.module.css';

interface Props {
  content: {
    title: string;
    firstText: string[];
    secondText: string[];
    relink: string;
  };
}

const Reason = ({
  content: { title, firstText, secondText, relink },
}: Props): ReactElement => {
  const mobile = window.innerWidth < 768;

  return (
    <main className="container">
      <PageFirstBlock
        title={title}
        img="/images/emoji/reason.png"
        webp="/images/emoji/reason.webp"
      />

      <section className={css.content}>
        <div className={css.blockLeft}>
          {mobile ? (
            <>
              <video autoPlay loop muted playsInline className={css.video}>
                <source
                  src="/images/content/reason/reason-1.webm"
                  type="video/webm"
                />
                <source src="/images/content/reason/reason-1.mp4" type="video/mp4" />
              </video>

              <div className={css.text + ' background'}>
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
                <video autoPlay loop muted playsInline className={css.video}>
                  <source
                    src="/images/content/reason/reason-1.webm"
                    type="video/webm"
                  />
                  <source
                    src="/images/content/reason/reason-1.mp4"
                    type="video/mp4"
                  />
                </video>
              </Parallax>

              <Parallax
                className={css.text + ' background'}
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

        <div className={css.blockRight}>
          {mobile ? (
            <>
              <video autoPlay loop muted playsInline className={css.video}>
                <source
                  src="/images/content/reason/reason-2.webm"
                  type="video/webm"
                />
                <source src="/images/content/reason/reason-2.mp4" type="video/mp4" />
              </video>

              <div className={css.text + ' background'}>
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
                <video autoPlay loop muted playsInline className={css.video}>
                  <source
                    src="/images/content/reason/reason-2.webm"
                    type="video/webm"
                  />
                  <source
                    src="/images/content/reason/reason-2.mp4"
                    type="video/mp4"
                  />
                </video>
              </Parallax>

              <Parallax
                className={css.text + ' background'}
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
