import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          current = id;
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // kör direkt vid start
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
