import './header.scss';
import Navigation from '../Navigation';
import Zucchini from '../../assets/icons/zucchini.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const REVEAL_RATIO = 0.7;

const Header = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * REVEAL_RATIO;
      setIsVisible(window.scrollY > threshold);
      setIsScrolled(window.scrollY > 6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <motion.header
      className={`header${isScrolled ? ' scrolled' : ''}`}
      initial={false}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!isVisible}
    >
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={t('header.homeAria')}>
          <img className="brand__logo" src={Zucchini} alt="" />
        </a>
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;
