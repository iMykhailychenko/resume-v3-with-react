import { createGlobalStyle } from 'styled-components';
import nextWhite from '../images/svg/next-white.svg';
import nextBlack from '../images/svg/next-black.svg';

export const ThemeStyles = createGlobalStyle`
  body {
    background: ${props => (props.theme === 'light' ? 'rgb(238, 238, 238)' : 'rgb(0, 0, 0)')};
    color: ${props => (props.theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
    overflow: ${props => (props.menu ? 'hidden' : 'auto')};
  }

  .loder {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 8;
    background: ${props => (props.theme === 'light' ? 'rgb(238, 238, 238)' : 'rgb(0, 0, 0)')};
  }

  a {
    color: ${props => (props.theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
  }

  .mark {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => (props.theme === 'light' ? 'rgb(54, 159, 255)' : 'rgb(255, 197, 109)')};
  }

  .menu__btn {
    color: ${props => (props.theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
  }
  
  .menu__btn circle {
    stroke: ${props => (props.theme === 'light' ? 'rgb(43, 43, 43)' : 'rgb(255, 255, 255)')};
  }

  .btn-toggle__elem--light {
    color: ${props => (props.theme === 'light' ? 'rgb(54, 159, 255)' : 'rgb(112, 112, 112)')};
  }

  .btn-toggle__elem--dark {
    color: ${props => (props.theme === 'dark' ? 'rgb(54, 159, 255)' : 'rgb(112, 112, 112)')};
  }

  .page-scroll {
    border: ${props =>
      props.theme === 'light' ? '1px solid rgb(0, 0, 0)' : '1px solid rgb(255, 255, 255)'};
  }

  .page-scroll::before {
    background: ${props => (props.theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)')};
    animation: scroll 1.5s ease-in-out infinite;
  }

  .page-relink-circle {
    border: ${props =>
      props.theme === 'light' ? '1px solid rgb(0, 0, 0)' : '1px solid rgb(255, 255, 255)'};
  }
  
  .page-relink-circle::before {
    background: ${props =>
      props.theme === 'light'
        ? `url(${nextBlack}) no-repeat`
        : `url(${nextWhite}) no-repeat`};
  }

  .gradient::before {
    background: ${props =>
      props.theme === 'light'
        ? `linear-gradient(to top, rgba(238, 238, 238, 1) 40%, rgba(238, 238, 238, 0))`
        : `linear-gradient(to top, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0))`};
  }

  .border {
    border: ${props =>
      props.theme === 'light' ? '1px solid rgb(0, 0, 0)' : '1px solid rgb(255, 255, 255)'};
  }

  .border-top {
    border-top: ${props =>
      props.theme === 'light' ? '1px solid rgb(0, 0, 0)' : '1px solid rgb(255, 255, 255)'};
  }

  .background {
    background: ${props =>
      props.theme === 'light' ? 'rgb(238, 238, 238)' : 'rgb(0, 0, 0)'};
  }

  .reversBackground {
    background: ${props =>
      props.theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};
    color: ${props =>
      props.theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
  }
`;
