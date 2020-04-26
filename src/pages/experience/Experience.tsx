import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import styles from './Experiance.module.css';

// img
import emoji from '../../images/emoji/experiance.png';
import img1 from '../../images/content/experiance/experiance-1.png';
import img2 from '../../images/content/experiance/experiance-2.png';
import img3 from '../../images/content/experiance/experiance-3.png';
import img4 from '../../images/content/experiance/experiance-4.png';
import img5 from '../../images/content/experiance/experiance-5.png';
import img6 from '../../images/content/experiance/experiance-6.png';

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
    const { content } = this.props;
    const { count } = this.state;
    const y: number = count * 400;
    const rotate: number = count * 45;

    return (
      <>
        <PageFirstBlock title={content.title} img={emoji} />

        <Parallax
          component="section"
          className={styles.section + ' gradient'}
          animation={{ opacity: 1 }}
          style={{
            opacity: 0,
          }}
        >
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

          <div className={styles.block}>
            <div
              className={styles.wrp}
              style={{ transform: `translateY(-${y}px)` }}
            >
              {content.slider.map((slide, index) => (
                <div key={index} className={styles.inner}>
                  <a
                    className={styles.link}
                    href={slide.linkt}
                    target="_blank"
                    rel="noopener noreferrer"
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

            <button className={styles.btn} onClick={this.handleDown}></button>
            <button className={styles.btn} onClick={this.handleUp}></button>
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

          <div className="border_top">
            <ul className={styles.works}>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img1} alt="" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img2} alt="" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img3} alt="" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img4} alt="" />
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
              <p>{content.textOne}</p>
            </Parallax>

            <ul className={styles.works}>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img5} alt="" />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img className={styles.img} src={img6} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <SplitLink path="/skills" text="Hard skills" />
      </>
    );
  }
}
