import React from 'react';
import './SwitchTheme.css';

interface Props {
  theme: string;
  toggleTheme(theme: string): void;
}

const SwitchTheme: React.FC<Props> = ({ theme, toggleTheme }) => {
  // we use global css classes name becouse styles for this component depends on current theme
  // and generates at global level
  const btnClass = theme === 'light' ? 'btn-toggle light' : 'btn-toggle';

  return (
    <button className={btnClass} onClick={() => toggleTheme(theme)}>
      <span className="btn-toggle__elem btn-toggle__elem--light">light</span>
      <span className="btn-toggle__elem btn-toggle__elem--dark">dark</span>
    </button>
  );
};

export default SwitchTheme;
