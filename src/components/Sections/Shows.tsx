import Button from '../Button';
import './sections.scss';

const SHOWS = [
  { date: '2025-12-05', city: 'Malmö', venue: 'Plan B', link: '#' },
  { date: '2026-01-17', city: 'Göteborg', venue: 'Pustervik (lilla)', link: '#' },
  { date: '2026-02-08', city: 'Stockholm', venue: 'Debaser', link: '#' },
];

function formatDate(input: string) {
  const d = new Date(input + 'T12:00:00');
  return d.toLocaleDateString('sv-SE', { year: 'numeric', month: 'short', day: '2-digit' });
}

const Shows = () => {
  return (
    <div className="container">
      <h2 className="section__title">Spelningar</h2>
      <ul className="shows-list">
        {SHOWS.map((s) => (
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
      <p className="section__fineprint">Fler datum släpps löpande – följ oss i sociala kanaler.</p>
      <br />
      <h2 className="section__title">Tidigare spelningar</h2>
    </div>
  );
};

export default Shows;
