import React from 'react';
import styles from './SkillsList.module.css';

interface Values {
  logo: string;
  logoColor: string;
  title: string;
  text: string;
}

interface Props {
  props: Values[];
}

const SkillsList: React.FC<Props> = ({ props }) => (
  <ul className={styles.list}>
    {props.map(({ logo, logoColor, title, text }) => (
      <li className={styles.item + ' border'}>
        <div className={styles.logo} style={{ background: `#${logoColor}` }}>
          <img src={logo} alt="" />
        </div>

        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={styles.itemText}>{text}</p>
      </li>
    ))}
  </ul>
);

export default SkillsList;
