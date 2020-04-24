import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';

import styles from './Experiance.module.css';
import emoji from '../../images/emoji/experiance.png';

interface Props {}
interface State {
  count: number;
}

export default class Experiance extends Component<Props, State> {
  state = {
    count: 0,
  };

  handleUp = (): void => {
    this.setState(
      (prev: State): State => {
        const count = !prev.count ? 2 : prev.count - 1;
        return { count };
      },
    );
  };

  handleDown = (): void => {
    this.setState(
      (prev: State): State => {
        const count = prev.count >= 2 ? 0 : prev.count + 1;
        return { count };
      },
    );
  };

  render() {
    const { count } = this.state;
    const y: number = count * 400;
    const rotate: number = count * 45;

    return (
      <>
        <PageFirstBlock title="Мой опыт работы" img={emoji} />
        <Parallax
          component="section"
          className={styles.section + ' gradient'}
          animation={{ opacity: 1 }}
          style={{
            opacity: 0,
          }}
        >
          <div
            className={styles.circle + ' border'}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <span
              className={styles.point + ' reversBackground'}
              style={{
                transform: `scale(${count === 0 ? 2.5 : 1}) translate(${
                  count === 0 ? '26%' : '50%'
                }, -50%)`,
              }}
            />
            <span
              className={styles.point + ' reversBackground'}
              style={{
                transform: `scale(${count === 1 ? 2.5 : 1}) translate(${
                  count === 1 ? '-12%' : '50%'
                }, -50%)`,
              }}
            />
            <span
              className={styles.point + ' reversBackground'}
              style={{
                transform: `scale(${count === 2 ? 2.5 : 1}) translate(${
                  count === 2 ? '6%' : '50%'
                }, ${count === 2 ? '-20%' : '-50%'})`,
              }}
            />
          </div>

          <span className={styles.current}>{`0${count + 1}`}</span>

          <div className={styles.block}>
            <div
              className={styles.wrp}
              style={{ transform: `translateY(-${y}px)` }}
            >
              <div className={styles.inner}>
                <h3>
                  Январь 2020 г. Компания: DL.Agency. Должность: front-end
                  developer.
                </h3>
                <p>Обязанности:</p>

                <ul className={styles.list}>
                  <li>
                    Адаптивная, валидная и кроссбраузерная верстка сайтов по
                    макету;
                  </li>
                  <li>Создание сложных анимаций с помощью JavaScript и CSS;</li>
                  <li>Подключение новых модулей к готовым сайтам;</li>
                  <li>Подключение верстки к CMS (wordpress);</li>
                  <li>Оптимизация скорости загрузки сайтов;</li>
                  <li>Доработка сайтов;</li>
                </ul>
              </div>

              <div className={styles.inner}>
                <h3>
                  Май 2018 г. – Октябрь 2019г. Компания: ООО "КПМГ-Украина".
                  Должность: консультант по трансфертному ценообразованию.
                </h3>
                <p>Обязанности:</p>

                <ul className={styles.list}>
                  <li>
                    анализ внутригрупповых операций, проводимых между
                    украинскими и зарубежными компаниями на предмет
                    трансфертного ценообразования;
                  </li>
                  <li>
                    проведение анализа рынка, на котором функционирует клиент
                    (IT, сельское хозяйство, FMCG и др.);
                  </li>
                  <li>выявление рисков трансфертного ценообразования;</li>
                  <li>
                    работа с базами данных ktMINE, Ruslana, SPARK, TP Catalyst;
                  </li>
                  <li>
                    подготовка документации по трансфертному ценообразованию;
                  </li>
                  <li>
                    структурирование внутригрупповых операций в соответствии с
                    украинским налоговым законодательством и международными
                    принципами трансфертного ценообразования.
                  </li>
                </ul>
              </div>

              <div className={styles.inner}>
                <h3>
                  Февраль – Май 2018 г. Компания: ООО «ControlPay Украина».
                  Должность: Invoice auditor
                </h3>
                <p>Обязанности:</p>

                <ul className={styles.list}>
                  <li>
                    навигация и использование веб-платформы компании ControlPay
                    и инструментов поддержки клиентов;
                  </li>
                  <li>проверка и анализ инвойсов;</li>
                  <li>аудит транспортных накладных;</li>
                  <li>анализ данных отгрузки грузов;</li>
                  <li>проверка логики расчетов;</li>
                  <li>
                    общение с клиентами (электронная почта / конференц-связь).
                  </li>
                </ul>
              </div>
            </div>

            <button className={styles.btn} onClick={this.handleDown}></button>
            <button className={styles.btn} onClick={this.handleUp}></button>
          </div>
        </Parallax>

        <div className={styles.worksWrp}>
          <Parallax
            className={styles.title}
            animation={{ y: 0, opacity: 1 }}
            style={{
              transform: 'translateY(50%)',
              opacity: '0',
            }}
          >
            <h3>Consectetur adipisicing elit. Autem,quis.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo alias pariatur corrupti, unde libero quod nulla dolor,
              provident, quia ut amet quae recusandae. Dicta asperiores quisquam
              dolorum eos ea quaerat.
            </p>
          </Parallax>

          <ul className={styles.works + ' border_top'}>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">

              </a>
            </li>
          </ul>

          <Parallax
            className={styles.title}
            animation={{ y: 0, opacity: 1 }}
            style={{
              transform: 'translateY(50%)',
              opacity: '0',
            }}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo alias pariatur corrupti, unde libero quod nulla dolor,
              provident, quia ut amet quae recusandae. Dicta asperiores quisquam
              dolorum eos ea quaerat.
            </p>
          </Parallax>

          <ul className={styles.works + ' border_top'}>
            <li className={styles.work}></li>
          </ul>
        </div>
        <SplitLink path="/skills" text="Hard skills" />
      </>
    );
  }
}
