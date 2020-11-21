import './Menu.css';

import React, { ReactElement } from 'react';

import { getCircleWidth } from './utils';

interface Props {
  content: string;
  menu: boolean;
  theme: string;
  toggleMenu(menu: boolean): void;
}

const MenuBtn = ({ content, theme, menu, toggleMenu }: Props): ReactElement => {
  // set a color of menu btn according to globat theme color
  const color: string = theme === 'light' ? 'rgb(0, 0, 0)' : 'rgb(248, 248, 248)';

  // set position of menu according to nav menu position (open/close)
  const svg: string = menu ? 'menu__svg menu__svg--rotate' : 'menu__svg';

  // 25 - is a radius of the circle. this func return a width of the circle
  const width: number = getCircleWidth(25);

  // get distance between dash items
  const strokeDasharray: string = menu
    ? `${width}rem, ${width}rem`
    : `0, ${width}rem`;

  return (
    <button className="menu__btn" onClick={() => toggleMenu(menu)}>
      <svg
        className={svg}
        width="2.5rem"
        height="2.5rem"
        viewBox="0 0 2.5rem 2.5rem"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.05rem"
          y="0.05rem"
          width="2.4rem"
          height="2.4rem"
          rx="1.2rem"
          strokeWidth="0.1rem"
          stroke={color}
          strokeDasharray={strokeDasharray}
        />
        <rect
          x="1.1rem"
          y="0.5rem"
          width="0.3rem"
          height="0.3rem"
          rx="0.15rem"
          fill={color}
        />
        <rect
          x="1.1rem"
          y="1.1rem"
          width="0.3rem"
          height="0.3rem"
          rx="0.15rem"
          fill={color}
        />
        <rect
          x="1.1rem"
          y="1.7rem"
          width="0.3rem"
          height="0.3rem"
          rx="0.15rem"
          fill={color}
        />
      </svg>

      <span className="menu__text">{content}</span>
    </button>
  );
};

export default MenuBtn;
