import Icon from '@/components/Icon';
import { LINKS } from '@/data/socials';
import { FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const SOCIALS = [
  { href: LINKS.Soundcloud, icon: <FaSoundcloud className="icon" /> },
  { href: LINKS.YouTube, icon: <FaYoutube className="icon" /> },
  { href: LINKS.Instagram, icon: <FaInstagram className="icon" /> },
  { href: LINKS.Facebook, icon: <FaFacebook className="icon" /> },
  { href: LINKS.Spotify, icon: <FaSpotify className="icon" /> },
];

const SocialLinks = () => (
  <>
    {SOCIALS.map(({ href, icon }) => (
      <Icon key={href} link={href} icon={icon} />
    ))}
  </>
);

export default SocialLinks;
