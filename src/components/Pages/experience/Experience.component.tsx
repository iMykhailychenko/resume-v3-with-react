import { Parallax } from 'rc-scroll-anim';
import React, { Component, ReactElement } from 'react';

import PageFirstBlock from '../../Common/page-first-block/PageFirstBlock.component';
import SplitLink from '../../Common/split-link/SplitLink.component';
import Comercial from './comercial/Comercial.component';
import css from './Experiance.module.css';
import Learning from './learning/Learning.component';
import Resume from './resume/Resume.component';

interface Props {
  content: {
    title: string;
    secondTitle: string;
    textOne: string;
    textTwo: string;
    textThree: string;
    relink: string;
    slider: {
      linkt: string;
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

export default class Experiance extends Component<Props, State> {
  state = {
    count: 0,
  };

  handleUp = (): void => {
    this.setState(
      (prev: State): State => {
        const count = !prev.count ? 3 : prev.count - 1;
        return { count };
      },
    );
  };

  handleDown = (): void => {
    this.setState(
      (prev: State): State => {
        const count = prev.count >= 3 ? 0 : prev.count + 1;
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
      <main className="container">
        <PageFirstBlock
          title={content.title}
          img="/images/emoji/experiance.png"
          webp="/images/emoji/experiance.webp"
        />

        <Parallax
          component="section"
          className={css.section + ' gradient'}
          animation={{ opacity: 1 }}
          style={{ opacity: 0 }}
        >
          {!mobile && (
            <>
              <div
                className={css.circle + ' border'}
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <span
                  className={css.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 0 ? 2.5 : 1}) translate(${
                      count === 0 ? '26%' : '50%'
                    }, -50%)`,
                  }}
                />
                <span
                  className={css.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 1 ? 2.5 : 1}) translate(${
                      count === 1 ? '-12%' : '50%'
                    }, -50%)`,
                  }}
                />
                <span
                  className={css.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 2 ? 2.5 : 1}) translate(${
                      count === 2 ? '6%' : '50%'
                    }, ${count === 2 ? '-20%' : '-50%'})`,
                  }}
                />
                <span
                  className={css.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 3 ? 2.5 : 1}) translate(${
                      count === 3 ? '44%' : '50%'
                    }, ${count === 3 ? '-45%' : '-50%'})`,
                  }}
                />
              </div>

              <span className={css.current}>{`0${count + 1}`}</span>
            </>
          )}

          <div className={css.block}>
            <div className={css.wrp} style={{ transform: `translateY(-${y}rem)` }}>
              {content.slider.map((slide, index) => (
                <div key={index} className={css.inner}>
                  <a
                    className={css.link}
                    href={slide.linkt}
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
                <button className={css.btn} onClick={this.handleUp}></button>
                <button className={css.btn} onClick={this.handleDown}></button>
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
            <Comercial />

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
              <p>{content.textThree}</p>
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
      </main>
    );
  }
}
