import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import slideNav from '../../../transitions/slideNav.module.css';
import css from './Nav.module.css';
import Navigation from './navigation/Navigation.container';
import Switch from './switch/Switch.container';

interface Props {
  menu: boolean;
}

const Nav = ({ menu }: Props): ReactElement => (
  <CSSTransition in={menu} timeout={500} classNames={slideNav} unmountOnExit>
    <div className={css.wrp}>
      <div className="container">
        <Switch />
        <Navigation />
      </div>
    </div>
  </CSSTransition>
);

export default Nav;
