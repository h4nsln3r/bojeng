import { PlayedShow } from '@/types/global';
import Button from '../Button';

interface Props {
  shows: PlayedShow[];
}

const Icon = ({ shows }: Props) => {
  function formatDate(input: string) {
    const d = new Date(input + 'T12:00:00');
    return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: '2-digit' });
  }
  return (
    <ul className="shows-list">
      {shows.map((s: PlayedShow) => (
        <li key={s.date} className="shows-list__item">
          <span className="shows-list__date">{formatDate(s.date)}</span>
          <span className="shows-list__city">{s.city}</span>
          <span className="shows-list__venue">{s.venue}</span>
          <Button variant="ghost" href="https://example.com" ariaLabel="Biljetter: Malmö – KB">
            Biljetter
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Icon;
