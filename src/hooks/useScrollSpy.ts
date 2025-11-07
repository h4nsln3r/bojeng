import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 0) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const handler = () => {
      const scrollPos = window.scrollY + offset + 1;
      let current = '';
      for (const el of sections) {
        if (el.offsetTop <= scrollPos) current = el.id;
      }
      setActive(current);

      // header shadow
      const header = document.querySelector('.site-header');
      if (header) header.classList.toggle('scrolled', window.scrollY > 6);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);

  return active;
}
