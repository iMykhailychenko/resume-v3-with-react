import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../../../../routes';
import config from '../../../../../services/config';
import css from './Navigation.module.css';

interface Props {
  content: { [key: string]: string };
  toggleMenu(): void;
}

const Navigation = ({ content, toggleMenu }: Props): ReactElement => (
  <nav className={css.nav}>
    <ul className={css.scroll}>
      {config.navigation.map(item => (
        <li key={item.id}>
          <NavLink
            to={item.to}
            exact={item.to === routes.Root.path}
            onClick={toggleMenu}
            className={css.link}
            activeClassName={css.active}
          >
            <h4 className={css.title}>{content[item.contentKey]}</h4>

            <picture className={css.img}>
              <source srcSet={item.source} type="image/webp" />
              <img src={item.img} alt="" />
            </picture>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
