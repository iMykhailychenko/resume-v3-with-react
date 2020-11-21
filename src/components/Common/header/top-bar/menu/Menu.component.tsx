import './Menu.css';

import React, { ReactElement } from 'react';

import { Theme } from '../../../../../types';

interface Props {
  content: string;
  menu: boolean;
  theme: Theme;
  toggleMenu(): void;
}

export const getCircleWidth = (diameter: number): number => diameter * Math.PI;

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
    <button className="menu__btn" onClick={toggleMenu}>
      <svg
        className={svg}
        width="3rem"
        height="3rem"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.21rem"
          cy="1.21em"
          r="1.1rem"
          strokeWidth="0.1rem"
          stroke={color}
          strokeDasharray={strokeDasharray}
        />
        <circle
          cx="1.2rem"
          cy="0.7rem"
          width="0.2rem"
          height="0.2rem"
          r="0.1rem"
          fill={color}
        />
        <circle
          cx="1.2rem"
          cy="1.2rem"
          width="0.2rem"
          height="0.2rem"
          r="0.1rem"
          fill={color}
        />
        <circle
          cx="1.2rem"
          cy="1.7rem"
          width="0.2rem"
          height="0.2rem"
          r="0.1rem"
          fill={color}
        />
      </svg>

      <span className="menu__text">{content}</span>
    </button>
  );
};

export default MenuBtn;
