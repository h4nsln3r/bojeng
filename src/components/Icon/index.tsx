import { ReactElement } from 'react';
import './icon.scss';

interface Props {
  link: string;
  icon: ReactElement;
}

const Icon = ({ link, icon }: Props) => {
  return (
    <a href={link} className="icon" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default Icon;
