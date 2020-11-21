import React, { Component, createRef, MouseEvent, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import popupAppear from '../../transitions/popupAppear.module.css';
import css from './Popup.module.css';

interface Props {
  popup: boolean;
  children: JSX.Element[] | JSX.Element;
  togglePopup(popup: boolean): void;
}

export default class Popup extends Component<Props> {
  private backdropRef = createRef<HTMLDivElement>();

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent): void => {
    const { popup, togglePopup } = this.props;
    if (!popup || event.code !== 'Escape') return;
    togglePopup(popup);
  };

  handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    const { current } = this.backdropRef;
    const { popup, togglePopup } = this.props;
    if (current && event.target !== current) return;

    togglePopup(popup);
  };

  render(): ReactElement {
    const { children, popup, togglePopup } = this.props;

    return (
      <CSSTransition in={popup} timeout={600} classNames={popupAppear} unmountOnExit>
        <div className={css.wrp}>
          <div
            className={css.scroll}
            ref={this.backdropRef}
            onClick={this.handleClick}
            aria-hidden
          >
            <div className={css.inner + ' popup'}>
              <button className={css.close} onClick={() => togglePopup(popup)} />
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
