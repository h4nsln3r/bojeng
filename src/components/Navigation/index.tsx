import { useScrollSpy } from '@/hooks/useScrollSpy';
import './nav.scss';

function navLabel(id: string) {
  switch (id) {
    case 'listen':
      return 'Lyssna';
    case 'watch':
      return 'Se';
    case 'shows':
      return 'Spelningar';
    case 'press':
      return 'Press';
    case 'contact':
      return 'Kontakt';
    default:
      return id;
  }
}

const Navigation = () => {
  const sectionIds = ['listen', 'watch', 'shows', 'press', 'contact'];
  const activeId = useScrollSpy(sectionIds, 100); // 100px offset för headern

  return (
    <nav className="nav" aria-label="Huvudmeny">
      {sectionIds.map((id) => (
        <a key={id} href={`#${id}`} className={activeId === id ? 'active' : ''}>
          {navLabel(id)}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
