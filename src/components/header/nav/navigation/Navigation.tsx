import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import navigationData from './navigationData';

interface Props {
  content: { [key: string]: string };
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const Navigation: React.FC<Props> = ({ content, menu, toggleMenu }) => (
  <nav className={styles.nav}>
    <div className={styles.scroll}>
      {navigationData.map(({to, contentKey, source, img}) => (
        <NavLink
          to={to}
          onClick={() => {
            toggleMenu(menu);
          }}
          className={styles.link}
          activeClassName={styles.active}
        >
          <h4 className={styles.title}>{content[contentKey]}</h4>

          <picture className={styles.img}>
            <source srcSet={source} type="image/webp" />
            <img src={img} alt="" />
          </picture>
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Navigation;
