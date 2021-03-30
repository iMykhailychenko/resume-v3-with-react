import '../../../transitions/slideUp.css';

import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { FooterStyles } from '../../../styled-components/FooterStyles.js';
import Canvas from './canvas/Canvas.container';
import css from './Main.module.css';

interface IProps {
    content: {
        title: string;
        text: string;
        relink: string;
        downloadHere: string;
    };
}

const Main = ({ content: { title, text, relink, downloadHere } }: IProps): ReactElement => {
    const mobile = window.innerWidth < 768;

    return (
        <>
            <FooterStyles />

            <div className="container">
                <section className={css.container}>
                    <div className={css.left}>
                        <CSSTransition in timeout={600} classNames="slideUp" appear>
                            <h1 className={clsx(css.title, 'easeInOut')}>{title}</h1>
                        </CSSTransition>

                        <CSSTransition in timeout={800} classNames="slideUp" appear>
                            <>
                                <p className={clsx(css.title, 'easeInOut')}>
                                    {text}{' '}
                                    <Link to="/download" className={css.lint}>
                                        {downloadHere}
                                    </Link>
                                </p>
                            </>
                        </CSSTransition>

                        <CSSTransition in timeout={1000} classNames="slideUp" appear>
                            <Link to="/reason" className={clsx(css.btn, 'easeInOut')}>
                                <picture className={css.img}>
                                    <source src="/images/emoji/right.webp" type="image/webp" />
                                    <img src="/images/emoji/right.png" alt="" />
                                </picture>
                                <span>{relink}</span>
                            </Link>
                        </CSSTransition>
                    </div>

                    {!mobile && (
                        <div className={css.right}>
                            <Canvas />

                            <div className={css.instruction}>
                                <img className={css.move} src="/images/svg/move.svg" alt="" />
                                <p>Press Space button to change animation</p>
                                <p>You can rotate animation with your mouse</p>
                                <p>You can zoom animation by scroll</p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default Main;
