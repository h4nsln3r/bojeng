import { PlayedShow } from '@/types/global';
import Button from '../Button';
import './shows.scss';

interface Props {
  shows: PlayedShow[];
  emptyText?: string;
}

const GigList = ({ shows, emptyText = 'Inga spelningar för tillfället.' }: Props) => {
  // function formatDate(input: string) {
  //   const d = new Date(input + 'T12:00:00');
  //   return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: '2-digit' });
  // }

  if (!shows || shows.length === 0) {
    return <p className="shows-list--empty">{emptyText}</p>;
  }

  return (
    <ul className="shows-list">
      {shows.map((s: PlayedShow) => (
        <li key={`${s.date}-${s.city}-${s.venue}`} className="shows-list__item">
          {/* <span className="shows-list__date">{formatDate(s.date)}</span> */}
          <span className="shows-list__date">{s.date}</span>
          <span className="shows-list__city">{s.city}</span>
          <span className="shows-list__venue">{s.venue}</span>

          {/* Visa bara knapp om det finns en riktig länk */}
          {s.link && s.link !== '#' && (
            <Button variant="ghost" href={s.link} ariaLabel={`Biljetter: ${s.city} – ${s.venue}`}>
              Biljetter
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default GigList;
