import { FaSoundcloud, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import './socialMediaIcons.scss'; // Ensure the CSS file is in the same directory

interface Props {
  className: string;
}

const SocialMediaIcons = ({ className }: Props) => {
  return (
    <div className="icon-container">
      <div className="icon-column">
        <FaSoundcloud className="icon" />
      </div>
      <div className="icon-column">
        <FaYoutube className="icon" />
      </div>
      <div className="icon-column">
        <FaInstagram className="icon" />
      </div>
      <div className="icon-column">
        <FaFacebook className="icon" />
      </div>
    </div>
  );
};

export default SocialMediaIcons;
