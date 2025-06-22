import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className={`section-title mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {t('about.title')}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 lg:h-[500px] relative z-10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3000"
                  alt="E-Business Gate Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 ${language === 'ar' ? 'text-right' : ''}`}>
            <h3 className={`text-2xl font-bold mb-4 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.vision.title')}
            </h3>
            <p className={`mb-6 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {t('about.vision.description')}
            </p>
            
            <h3 className={`text-2xl font-bold mb-4 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.mission.title')}
            </h3>
            <p className={`mb-6 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {t('about.mission.description')}
            </p>
            
            <h3 className={`text-2xl font-bold mb-4 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.values.title')}
            </h3>
            <ul className="mb-8 space-y-2">
  {/* التميز / Excellence */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.excellence')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.excellence')}
        </span>
      </>
    )}
  </li>

  {/* الابتكار / Innovation */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.innovation')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.innovation')}
        </span>
      </>
    )}
  </li>

  {/* النزاهة / Integrity */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.integrity')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.integrity')}
        </span>
      </>
    )}
  </li>

  {/* التعاون / Collaboration */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.collaboration')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.collaboration')}
        </span>
      </>
    )}
  </li>
</ul>
     <Link to="/about">
              <Button className={`btn-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}