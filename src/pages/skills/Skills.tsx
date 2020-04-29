import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import SkillsList from './SkillsList/SkillsList';

import styles from './Skills.module.css';
import webp from '../../images/emoji/skills.webp';
import emoji from '../../images/emoji/skills.png';

interface Values {
  img: string;
  logoColor: string;
  title: string;
  text: string;
}

interface Props {
  content: {
    title: string;
    text: string[];
    relink: string;
    list: {
      title: string;
      text: string;
      item: Values[];
    }[];
  };
}

const Skills: React.FC<Props> = ({
  content: { title, text, relink, list },
}) => (
  <>
    <PageFirstBlock title={title} img={emoji} webp={webp} />

    <PageText>
      {text.map((paragraph, id) => (
        <p key={id}>{paragraph}</p>
      ))}
    </PageText>

    <article className={styles.article}>
      {list.map((section, index) =>
        !(index % 2) ? (
          <section key={index} className={styles.section}>
            <div className={styles.left + ' gradient'}>
              <h3>{section.title}</h3>
              <p className={styles.itemText}>{section.text}</p>
            </div>

            <div className={styles.right}>
              <SkillsList props={section.item} />
            </div>
          </section>
        ) : (
          <section key={index} className={styles.section}>
            <div className={styles.right}>
              <SkillsList props={section.item} />
            </div>

            <div className={styles.leftRevers + ' gradient'}>
              <h3>{section.title}</h3>
              <p className={styles.itemText}>{section.text}</p>
            </div>
          </section>
        ),
      )}
    </article>

    <SplitLink path="/salary" text={relink} />
  </>
);

export default Skills;
