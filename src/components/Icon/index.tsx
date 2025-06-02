import { ReactElement } from 'react';

interface Props {
  link: string;
  icon: ReactElement;
}

const Icon = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default Icon;
