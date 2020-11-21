import React from 'react';

import SplitLink from '../../Common//split-link/SplitLink.component';
import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import css from './Education.module.css';
import ListElement from './ListElement/ListElement.component';

interface Props {
  content: {
    title: string;
    item: [
      {
        title: string;
        text: string;
        background: string;
        color: string;
        translate: string;
        x: string;
        y: string;
      },
    ];
    relink: string;
  };
}

const Education: React.FC<Props> = ({ content: { title, item, relink } }) => (
  <main className={css.overflow}>
    <div className="container">
      <PageFirstBlock
        title={title}
        img="../../images/emoji/education.png"
        webp="../../images/emoji/education.webp"
      />

      <div className={css.section}>
        <ul className={css.list}>
          {item.map((element, id) => (
            <ListElement key={id} data={element} />
          ))}
        </ul>
      </div>

      <SplitLink path="/experience" text={relink} />
    </div>
  </main>
);

export default Education;
