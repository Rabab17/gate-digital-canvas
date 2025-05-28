
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t, language } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3000"
          alt="Digital background"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`container mx-auto px-4 z-20 text-center text-white ${
        language === 'ar' ? 'text-right' : 'text-center'
      }`}>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up ${
          language === 'ar' ? 'font-arabic leading-tight' : ''
        }`} style={{ animationDelay: '0.2s' }}>
          {t('hero.title')}
        </h1>
        <h2 className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up opacity-90 ${
          language === 'ar' ? 'font-arabic' : ''
        }`} style={{ animationDelay: '0.4s' }}>
          {t('hero.subtitle')}
        </h2>
        <Button
          onClick={scrollToServices}
          className="bg-accent hover:bg-yellow-500 text-gray-800 font-bold px-8 py-6 text-lg rounded-md animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu"
          style={{ animationDelay: '0.6s' }}
        >
          {t('hero.cta')}
        </Button>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg
            className="w-6 h-6 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
