import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SplitLink.module.css';

interface Props {
  path: string;
  text: string;
}

const SplitLink: React.FC<Props> = ({ path, text }) => (
  <Link to={path} className={styles.link}>
    <div className="page-relink-circle"></div>
    <p className={styles.text}>{text}</p>
  </Link>
);

export default SplitLink;
