import React, { Component, MouseEvent, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import slideNav from '../../../../transitions/slideNav.module.css';
import { Theme } from '../../../../types';
import css from './Nav.module.css';
import Navigation from './navigation/Navigation.container';
import Switch from './switch/Switch.container';
import clsx from 'clsx';

interface IProps {
    menu: boolean;
    theme: Theme;
    toggleMenu: () => void;
}

class Nav extends Component<IProps> {
    handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) this.props.toggleMenu();
    };

    render(): ReactElement {
        return (
            <CSSTransition in={this.props.menu} timeout={500} classNames={slideNav} unmountOnExit>
                <div className={clsx(css.wrp, this.props.theme === 'dark' && css.dark)} onClick={this.handleClick} aria-hidden>
                    <div className="container">
                        <Switch />
                        <Navigation />
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default Nav;
