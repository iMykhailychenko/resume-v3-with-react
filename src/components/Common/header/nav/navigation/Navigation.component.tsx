import React, { Component, MouseEvent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../../../../routes';
import config from '../../../../../services/config';
import css from './Navigation.module.css';

interface IProps {
    content: { [key: string]: string };
    toggleMenu(): void;
}

class Navigation extends Component<IProps> {
    componentDidMount(): void {
        window.addEventListener('keydown', this.handleKeydown);
    }
    componentWillUnmount(): void {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleClick = (event: MouseEvent<HTMLDivElement | HTMLUListElement>): void => {
        if (event.target === event.currentTarget) this.props.toggleMenu();
    };
    handleKeydown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') this.props.toggleMenu();
    };

    render(): ReactElement {
        const { content, toggleMenu } = this.props;
        return (
            <nav className={css.nav} onClick={this.handleClick}>
                <ul className={css.scroll} onClick={this.handleClick}>
                    {config.navigation.map(item => (
                        <li key={item.id}>
                            <NavLink
                                to={item.to}
                                exact={item.to === routes.Root.path}
                                onClick={toggleMenu}
                                className={css.link}
                                activeClassName={css.active}
                            >
                                <h4 className={css.title}>{content[item.contentKey]}</h4>

                                <picture className={css.img}>
                                    <source srcSet={item.source} type="image/webp" />
                                    <img src={item.img} alt="" />
                                </picture>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
