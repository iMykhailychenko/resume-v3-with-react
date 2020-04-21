import React from 'react';
import styles from './ListElement.module.css';

interface Values {
  title: string;
  text: string;
  background: string;
  color: string;
}

interface Props {
  props: Values[];
}

const ListElement: React.FC<Props> = ({ props }) => (
  <ul className={styles.list}>
    {props.map(({ title, text, background, color }) => (
      <li className={styles.item}>
        <div className={styles.block} style={{ background }}>
          <h4 className={styles.title} style={{ color }}>{title}</h4>
        </div>
        <p className={styles.title}>{text}</p>
      </li>
    ))}
  </ul>
);

export default ListElement;
