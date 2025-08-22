import { useEffect, useMemo, useRef, useState } from 'react';
import './gigs.scss';

import fyledalen from '../../assets/gigs/fyledalen.png';
import ratte from '../../assets/gigs/ratte.png';
import medley from '../../assets/images/medley.jpg';
import bojengrelease from '../../assets/images/bojengrelease.jpg';
import ngbg from '../../assets/images/ngbg.jpg';

interface Gig {
  date: string;
  event: string;
  location?: string;
  time?: string;
  address?: string;
  image?: string;
  link?: string;
  description?: string;
}

const gigs: Gig[] = [
  {
    date: '23/8',
    event: 'RELEASEFEST',
    location: 'Mässingshornet',
    image: bojengrelease,
    link: 'https://www.facebook.com/events/702256985855269',
  },
  {
    date: '5/9',
    event: 'BOJENG @ NGBG festival 2025',
    location: 'Malmö',
    image: ngbg,
    address: 'Norra Grängesbergsgatan 16',
    description: 'SCEN 10 (https://maps.app.goo.gl/indAXp6TY64HXSEA7) https://ngbg.se/',
    link: 'https://www.facebook.com/events/1826640428277070/',
  },
];

const prevGigs: Gig[] = [
  {
    date: '7/6',
    event: 'FYLEDALSFESTIVALEN',
    location: 'Skåne',
    image: fyledalen,
  },
  {
    date: '25/7',
    event: 'RÄTTELÖVSFESTIVALEN',
    location: 'Skåne',
    image: ratte,
  },
  {
    date: '13/8',
    event: 'Maya Wahlberg + BOJENG',
    location: 'MEDLEY MALMÖ',
    image: medley,
    link: 'https://www.facebook.com/events/1205289701274095',
  },
];

// Liten hjälp för att autolänka URL:er i description
const linkify = (text?: string) => {
  if (!text) return null;
  const parts = text.split(/(https?:\/\/\S+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a key={i} href={p} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
        {p}
      </a>
    ) : (
      <span key={i}>{p}</span>
    )
  );
};

const Gigs = () => {
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);
  const [showPast, setShowPast] = useState(false);

  // ESC för att stänga modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedGig(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Accordion: mät höjd för smooth animation
  const pastRef = useRef<HTMLDivElement>(null);
  const [pastHeight, setPastHeight] = useState<number>(0);

  const recalcHeight = () => {
    if (pastRef.current) setPastHeight(pastRef.current.scrollHeight);
  };

  useEffect(() => {
    recalcHeight();
  }, [showPast, prevGigs.length]);

  useEffect(() => {
    const onResize = () => recalcHeight();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const renderTable = (list: Gig[]) => (
    <div className="gigs-table" role="list">
      {list.map((gig, index) => {
        const hasExtras = gig.time || gig.address || gig.link || gig.description;
        return (
          <div
            className="gig-row"
            key={index}
            role="listitem"
            tabIndex={0}
            onClick={() => setSelectedGig(gig)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedGig(gig)}>
            <div className="gig-date">{gig.date}</div>

            <div className="gig-event">
              <div className="gig-event-title">{gig.event}</div>

              {/* Sekundära detaljer i raden så att alla fält "renderas" */}
              {hasExtras && (
                <div className="gig-event-extras">
                  {/* {gig.time && <span className="gig-badge">kl {gig.time}</span>} */}
                  {/* {gig.address && <span className="gig-address-inline">{gig.address}</span>}
                  {gig.link && (
                    <a className="gig-link-inline" href={gig.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Länk
                    </a>
                  )} */}
                  {/* {gig.description && <span className="gig-description-inline">{linkify(gig.description)}</span>} */}
                </div>
              )}
            </div>

            <div className="gig-location">{gig.location ?? ''}</div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="gigs-section">
      <h2 className="gigs-title">Spelningar</h2>
      {renderTable(gigs)}

      <button className={`toggle-past ${showPast ? 'open' : ''}`} onClick={() => setShowPast((s) => !s)} aria-expanded={showPast} aria-controls="past-gigs">
        <h2 className="gigs-title">Tidigare spelningar</h2>
        <span className="chevron" aria-hidden />
      </button>

      {/* Accordion wrapper med smooth animation */}
      <div id="past-gigs" className={`past-outer ${showPast ? 'open' : ''}`} style={{ height: showPast ? pastHeight : 0, opacity: showPast ? 1 : 0 }}>
        <div ref={pastRef}>{renderTable(prevGigs)}</div>
      </div>

      {selectedGig && (
        <div className="gig-modal" onClick={() => setSelectedGig(null)} role="dialog" aria-modal="true" aria-label={selectedGig.event}>
          <div className="gig-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGig(null)} aria-label="Stäng">
              ×
            </button>

            <div className="modal-media">{selectedGig.image && <img src={selectedGig.image} alt={selectedGig.event} />}</div>

            <div className="modal-body">
              <h3 className="modal-title">{selectedGig.event}</h3>

              {/* inline-rad med chips/pills */}
              <ul className="modal-meta">
                <li className="meta-item meta-date">
                  <strong>Datum</strong> {selectedGig.date}
                </li>
                {selectedGig.time && (
                  <li className="meta-item meta-time">
                    <strong>Tid</strong> {selectedGig.time}
                  </li>
                )}
                {selectedGig.location && (
                  <li className="meta-item meta-location">
                    <strong>Plats</strong> {selectedGig.location}
                  </li>
                )}
                {selectedGig.address && (
                  <li className="meta-item meta-address">
                    <strong>Adress</strong> {selectedGig.address}
                  </li>
                )}
              </ul>

              {selectedGig.description && <p className="modal-description">{linkify(selectedGig.description)}</p>}

              {selectedGig.link && (
                <a className="gig-link large" href={selectedGig.link} target="_blank" rel="noopener noreferrer">
                  Öppna länk
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gigs;
