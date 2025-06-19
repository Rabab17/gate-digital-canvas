import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
// import { UserCircleIcon } from '@heroicons/react/24/solid'; // إذا كنتِ تريدين استخدام أيقونة بدلاً من الصور

interface Testimonial {
  id: number;
  quote: string;
  name: string; // سيحتوي هذا على الاسم الإنجليزي والعربي
  position: string;
  company: string;
  image?: string; // جعل الصورة اختيارية أو إزالتها إذا لم تستخدميها
}

// دالة مساعدة لاستخراج الاسم بناءً على اللغة
const getLocalizedName = (fullName: string, language: string) => {
  const parts = fullName.match(/(.*?)\s*\((.*?)\)/); // للتعامل مع "English Name (Arabic Name)"
  if (parts && parts.length === 3) {
    const englishName = parts[1].trim();
    const arabicName = parts[2].trim();
    return language === 'ar' ? arabicName : englishName;
  }
  // إذا لم يكن التنسيق المتوقع (اسم إنجليزي (اسم عربي))، أعد الاسم كما هو.
  return fullName;
};


export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "E-Business Gate transformed our outdated website into a modern sales machine that drives consistent leads. Their expertise in web design and SEO has been a game-changer for our online presence.",
      name: "Ahmed Hosam (أحمد حسام)",
      position: "مدير تسويق", // ستبقى هذه بالعربية
      company: "شركة النيل للتكنولوجيا", // ستبقى هذه بالعربية
      // image: "https://via.placeholder.com/100x100?text=AH", // أزيلي هذا السطر إذا لم تريدي أي صور
    },
    {
      id: 2,
      quote:
        "Working with the E-Business Gate team was seamless. Their mobile app development service helped us launch a successful product that exceeded our users' expectations.",
      name: "Fatma Ali (فاطمة علي)",
      position: "مدير مشروع",
      company: "حلول الأفق الرقمي",
      // image: "https://via.placeholder.com/100x100?text=FA",
    },
    {
      id: 3,
      quote:
        "Our digital marketing campaigns have seen a 300% increase in ROI since partnering with E-Business Gate. Their strategic approach to content and SEO is unmatched in the industry.",
      name: "Mohamed El-Sayed (محمد السيد)",
      position: "الرئيس التنفيذي",
      company: "شركات النمو الرقمي",
      // image: "https://via.placeholder.com/100x100?text=MS",
    },
    {
      id: 4,
      quote:
        "The rebranding project E-Business Gate delivered has completely revitalized our company's image. We've received countless compliments on our new visual identity.",
      name: "Nour Gamil (نور جميل)",
      position: "مدير إبداعي",
      company: "وكالة الإبداع المصري",
      // image: "https://via.placeholder.com/100x100?text=NG",
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
        <h2 className={`section-title mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {t('testimonials.title')}
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
                    <div className="flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="absolute -top-4 -left-4 w-10 h-10 text-5xl text-primary opacity-50">"</div>
                        <p className={`text-lg md:text-xl italic text-center relative z-10 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                          {testimonial.quote}
                        </p>
                        <div className="absolute -bottom-4 -right-4 w-10 h-10 text-5xl text-primary opacity-50 rotate-180">"</div>
                      </div>

                      <div className="flex flex-col items-center mt-6">
                        {/* هذا الجزء الخاص بالصورة أو الأيقونة. اختاري أحد الخيارين أدناه */}
                        {/* الخيار 1: إزالة جزء الصورة بالكامل (كما طلب المستخدم سابقًا) */}
                        {/* <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-3">
                            </div> */}

                        {/* الخيار 2: استخدام أيقونة عامة (مثل أيقونة شخص) بدلاً من الصور */}
                        {/* <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-3 flex items-center justify-center">
                              <UserCircleIcon className="w-full h-full text-gray-400 dark:text-gray-500" />
                          </div> */}
                        <h4 className={`font-bold text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {getLocalizedName(testimonial.name, language)} {/* <--- التغيير هنا */}
                        </h4>
                        <p className={`text-sm text-gray-600 dark:text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
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