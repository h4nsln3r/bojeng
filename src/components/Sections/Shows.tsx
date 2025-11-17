import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import './_sections.scss';
import GigList from '../GigList';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SHOWS = [
  { date: '2025-12-05', city: 'Malmö', venue: 'Plan B', link: '#', price: 0 },
  { date: '2026-01-17', city: 'Göteborg', venue: 'Pustervik (lilla)', link: '#', price: 0 },
  { date: '2026-02-08', city: 'Stockholm', venue: 'Debaser', link: '#', price: 0 },
];

const PLAYED = [
  { date: '2025-12-05', city: 'Malmö', venue: 'Plan B', link: '#', price: 0 },
  { date: '2026-01-17', city: 'Göteborg', venue: 'Pustervik (lilla)', link: '#', price: 0 },
  { date: '2026-02-08', city: 'Stockholm', venue: 'Debaser', link: '#', price: 0 },
];

const Shows = () => {
  //TODO FIX THIS BETTER = OPEN PREV IF NO SHOW ATM!
  const [isOpen, setIsOpen] = useState(SHOWS.length > 0 ? false : true);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="container">
      <div>
        <h2 className="section__title">Spelningar</h2>
        <GigList shows={SHOWS} />
        <p className="section__fineprint">
          Fler datum släpps löpande – följ oss i sociala kanaler.
        </p>
      </div>
      <div className="previosgigs">
        <div
          onClick={handleClick}
          className="section__row section__row--space-between section--align-items-center"
        >
          <h3 className="section__title">Tidigare spelningar</h3>
          {isOpen ? <SlArrowDown /> : <SlArrowUp />}
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              className="accordion-content-wrapper"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="accordion-content">
                <GigList shows={PLAYED} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Shows;
