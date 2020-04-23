import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Canvas from './canvas/CanvasContainer';
import right from '../../images/emoji/right.png';
import styles from './Main.module.css';
import '../../transitions/slideUp.css';

const Main = () => (
  <section className={styles.container}>
    <div className={styles.left}>
      <CSSTransition in timeout={600} classNames="slideUp" appear>
        <h1 className="easeInOut">
          АВТОР ЭТОЙ СТРАНИЦЫ ИЩЕТ РАБОТУ НА ПОЗИЦИЮ FRONT-END РАЗРАБОТЧИКА
        </h1>
      </CSSTransition>

      <CSSTransition in timeout={800} classNames="slideUp" appear>
        <p className="easeInOut">
          Если у вас нету времени ознакамливаться со всей информацией, или вам
          просто лень, в пункте навигации по сайту вы можете перейти в раздел
          для скачивания резюме.
        </p>
      </CSSTransition>

      <CSSTransition in timeout={1000} classNames="slideUp" appear>
        <Link to="/reason" className={styles.btn + ' easeInOut'}>
          <img className={styles.img} src={right} alt="" />
          <span>Поехали</span>
        </Link>
      </CSSTransition>
    </div>

    <div className={styles.right}>
      <Canvas />

      <div className={styles.instruction}>
        <p>Press Space button to change animation</p>
        <p>You can rotate animation with your mouse</p>
        <p>You can zoom animation by scroll</p>
      </div>
    </div>
  </section>
);

export default Main;
