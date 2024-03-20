import React from 'react';
import './menu.scss';

interface Props {
  targetCategory: string;
  toggleMenu: (cat: string) => void;
}

const Menu = ({ targetCategory, toggleMenu }: Props) => {
  return (
    <ul className="menu">
      <li className="menu-item" onClick={() => toggleMenu("MUSIC")}>MUSIC</li>
      <li className="menu-item" onClick={() => toggleMenu("SHOWS")}>SHOWS</li>
      <li className="menu-item" onClick={() => toggleMenu("BAND")}>BAND</li>
    </ul>
  );
};

export default Menu;
