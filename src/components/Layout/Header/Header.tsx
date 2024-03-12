import React from 'react';
import './header.scss';

interface Props {
  targetCategory: string;
}

export default ({ targetCategory }: Props) => {
  return (
    <header className={`header ${targetCategory === "" ? 'header--none' : ''}`}>
      <div className={`header__bojeng ${targetCategory === "" || targetCategory === "Musik" ? 'header__bojeng--fade-out' : 'header__bojeng--fade-in'}`} onClick={() => console.log("")}>
        BOJENG
      </div>
    </header>
  );
};
