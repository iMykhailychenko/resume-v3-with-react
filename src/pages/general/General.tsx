import React from 'react';

// components
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import InfoBlock from './InfoBlock/InfoBlock';

// styles
import styles from './General.module.css';

// img
import emoji from '../../images/emoji/general.png';
import img from '../../images/content/general/my-photo.jpeg';

const General = () => (
  <>
    <PageFirstBlock title="Общая информация" img={emoji} />

    <div className={styles.container}>
      <div className={styles.left}>
        <img className={styles.img} src={img} alt="" />

        <ul className={styles.list}>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
      </div>

      <div className={styles.right}>
        <InfoBlock param="Имя:" value="Игорь" top='20' />
        <InfoBlock param="Фамилия:" value="Михайличенко" top='90' />
        <InfoBlock param="Дата рождения:" value="09.12.1995" top='160' />
        <InfoBlock
          param="Адрес:"
          value="г. Киев, Оболонь, ул. Приозерная 12А"
          top='230'
        />
        <InfoBlock param="Знание языков:" value="Upper Intermediate" top='300' />
        <InfoBlock
          param="Личные качества:"
          value="Совмещаю креативность и аналитическое мышление, готов много учиться, ориентируюсь на результат, коммуникабельный, внимательный к деталям, пунктуальный, ответственный. Не имею вредных привычек. Скромный!"
          top='370'
        />
      </div>
    </div>

    <SplitLink path="/education" text="Образование и курсы" />
  </>
);

export default General;
