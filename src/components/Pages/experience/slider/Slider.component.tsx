import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from '../Experience.module.css';

interface IProps {
    mobile: boolean;
    rotate: number;
    count: number;
    total: number;
}

const SliderDots = ({ mobile, rotate, count, total }: IProps): ReactElement | null =>
    mobile ? null : (
        <>
            <div className={css.circle + ' border'} style={{ transform: `rotate(${rotate}deg)` }}>
                {Array(total)
                    .fill(1)
                    .map((_, index) => (
                        <span
                            key={index}
                            className={clsx(css.point, 'reversBackground', index === count && css.activePoint)}
                        />
                    ))}
            </div>

            <span className={css.current}>{`0${count + 1}`}</span>
        </>
    );

export default SliderDots;
