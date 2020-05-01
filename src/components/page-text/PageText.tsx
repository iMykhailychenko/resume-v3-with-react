import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import styles from './PageText.module.css';

interface Props {}

const PageText: React.FC<Props> = ({ children }) => {
  const mobile = window.innerWidth < 768;

  return mobile ? (
    <div className={styles.content}>
      <section>{children}</section>
    </div>
  ) : (
    <Parallax
      className={styles.content}
      animation={{ y: 0, opacity: 1 }}
      style={{ transform: 'translateY(-100%)', opacity: 0 }}
    >
      <section>{children}</section>
    </Parallax>
  );
};

export default PageText;
