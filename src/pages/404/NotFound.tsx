import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Canvas from '../main/canvas/CanvasContainer';
import right from '../../images/emoji/right.png';
import styles from './NotFound.module.css';
import move from '../../images/svg/move.svg';
import '../../transitions/slideUp.css';

interface Props {
  content: {
    title: string;
    text: string;
    relink: string;
  };
}

const NotFound: React.FC<Props> = ({ content: { title, text, relink } }) => (
  <section className={styles.container}>
    <div className={styles.left}>
      <CSSTransition in timeout={600} classNames="slideUp" appear>
        <h1 className={styles.title + " easeInOut"}>{title}</h1>
      </CSSTransition>

      <CSSTransition in timeout={800} classNames="slideUp" appear>
        <p className="easeInOut">{text}</p>
      </CSSTransition>

      <CSSTransition in timeout={1000} classNames="slideUp" appear>
        <Link to="/" className={styles.btn + ' easeInOut'}>
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

export default NotFound;