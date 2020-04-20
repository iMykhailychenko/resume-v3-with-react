import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';

import styles from './Skills.module.css';
import emoji from '../../images/emoji/skills.png';

const Skills = () => (
  <>
    <PageFirstBlock title="Hard skills" img={emoji} />

    <section className={styles.desc}>
      <Parallax
        className={styles.title}
        animation={{ y: 0, opacity: 1 }}
        style={{ transform: 'translateY(-200px)', opacity: 0 }}
      >
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
      </Parallax>
    </section>

    <article className={styles.article}>
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
          <ul className={styles.list}>
            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.right}>
          <ul className={styles.list}>
            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.leftRevers + ' skills_leftRevers'}>
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
          <ul className={styles.list}>
            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>

            <li className={styles.item + ' skills_item'}>
              <h4 className={styles.itemTitle}>GITHUB</h4>
              <p className={styles.itemText}>
                Навыки работы с терминалом, создание репозиториев, веток и т.д.
                Все практические задания в GoIT принимаются через GitHub.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>

    <SplitLink path="/salary" text="Оплата моего труда" />
  </>
);

export default Skills;
