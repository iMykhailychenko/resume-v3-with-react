import clsx from 'clsx';
import React from 'react';

import icons from './icons';
import css from './SkillsList.module.css';

interface Values {
  img: string;
  logoColor: string;
  title: string;
  text: string;
}

interface Props {
  props: Values[];
}

const SkillsList: React.FC<Props> = ({ props }) => (
  <ul className={css.list}>
    {props.map(({ img, logoColor, title, text }, id) => (
      <li key={id} className={clsx(css.item, 'border')}>
        <div className={css.logo} style={{ background: `${logoColor}` }}>
          <img className={css.img} src={icons[img]} alt="" />
        </div>

        <h4 className={css.itemTitle}>{title}</h4>
        <p className={css.itemText}>{text}</p>
      </li>
    ))}
  </ul>
);

export default SkillsList;
