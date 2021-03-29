import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import css from './ListElement.module.css';

interface Props {
    data: {
        title: string;
        text: string;
        background: string;
        color: string;
        translate: string;
        x: string;
        y: string;
    };
}

const ListElement = ({ data }: Props): ReactElement => (
    <li className={css.item}>
        <Parallax
            className={css.block}
            animation={{ x: 0, rotateX: 0, rotateY: 0 }}
            style={{
                transform: `translateX(${data.translate}) rotateX(${data.x}) rotateY(${data.y})`,
            }}
        >
            <div className={css.inner} style={{ background: data.background }}>
                <h4 className={css.title} style={{ color: data.color }}>
                    {data.title}
                </h4>
            </div>
        </Parallax>

        <p className={css.text}>{data.text}</p>
    </li>
);

export default ListElement;
