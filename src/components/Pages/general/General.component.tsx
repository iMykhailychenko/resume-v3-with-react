import React, { ReactElement } from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './General.module.css';
import InfoBlock from './InfoBlock/InfoBlock.component';

interface Props {
    content: {
        title: string;
        tablet: string[][];
        text: string;
        relink: string;
    };
}

const General = ({ content: { title, tablet, text, relink } }: Props): ReactElement => (
    <main className="container">
        <PageFirstBlock title={title} img="/images/emoji/general.png" webp="/images/emoji/general.webp" />

        <section className={css.container}>
            <div className={css.left}>
                <picture className={css.img}>
                    <source srcSet="/images/content/general/my-photo.webp" type="image/webp" />
                    <img src="/images/content/general/my-photo.jpeg" alt="" />
                </picture>

                <p className={css.general}>{text}</p>
            </div>

            <div className={css.right}>
                {tablet.map((raw, id) => (
                    <InfoBlock key={id} param={raw[0]} value={raw[1]} top={raw[2]} />
                ))}
            </div>
        </section>

        <SplitLink path="/education" text={relink} />
    </main>
);

export default General;
