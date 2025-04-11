import { useState } from 'react';
import './gigs.scss';
interface Gig {
  date: string;
  event: string;
  location: string;
  time: string;
  address: string;
  image: string;
}

const gigs: Gig[] = [
  {
    date: '31/8',
    event: 'FOLKÖL OCH DUNKADUNKA',
    location: 'Malmö',
    time: '20:00',
    address: 'Folkölsgatan 12, Malmö',
    image: '/images/folkol.png',
  },
  {
    date: '13–14/9',
    event: 'NGBG-FESTIVALEN',
    location: 'Malmö',
    time: '18:00',
    address: 'Södra Skolgatan, Malmö',
    image: '/images/ngbg.png',
  },
  {
    date: '21/9',
    event: 'LUNDS KULTURNATT',
    location: 'Malmö',
    time: '17:00',
    address: 'Stortorget, Lund',
    image: '/images/lund.png',
  },
];

const Gigs = () => {
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);

  return (
    <section className="gigs-section">
      <h2 className="gigs-title">Kommande spelningar</h2>
      <div className="gigs-table">
        {gigs.map((gig, index) => (
          <div className="gig-row" key={index} onClick={() => setSelectedGig(gig)}>
            <div className="gig-date">{gig.date}</div>
            <div className="gig-event">{gig.event}</div>
            <div className="gig-location">{gig.location}</div>
          </div>
        ))}
      </div>

      {selectedGig && (
        <div className="gig-modal" onClick={() => setSelectedGig(null)}>
          <div className="gig-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedGig.event}</h3>
            <p>
              <strong>Datum:</strong> {selectedGig.date}
            </p>
            <p>
              <strong>Tid:</strong> {selectedGig.time}
            </p>
            <p>
              <strong>Plats:</strong> {selectedGig.location}
            </p>
            <p>
              <strong>Adress:</strong> {selectedGig.address}
            </p>
            <img src={selectedGig.image} alt={selectedGig.event} className="gig-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gigs;
