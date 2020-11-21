import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import styles from './PageText.module.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const PageText = ({ children }: Props): ReactElement => {
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
