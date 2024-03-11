import React from 'react';
import classNames from 'classnames';
import './sidebar.scss';

interface Props {
  targetCategory: string;
  toggleMenu: (cat: string) => void;
}

export default ({ targetCategory, toggleMenu }: Props) => {

  return (
    <aside className="sidebar">
      <div className='sidebar--nav'>
        <ul>
          <li className={`sidebar__nav--item ${targetCategory === "Musik" && 'active'}`} onClick={() => toggleMenu("Musik")}>Musik</li>
          <li className={`sidebar__nav--item ${targetCategory === "Spelningar" && 'active'}`} onClick={() => toggleMenu("Spelningar")}>Spelningar</li>
          <li className={`sidebar__nav--item ${targetCategory === "Om" && 'active'}`} onClick={() => toggleMenu("Om")}>Om</li>
        </ul>
      </div>
    </aside>
  );
};
