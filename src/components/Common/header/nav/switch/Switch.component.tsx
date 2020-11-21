import './Switch.css';

import React, { ReactElement } from 'react';

interface Props {
  theme: string;
  toggleTheme(): void;
}

const Switch = ({ theme, toggleTheme }: Props): ReactElement => {
  const btnClass = theme === 'light' ? 'btn-toggle light' : 'btn-toggle';

  return (
    <button className={btnClass} onClick={toggleTheme}>
      <span className="btn-toggle__elem btn-toggle__elem--light">light</span>
      <span className="btn-toggle__elem btn-toggle__elem--dark">dark</span>
    </button>
  );
};

export default Switch;
