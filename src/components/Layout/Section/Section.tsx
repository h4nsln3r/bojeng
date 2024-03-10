/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './section.scss';

interface Props {
  targetCategory: string;
}

export default ({ targetCategory }: Props) => {





  return (
    <section className={`section ${targetCategory === "" ? '' : ''}`}>
      {targetCategory === "" && (
        <div className={`init__header ${targetCategory === "" ? '' : 'init__header--fadeout'}`}>
          <div className={`init__header__bojeng ${targetCategory === "" ? '' : 'init__header--fadeout'}`} onClick={() => console.log("")}>
            BOJENG
          </div>
        </div>
      )}

      <div className={`category Musik ${targetCategory === "Musik" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
        <div className="category__section">
          {targetCategory}
          <p>youtube</p>
          <p>soundcloud</p>

        </div>
      </div>
      <div className={`category Spelningar ${targetCategory === "Spelningar" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
        <div className="category__section">
          {targetCategory}
          <p>list</p>
        </div>
      </div>
      <div className={`category Om ${targetCategory === "Om" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
        <div className="category__section">
          <p>Bild</p>
          {targetCategory}
          <p>Kontakt</p>
        </div>
      </div>
    </section>
  );
};
