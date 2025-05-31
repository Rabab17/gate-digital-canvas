
import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Large following circle */}
      <div
        className="fixed w-8 h-8 border-2 border-primary/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: "translate(0, 0)",
        }}
      />
      
      {/* Small following dot */}
      <div
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      
      {/* Background gradient that follows mouse */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-5"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: "radial-gradient(circle, rgba(31, 117, 254, 0.1) 0%, transparent 70%)",
          transition: "all 0.3s ease-out",
        }}
      />
    </>
  );
}
