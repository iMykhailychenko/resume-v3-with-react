import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'rc-scroll-anim';

import styles from './SplitLink.module.css';

interface Props {
  path: string;
  text: string;
}

const SplitLink: React.FC<Props> = ({ path, text }) => (
  <Link to={path} className={styles.link}>
    <Parallax
      className={styles.wrp}
      animation={{ y: 0, opacity: 1, playScale: [0, 0.3] }}
      style={{ transform: 'translateY(70px)', opacity: 0 }}
    >
      <div className="page-relink-circle"></div>
      <p className={styles.text}>{text}</p>
    </Parallax>
  </Link>
);

export default SplitLink;
