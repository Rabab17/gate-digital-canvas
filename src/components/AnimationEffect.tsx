
import { useEffect, useRef, useState } from "react";

interface AnimationEffectProps {
  children: React.ReactNode;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'flipIn' | 'stagger';
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export default function AnimationEffect({ 
  children, 
  animationType = 'fadeIn',
  delay = 0,
  duration = 700,
  staggerDelay = 100
}: AnimationEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              
              if (animationType === 'stagger') {
                const children = entry.target.querySelectorAll('.animate-stagger');
                children.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add('animated');
                  }, index * staggerDelay);
                });
              } else {
                entry.target.classList.add("animated", `animate-${animationType}`);
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '50px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationType, delay, staggerDelay]);

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
      case 'stagger':
        return 'opacity-100';
      default:
        return 'opacity-0 translate-y-4';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll ${getInitialClass()} slide-line`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: 'translateZ(0)',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
