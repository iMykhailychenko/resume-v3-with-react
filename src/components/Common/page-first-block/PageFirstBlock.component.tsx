import '../../transitions/slideUp.css';

import clsx from 'clsx';
import React, { Component, ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import css from './PageFirstBlock.module.css';

interface Props {
  title: string;
  webp: string;
  img: string;
}

export default class PageFirstBlock extends Component<Props> {
  componentWillUnmount(): void {
    window.scrollTo({
      top: 0,
    });
  }

  render(): ReactElement {
    const { title, webp, img } = this.props;

    return (
      <section className={css.section}>
        <CSSTransition in timeout={10} classNames="slideUp" appear>
          <picture className={clsx(css.emoji, 'easeInOut')}>
            <source srcSet={webp} type="image/webp" />
            <img src={img} alt="" />
          </picture>
        </CSSTransition>

        <CSSTransition in timeout={200} classNames="slideUp" appear>
          <h2 className={clsx(css.title, 'easeInOut')}>{title}</h2>
        </CSSTransition>

        <CSSTransition in timeout={400} classNames="slideUp" appear>
          <div className="page-scroll easeInOut"></div>
        </CSSTransition>
      </section>
    );
  }
}
