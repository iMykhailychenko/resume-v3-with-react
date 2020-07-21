import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import styles from './Experiance.module.css';

// img
import webp from '../../images/emoji/experiance.webp';
import img1Web from '../../images/content/experiance/experiance-1.webp';
import img2Web from '../../images/content/experiance/experiance-2.webp';
import img3Web from '../../images/content/experiance/experiance-3.webp';
import img4Web from '../../images/content/experiance/experiance-4.webp';
import img5Web from '../../images/content/experiance/experiance-5.webp';
import img6Web from '../../images/content/experiance/experiance-6.webp';
import img7Web from '../../images/content/experiance/experiance-7.webp';

import emoji from '../../images/emoji/experiance.png';
import img1 from '../../images/content/experiance/experiance-1.png';
import img2 from '../../images/content/experiance/experiance-2.png';
import img3 from '../../images/content/experiance/experiance-3.png';
import img4 from '../../images/content/experiance/experiance-4.png';
import img5 from '../../images/content/experiance/experiance-5.png';
import img6 from '../../images/content/experiance/experiance-6.png';
import img7 from '../../images/content/experiance/experiance-7.jpg';

interface Props {
  content: {
    title: string;
    secondTitle: string;
    textOne: string;
    textTwo: string;
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
        const count = !prev.count ? 2 : prev.count - 1;
        return { count };
      },
    );
  };

  handleDown = (): void => {
    this.setState(
      (prev: State): State => {
        const count = prev.count >= 2 ? 0 : prev.count + 1;
        return { count };
      },
    );
  };

  render() {
    const mobile = window.innerWidth < 960;
    const { content } = this.props;
    const { count } = this.state;
    const y: number = count * 50;
    const rotate: number = count * 45;

    return (
      <main className="container">
        <PageFirstBlock title={content.title} img={emoji} webp={webp} />

        <Parallax
          component="section"
          className={styles.section + ' gradient'}
          animation={{ opacity: 1 }}
          style={{ opacity: 0 }}
        >
          {!mobile && (
            <>
              <div
                className={styles.circle + ' border'}
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <span
                  className={styles.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 0 ? 2.5 : 1}) translate(${
                      count === 0 ? '26%' : '50%'
                    }, -50%)`,
                  }}
                />
                <span
                  className={styles.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 1 ? 2.5 : 1}) translate(${
                      count === 1 ? '-12%' : '50%'
                    }, -50%)`,
                  }}
                />
                <span
                  className={styles.point + ' reversBackground'}
                  style={{
                    transform: `scale(${count === 2 ? 2.5 : 1}) translate(${
                      count === 2 ? '6%' : '50%'
                    }, ${count === 2 ? '-20%' : '-50%'})`,
                  }}
                />
              </div>

              <span className={styles.current}>{`0${count + 1}`}</span>
            </>
          )}

          <div className={styles.block}>
            <div
              className={styles.wrp}
              style={{ transform: `translateY(-${y}rem)` }}
            >
              {content.slider.map((slide, index) => (
                <div key={index} className={styles.inner}>
                  <a
                    className={styles.link}
                    href={slide.linkt}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                  >
                    {slide.company}
                  </a>
                  <h3>{slide.title}</h3>
                  <p>{slide.responsibility}</p>
                  <ul className={styles.list}>
                    {slide.list.map((element, id) => (
                      <li key={id}>{element}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {!mobile && (
              <>
                <button
                  className={styles.btn}
                  onClick={this.handleDown}
                ></button>
                <button className={styles.btn} onClick={this.handleUp}></button>
              </>
            )}
          </div>
        </Parallax>

        <div className={styles.worksWrp}>
          <Parallax
            className={styles.title}
            animation={{ y: 0, opacity: 1 }}
            style={{
              transform: 'translateY(50%)',
              opacity: '0',
            }}
          >
            <h3>{content.secondTitle}</h3>
            <p>{content.textOne}</p>
          </Parallax>

          <div className={styles.border + ' border-top'}>
            <ul className={styles.works}>
              <li>
                <a
                  href="http://ilyashev.hd.kiev.ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img7Web} type="image/webp" />
                    <img src={img7} alt="" />
                  </picture>
                </a>
              </li>
              <li>
                <a
                  href="https://remens.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img1Web} type="image/webp" />
                    <img src={img1} alt="" />
                  </picture>
                </a>
              </li>
              <li>
                <a
                  href="https://stalkanatsilur.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img2Web} type="image/webp" />
                    <img src={img2} alt="" />
                  </picture>
                </a>
              </li>
              <li>
                <a
                  href="http://kraina.hd.kiev.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img3Web} type="image/webp" />
                    <img src={img3} alt="" />
                  </picture>
                </a>
              </li>
              <li>
                <a
                  href="http://horizon-capital.hd.kiev.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img4Web} type="image/webp" />
                    <img src={img4} alt="" />
                  </picture>
                </a>
              </li>
            </ul>

            <Parallax
              className={styles.title}
              animation={{ y: 0, opacity: 1 }}
              style={{
                transform: 'translateY(50%)',
                opacity: '0',
              }}
            >
              <p>{content.textTwo}</p>
            </Parallax>

            <ul className={styles.works}>
              <li>
                <a
                  href="https://imykhailychenko.github.io/resume-v2/dist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img5Web} type="image/webp" />
                    <img src={img5} alt="" />
                  </picture>
                </a>
              </li>
              <li>
                <a
                  href="https://imykhailychenko.github.io/resume/build/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture className={styles.img}>
                    <source srcSet={img6Web} type="image/webp" />
                    <img src={img6} alt="" />
                  </picture>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SplitLink path="/skills" text="Hard skills" />
      </main>
    );
  }
}
