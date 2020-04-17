import React from 'react';
// import styles from './TopBar.module.css';

import MenuBtn from './menu/MenuContainer';

interface Props {}

const TopBar: React.FC<Props> = () => (
  <div className="header__inner">
    <MenuBtn />
  </div>
);

export default TopBar;
