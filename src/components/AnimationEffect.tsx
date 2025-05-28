
import { useEffect, useRef } from "react";

interface AnimationEffectProps {
  children: React.ReactNode;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'flipIn';
  delay?: number;
  duration?: number;
}

export default function AnimationEffect({ 
  children, 
  animationType = 'fadeIn',
  delay = 0,
  duration = 700
}: AnimationEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated", `animate-${animationType}`);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, delay]);

  const getInitialClass = () => {
    switch (animationType) {
      case 'slideUp':
        return 'opacity-0 translate-y-8';
      case 'slideLeft':
        return 'opacity-0 translate-x-8';
      case 'slideRight':
        return 'opacity-0 -translate-x-8';
      case 'scale':
        return 'opacity-0 scale-95';
      case 'flipIn':
        return 'opacity-0 rotate-y-90';
      default:
        return 'opacity-0 translate-y-4';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll ${getInitialClass()}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
}
