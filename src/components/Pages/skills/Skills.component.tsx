import React from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import PageText from '../../Common/page-text/PageText.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import css from './Skills.module.css';
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
    <PageFirstBlock
      title={title}
      img="/images/emoji/skills.png"
      webp="/images/emoji/skills.webp"
    />

    <PageText>
      {text.map((paragraph, id) => (
        <p key={id}>{paragraph}</p>
      ))}
    </PageText>

    <article className={css.article}>
      {list.map((section, index) =>
        !(index % 2) ? (
          <section key={index} className={css.section}>
            <div className={css.left + ' gradient'}>
              <h3>{section.title}</h3>
              <p className={css.itemText}>{section.text}</p>
            </div>

            <div className={css.right}>
              <SkillsList props={section.item} />
            </div>
          </section>
        ) : (
          <section key={index} className={css.section}>
            <div className={css.right}>
              <SkillsList props={section.item} />
            </div>

            <div className={css.leftRevers + ' gradient'}>
              <h3>{section.title}</h3>
              <p className={css.itemText}>{section.text}</p>
            </div>
          </section>
        ),
      )}
    </article>

    <SplitLink path="/salary" text={relink} />
  </main>
);

export default Skills;
