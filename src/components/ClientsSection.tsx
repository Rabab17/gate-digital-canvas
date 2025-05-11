
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function ClientsSection() {
  const clients = [
    { name: "Microsoft", logo: "https://via.placeholder.com/150x80?text=Microsoft" },
    { name: "Google", logo: "https://via.placeholder.com/150x80?text=Google" },
    { name: "Apple", logo: "https://via.placeholder.com/150x80?text=Apple" },
    { name: "Amazon", logo: "https://via.placeholder.com/150x80?text=Amazon" },
    { name: "Tesla", logo: "https://via.placeholder.com/150x80?text=Tesla" },
    { name: "Netflix", logo: "https://via.placeholder.com/150x80?text=Netflix" },
    { name: "IBM", logo: "https://via.placeholder.com/150x80?text=IBM" },
    { name: "Oracle", logo: "https://via.placeholder.com/150x80?text=Oracle" },
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // For touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollContainer.current) {
      startX.current = e.touches[0].pageX - scrollContainer.current.offsetLeft;
      scrollLeft.current = scrollContainer.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainer.current) return;
    const x = e.touches[0].pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed
    scrollContainer.current.scrollLeft = scrollLeft.current - walk;
    e.preventDefault();
  };

  // For mouse devices
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainer.current) {
      isMouseDown.current = true;
      startX.current = e.pageX - scrollContainer.current.offsetLeft;
      scrollLeft.current = scrollContainer.current.scrollLeft;
    }
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollContainer.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed
    scrollContainer.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section id="clients" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Our Clients</h2>
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p>Trusted by leading organizations across industries worldwide.</p>
        </div>

        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-6 py-6 scrollbar-none cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="btn-primary">View All Clients</Button>
        </div>
      </div>
    </section>
  );
}
