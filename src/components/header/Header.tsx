import React from 'react';

// components
import Nav from './nav/NavContainer';
import TopBar from './top-bar/TopBar';

interface Props {}

const Header: React.FC<Props> = () => (
  <header className="header container">
    <TopBar />
    <Nav />
  </header>
);

export default Header;
