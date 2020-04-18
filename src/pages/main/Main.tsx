import React from 'react';
import styles from './Main.module.css';

const Main = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <h2>АВТОР ЭТОЙ СТРАНИЦЫ ИЩЕТ РАБОТУ НА ПОЗИЦИЮ FRONT-END РАЗРАБОТЧИКА</h2>
      <p>
        На этом сайте вы найдёте всю интересующую вас информацию, а также
        сможете задать любые вопросы.
      </p>
      <p className="mark">
        Если у вас нету времени ознакамливаться со всей информацией, или вам
        просто лень, в пункте навигации по сайту вы можете перейти в раздел для
        скачивания резюме.
      </p>
    </div>
    <div className={styles.right}></div>
  </div>
);

export default Main;
