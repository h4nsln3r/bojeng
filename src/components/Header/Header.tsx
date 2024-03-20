import Menu from '../Navigation/Menu/Menu';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './header.scss';

interface Props {
  targetCategory: string;
}

const Header = ({ targetCategory }: Props) => {
  return (
    <header className="header">
      <div className="header__bojeng">
        BOJENG
      </div>
      {targetCategory === "init" && (
        <>
          <SocialMediaIcons className='header__social-media-icons' />
          <Menu />
        </>
      )}
    </header>
  );
};

export default Header;