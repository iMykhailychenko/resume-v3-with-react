import React, { Component, createRef, MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import popupAppear from '../../transitions/popupAppear.module.css';
import styles from './Popup.module.css';

interface Props {
  popup: boolean;
  togglePopup(popup: boolean): void;
}

export default class Popup extends Component<Props> {
  private backdropRef = createRef<HTMLDivElement>();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
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

  render() {
    const { children, popup, togglePopup } = this.props;

    return (
      <CSSTransition
        in={popup}
        timeout={1000}
        classNames={popupAppear}
        unmountOnExit
      >
        <div
          className={styles.wrp}
          ref={this.backdropRef}
          onClick={this.handleClick}
        >
          <div className={styles.inner + ' popup'}>
            <button
              className={styles.close}
              onClick={() => togglePopup(popup)}
            />

            {children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
