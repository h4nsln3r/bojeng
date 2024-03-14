import Menu from '../Navigation/Menu/Menu';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__bojeng">
        BOJENG
      </div>
      <SocialMediaIcons className='header__social-media-icons' />
      <Menu />
      <iframe className='soundcloud' width="800px" height="100" scrolling="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1771918968&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
  
    </header>
  );
};

export default Header;