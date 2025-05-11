
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "E-Business Gate transformed our outdated website into a modern sales machine that drives consistent leads. Their expertise in web design and SEO has been a game-changer for our online presence.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "https://via.placeholder.com/100x100?text=SJ",
    },
    {
      id: 2,
      quote:
        "Working with the E-Business Gate team was seamless. Their mobile app development service helped us launch a successful product that exceeded our users' expectations.",
      name: "Michael Chen",
      position: "Product Manager",
      company: "Innovate Labs",
      image: "https://via.placeholder.com/100x100?text=MC",
    },
    {
      id: 3,
      quote:
        "Our digital marketing campaigns have seen a 300% increase in ROI since partnering with E-Business Gate. Their strategic approach to content and SEO is unmatched in the industry.",
      name: "Emily Rodriguez",
      position: "CEO",
      company: "Growth Ventures",
      image: "https://via.placeholder.com/100x100?text=ER",
    },
    {
      id: 4,
      quote:
        "The rebranding project E-Business Gate delivered has completely revitalized our company's image. We've received countless compliments on our new visual identity.",
      name: "James Thompson",
      position: "Creative Director",
      company: "Brand Forward",
      image: "https://via.placeholder.com/100x100?text=JT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let intervalId: number;
    if (autoPlay) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">What Our Clients Say</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="absolute -top-4 -left-4 w-10 h-10 text-5xl text-primary opacity-50">"</div>
                        <p className="text-lg md:text-xl italic text-center relative z-10">
                          {testimonial.quote}
                        </p>
                        <div className="absolute -bottom-4 -right-4 w-10 h-10 text-5xl text-primary opacity-50 rotate-180">"</div>
                      </div>

                      <div className="flex flex-col items-center mt-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
