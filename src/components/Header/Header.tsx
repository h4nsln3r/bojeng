import Menu from '../Navigation/Menu/Menu';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './header.scss';

interface Props {
  targetCategory: string;
  toggleMenu: (cat: string) => void;
}

const Header = ({ targetCategory, toggleMenu }: Props) => {
  return (
    <header className="header">
      <div className="header__bojeng">
        BOJENG
      </div>
      {targetCategory === "init" && (
        <>
          <SocialMediaIcons className='header__social-media-icons' />
          <Menu targetCategory={targetCategory} toggleMenu={(cat: string) => toggleMenu(cat)} />
        </>
      )}
    </header>
  );
};

export default Header;