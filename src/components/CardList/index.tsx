import React from 'react';
import { LATEST_SINGLE } from '@/data/music';

export const Card = () => {
  return (
    <div className="players">
      {LATEST_SINGLE.youtube && (
        <div className="player-card">
          <div className="ratio">
            <iframe
              width="560"
              height="315"
              src={LATEST_SINGLE.youtube}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {LATEST_SINGLE.apple && (
        <div className="player-card">
          <div className="ratio">
            <iframe
              title="Apple Music"
              src={LATEST_SINGLE.apple}
              loading="lazy"
              allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      )}
      {LATEST_SINGLE.soundcloud && (
        <div className="player-card">
          <div className="ratio">
            <iframe
              className="player-card--souncloud"
              title="SoundCloud"
              src={LATEST_SINGLE.soundcloud}
              loading="lazy"
              allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      )}
    </div>
  );
};
