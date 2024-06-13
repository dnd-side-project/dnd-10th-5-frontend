import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  function handleSetScrollXY() {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleSetScrollXY);

    return () => {
      window.removeEventListener('scroll', handleSetScrollXY);
    };
  }, []);

  return { scrollX, scrollY };
}
