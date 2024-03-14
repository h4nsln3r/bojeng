
import React, { useState } from 'react';
import './sidebar.scss'; // Assuming your CSS file is named Sidebar.css

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetCategory, setTargetCategory] = useState('');

  const toggleMenu = (category: string) => {
    setIsOpen(!isOpen);
    setTargetCategory(category);
  };

  return (
    <>
      <div className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        {/* Replace this div with your Hamburger Icon */}
        &#9776;
      </div>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='sidebar--nav'>
          <ul>
            <li className={`sidebar__nav--item ${targetCategory === "Musik" ? 'active' : ''}`} onClick={() => toggleMenu("Musik")}>Musik</li>
            <li className={`sidebar__nav--item ${targetCategory === "Spelningar" ? 'active' : ''}`} onClick={() => toggleMenu("Spelningar")}>Spelningar</li>
            <li className={`sidebar__nav--item ${targetCategory === "Om" ? 'active' : ''}`} onClick={() => toggleMenu("Om")}>Om</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;