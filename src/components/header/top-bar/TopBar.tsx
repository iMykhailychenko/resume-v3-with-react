import React from 'react';
import styles from './TopBar.module.css';

import MenuBtn from './menu/MenuContainer';
import Locale from './locale/LocaleContainer';
import Clock from './clock/Clock';
import LinkMessenger from './link-messenger/LinkMessengerContainer';

interface Props {}

const TopBar: React.FC<Props> = () => (
  <div className={styles.inner}>
    <div className={styles.leftBlock}>
      <MenuBtn />
      <Locale />
    </div>

    <Clock />

    <LinkMessenger />
  </div>
);

export default TopBar;
