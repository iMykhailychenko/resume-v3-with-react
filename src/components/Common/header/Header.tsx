import React, { ReactElement } from 'react';

import Nav from './nav/Nav.container';
import TopBar from './top-bar/TopBar.component';

const Header = (): ReactElement => (
  <header className="header container">
    <TopBar />
    <Nav />
  </header>
);

export default Header;
