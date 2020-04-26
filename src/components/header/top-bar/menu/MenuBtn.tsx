import React from 'react';
import './Menu.css';
import { getCircleWidth } from './utils';

interface Props {
  content: string;
  menu: boolean;
  theme: string;
  toggleMenu(menu: boolean): void;
}

const MenuBtn: React.FC<Props> = ({ content, theme, menu, toggleMenu }) => {
  const color: string = theme === 'light' ? '#000' : '#F8F8F8';
  const svg: string = menu ? 'menu__svg menu__svg--rotate' : 'menu__svg';
  const width: number = getCircleWidth(25);
  const strokeDasharray: string = menu ? `${width}, ${width}` : `0, ${width}`;

  return (
    <button className="menu__btn" onClick={() => toggleMenu(menu)}>
      <svg
        className={svg}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="24"
          height="24"
          rx="12"
          strokeWidth="1"
          stroke={color}
          strokeDasharray={strokeDasharray}
        />
        <rect x="11" y="5" width="3" height="3" rx="1.5" fill={color} />
        <rect x="11" y="11" width="3" height="3" rx="1.5" fill={color} />
        <rect x="11" y="17" width="3" height="3" rx="1.5" fill={color} />
      </svg>

  <span className="menu__text">{content}</span>
    </button>
  );
};

export default MenuBtn;
