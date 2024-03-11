import React from 'react';
import './Header.scss';

interface Props {
  targetCategory: string;
}

export default ({ targetCategory }: Props) => {
  return (
    <header className={`header ${targetCategory === "" ? '' : ''}`}>
      <div className={`header__bojeng ${targetCategory === "" ? 'header__bojeng--fade-out' : 'header__bojeng--fade-in'}`} onClick={() => console.log("")}>
        BOJENG
      </div>
    </header>
  );
};
