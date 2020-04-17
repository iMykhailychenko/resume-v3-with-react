import React from 'react';
// import styles from './TopBar.module.css';

import MenuBtn from './menu/MenuContainer';
import Clock from './clock/Clock';
import LinkMessenger from './link-messenger/LinkMessengerContainer';

interface Props {}

const TopBar: React.FC<Props> = () => (
  <div className="header__inner">
    <MenuBtn />
    <Clock />
    <LinkMessenger />
  </div>
);

export default TopBar;
