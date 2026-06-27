'use client';

import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    // Handle initial hash on page load
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Offset for fixed header (h-12 = 48px)
          const headerOffset = 48;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    // Scroll on initial load (small delay to ensure DOM is ready)
    setTimeout(handleHashScroll, 100);

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return null;
}
