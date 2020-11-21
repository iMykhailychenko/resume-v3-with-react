import { Parallax } from 'rc-scroll-anim';
import React, { lazy, Suspense } from 'react';

import emoji from '../../images/emoji/salary.png';
import webp from '../../images/emoji/salary.webp';
import PageFirstBlock from '../../page-first-block/PageFirstBlock.component';
import PageText from '../../page-text/PageText.component';
import SplitLink from '../../split-link/SplitLink';
import styles from './Salary.module.css';
import Sale from './sale/Sale';

const AsyncChartEffectiveness = lazy(
  () =>
    import(
      './chart/ChartEffectiveness' /* webpackChunkName: "chart-effectiveness" */
    ),
);
const AsyncChartCompany = lazy(
  () => import('./chart/ChartCompany' /* webpackChunkName: "chart-company" */),
);

interface Props {
  content: {
    title: string;
    text: string[];
    sale: string;
    before: string;
    now: string;
    graphText: string;
    captionOne: string;
    captionTwo: string;
    endText: string;
    relink: string;
  };
}

const Salary: React.FC<Props> = ({
  content: {
    title,
    text,
    sale,
    before,
    now,
    graphText,
    captionOne,
    captionTwo,
    endText,
    relink,
  },
}) => (
  <main>
    <div className="container">
      <PageFirstBlock title={title} img={emoji} webp={webp} />

      <PageText>
        {text.map((paragraph, id) => (
          <p key={id}>{paragraph}</p>
        ))}
      </PageText>

      <section tabIndex={0} className={styles.section}>
        <p>{sale}</p>

        <Sale number={1200.0} prefix={before} />
        <Sale number={999.99} prefix={now} />
      </section>

      <section className={styles.beforeChart}>
        <Parallax
          component="p"
          animation={{ y: 0, opacity: 1 }}
          style={{
            transform: 'translateY(-100%)',
            opacity: '0',
          }}
        >
          {graphText}
        </Parallax>
      </section>
    </div>

    <section>
      <Suspense fallback={<span></span>}>
        <div className={styles.chart}>
          <AsyncChartEffectiveness />
          <p className={styles.chartText}>{captionOne}</p>
        </div>

        <div className={styles.chart}>
          <AsyncChartCompany />
          <p className={styles.chartText}>{captionTwo}</p>
        </div>
      </Suspense>
    </section>

    <div className="container">
      <section className={styles.end}>
        <Parallax
          component="p"
          animation={{ y: 0, opacity: 1, playScale: [0, 0.8] }}
          style={{
            transform: 'translateY(-100%)',
            opacity: '0',
          }}
        >
          {endText}
        </Parallax>
      </section>

      <SplitLink path="/contacts" text={relink} />
    </div>
  </main>
);

export default Salary;
