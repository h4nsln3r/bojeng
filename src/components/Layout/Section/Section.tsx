/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './section.scss';
import soundcloud from '../../../assets/soundcloud.png';
interface Props {
  targetCategory: string;
}

export default ({ targetCategory }: Props) => {

  return (
    <section className={`section ${targetCategory === "" ? '' : ''}`}>
      {targetCategory === "" && (
        <>
          <div className={`init__header ${targetCategory === "" ? '' : 'init__header--fadeout'}`}>
            <div className={`init__header__bojeng ${targetCategory === "" ? '' : 'init__header--fadeout'}`} onClick={() => console.log("")}>
              BOJENG
            </div>
          </div>
          <div className='section__socialmedia'>
            <a href="#" className='section__socialmedia--soundcloud'><img src={soundcloud} /></a>
            <a className='section__section__socialmedia--youtube'><img src={soundcloud} /></a>
            <a className='section__section__socialmedia--instagram'><img src={soundcloud} /></a>
          </div>
        </>
      )}

      <div className={`category Musik ${targetCategory === "Musik" ? 'category--active' : 'category-fadeout'}`} onClick={() => console.log("")}>
        <div className="category__section">

          <iframe className='soundcloud' width="100%" height="100" scrolling="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1771918968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          <iframe className='youtube' width="100%" height="485rem"
            src="https://www.youtube.com/embed/gM_0TiszzB8?si=8izxcenRVc6O0Oc5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
          <iframe className='soundcloud' width="100%" height="100" scrolling="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1771981572&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>


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

          <p>Kontakta?</p>
        </div>
      </div>
    </section>
  );
};
