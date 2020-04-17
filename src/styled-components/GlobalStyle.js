import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === "light" ? "#fff" : "#000")};
    color: ${props => (props.theme === "light" ? "#000" : "#fff")};
  }

  .mark {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => (props.theme === "light" ? "#369FFF" : "#FFC56D")};
  }

  .menu__btn {
    color: ${props => (props.theme === "light" ? "#000" : "#fff")};

    circle {
      stroke: ${props => (props.theme === "light" ? "#2B2B2B" : "#fff")}
    }
  }

  .btn-toggle__elem--light {
    color: ${props => (props.theme === "light" ? "#369FFF" : "#707070")};
  }

  .btn-toggle__elem--dark {
    color: ${props => (props.theme === "dark" ? "#369FFF" : "#707070")};
  }
`;