
import { useState, useEffect } from 'react';

export function usePointerMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setPosition({ 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        });
      }
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return position;
}
