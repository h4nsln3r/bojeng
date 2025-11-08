import './header.scss';
import Navigation from '../Navigation';
import Zucchini from '../../assets/icons/onlyzuc.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="Bojeng – startsida">
          <img className="brand__logo" src={Zucchini} />
          {/* <span className="brand__logo" aria-hidden="true">
            ●
          </span> */}
          {/* <span className="brand__text">Bojeng</span> */}
        </a>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
