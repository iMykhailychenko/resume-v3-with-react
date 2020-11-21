import React, { ReactElement } from 'react';

import css from './InfoBlock.module.css';

interface Props {
  param: string;
  value: string;
  top: string;
}

const InfoBlock = ({ param, value, top }: Props): ReactElement => (
  <div className={css.container} style={{ top: top + 'rem' }}>
    <p className={css.param}>{param}</p>
    <p className={css.value}>{value}</p>
  </div>
);

export default InfoBlock;
