import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import './_sections.scss';
import GigList from '@/components/List/ShowsList';
import SocialLinks from '@/components/SocialLinks';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PLAYED_BOJENG, UPCOMING_SHOWS } from '@/data/gigs';
import { useTranslation } from 'react-i18next';

const Shows = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="container">
      <div>
        <h2 className="section__title">{t('shows.title')}</h2>
        <GigList shows={UPCOMING_SHOWS} emptyText={t('shows.empty')} />
        <div className="section__col">
          <p className="section__fineprint">{t('shows.moreDates')}</p>
          <div className="section--shows__icons">
            <SocialLinks />
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
                <GigList shows={PLAYED_BOJENG} expandable />
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
