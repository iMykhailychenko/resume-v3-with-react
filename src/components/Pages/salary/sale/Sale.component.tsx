import React from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

import css from './Sale.module.css';

interface Props {
    number: number;
    prefix: string;
}

const Sale: React.FC<Props> = ({ number, prefix }) => (
    <InView threshold={0.4} triggerOnce>
        {({ inView, ref }) => (
            <div ref={ref} className={css.number}>
                {inView && (
                    <CountUp
                        start={0}
                        end={number}
                        duration={1.5}
                        decimals={2}
                        separator=" "
                        decimal="."
                        prefix={prefix}
                        suffix=" USD"
                    />
                )}
            </div>
        )}
    </InView>
);

export default Sale;
