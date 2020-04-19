import React from 'react';
// import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Main.module.css';
import '../../transitions/slideUp.css';

const Main = () => (
  <section className={styles.container}>
    <div className={styles.left}>
      <CSSTransition in timeout={600} classNames="slideUp" appear>
        <h2 className="easeInOut">
          АВТОР ЭТОЙ СТРАНИЦЫ ИЩЕТ РАБОТУ НА ПОЗИЦИЮ FRONT-END РАЗРАБОТЧИКА
        </h2>
      </CSSTransition>

      <CSSTransition in timeout={800} classNames="slideUp" appear>
        <p className="easeInOut">
          На этом сайте вы найдёте всю интересующую вас информацию, а также
          сможете задать любые вопросы.
        </p>
      </CSSTransition>

      <CSSTransition in timeout={1000} classNames="slideUp" appear>
        <p className="mark easeInOut">
          Если у вас нету времени ознакамливаться со всей информацией, или вам
          просто лень, в пункте навигации по сайту вы можете перейти в раздел
          для скачивания резюме.
        </p>
      </CSSTransition>
    </div>
    <div className={styles.right}></div>
  </section>
);

export default Main;
