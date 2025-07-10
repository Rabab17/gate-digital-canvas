import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const getLocalizedName = (fullName: string, language: string) => {
  const parts = fullName.match(/(.*?)\s*\((.*?)\)/);
  if (parts && parts.length === 3) {
    const englishName = parts[1].trim();
    const arabicName = parts[2].trim();
    return language === "ar" ? arabicName : englishName;
  }
  return fullName;
};

export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        language === "ar"
          ? "لقد حولت بوابة الأعمال الإلكترونية موقعنا القديم إلى آلة مبيعات حديثة تجلب عملاء محتملين باستمرار..."
          : "E-Business Gate transformed our outdated website into a modern sales machine...",
      name: "Ahmed Hosam (أحمد حسام)",
      position: language === "ar" ? "مدير تسويق" : "Marketing Manager",
      company: language === "ar" ? "شركة النيل للتكنولوجيا" : "Nile Technology Company",
    },
    {
      id: 2,
      quote:
        language === "ar"
          ? "العمل مع فريق بوابة الأعمال الإلكترونية كان سلسًا للغاية..."
          : "Working with the E-Business Gate team was seamless...",
      name: "Fatma Ali (فاطمة علي)",
      position: language === "ar" ? "مدير مشروع" : "Project Manager",
      company: language === "ar" ? "حلول الأفق الرقمي" : "Digital Horizon Solutions",
    },
    {
      id: 3,
      quote:
        language === "ar"
          ? "شهدت حملاتنا التسويقية الرقمية زيادة بنسبة 300% في عائد الاستثمار..."
          : "Our digital marketing campaigns have seen a 300% increase in ROI...",
      name: "Mohamed El-Sayed (محمد السيد)",
      position: language === "ar" ? "الرئيس التنفيذي" : "CEO",
      company: language === "ar" ? "شركات النمو الرقمي" : "Digital Growth Companies",
    },
    {
      id: 4,
      quote:
        language === "ar"
          ? "مشروع إعادة تسمية العلامة التجارية الذي قدمته بوابة الأعمال الإلكترونية..."
          : "The rebranding project E-Business Gate delivered has completely revitalized...",
      name: "Nour Gamil (نور جميل)",
      position: language === "ar" ? "مدير إبداعي" : "Creative Director",
      company: language === "ar" ? "وكالة الإبداع المصري" : "Egyptian Creative Agency",
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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className={`section-title mb-12 ${language === "ar" ? "font-arabic" : ""}`}>
          {t("testimonials.title")}
        </h2>

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
                    <div
                      className="w-full"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        direction: language === "ar" ? "rtl" : "ltr",
                        textAlign: "center",
                      }}
                    >
                      {/* Quote */}
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "2.5rem",
                            color: "#3b82f6",
                            opacity: 0.5,
                            position: "absolute",
                            top: "-1rem",
                            left: "-1rem",
                          }}
                        >
                          &ldquo;
                        </div>

                        <p
                          style={{
                            fontSize: "1.125rem",
                            fontStyle: "italic",
                            lineHeight: 1.6,
                            zIndex: 10,
                            position: "relative",
                          }}
                          className={language === "ar" ? "font-arabic" : ""}
                        >
                          {testimonial.quote}
                        </p>

                        <div
                          style={{
                            fontSize: "2.5rem",
                            color: "#3b82f6",
                            opacity: 0.5,
                            position: "absolute",
                            bottom: "-1rem",
                            right: "-1rem",
                            transform: "rotate(180deg)",
                          }}
                        >
                          &ldquo;
                        </div>
                      </div>

                      {/* Name & Position */}
                      <div style={{ width: "100%" }}>
                        <h4
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.125rem",
                            marginBottom: "0.25rem",
                            display: "block",
                          }}
                          className={language === "ar" ? "font-arabic" : ""}
                        >
                          {getLocalizedName(testimonial.name, language)}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#6b7280",
                            display: "block",
                          }}
                          className={language === "ar" ? "font-arabic" : ""}
                        >
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
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}

            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
