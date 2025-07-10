import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import React from "react"; // تأكد من استيراد React إذا لم يكن مستوردًا

export default function AboutSection() {
  const { t, language } = useLanguage();

  const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.007 6.007l9-3m0 0l1 3m0 0l3-1m0 0l-3-9a5.002 5.002 0 00-6.007-6.007l-9 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9" />
    </svg>
  );

  const ValuesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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

          <div className={`lg:w-1/2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {/* رؤيتنا */}
            <div className={`flex items-center mb-4 gap-2 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              {language === 'ar' ? (
                <>
                  <h3 className="text-2xl font-bold text-primary font-arabic">{t('about.vision.title')}</h3>
                  <VisionIcon />
                </>
              ) : (
                <>
                  <VisionIcon />
                  <h3 className="text-2xl font-bold text-primary">{t('about.vision.title')}</h3>
                </>
              )}
            </div>
            <p className={`mb-6 text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {t('about.vision.description')}
            </p>

            {/* مهمتنا */}
            <div className={`flex items-center mb-4 gap-2 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              {language === 'ar' ? (
                <>
                  <h3 className="text-2xl font-bold text-primary font-arabic">{t('about.mission.title')}</h3>
                  <MissionIcon />
                </>
              ) : (
                <>
                  <MissionIcon />
                  <h3 className="text-2xl font-bold text-primary">{t('about.mission.title')}</h3>
                </>
              )}
            </div>
            <p className={`mb-6 text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {t('about.mission.description')}
            </p>

            {/* قيمنا */}
            <div className={`flex items-center mb-4 gap-2 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              {language === 'ar' ? (
                <>
                  <h3 className="text-2xl font-bold text-primary font-arabic">{t('about.values.title')}</h3>
                  <ValuesIcon />
                </>
              ) : (
                <>
                  <ValuesIcon />
                  <h3 className="text-2xl font-bold text-primary">{t('about.values.title')}</h3>
                </>
              )}
            </div>

            <ul className="mb-8 space-y-2">
              {['excellence', 'innovation', 'integrity', 'collaboration'].map((key) => (
                <li
                  key={key}
                  className={`flex items-start ${language === 'ar' ? 'justify-end font-arabic' : ''}`}
                >
                  {/* تم إزالة أيقونة علامة الصح (✓) من هنا */}
                  <span className={`text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'text-right leading-relaxed' : ''}`}>
                    {t(`about.values.${key}`)}
                  </span>
                </li>
              ))}
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