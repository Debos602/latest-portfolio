'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToHash() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (!target) return;

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 56,
        },
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    setTimeout(handleHashScroll, 100);
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return null;
}
