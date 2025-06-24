import { useState } from "react";
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

export default function AllServices() {
  const {
    language
  } = useLanguage();
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
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />

      <AnimationEffect animationType="fadeIn" delay={100}>
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {language === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar'
                  ? 'نقدم مجموعة شاملة من الخدمات الرقمية المتطورة لتلبية جميع احتياجات أعمالك.' // Added period
                  : 'We offer a comprehensive range of advanced digital services to meet all your business needs'
                }
              </p>
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="slideUp" delay={200}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                    language === 'ar' ? 'font-arabic' : ''
                  } ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                      : 'hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <AnimationEffect key={`${service.title}-${selectedCategory}`} animationType="scale" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {service.title}
                    </h3>

                    <p className={`text-gray-600 dark:text-gray-300 mb-6 flex-grow ${
                      language === 'ar' ? 'font-arabic text-right leading-relaxed' : ''
                    }`}>
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full ${
                            language === 'ar' ? 'ml-3' : 'mr-3'
                          }`}></div>
                          <span className={`text-sm text-gray-600 dark:text-gray-300 ${
                            language === 'ar' ? 'font-arabic text-right' : ''
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                  


<Link to="/ContactUs">
  <Button
    className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium transition-all duration-300 ${
      language === 'ar' ? 'font-arabic' : ''
    }`}
  >
    {language === 'ar' ? 'طلب معلومات أكثر' : 'Request More Info'}
  </Button>
</Link>
                  </div>
                </AnimationEffect>
              ))}
            </div>
          </div>
        </section>
      </AnimationEffect>

      <Footer />
    </div>
  );
}