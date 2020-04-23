import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import { Parallax } from 'rc-scroll-anim';
import styles from './Reason.module.css';

import emoji from '../../images/emoji/reason.png';
import videoOne from '../../images/content/reason/reason-1.mp4';
import videoTwo from '../../images/content/reason/reason-2.mp4';

const Reason = () => (
  <>
    <PageFirstBlock title="Почему я меняю профессию?" img={emoji} />

    <section className={styles.content}>
      <div className={styles.blockLeft}>
        <Parallax
          animation={{ y: -100,  scale: 1 }}
          style={{ transform: 'translateY(100px) scale(0.9)' }}
        >
          <video className={styles.video} loop autoPlay>
            <source src={videoOne} type="video/mp4" />
          </video>
        </Parallax>

        <Parallax
          className={styles.text + ' background'}
          animation={{ y: -180 }}
          style={{ transform: 'translateY(50px)' }}
        >
          <p>
            С детства меня интересовала математика, а в особенности геометрия.
            Поэтому я решил, что меня ждёт успешное будущее в мире экономики и
            финансов. После окончания школы я начал обучаться и в дальнейшем
            работать в этой сфере.
          </p>
          <p>
            В скором времени я осознал, что оформление документов и презентаций
            для меня имеют больше смысла, чем содержание этих документов.
          </p>
          <p>
            Упуская долгий период душевных терзаний, перейду сразу к главному.
            Примерно год назад я неожиданно для себя открыл мир веб-разработки.
          </p>
        </Parallax>
      </div>

      <div className={styles.blockRight}>
        <Parallax
          animation={{ y: -100,  scale: 1 }}
          style={{ transform: 'translateY(100px)  scale(0.9)' }}
        >
          <video className={styles.video} loop autoPlay>
            <source src={videoTwo} type="video/mp4" />
          </video>
        </Parallax>

        <Parallax
          className={styles.text + ' background'}
          animation={{ y: -180 }}
          style={{ transform: 'translateY(50px)' }}
        >
          <p>
            Уже в конце мая 2019 года я окончательно расставил приоритеты и
            записался на курсы{' '}
            <a
              className={styles.link}
              href="https://fullstack.goit.ua/"
              target="_blank"
              rel="noopener noreferrer"
              title="GoIT"
            >
              GoIT
            </a>
            . Окончание обучения будет в конце февраля 2020 года, после чего, я
            смогу гордо называться full-stack разработчиком.
          </p>
          <p>
            Взвесив все за и против, я решил как можно быстрее сменить профессию
            и получить более релевантный опыт.
          </p>
          <p>
            На данном этапе я максимально заинтересован в получении опыта на
            вакансии front-end разработчика с целью валидировать полученные
            знания и в конце-концов заниматься любимым делом.
          </p>
        </Parallax>
      </div>
    </section>

    <SplitLink path="/general" text="Просмотреть общую информацию обомне" />
  </>
);

export default Reason;
