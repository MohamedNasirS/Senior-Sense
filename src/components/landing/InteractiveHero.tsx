
import { useState, useEffect } from 'react';
import { usePointerMove } from '@/hooks/use-pointer-move';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const InteractiveHero = () => {
  const { x, y } = usePointerMove();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Calculate movement for parallax effect
  const moveX = (x / window.innerWidth - 0.5) * 20;
  const moveY = (y / window.innerHeight - 0.5) * 10;
  
  return (
    <section className="relative pt-20 pb-32 px-6 flex items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" 
           style={{ transform: `translate(${moveX * 0.3}px, ${moveY * 0.3}px)` }}
           aria-hidden="true" />
      
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
           style={{ 
             transform: `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`,
             animationDelay: '1.2s' 
           }}
           aria-hidden="true" />
      
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-float"
           style={{ 
             transform: `translate(${moveX * 0.7}px, ${moveY * 0.7}px)`,
             animationDelay: '0.7s' 
           }}
           aria-hidden="true" />
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <div 
          className={cn(
            "inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6",
            "transform transition-transform duration-500 hover:scale-105"
          )}
          style={{ transform: `translate(${moveX * 0.1}px, ${moveY * 0.1}px)` }}
        >
          Senior Healthcare Management
        </div>
        
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance"
          style={{ transform: `translate(${moveX * 0.05}px, ${moveY * 0.05}px)` }}
        >
          Empowering Seniors with <span className="text-primary">Health Insights</span>
        </h1>
        
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
          style={{ transform: `translate(${moveX * 0.08}px, ${moveY * 0.08}px)` }}
        >
          A comprehensive healthcare monitoring platform designed specifically for seniors.
          Track health metrics, manage medications, and connect with doctors instantly.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" 
            onClick={() => navigate("/login")}
            style={{ 
              transform: `translate(${moveX * 0.12}px, ${moveY * 0.12}px)`,
              transition: "transform 0.2s ease-out, scale 0.3s ease, box-shadow 0.3s ease" 
            }}
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 transition-all duration-300 hover:scale-105 hover:bg-primary/5"
            style={{ 
              transform: `translate(${moveX * 0.12}px, ${moveY * 0.12}px)`,
              transition: "transform 0.2s ease-out, scale 0.3s ease, background-color 0.3s ease" 
            }}
          >
            Learn More
            <Zap size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHero;
