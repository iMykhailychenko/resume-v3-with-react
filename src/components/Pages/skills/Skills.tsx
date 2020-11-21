import React from 'react';

import emoji from '../../images/emoji/skills.png';
import webp from '../../images/emoji/skills.webp';
import PageFirstBlock from '../../page-first-block/PageFirstBlock.component';
import PageText from '../../page-text/PageText.component';
import SplitLink from '../../split-link/SplitLink';
import styles from './Skills.module.css';
import SkillsList from './SkillsList/SkillsList';

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

const Skills: React.FC<Props> = ({ content: { title, text, relink, list } }) => (
  <main className="container">
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
  </main>
);

export default Skills;
