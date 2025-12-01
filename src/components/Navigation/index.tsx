import { useEffect, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './nav.scss';

function navLabel(id: string) {
  switch (id) {
    case 'listen':
      return 'Lyssna';
    case 'shows':
      return 'Spelningar';
    // case 'press':
    //   return 'Press';
    case 'contact':
      return 'Kontakt';
    default:
      return id;
  }
}

const Navigation = () => {
  const sectionIds = ['listen', 'shows', 'contact'];
  const activeId = useScrollSpy(sectionIds, 100);

  const [isOpen, setIsOpen] = useState(false);

  // Stäng drawer när man går upp i desktop-bredd
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav" aria-label="Huvudmeny">
      {/* Desktop-nav */}
      <div className="nav__links nav__links--desktop">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`} className={activeId === id ? 'active' : ''}>
            {navLabel(id)}
          </a>
        ))}
      </div>

      {/* Mobil-toggle */}
      <button
        type="button"
        className="nav__toggle"
        aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
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
            {/* Mörk overlay bakom drawer */}
            <motion.button
              type="button"
              className="nav__overlay"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Själva drawer-panelen */}
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
                    {navLabel(id)}
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
