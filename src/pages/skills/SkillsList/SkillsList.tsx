import React from 'react';
import styles from './SkillsList.module.css';

// img
import github from '../../../images/content/skills/github.svg';

const icons: { [key: string]: string } = { github };

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
  <ul className={styles.list}>
    {props.map(({ img, logoColor, title, text }, id) => (
      <li key={id} className={styles.item + ' border'}>
        <div className={styles.logo} style={{ background: `#${logoColor}` }}>
          <img className={styles.img} src={icons[img]} alt="" />
        </div>

        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={styles.itemText}>{text}</p>
      </li>
    ))}
  </ul>
);

export default SkillsList;
