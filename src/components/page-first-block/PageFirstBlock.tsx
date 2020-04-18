import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './PageFirstBlock.module.css'
import '../../transitions/slideUp.css';

interface Props {
  title: string;
  img: string;
}

const PageFirstBlock: React.FC<Props> = ({ title, img }) => (
  <section>
    <CSSTransition in timeout={600} classNames="slideUp" appear>
      <img className={styles.emoji + " easeInOut"} src={img} alt="" />
    </CSSTransition>

    <CSSTransition in timeout={800} classNames="slideUp" appear>
      <h2 className={styles.title + " easeInOut"}>{title}</h2>
    </CSSTransition>

    <CSSTransition in timeout={1000} classNames="slideUp" appear>
      <div className="page-scroll easeInOut"></div>
    </CSSTransition>
  </section>
);

export default PageFirstBlock;
