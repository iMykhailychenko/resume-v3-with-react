import React from 'react';

// components
import Switch from './switch/SwitchContainer';
import TopBar from './top-bar/TopBar';

type Props = {};

const Header: React.FC<Props> = () => (
  <header className="header container">
    <TopBar />
    <Switch />
  </header>
);

export default Header;
