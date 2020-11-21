import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import config from '../../../../services/config';
import css from './Navigation.module.css';

interface Props {
  content: { [key: string]: string };
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const Navigation = ({ content, menu, toggleMenu }: Props): ReactElement => (
  <nav className={css.nav}>
    <ul className={css.scroll}>
      {config.navigation.map(({ to, contentKey, source, img, id }) => (
        <li key={id}>
          <NavLink
            to={to}
            exact={to === '/'}
            onClick={() => toggleMenu(menu)}
            className={css.link}
            activeClassName={css.active}
          >
            <h4 className={css.title}>{content[contentKey]}</h4>

            <picture className={css.img}>
              <source srcSet={source} type="image/webp" />
              <img src={img} alt="" />
            </picture>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
