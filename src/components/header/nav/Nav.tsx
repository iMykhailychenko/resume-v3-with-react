import React from 'react';
import { CSSTransition } from 'react-transition-group';
import SwitchTheme from './switch/SwitchContainer';
import fadeInUp from '../../../transitions/fadeInUp.module.css';
import styles from './Nav.module.css';

interface Props {
  menu: boolean;
}

const Nav: React.FC<Props> = ({ menu }) => {
  return (
    <CSSTransition
      in={menu}
      timeout={500}
      classNames={fadeInUp}
      unmountOnExit
    >
      <div className={styles.wrp}>
        <div className="container">
          <SwitchTheme />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Nav;
