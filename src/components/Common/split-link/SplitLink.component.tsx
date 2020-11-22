import { Parallax } from 'rc-scroll-anim';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import css from './SplitLink.module.css';

interface Props {
  path: string;
  text: string;
}

const SplitLink = ({ path, text }: Props): ReactElement => (
  <>
    <Link to={path} className={css.link}>
      <Parallax
        className={css.wrp}
        animation={{ y: 0, opacity: 1, playScale: [0, 0.3] }}
        style={{ transform: 'translateY(70px)', opacity: 0 }}
      >
        <div className="page-relink-circle" />
        <p className={css.text}>{text}</p>
      </Parallax>
    </Link>
    <div style={{ marginTop: '12rem' }} />
  </>
);

export default SplitLink;
