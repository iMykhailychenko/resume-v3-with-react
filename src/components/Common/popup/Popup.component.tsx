import clsx from 'clsx';
import React, { Component, MouseEvent, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import popupAppear from '../../../transitions/popupAppear.module.css';
import css from './Popup.module.css';

interface Props {
  popup: boolean;
  children: JSX.Element[] | JSX.Element;
  togglePopup(): void;
}

export default class Popup extends Component<Props> {
  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent): void => {
    const { popup, togglePopup } = this.props;
    if (!popup || event.code !== 'Escape') return;
    togglePopup();
  };

  handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    const { togglePopup } = this.props;
    if (event.target !== event.currentTarget) return;

    togglePopup();
  };

  render(): ReactElement {
    const { children, popup, togglePopup } = this.props;

    return (
      <CSSTransition in={popup} timeout={600} classNames={popupAppear} unmountOnExit>
        <div className={css.wrp}>
          <div className={css.scroll} onClick={this.handleClick} aria-hidden>
            <div className={clsx(css.inner, 'popup')}>
              <button className={css.close} onClick={togglePopup} />
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
