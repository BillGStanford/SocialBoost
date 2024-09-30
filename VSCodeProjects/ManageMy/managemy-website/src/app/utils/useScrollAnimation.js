'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    
    observer.observe(domRef.current);
    
    return () => observer.unobserve(domRef.current);
  }, []);

  return [domRef, isVisible];
};