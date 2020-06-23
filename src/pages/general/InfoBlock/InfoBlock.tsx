import React from 'react';
import styles from './InfoBlock.module.css';

interface Props {
  param: string;
  value: string;
  top: string;
}

const InfoBlock: React.FC<Props> = ({ param, value, top }) => (
  <div className={styles.container} style={{ top: top + 'rem' }}>
    <p className={styles.param}>{param}</p>
    <p className={styles.value}>{value}</p>
  </div>
);

export default InfoBlock;
