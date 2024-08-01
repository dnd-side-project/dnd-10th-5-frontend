import { useEffect, useState } from 'react';

export function useWindowDimension() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleInnerDimensions() {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleInnerDimensions);

    return () => {
      window.removeEventListener('resize', handleInnerDimensions);
    };
  }, []);

  return { innerWidth, innerHeight };
}
