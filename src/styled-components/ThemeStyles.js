import { createGlobalStyle } from 'styled-components';
import nextWhite from '../images/svg/next-white.svg'
import nextBlack from '../images/svg/next-black.svg'

export const ThemeStyles = createGlobalStyle`
  body {
    background: ${props => (props.theme === 'light' ? '#eee' : '#000')};
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
    overflow: ${props => (props.menu ? 'hidden' : 'auto')};
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

    circle {
      stroke: ${props => (props.theme === 'light' ? '#2B2B2B' : '#fff')}
    }
  }

  .btn-toggle__elem--light {
    color: ${props => (props.theme === 'light' ? '#369FFF' : '#707070')};
  }

  .btn-toggle__elem--dark {
    color: ${props => (props.theme === 'dark' ? '#369FFF' : '#707070')};
  }

  .page-scroll {
    border: ${props =>
      props.theme === 'light' ? '1px solid #000;' : '1px solid #fff;'};
  }

  .page-scroll::before {
    background: ${props => (props.theme === 'light' ? '#000;' : '#fff;')};
  }

  .page-relink-circle {
    border: ${props =>
      props.theme === 'light' ? '1px solid #000;' : '1px solid #fff;'};
  }

  .page-relink-circle::before {
    background: ${props =>
      props.theme === 'light'
        ? `url(${nextBlack}) no-repeat;`
        : `url(${nextWhite}) no-repeat;`
  }
`;
