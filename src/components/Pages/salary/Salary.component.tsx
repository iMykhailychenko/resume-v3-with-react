import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import { Theme } from '../../../types';
import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import PageText from '../../Common/page-text/PageText.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import ChartCompany from './chart/ChartCompany';
import ChartEffectiveness from './chart/ChartEffectiveness';
import css from './Salary.module.css';
import Sale from './sale/Sale.component';

interface Props {
    theme: Theme;
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

const Salary = ({
    theme,
    content: { title, text, sale, before, now, graphText, captionOne, captionTwo, endText, relink },
}: Props): ReactElement => (
    <main>
        <div className="container">
            <PageFirstBlock title={title} img="/images/emoji/salary.png" webp="/images/emoji/salary.webp" />

            <PageText>
                {text.map((paragraph, id) => (
                    <p key={id}>{paragraph}</p>
                ))}
            </PageText>

            <section className={css.section}>
                <p>{sale}</p>

                <Sale number={1600.0} prefix={before} />
                <Sale number={1399.99} prefix={now} />
            </section>

            <section className={css.beforeChart}>
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
            <div className={css.chart}>
                <ChartEffectiveness theme={theme} />
                <p className={css.chartText}>{captionOne}</p>
            </div>

            <div className={css.chart}>
                <ChartCompany theme={theme} />
                <p className={css.chartText}>{captionTwo}</p>
            </div>
        </section>

        <div className="container">
            <section className={css.end}>
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
