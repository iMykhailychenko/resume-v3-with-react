import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Canvas from './canvas/CanvasContainer';
import styles from './Main.module.css';
import '../../transitions/slideUp.css';

import right from '../../images/emoji/right.webp';
import move from '../../images/svg/move.svg';

interface Props {
  content: {
    title: string;
    text: string;
    relink: string;
  };
}

const Main: React.FC<Props> = ({ content: { title, text, relink } }) => (
  <section className={styles.container}>
    <div className={styles.left}>
      <CSSTransition in timeout={600} classNames="slideUp" appear>
        <h1 className="easeInOut">{title}</h1>
      </CSSTransition>

      <CSSTransition in timeout={800} classNames="slideUp" appear>
        <p className="easeInOut">{text}</p>
      </CSSTransition>

      <CSSTransition in timeout={1000} classNames="slideUp" appear>
        <Link to="/reason" className={styles.btn + ' easeInOut'}>
          <img className={styles.img} src={right} alt="" />
          <span>{relink}</span>
        </Link>
      </CSSTransition>
    </div>

    <div className={styles.right}>
      <Canvas />

      <div className={styles.instruction}>
        <img className={styles.move} src={move} alt="" />
        <p>Press Space button to change animation</p>
        <p>You can rotate animation with your mouse</p>
        <p>You can zoom animation by scroll</p>
      </div>
    </div>
  </section>
);

export default Main;
