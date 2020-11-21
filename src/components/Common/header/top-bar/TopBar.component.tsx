import React, { ReactElement } from 'react';

import Clock from './clock/Clock.component';
import Locale from './locale/Locale.container';
import MenuBtn from './menu/Menu.container';
import Messenger from './messenger/Messenger.container';
import css from './TopBar.module.css';

const TopBar = (): ReactElement => (
  <div className={css.inner}>
    <div className={css.leftBlock}>
      <MenuBtn />
      <Locale />
    </div>
    <Clock />
    <Messenger />
  </div>
);

export default TopBar;
