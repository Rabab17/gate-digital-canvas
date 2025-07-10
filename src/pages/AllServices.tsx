import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Link } from 'react-router-dom';
import {
  Button
} from "@/components/ui/button";
import {
  Search,
  Smartphone,
  Globe,
  Palette,
  Cloud,
  BarChart3,
  ShoppingCart,
  Camera,
  PenTool,
  Monitor,
  Megaphone,
  Code,
  Database,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";
import React from "react";

// أنماط CSS المخصصة للحفاظ على التصميم والترتيب، مع إزالة الألوان المحددة
const customStyles = `
  .arabic-font {
    font-family: 'Tajawal', 'Segoe UI', sans-serif !important;
  }
  
  .arabic-text {
    text-align: right !important;
    direction: rtl !important;
    unicode-bidi: embed !important;
  }
  
  .arabic-button {
    font-family: 'Tajawal', 'Segoe UI', sans-serif !important;
    letter-spacing: 0 !important;
  }
  
  .service-card {
    border: 1px solid; /* Will use Tailwind's border-color */
    border-radius: 0.75rem;
    padding: 1.25rem;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .service-card:hover {
    transform: translateY(0px); /* Reset transform on hover */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); /* Keep original shadow or none */
  }
  
  .service-icon-container {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-title {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  
  .service-description {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    flex-grow: 1;
  }
  
  /* --- MODIFIED CSS FOR FEATURES LIST to always have dot on the left --- */
  .service-features-list {
    list-style: none; /* Remove default list styling */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
    margin-bottom: 1rem; /* Space below the features list */
  }

  .service-feature-item {
    display: flex;
    align-items: flex-start; /* Align dot and text at the top */
    margin-bottom: 0.5rem; /* Space between each feature item */
    font-size: 0.875rem; /* Slightly larger font for readability */
    line-height: 1.4; /* Improve line spacing */
    /* By default, flex-direction is row (left to right) */
  }

  .feature-dot {
    width: 0.45rem; /* Slightly larger dot */
    height: 0.45rem; /* Slightly larger dot */
    border-radius: 9999px; /* Make it perfectly round */
    flex-shrink: 0; /* Prevent the dot from shrinking */
    margin-top: 0.35rem; /* Adjust to align with the text vertically */
    margin-right: 0.75rem; /* Space after the dot for LTR */
  }

  /* Specific styling for Arabic (RTL) feature items */
  .service-feature-item[dir="rtl"] {
    /* Keep flex-direction: row, so dot is visually on the left */
    /* This will align the entire item (dot + text) to the right within the card */
    justify-content: flex-end; 
  }

  .service-feature-item[dir="rtl"] .feature-dot {
      margin-left: 0.75rem; /* Space after the dot for RTL */
      margin-right: 0; /* No right margin in RTL for the dot */
  }

  .service-feature-text {
    flex-grow: 1; /* Allow text to take up remaining space */
    text-align: left; /* Default for LTR */
  }

  .service-feature-item[dir="rtl"] .service-feature-text {
    text-align: right; /* Align text to the right for RTL */
  }
  /* --- END MODIFIED CSS --- */

  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 9999px;
    min-width: 6rem;
    border: 1px solid; /* Will use Tailwind's border-color */
    transition: all 0.3s ease;
  }
  
  .cta-button {
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 9999px;
    border: none;
    transition: all 0.3s ease;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    .service-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .filter-container {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .filter-button {
      min-width: 5.5rem;
      padding: 0.4rem 0.8rem;
      font-size: 0.8125rem;
    }
  }
`;

export default function AllServices() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      name: language === 'ar' ? 'جميع الخدمات' : 'All Services'
    },
    {
      id: 'development',
      name: language === 'ar' ? 'التطوير' : 'Development'
    },
    {
      id: 'design',
      name: language === 'ar' ? 'التصميم' : 'Design'
    },
    {
      id: 'marketing',
      name: language === 'ar' ? 'التسويق' : 'Marketing'
    },
    {
      id: 'business',
      name: language === 'ar' ? 'حلول الأعمال' : 'Business Solutions'
    },
  ];

  const services = [
    // Development Services
    {
      icon: <Globe className="w-8 h-8" />,
      title: language === 'ar' ? 'تطوير المواقع الإلكترونية' : 'Web Development',
      description: language === 'ar' ? 'مواقع ويب متجاوبة وسريعة مبنية بأحدث التقنيات.' : 'Responsive and fast websites built with latest technologies',
      category: 'development',
      features: [
        language === 'ar' ? 'تصميم متجاوب' : 'Responsive Design',
        language === 'ar' ? 'تحسين الأداء' : 'Performance Optimization',
        language === 'ar' ? 'أمان عالٍ' : 'High Security'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: language === 'ar' ? 'تطوير التطبيقات المحمولة' : 'Mobile App Development',
      description: language === 'ar' ? 'تطبيقات iOS و Android أصلية ومتعددة المنصات.' : 'Native and cross-platform iOS & Android applications',
      category: 'development',
      features: [
        language === 'ar' ? 'تطبيقات أصلية' : 'Native Apps',
        language === 'ar' ? 'متعددة المنصات' : 'Cross-Platform',
        language === 'ar' ? 'تجربة مستخدم ممتازة' : 'Excellent UX'
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: language === 'ar' ? 'تطوير البرمجيات المخصصة' : 'Custom Software Development',
      description: language === 'ar' ? 'حلول برمجية مخصصة لاحتياجات عملك الفريدة.' : 'Tailored software solutions for your unique business needs',
      category: 'development',
      features: [
        language === 'ar' ? 'حلول مخصصة' : 'Custom Solutions',
        language === 'ar' ? 'قابلية التوسع' : 'Scalability',
        language === 'ar' ? 'صيانة شاملة' : 'Full Maintenance'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: language === 'ar' ? 'إدارة قواعد البيانات' : 'Database Management',
      description: language === 'ar' ? 'تصميم وإدارة قواعد البيانات المتقدمة.' : 'Advanced database design and management',
      category: 'development',
      features: [
        language === 'ar' ? 'تحسين الأداء' : 'Performance Tuning',
        language === 'ar' ? 'نسخ احتياطي آمن' : 'Secure Backup',
        language === 'ar' ? 'مراقبة مستمرة' : 'Continuous Monitoring'
      ]
    },

    // Design Services
    {
      icon: <Palette className="w-8 h-8" />,
      title: language === 'ar' ? 'تصميم الهوية البصرية' : 'Brand Identity Design',
      description: language === 'ar' ? 'هوية بصرية قوية ومتسقة لعلامتك التجارية.' : 'Strong and consistent visual identity for your brand',
      category: 'design',
      features: [
        language === 'ar' ? 'تصميم الشعار' : 'Logo Design',
        language === 'ar' ? 'دليل العلامة التجارية' : 'Brand Guidelines',
        language === 'ar' ? 'مواد تسويقية' : 'Marketing Materials'
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: language === 'ar' ? 'تصميم واجهة وتجربة المستخدم (UI/UX)' : 'UI/UX Design',
      description: language === 'ar' ? 'تجارب مستخدم استثنائية وواجهات جذابة.' : 'Exceptional user experiences and attractive interfaces',
      category: 'design',
      features: [
        language === 'ar' ? 'بحث المستخدمين' : 'User Research',
        language === 'ar' ? 'نماذج أولية' : 'Prototyping',
        language === 'ar' ? 'اختبار قابلية الاستخدام' : 'Usability Testing'
      ]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: language === 'ar' ? 'التصوير والإنتاج المرئي' : 'Photography & Visual Production',
      description: language === 'ar' ? 'تصوير احترافي وإنتاج محتوى مرئي عالي الجودة.' : 'Professional photography and high-quality visual content production',
      category: 'design',
      features: [
        language === 'ar' ? 'تصوير منتجات' : 'Product Photography',
        language === 'ar' ? 'إنتاج فيديو' : 'Video Production',
        language === 'ar' ? 'تصميم جرافيك' : 'Graphic Design'
      ]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: language === 'ar' ? 'تصميم المطبوعات' : 'Print Design',
      description: language === 'ar' ? 'تصميم مواد مطبوعة احترافية وجذابة.' : 'Professional and attractive print material design',
      category: 'design',
      features: [
        language === 'ar' ? 'كتيبات وبروشورات' : 'Brochures & Catalogs',
        language === 'ar' ? 'لافتات وإعلانات' : 'Banners & Ads',
        language === 'ar' ? 'تصميم التعبئة والتغليف' : 'Packaging Design'
      ]
    },

    // Marketing Services
    {
      icon: <Search className="w-8 h-8" />,
      title: language === 'ar' ? 'تحسين محركات البحث (SEO)' : 'SEO Optimization',
      description: language === 'ar' ? 'تحسين موقعك لمحركات البحث لزيادة الزيارات.' : 'Optimize your website for search engines and increase traffic',
      category: 'marketing',
      features: [
        language === 'ar' ? 'تحليل الكلمات المفتاحية' : 'Keyword Analysis',
        language === 'ar' ? 'تحسين المحتوى' : 'Content Optimization',
        language === 'ar' ? 'بناء الروابط' : 'Link Building'
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: language === 'ar' ? 'التسويق عبر وسائل التواصل الاجتماعي' : 'Social Media Marketing',
      description: language === 'ar' ? 'استراتيجيات تسويق فعالة عبر منصات التواصل الاجتماعي.' : 'Effective marketing strategies across social media platforms',
      category: 'marketing',
      features: [
        language === 'ar' ? 'إدارة المحتوى' : 'Content Management',
        language === 'ar' ? 'الإعلانات المدفوعة' : 'Paid Advertising',
        language === 'ar' ? 'تحليل الأداء' : 'Performance Analytics'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'ar' ? 'التسويق الرقمي المتكامل' : 'Integrated Digital Marketing',
      description: language === 'ar' ? 'حملات تسويق رقمي شاملة ومتكاملة.' : 'Comprehensive and integrated digital marketing campaigns',
      category: 'marketing',
      features: [
        language === 'ar' ? 'استراتيجية شاملة' : 'Comprehensive Strategy',
        language === 'ar' ? 'قنوات متعددة' : 'Multi-Channel',
        language === 'ar' ? 'تتبع النتائج' : 'Results Tracking'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: language === 'ar' ? 'تحليل البيانات والتقارير' : 'Data Analysis & Reporting',
      description: language === 'ar' ? 'تحليل شامل للبيانات وتقديم تقارير مفصلة.' : 'Comprehensive data analysis and detailed reporting',
      category: 'marketing',
      features: [
        language === 'ar' ? 'تحليل السلوك' : 'Behavior Analysis',
        language === 'ar' ? 'تقارير مخصصة' : 'Custom Reports',
        language === 'ar' ? 'رؤى قابلة للتنفيذ' : 'Actionable Insights'
      ]
    },

    // Business Solutions
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: language === 'ar' ? 'حلول التجارة الإلكترونية' : 'E-commerce Solutions',
      description: language === 'ar' ? 'متاجر إلكترونية متكاملة وحلول دفع آمنة.' : 'Complete online stores and secure payment solutions',
      category: 'business',
      features: [
        language === 'ar' ? 'متجر متكامل' : 'Complete Store',
        language === 'ar' ? 'نظام دفع آمن' : 'Secure Payment',
        language === 'ar' ? 'إدارة المخزون' : 'Inventory Management'
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: language === 'ar' ? 'الحلول السحابية' : 'Cloud Solutions',
      description: language === 'ar' ? 'خدمات سحابية متقدمة وآمنة لعملك.' : 'Advanced and secure cloud services for your business',
      category: 'business',
      features: [
        language === 'ar' ? 'التخزين السحابي' : 'Cloud Storage',
        language === 'ar' ? 'الخوادم الافتراضية' : 'Virtual Servers',
        language === 'ar' ? 'حلول النسخ الاحتياطي' : 'Backup Solutions'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: language === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity',
      description: language === 'ar' ? 'حماية شاملة لأنظمتك وبياناتك.' : 'Comprehensive protection for your systems and data',
      category: 'business',
      features: [
        language === 'ar' ? 'مراقبة الأمان' : 'Security Monitoring',
        language === 'ar' ? 'حماية البيانات' : 'Data Protection',
        language === 'ar' ? 'استجابة الحوادث' : 'Incident Response'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'ar' ? 'أتمتة العمليات' : 'Process Automation',
      description: language === 'ar' ? 'أتمتة العمليات التجارية لزيادة الكفاءة.' : 'Business process automation to increase efficiency',
      category: 'business',
      features: [
        language === 'ar' ? 'سير عمل آلي' : 'Automated Workflows',
        language === 'ar' ? 'تكامل الأنظمة' : 'System Integration',
        language === 'ar' ? 'تحسين الإنتاجية' : 'Productivity Enhancement'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' ?
    services :
    services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 md:pt-24 overflow-x-hidden bg-background dark:bg-dark-background"
      dir={language === 'ar' ? 'rtl' : 'ltr'}>

      {/* Inject custom styles for layout and Arabic font overrides */}
      <style>{customStyles}</style>

      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-background dark:bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground dark:text-dark-foreground ${language === 'ar' ? 'arabic-font' : ''}`}>
              {language === 'ar' ? 'خدماتنا المتكاملة' : 'Our Comprehensive Services'}
            </h1>
            {/* Adjusted text color for better readability in both modes */}
            <p className={`text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'arabic-font' : ''}`}>
              {language === 'ar' ?
                'نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتلبية جميع احتياجات أعمالك.' :
                'We offer a comprehensive range of advanced digital services to meet all your business needs'}
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
         <div className="flex flex-wrap justify-center gap-4 mb-12 filter-container">
  {(language === 'ar' ? [...categories].reverse() : categories).map((category) => (
    <Button
      key={category.id}
      onClick={() => setSelectedCategory(category.id)}
      variant={selectedCategory === category.id ? "default" : "outline"}
      className={`filter-button px-6 py-3 rounded-full transition-all duration-300 ${
        language === 'ar' ? 'arabic-button' : ''
      } ${
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
          : ''
      }`}
    >
      {category.name}
    </Button>
  ))}
</div>


          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 service-grid">
            {filteredServices.map((service, index) => (
              <div
                key={`${service.title}-${selectedCategory}`}
                className="service-card bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="service-icon-container bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>

                <h3 className={`service-title text-foreground dark:text-dark-foreground ${language === 'ar' ? 'arabic-font arabic-text' : ''}`}>
                  {service.title}
                </h3>

                <p className={`service-description text-gray-700 dark:text-gray-300 ${
                  language === 'ar' ? 'font-arabic text-right leading-relaxed' : ''
                }`}>
                  {service.description}
                </p>

                {/* MODIFIED FEATURES LIST STRUCTURE */}
                <div className="service-features-list">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="service-feature-item"
                      dir={language === 'ar' ? 'rtl' : 'ltr'} // Set dir attribute for CSS targeting
                    >
                      <div
                        className={`feature-dot bg-gradient-to-r from-primary to-accent`}
                      ></div>

                      <span
                        className={`service-feature-text text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                {/* END MODIFIED FEATURES LIST STRUCTURE */}

                <Link to="/ContactUs">
                  <Button
                    className={`cta-button bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium transition-all duration-300 ${language === 'ar' ? 'arabic-button' : ''}`}
                  >
                    {language === 'ar' ? 'طلب معلومات أكثر' : 'Request More Info'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}