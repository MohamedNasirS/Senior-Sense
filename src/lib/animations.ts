
export const staggeredAnimation = (index: number, baseDelay: number = 100): React.CSSProperties => ({
  opacity: 0,
  animation: 'fade-in 0.5s ease-out forwards',
  animationDelay: `${index * baseDelay}ms`,
});

export const fadeInUp = (delay: number = 0): React.CSSProperties => ({
  opacity: 0,
  animation: 'slide-up 0.5s ease-out forwards',
  animationDelay: `${delay}ms`,
});

export const slideRight = (delay: number = 0): React.CSSProperties => ({
  opacity: 0,
  animation: 'slide-right 0.5s ease-out forwards',
  animationDelay: `${delay}ms`,
});

export interface AnimationProps {
  animate?: boolean;
  delay?: number;
  index?: number;
  duration?: number;
  type?: 'fadeIn' | 'slideUp' | 'slideRight' | 'scale';
}
