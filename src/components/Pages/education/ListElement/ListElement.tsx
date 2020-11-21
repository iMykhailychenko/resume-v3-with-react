import { Parallax } from 'rc-scroll-anim';
import React from 'react';

import styles from './ListElement.module.css';

interface Props {
  title: string;
  text: string;
  background: string;
  color: string;
  translate: string;
  x: string;
  y: string;
}

const ListElement: React.FC<Props> = ({
  title,
  text,
  background,
  color,
  translate,
  x,
  y,
}) => (
  <li className={styles.item} tabIndex={0}>
    <Parallax
      className={styles.block}
      animation={{ x: 0, rotateX: 0, rotateY: 0 }}
      style={{
        transform: `translateX(${translate}) rotateX(${x}) rotateY(${y})`,
      }}
    >
      <div className={styles.inner} style={{ background }}>
        <h4 className={styles.title} style={{ color }}>
          {title}
        </h4>
      </div>
    </Parallax>

    <p className={styles.text}>{text}</p>
  </li>
);

export default ListElement;
