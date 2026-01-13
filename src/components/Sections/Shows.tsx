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
import { useTranslation } from 'react-i18next';

const SHOWS: PlayedShow[] = [
  {
    date: '2026-01-16',
    city: 'Malmö - Plan B',
    venue: 'Punkspark',
    link: 'https://www.facebook.com/events/s/punkspark-brinna-freezer-food-/2225836057825104/',
  },
];

const Shows = () => {
  const { t } = useTranslation();
  // Om inga kommande spelningar finns: öppna "Tidigare spelningar" direkts
  // const [isOpen, setIsOpen] = useState(SHOWS.length === 0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="container">
      <div>
        <h2 className="section__title">{t('shows.title')}</h2>

        <GigList shows={SHOWS} emptyText={t('shows.empty')} />
        <div className="section__col">
          <p className="section__fineprint">{t('shows.moreDates')}</p>
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
          <h3 className="section__title">{t('shows.previous')}</h3>
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
                <GigList shows={PLAYED_BOJENG} />
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
