import clsx from 'clsx';
import { Parallax } from 'rc-scroll-anim';
import React from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import PageText from '../../Common/page-text/PageText.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './Download.module.css';

interface Props {
    content: {
        title: string;
        text: string;
        pdf: string;
        doc: string;
        btn: string;
        relink: string;
    };
}

const Download: React.FC<Props> = ({ content: { title, text, pdf, doc, btn, relink } }) => (
    <div className="container">
        <PageFirstBlock title={title} img="/images/emoji/download.png" webp="/images/emoji/download.webp" />

        <PageText>
            <p>{text}</p>
        </PageText>

        <Parallax
            component="section"
            className={css.section}
            animation={{ y: 0, opacity: 1 }}
            style={{ transform: 'translateY(100px)', opacity: 0 }}
        >
            <div className={css.block}>
                <picture className={css.img}>
                    <source srcSet="/images/content/dowload/pdf.webp" type="image/webp" />
                    <img src="/images/content/dowload/pdf.png" alt="" />
                </picture>

                <div className={clsx(css.files, 'border-top')}>
                    <ul className={css.list}>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-ua.pdf" download>
                                {`${btn} pdf UA`}
                            </a>
                        </li>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-ru.pdf" download>
                                {`${btn} pdf RU`}
                            </a>
                        </li>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-en.pdf" download>
                                {`${btn} pdf EN`}
                            </a>
                        </li>
                    </ul>

                    <p className={css.text}>{pdf}</p>
                </div>
            </div>

            <div className={css.block}>
                <picture className={css.img}>
                    <source srcSet="../../images/emoji/download.webp" type="image/webp" />
                    <img src="../../images/emoji/download.png" alt="" />
                </picture>

                <div className={clsx(css.files, 'border-top')}>
                    <ul className={css.list}>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-ua.docx" download>
                                {`${btn} doc UA`}
                            </a>
                        </li>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-ru.docx" download>
                                {`${btn} doc RU`}
                            </a>
                        </li>
                        <li>
                            <a className={clsx(css.link, 'reversBackground')} href="/files/resume-en.docx" download>
                                {`${btn} doc EN`}
                            </a>
                        </li>
                    </ul>

                    <p className={css.text}>{doc}</p>
                </div>
            </div>
        </Parallax>

        <SplitLink path="/reason" text={relink} />
    </div>
);

export default Download;
