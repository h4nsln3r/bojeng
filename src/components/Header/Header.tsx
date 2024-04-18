import Menu from '../Navigation/Menu/Menu';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './header.scss';
import boeng from '../../assets/logo-text/bojeng_logotyp_purple.png';

interface Props {
  targetCategory: string;
  toggleMenu: (cat: string) => void;
}

const Header = ({ targetCategory, toggleMenu }: Props) => {
  return (
    <header className="header">
      <div className="header__bojeng">
        <img className="header__bojeng--img" src={boeng} alt='boeng' />
        <div className="commingsoon">
          Is about too happen...
        </div>
        <div className="commingsoon2">
          til then
        </div>
        <SocialMediaIcons className='header__social-media-icons' />
        <div className="contact">
          CONTACT: BOJENGTHEBAND@GMAIL.COM
        </div>
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

//Todo fixa blinckande bild i bakgrunden