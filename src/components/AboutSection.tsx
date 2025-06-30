import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Removed the commented-out h2 section title based on the provided code */}
        {/* <h2 className={`section-title mb-12 ${language === 'ar' ? 'font-arabic' : ''} text-foreground dark:text-dark-foreground`}>
          {t('about.title')}
        </h2> */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="hidden md:block lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 lg:h-[500px] relative z-10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
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
            <p className={`mb-6 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''} text-gray-700 dark:text-gray-300`}>
              {t('about.vision.description')}
            </p>

            <h3 className={`text-2xl font-bold mb-4 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.mission.title')}
            </h3>
            <p className={`mb-6 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''} text-gray-700 dark:text-gray-300`}>
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
                    <span className="text-right leading-relaxed text-gray-700 dark:text-gray-300">
                      {t('about.values.excellence')}
                    </span>
                    <span className="text-primary mr-2">✓</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {t('about.values.excellence')}
                    </span>
                  </>
                )}
              </li>

              {/* الابتكار / Innovation */}
              <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
                {language === 'ar' ? (
                  <>
                    <span className="text-right leading-relaxed text-gray-700 dark:text-gray-300">
                      {t('about.values.innovation')}
                    </span>
                    <span className="text-primary mr-2">✓</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {t('about.values.innovation')}
                    </span>
                  </>
                )}
              </li>

              {/* النزاهة / Integrity */}
              <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
                {language === 'ar' ? (
                  <>
                    <span className="text-right leading-relaxed text-gray-700 dark:text-gray-300">
                      {t('about.values.integrity')}
                    </span>
                    <span className="text-primary mr-2">✓</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {t('about.values.integrity')}
                    </span>
                  </>
                )}
              </li>

              {/* التعاون / Collaboration */}
              <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
                {language === 'ar' ? (
                  <>
                    <span className="text-right leading-relaxed text-gray-700 dark:text-gray-300">
                      {t('about.values.collaboration')}
                    </span>
                    <span className="text-primary mr-2">✓</span>
                  </>
                ) : (
                  <>
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
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