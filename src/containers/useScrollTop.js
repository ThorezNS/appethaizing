import { useEffect, useState } from 'react';

function useScrollTop(pixels) {
  const [isScrolledTop, setIsScrolledTop] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > pixels) {
      setIsScrolledTop(true);
    } else {
      setIsScrolledTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isScrolledTop]);

  return { isScrolledTop };
}

export default useScrollTop;
