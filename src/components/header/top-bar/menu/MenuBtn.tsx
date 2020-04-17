import React from 'react';
import './Menu.css';

interface Props {
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const MenuBtn: React.FC<Props> = ({ menu, toggleMenu }) => (
  <button className="menu__btn" onClick={() => toggleMenu(menu)}>
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="24" height="24" rx="12" stroke="#F8F8F8" />
      <rect x="6" y="11" width="3" height="3" rx="1.5" fill="#F8F8F8" />
      <rect x="11" y="11" width="3" height="3" rx="1.5" fill="#F8F8F8" />
      <rect x="16" y="11" width="3" height="3" rx="1.5" fill="#F8F8F8" />
    </svg>

    <span className="menu__text">Навигация по сайту</span>
  </button>
);

export default MenuBtn;
