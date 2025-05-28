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
    'about.title': 'About Us',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'At E-Business Gate, we envision a world where businesses of all sizes can harness the full potential of digital technologies. We\'re committed to delivering innovative, scalable, and impactful digital solutions that drive growth and transformation.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We empower businesses through cutting-edge digital innovation, expert guidance, and tailored strategies that yield measurable results. Our collaborative approach ensures that we understand your unique challenges and deliver solutions that exceed expectations.',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence - We strive for the highest quality in everything we do',
    'about.values.innovation': 'Innovation - We embrace new technologies and creative solutions',
    'about.values.integrity': 'Integrity - We build relationships based on trust and transparency',
    'about.values.collaboration': 'Collaboration - We work as partners with our clients to achieve shared goals',
    'about.learnMore': 'Learn More About Us',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive digital solutions for your business',
    'services.digitalMarketing.title': 'Digital Marketing',
    'services.digitalMarketing.description': 'Strategic campaigns that increase visibility, drive engagement, and convert leads across multiple platforms.',
    'services.seo.title': 'SEO Services',
    'services.seo.description': 'Data-driven optimization to improve organic rankings, drive targeted traffic, and achieve long-term growth.',
    'services.webDevelopment.title': 'Web Design & Development',
    'services.webDevelopment.description': 'Custom websites that blend stunning design with powerful functionality to deliver exceptional user experiences.',
    'services.mobileApp.title': 'Mobile App Development',
    'services.mobileApp.description': 'Innovative native and cross-platform mobile applications built to enhance engagement and streamline processes.',
    'services.branding.title': 'Branding & Visual Identity',
    'services.branding.description': 'Comprehensive branding solutions that establish a strong market presence and foster lasting customer connections.',
    'services.erp.title': 'ERP & Cloud Solutions',
    'services.erp.description': 'Scalable enterprise solutions and cloud services that modernize operations and enhance business efficiency.',
    'services.exploreAll': 'Explore All Services',
    
    // Portfolio Section
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Showcasing our successful projects',
    'portfolio.categories.all': 'All',
    'portfolio.categories.ecommerce': 'E-commerce',
    'portfolio.categories.corporate': 'Corporate',
    'portfolio.categories.mobileApps': 'Mobile Apps',
    'portfolio.projects.ecommercePlatform': 'E-commerce Platform',
    'portfolio.projects.corporateWebsite': 'Corporate Website Redesign',
    'portfolio.projects.foodDelivery': 'Food Delivery App',
    'portfolio.projects.fashionStore': 'Fashion Online Store',
    'portfolio.projects.financialDashboard': 'Financial Services Dashboard',
    'portfolio.projects.fitnessApp': 'Fitness Tracking App',
    'portfolio.viewProject': 'View Project',
    'portfolio.seeFullPortfolio': 'See Full Portfolio',
    
    // Clients Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by leading companies',
    'clients.viewAll': 'View All Clients',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real feedback from satisfied customers',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your digital transformation?',
    
    // Footer
    'footer.description': 'Empowering businesses through digital innovation since 2010. We provide comprehensive digital solutions to help your business thrive in the online world.',
    'footer.services': 'Services',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.sitemap': 'Sitemap',
    
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
    'about.title': 'من نحن',
    'about.vision.title': 'رؤيتنا',
    'about.vision.description': 'في إي بيزنس جيت، نتصور عالماً حيث يمكن للشركات من جميع الأحجام الاستفادة من الإمكانات الكاملة للتقنيات الرقمية. نحن ملتزمون بتقديم حلول رقمية مبتكرة وقابلة للتطوير ومؤثرة تدفع النمو والتحول.',
    'about.mission.title': 'مهمتنا',
    'about.mission.description': 'نحن نمكن الشركات من خلال الابتكار الرقمي المتطور والإرشاد المتخصص والاستراتيجيات المصممة خصيصاً التي تحقق نتائج قابلة للقياس. نهجنا التعاوني يضمن فهمنا لتحدياتك الفريدة وتقديم حلول تتجاوز التوقعات.',
    'about.values.title': 'قيمنا',
    'about.values.excellence': 'التميز - نسعى لتحقيق أعلى جودة في كل ما نقوم به',
    'about.values.innovation': 'الابتكار - نتبنى التقنيات الجديدة والحلول الإبداعية',
    'about.values.integrity': 'النزاهة - نبني علاقات قائمة على الثقة والشفافية',
    'about.values.collaboration': 'التعاون - نعمل كشركاء مع عملائنا لتحقيق الأهداف المشتركة',
    'about.learnMore': 'اعرف المزيد عنا',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول رقمية شاملة لأعمالك',
    'services.digitalMarketing.title': 'التسويق الرقمي',
    'services.digitalMarketing.description': 'حملات استراتيجية تزيد من الرؤية وتدفع المشاركة وتحول العملاء المحتملين عبر منصات متعددة.',
    'services.seo.title': 'خدمات تحسين محركات البحث',
    'services.seo.description': 'تحسين مدفوع بالبيانات لتحسين التصنيف العضوي وجذب حركة مرور مستهدفة وتحقيق نمو طويل الأمد.',
    'services.webDevelopment.title': 'تصميم وتطوير المواقع',
    'services.webDevelopment.description': 'مواقع مخصصة تمزج بين التصميم المذهل والوظائف القوية لتقديم تجارب استخدام استثنائية.',
    'services.mobileApp.title': 'تطوير التطبيقات المحمولة',
    'services.mobileApp.description': 'تطبيقات محمولة مبتكرة أصلية ومتعددة المنصات مصممة لتعزيز المشاركة وتبسيط العمليات.',
    'services.branding.title': 'العلامة التجارية والهوية البصرية',
    'services.branding.description': 'حلول علامة تجارية شاملة تؤسس حضوراً قوياً في السوق وتعزز الاتصالات الدائمة مع العملاء.',
    'services.erp.title': 'حلول تخطيط موارد المؤسسات والحوسبة السحابية',
    'services.erp.description': 'حلول مؤسسية قابلة للتطوير وخدمات سحابية تحدث العمليات وتعزز كفاءة الأعمال.',
    'services.exploreAll': 'استكشف جميع الخدمات',
    
    // Portfolio Section
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'عرض مشاريعنا الناجحة',
    'portfolio.categories.all': 'الكل',
    'portfolio.categories.ecommerce': 'التجارة الإلكترونية',
    'portfolio.categories.corporate': 'الشركات',
    'portfolio.categories.mobileApps': 'التطبيقات المحمولة',
    'portfolio.projects.ecommercePlatform': 'منصة التجارة الإلكترونية',
    'portfolio.projects.corporateWebsite': 'إعادة تصميم موقع الشركة',
    'portfolio.projects.foodDelivery': 'تطبيق توصيل الطعام',
    'portfolio.projects.fashionStore': 'متجر الأزياء الإلكتروني',
    'portfolio.projects.financialDashboard': 'لوحة معلومات الخدمات المالية',
    'portfolio.projects.fitnessApp': 'تطبيق تتبع اللياقة البدنية',
    'portfolio.viewProject': 'عرض المشروع',
    'portfolio.seeFullPortfolio': 'عرض جميع الأعمال',
    
    // Clients Section
    'clients.title': 'عملاؤنا',
    'clients.subtitle': 'موثوق بنا من قبل الشركات الرائدة',
    'clients.viewAll': 'عرض جميع العملاء',
    
    // Testimonials Section
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'تعليقات حقيقية من العملاء الراضين',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء تحولك الرقمي؟',
    
    // Footer
    'footer.description': 'تمكين الشركات من خلال الابتكار الرقمي منذ عام 2010. نحن نقدم حلولاً رقمية شاملة لمساعدة أعمالك على الازدهار في العالم الرقمي.',
    'footer.services': 'الخدمات',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.allRightsReserved': 'جميع الحقوق محفوظة.',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.termsOfService': 'شروط الخدمة',
    'footer.sitemap': 'خريطة الموقع',
    
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
