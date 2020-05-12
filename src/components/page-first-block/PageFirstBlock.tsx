import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './PageFirstBlock.module.css';
import '../../transitions/slideUp.css';

interface Props {
  title: string;
  webp: string;
  img: string;
}

export default class PageFirstBlock extends Component<Props> {
  componentWillUnmount() {
    window.scrollTo({
      top: 0,
    });
  }

  render() {
    const { title, webp, img } = this.props;

    return (
      <section className={styles.section}>
        <CSSTransition in timeout={0} classNames="slideUp" appear>
          <picture className={styles.emoji + ' easeInOut'}>
            <source srcSet={webp} type="image/webp" />
            <img src={img} alt="" />
          </picture>
        </CSSTransition>

        <CSSTransition in timeout={200} classNames="slideUp" appear>
          <h2 className={styles.title + ' easeInOut'}>{title}</h2>
        </CSSTransition>

        <CSSTransition in timeout={400} classNames="slideUp" appear>
          <div className="page-scroll easeInOut"></div>
        </CSSTransition>
      </section>
    );
  }
}
