
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.clients': 'Clients',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Empowering Businesses through Digital Innovation',
    'hero.subtitle': 'Marketing, Development, Branding & Transformation',
    'hero.cta': 'Start Your Journey',
    
    // About Section
    'about.title': 'About E-Business Gate',
    'about.description': 'We are a leading digital transformation company specializing in innovative solutions that drive business growth and success.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions for your business',
    
    // Portfolio Section
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Showcasing our successful projects',
    
    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by leading companies',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real feedback from satisfied customers',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your digital transformation?',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.getStarted': 'Get Started',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'أعمالنا',
    'nav.clients': 'عملاؤنا',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'تمكين الشركات من خلال الابتكار الرقمي',
    'hero.subtitle': 'التسويق والتطوير والعلامة التجارية والتحول الرقمي',
    'hero.cta': 'ابدأ رحلتك',
    
    // About Section
    'about.title': 'حول إي بيزنس جيت',
    'about.description': 'نحن شركة رائدة في التحول الرقمي متخصصة في الحلول المبتكرة التي تدفع نمو الأعمال ونجاحها.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول رقمية شاملة لأعمالك',
    
    // Portfolio Section
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'عرض مشاريعنا الناجحة',
    
    // Clients Section
    'clients.title': 'عملاؤنا',
    'clients.subtitle': 'موثوق بنا من قبل الشركات الرائدة',
    
    // Testimonials Section
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'تعليقات حقيقية من العملاء الراضين',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء تحولك الرقمي؟',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.getStarted': 'ابدأ الآن',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
      document.documentElement.setAttribute('lang', savedLanguage);
      document.documentElement.setAttribute('dir', savedLanguage === 'ar' ? 'rtl' : 'ltr');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
