import { createGlobalStyle } from 'styled-components';
import nextWhite from '../images/svg/next-white.svg';
import nextBlack from '../images/svg/next-black.svg';

export const ThemeStyles = createGlobalStyle`
  body {
    background: ${props => (props.theme === 'light' ? '#eee' : '#000')};
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
    overflow: ${props => (props.menu ? 'hidden' : 'auto')};
  }

  .loder {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
    background: ${props => (props.theme === 'light' ? '#eee' : '#000')};
  }

  a {
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  }

  .mark {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => (props.theme === 'light' ? '#369FFF' : '#FFC56D')};
  }

  .menu__btn {
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  }
  
  .menu__btn circle {
    stroke: ${props => (props.theme === 'light' ? '#2B2B2B' : '#fff')};
  }

  .btn-toggle__elem--light {
    color: ${props => (props.theme === 'light' ? '#369FFF' : '#707070')};
  }

  .btn-toggle__elem--dark {
    color: ${props => (props.theme === 'dark' ? '#369FFF' : '#707070')};
  }

  .page-scroll {
    border: ${props =>
      props.theme === 'light' ? '1px solid #000' : '1px solid #fff'};
  }

  .page-scroll::before {
    background: ${props => (props.theme === 'light' ? '#000' : '#fff')};
    animation: scroll 1.5s ease-in-out infinite;
  }

  .page-relink-circle {
    border: ${props =>
      props.theme === 'light' ? '1px solid #000' : '1px solid #fff'};
  }

  .page-relink-circle::before {
    background: ${props =>
      props.theme === 'light'
        ? `url(${nextBlack}) no-repeat`
        : `url(${nextWhite}) no-repeat`};
  }

  .skills_left::before,
  .skills_leftRevers::before {
    background: ${props =>
      props.theme === 'light'
        ? `linear-gradient(to top, rgba(238, 238, 238, 0.9) 45%, rgba(238, 238, 238, 0))`
        : `linear-gradient(to top, rgba(0, 0, 0, 0.9) 45%, rgba(0, 0, 0, 0))`};
  }

  .skills_item {
    border: ${props =>
      props.theme === 'light' ? '1px solid #000' : '1px solid #fff'};
  }

  .download_files {
    border-top: ${props =>
      props.theme === 'light' ? '1px solid #000' : '1px solid #fff'};
  }

  .background {
    background: ${props =>
      props.theme === 'light' ? '#eee' : '#000'};
  }

  .reversBackground {
    background: ${props =>
      props.theme === 'light' ? '#000' : '#fff'};
    color: ${props =>
      props.theme === 'light' ? '#fff' : '#000'};
  }
`;
