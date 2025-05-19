
import React, { useState, useEffect } from 'react';
import { usePointerMove } from '@/hooks/use-pointer-move';
import { cn } from '@/lib/utils';

interface DynamicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

const DynamicBackground = ({ children, className }: DynamicBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { x, y } = usePointerMove();
  
  // Generate initial particles
  useEffect(() => {
    const colors = [
      'bg-primary/10',
      'bg-primary/5',
      'bg-primary/15',
      'bg-blue-300/10',
      'bg-blue-500/5',
      'bg-indigo-300/10'
    ];
    
    const initialParticles: Particle[] = Array.from({ length: 15 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05
    }));
    
    setParticles(initialParticles);
  }, []);
  
  // Animate particles
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          
          // Boundary check
          if (newX < -10) newX = 110;
          if (newX > 110) newX = -10;
          if (newY < -10) newY = 110;
          if (newY > 110) newY = -10;
          
          // Apply subtle attraction to mouse pointer
          const pointer = { x: (x / window.innerWidth) * 100, y: (y / window.innerHeight) * 100 };
          const dx = pointer.x - newX;
          const dy = pointer.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only apply attraction within a certain radius
          if (distance < 30) {
            const force = 0.05 / (distance + 1);
            newX += dx * force;
            newY += dy * force;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [x, y, particles]);
  
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Background particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn(
            "absolute rounded-full blur-2xl animate-pulse-subtle pointer-events-none",
            particle.color
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.id * 0.1}s`,
            opacity: 0.5,
            transition: 'transform 0.5s ease-out',
            transform: `scale(${Math.abs(Math.sin(particle.id)) * 0.5 + 0.5})`,
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default DynamicBackground;
