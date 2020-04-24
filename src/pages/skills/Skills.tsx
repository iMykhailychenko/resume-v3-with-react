import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import SkillsList from './SkillsList/SkillsList';

import styles from './Skills.module.css';
import emoji from '../../images/emoji/skills.png';

const initVal = [
  {
    logo: 'string',
    logoColor: 'FFC56D',
    title: 'string',
    text: 'string',
  },
  {
    logo: 'string',
    logoColor: 'FFC56D',
    title: 'string',
    text: 'string',
  },
];

interface Props {}

const Skills: React.FC<Props> = () => (
  <>
    <PageFirstBlock title="Hard skills" img={emoji} />

    <PageText>
        <p>
          В данном разделе я укажу основные навыки и знания, которыми я овладел
          при прохождении курсов GoIT, а также те, что я освоил самостоятельно.
          Все указанные навыки базируются на выполненных практических заданий и
          частично представлены на этом сайте.
        </p>

        <p>
          Для удобства и экономии времени я отметил лишь ключевые, по моему
          мнению, навыки. Полный список смотрите по этой ссылке
        </p>

        <p>
          Так же, вы можете посетить мою страницу на GitHub и убедиться, что все
          указанные навыки были пройдены мною на практике. Ссылка на GitHub
          профиль
        </p>
    </PageText>

    <article className={styles.article}>
      <section className={styles.section}>
        <div className={styles.left + ' gradient'}>
          <h3>HTML & CSS</h3>
          <p className={styles.itemText}>
            Уже в конце мая 2019 года я окончательно расставил приоритеты и
            записался на курсы. Окончание обучения будет в конце февраля 2020
            года, после чего, я смогу гордо называться full-stack разработчиком.
          </p>
        </div>

        <div className={styles.right}>
          <SkillsList props={initVal} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.right}>
          <SkillsList props={initVal} />
        </div>

        <div className={styles.leftRevers + ' gradient'}>
          <h3>HTML & CSS</h3>
          <p className={styles.itemText}>
            Уже в конце мая 2019 года я окончательно расставил приоритеты и
            записался на курсы. Окончание обучения будет в конце февраля 2020
            года, после чего, я смогу гордо называться full-stack разработчиком.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left + ' skills_left'}>
          <h3>HTML & CSS</h3>
          <p className={styles.itemText}>
            Уже в конце мая 2019 года я окончательно расставил приоритеты и
            записался на курсы. Окончание обучения будет в конце февраля 2020
            года, после чего, я смогу гордо называться full-stack разработчиком.
          </p>
        </div>

        <div className={styles.right}>
          <SkillsList props={initVal} />
        </div>
      </section>
    </article>

    <SplitLink path="/salary" text="Оплата моего труда" />
  </>
);

export default Skills;
