import { Parallax } from 'rc-scroll-anim';
import React, { Component, ReactElement } from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import Commercial from './commercial/Commercial.component';
import css from './Experience.module.css';
import Learning from './learning/Learning.component';
import Pet from './pet/Pet.component';
import Resume from './resume/Resume.component';
import SliderDots from './slider/Slider.component';

interface Props {
    content: {
        title: string;
        secondTitle: string;
        textOne: string;
        textTwo: string;
        textThree: string;
        textFour: string;
        relink: string;
        slider: {
            link: string;
            company: string;
            title: string;
            responsibility: string;
            list: string[];
        }[];
    };
}

interface State {
    count: number;
}

export default class Experience extends Component<Props, State> {
    state = {
        count: 0,
    };

    handleUp = (): void => {
        this.setState(
            (prev: State): State => {
                const count = !prev.count ? this.props.content.slider.length - 1 : prev.count - 1;
                return { count };
            },
        );
    };

    handleDown = (): void => {
        this.setState(
            (prev: State): State => {
                const count = prev.count >= this.props.content.slider.length - 1 ? 0 : prev.count + 1;
                return { count };
            },
        );
    };

    render(): ReactElement {
        const mobile = window.innerWidth < 960;
        const { content } = this.props;
        const { count } = this.state;
        const y: number = count * 50;
        const rotate: number = count * 45;

        return (
            <div className="container">
                <PageFirstBlock
                    title={content.title}
                    img="/images/emoji/experience.png"
                    webp="/images/emoji/experience.webp"
                />

                <Parallax
                    component="section"
                    className={css.section + ' gradient'}
                    animation={{ opacity: 1 }}
                    style={{ opacity: 0 }}
                >
                    <SliderDots mobile={mobile} rotate={rotate} count={count} total={content.slider.length} />

                    <div className={css.block}>
                        <div className={css.wrp} style={{ transform: `translateY(-${y}rem)` }}>
                            {content.slider.map((slide, index) => (
                                <div key={index} className={css.inner}>
                                    <a
                                        className={css.link}
                                        href={slide.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        tabIndex={-1}
                                    >
                                        {slide.company}
                                    </a>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.responsibility}</p>
                                    <ul className={css.list}>
                                        {slide.list.map((element, id) => (
                                            <li key={id}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {!mobile && (
                            <>
                                <button className={css.btn} type="button" onClick={this.handleUp} />
                                <button className={css.btn} type="button" onClick={this.handleDown} />
                            </>
                        )}
                    </div>
                </Parallax>

                <div className={css.worksWrp}>
                    <Parallax
                        className={css.title}
                        animation={{ y: 0, opacity: 1 }}
                        style={{
                            transform: 'translateY(50%)',
                            opacity: '0',
                        }}
                    >
                        <h3>{content.secondTitle}</h3>
                        <p>{content.textOne}</p>
                    </Parallax>

                    <div className={css.border + ' border-top'}>
                        <Commercial />

                        <Parallax
                            className={css.title}
                            animation={{ y: 0, opacity: 1 }}
                            style={{
                                transform: 'translateY(50%)',
                                opacity: '0',
                            }}
                        >
                            <p>{content.textTwo}</p>
                        </Parallax>

                        <Resume />

                        <Parallax
                            className={css.title}
                            animation={{ y: 0, opacity: 1 }}
                            style={{
                                transform: 'translateY(50%)',
                                opacity: '0',
                            }}
                        >
                            <p>
                                {content.textThree}{' '}
                                <a
                                    className={css.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/MarianMalvin/phoqer"
                                >
                                    github link
                                </a>
                            </p>
                        </Parallax>
                        <Pet />

                        <Parallax
                            className={css.title}
                            animation={{ y: 0, opacity: 1 }}
                            style={{
                                transform: 'translateY(50%)',
                                opacity: '0',
                            }}
                        >
                            <p>{content.textFour}</p>
                        </Parallax>

                        <Parallax
                            className={css.title}
                            animation={{ y: 0, opacity: 1 }}
                            style={{
                                transform: 'translateY(20%)',
                                opacity: '0',
                            }}
                        >
                            <Learning />
                        </Parallax>
                    </div>
                </div>

                <SplitLink path="/skills" text="Hard skills" />
            </div>
        );
    }
}
