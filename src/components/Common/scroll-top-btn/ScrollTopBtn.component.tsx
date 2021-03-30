import React, { Component, createRef, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import pop from '../../../transitions/pop.module.css';
import styles from './ScrollTopBtn.module.css';

interface IState {
    top: boolean;
}

class ScrollTopBtn extends Component<unknown, IState> {
    buttonRef = createRef<HTMLButtonElement>();

    state = {
        top: false,
    };

    handleScroll = (): void => {
        this.setState({ top: window.scrollY >= 150 });
    };

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleClick = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    render(): ReactElement {
        return (
            <CSSTransition in={this.state.top} classNames={pop} timeout={600} unmountOnExit>
                <button className={styles.btn} ref={this.buttonRef} onClick={this.handleClick} type="button" />
            </CSSTransition>
        );
    }
}

export default ScrollTopBtn;
