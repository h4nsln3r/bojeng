import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import './_sections.scss';
import GigList from '../List/ShowsList';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlayedShow } from '@/types/global';
import { PLAYED_BOJENG } from '@/data/gigs';
import Icon from '../Icon';
import { LINKS } from '@/data/socials';
import { FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const SHOWS: PlayedShow[] = [];

const Shows = () => {
  // Om inga kommande spelningar finns: öppna "Tidigare spelningar" direkt
  // const [isOpen, setIsOpen] = useState(SHOWS.length === 0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="container">
      <div>
        <h2 className="section__title">Spelningar</h2>

        <GigList shows={SHOWS} emptyText="Inga spelningar för tillfället." />
        <div className="section__col">
          <p className="section__fineprint">
            Fler datum släpps löpande – följ oss i sociala kanaler.
          </p>
          <div className="section--shows__icons">
            <Icon link={LINKS.Soundcloud} icon={<FaSoundcloud className="icon" />} />
            <Icon link={LINKS.YouTube} icon={<FaYoutube className="icon" />} />
            <Icon link={LINKS.Instagram} icon={<FaInstagram className="icon" />} />
            <Icon link={LINKS.Facebook} icon={<FaFacebook className="icon" />} />
            <Icon link={LINKS.Spotify} icon={<FaSpotify className="icon" />} />
          </div>
        </div>
      </div>
      <br />
      <div className="previous-gigs">
        <div
          onClick={handleClick}
          className="section__row section__row--space-between section--align-items-center"
        >
          <h3 className="section__title">Tidigare spelningar</h3>
          {isOpen ? <SlArrowUp /> : <SlArrowDown />}
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
                <GigList shows={PLAYED_BOJENG} emptyText="Inga tidigare spelningar ännu." />
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
