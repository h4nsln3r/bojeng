import { useState } from 'react';
import './gigs.scss';

import fyledalen from '../../assets/gigs/fyledalen.png';
import ratte from '../../assets/gigs/ratte.png';
import medley from '../../assets/images/medley.jpg';

import bojengrelease from '../../assets/images/bojengrelease.jpg';
interface Gig {
  date: string;
  event: string;
  location?: string;
  time?: string;
  address?: string;
  image?: string;
  link?: string;
}

const gigs: Gig[] = [
  {
    date: '13/8',
    event: 'Maya Wahlberg + BOJENG',
    location: 'MEDLEY MALMÖ',
    image: medley,
    link: 'https://www.facebook.com/events/1205289701274095',
  },
  {
    date: '23/8',
    event: 'RELEASEFEST',
    location: 'Mässingshornet',
    image: bojengrelease,
    link: 'https://www.facebook.com/events/702256985855269',
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
];

const Gigs = () => {
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);

  return (
    <section className="gigs-section">
      <h2 className="gigs-title">Spelningar</h2>
      <div className="gigs-table">
        {gigs.map((gig, index) => (
          <div className="gig-row" key={index} onClick={() => setSelectedGig(gig)}>
            <div className="gig-date">{gig.date}</div>
            <div className="gig-event">{gig.event}</div>
            <div className="gig-location">{gig.location}</div>
          </div>
        ))}
      </div>

      {/* <h4 className="gigs-title margin__top--2">Tidigare Spelningar</h4>
      <div className="gigs-table">
        {prevGigs.map((gig, index) => (
          <div className="gig-row" key={index} onClick={() => setSelectedGig(gig)}>
            <div className="gig-date">{gig.date}</div>
            <div className="gig-event">{gig.event}</div>
            <div className="gig-location">{gig.location}</div>
          </div>
        ))}
      </div> */}

      {selectedGig && (
        <div className="gig-modal" onClick={() => setSelectedGig(null)}>
          <div className="gig-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedGig.event}</h3>
            <p>
              <strong>Datum:</strong> {selectedGig.date}
            </p>
            {selectedGig.time && (
              <p>
                <strong>Tid:</strong> {selectedGig.time}
              </p>
            )}
            {selectedGig.location && (
              <p>
                <strong>Plats:</strong> {selectedGig.location}
              </p>
            )}
            {selectedGig.address && (
              <p>
                <strong>Adress:</strong> {selectedGig.address}
              </p>
            )}
            <img src={selectedGig.image} alt={selectedGig.event} className="gig-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gigs;
