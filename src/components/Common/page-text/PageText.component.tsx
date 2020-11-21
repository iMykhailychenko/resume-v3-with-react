import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';

import css from './PageText.module.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const PageText = ({ children }: Props): ReactElement => {
  const mobile = window.innerWidth < 768;

  return mobile ? (
    <div className={css.content}>
      <section>{children}</section>
    </div>
  ) : (
    <Parallax
      className={css.content}
      animation={{ y: 0, opacity: 1 }}
      style={{ transform: 'translateY(-100%)', opacity: 0 }}
    >
      <section>{children}</section>
    </Parallax>
  );
};

export default PageText;
