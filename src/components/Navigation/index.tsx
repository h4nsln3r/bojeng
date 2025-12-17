import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GB from 'country-flag-icons/react/3x2/GB';
import SE from 'country-flag-icons/react/3x2/SE';
import './nav.scss';

function navKey(id: string) {
  switch (id) {
    case 'listen':
      return 'nav.listen';
    case 'shows':
      return 'nav.shows';
    case 'contact':
      return 'nav.contact';
    default:
      return id;
  }
}

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const sectionIds = ['listen', 'shows', 'contact'];
  const activeId = useScrollSpy(sectionIds, 100);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const setLanguage = (lng: 'en' | 'sv') => {
    void i18n.changeLanguage(lng);
  };

  const isEn = i18n.language?.startsWith('en');
  const isSv = i18n.language?.startsWith('sv');

  return (
    <nav className="nav" aria-label={t('nav.aria')}>
      {/* Desktop-nav */}
      <div className="nav__links nav__links--desktop">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`} className={activeId === id ? 'active' : ''}>
            {t(navKey(id))}
          </a>
        ))}
        {/* TODO Fix and hide better */}
        {/* <div className="nav__lang nav__lang--desktop" aria-label={t('nav.language')}>
          <button
            type="button"
            className={`nav__lang-btn ${isEn ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-label={t('nav.english')}
            title={t('nav.english')}
          >
            <GB className="nav__flag" />
          </button>

          <button
            type="button"
            className={`nav__lang-btn ${isSv ? 'active' : ''}`}
            onClick={() => setLanguage('sv')}
            aria-label={t('nav.swedish')}
            title={t('nav.swedish')}
          >
            <SE className="nav__flag" />
          </button>
        </div> */}
      </div>

      {/* Mobil-toggle */}
      <button
        type="button"
        className="nav__toggle"
        aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobil drawer + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="nav__overlay"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              id="mobile-menu"
              className="nav__drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22 }}
            >
              <div className="nav__drawer-inner">
                {sectionIds.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={activeId === id ? 'active' : ''}
                    onClick={handleLinkClick}
                  >
                    {t(navKey(id))}
                  </a>
                ))}

                <div className="nav__spacer" />

                <div className="nav__lang" aria-label={t('nav.language')}>
                  <button
                    type="button"
                    className={`nav__lang-btn ${isEn ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                    aria-label={t('nav.english')}
                    title={t('nav.english')}
                  >
                    <GB className="nav__flag" />
                  </button>

                  <button
                    type="button"
                    className={`nav__lang-btn ${isSv ? 'active' : ''}`}
                    onClick={() => setLanguage('sv')}
                    aria-label={t('nav.swedish')}
                    title={t('nav.swedish')}
                  >
                    <SE className="nav__flag" />
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
