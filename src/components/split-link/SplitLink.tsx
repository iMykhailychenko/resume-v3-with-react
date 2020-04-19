import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { InView } from 'react-intersection-observer';
import styles from './SplitLink.module.css';
import fadeIn from '../../transitions/fadeInUp.module.css';

interface Props {
  path: string;
  text: string;
}

const SplitLink: React.FC<Props> = ({ path, text }) => (
  <InView rootMargin={'80px'}>
    {({ inView, ref }) => (
      <div className={styles.wrp} ref={ref}>
        <CSSTransition in={inView} timeout={1000} classNames={fadeIn}>
          <Link to={path} className={styles.link}>
            <div className="page-relink-circle"></div>
            <p className={styles.text}>{text}</p>
          </Link>
        </CSSTransition>
      </div>
    )}
  </InView>
);

export default SplitLink;
