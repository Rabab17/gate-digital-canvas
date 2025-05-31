
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Search, 
  Palette, 
  ShoppingCart, 
  Cloud, 
  BarChart3, 
  Shield, 
  Code, 
  Camera, 
  Megaphone, 
  Users,
  Zap,
  Database,
  Headphones,
  Trophy
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  category: string;
  categoryAr: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    titleAr: "تطوير المواقع الإلكترونية",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    descriptionAr: "مواقع ويب وتطبيقات ويب مخصصة مبنية بتقنيات حديثة لأداء مثالي وتجربة مستخدم متميزة.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure Architecture"],
    featuresAr: ["تصميم متجاوب", "محسن لمحركات البحث", "تحميل سريع", "بنية آمنة"],
    category: "Development",
    categoryAr: "التطوير"
  },
  {
    id: 2,
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    titleAr: "تطوير التطبيقات المحمولة",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user interfaces.",
    descriptionAr: "تطبيقات محمولة أصلية ومتعددة المنصات لـ iOS و Android مع واجهات مستخدم سلسة.",
    features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Optimization"],
    featuresAr: ["iOS و Android", "متعدد المنصات", "أداء أصلي", "تحسين متجر التطبيقات"],
    category: "Development",
    categoryAr: "التطوير"
  },
  {
    id: 3,
    icon: <Search className="w-8 h-8" />,
    title: "SEO Services",
    titleAr: "خدمات تحسين محركات البحث",
    description: "Comprehensive SEO strategies to improve your website's visibility and ranking on search engines.",
    descriptionAr: "استراتيجيات شاملة لتحسين محركات البحث لتحسين رؤية موقعك وترتيبه في محركات البحث.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics & Reporting"],
    featuresAr: ["بحث الكلمات المفتاحية", "تحسين الصفحة", "بناء الروابط", "التحليلات والتقارير"],
    category: "Marketing",
    categoryAr: "التسويق"
  },
  {
    id: 4,
    icon: <Megaphone className="w-8 h-8" />,
    title: "Digital Marketing",
    titleAr: "التسويق الرقمي",
    description: "Strategic digital marketing campaigns across multiple platforms to boost your brand visibility and engagement.",
    descriptionAr: "حملات تسويق رقمي استراتيجية عبر منصات متعددة لتعزيز رؤية علامتك التجارية والمشاركة.",
    features: ["Social Media Marketing", "PPC Advertising", "Email Marketing", "Content Strategy"],
    featuresAr: ["تسويق وسائل التواصل الاجتماعي", "إعلانات الدفع بالنقرة", "تسويق البريد الإلكتروني", "استراتيجية المحتوى"],
    category: "Marketing",
    categoryAr: "التسويق"
  },
  {
    id: 5,
    icon: <Palette className="w-8 h-8" />,
    title: "Brand Design & Identity",
    titleAr: "تصميم العلامة التجارية والهوية",
    description: "Complete branding solutions including logo design, brand guidelines, and visual identity systems.",
    descriptionAr: "حلول علامة تجارية شاملة تشمل تصميم الشعار ودلائل العلامة التجارية وأنظمة الهوية البصرية.",
    features: ["Logo Design", "Brand Guidelines", "Print Design", "Brand Strategy"],
    featuresAr: ["تصميم الشعار", "دلائل العلامة التجارية", "تصميم المطبوعات", "استراتيجية العلامة التجارية"],
    category: "Design",
    categoryAr: "التصميم"
  },
  {
    id: 6,
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    titleAr: "حلول التجارة الإلكترونية",
    description: "Complete e-commerce platforms with payment integration, inventory management, and customer analytics.",
    descriptionAr: "منصات تجارة إلكترونية متكاملة مع تكامل الدفع وإدارة المخزون وتحليلات العملاء.",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Portal"],
    featuresAr: ["بوابة الدفع", "إدارة المخزون", "تتبع الطلبات", "بوابة العملاء"],
    category: "Development",
    categoryAr: "التطوير"
  },
  {
    id: 7,
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    titleAr: "الخدمات السحابية",
    description: "Cloud infrastructure setup, migration, and management for scalable and secure business operations.",
    descriptionAr: "إعداد البنية التحتية السحابية والهجرة والإدارة لعمليات أعمال قابلة للتطوير وآمنة.",
    features: ["Cloud Migration", "Infrastructure Setup", "Security Management", "24/7 Monitoring"],
    featuresAr: ["الهجرة السحابية", "إعداد البنية التحتية", "إدارة الأمان", "مراقبة 24/7"],
    category: "Infrastructure",
    categoryAr: "البنية التحتية"
  },
  {
    id: 8,
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data Analytics",
    titleAr: "تحليل البيانات",
    description: "Advanced data analytics and business intelligence solutions to drive informed decision-making.",
    descriptionAr: "تحليل البيانات المتقدم وحلول ذكاء الأعمال لدفع اتخاذ القرارات المدروسة.",
    features: ["Business Intelligence", "Custom Dashboards", "Data Visualization", "Predictive Analytics"],
    featuresAr: ["ذكاء الأعمال", "لوحات مخصصة", "تصور البيانات", "التحليل التنبؤي"],
    category: "Analytics",
    categoryAr: "التحليلات"
  },
  {
    id: 9,
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    titleAr: "الأمن السيبراني",
    description: "Comprehensive cybersecurity solutions to protect your business from digital threats and vulnerabilities.",
    descriptionAr: "حلول أمان سيبراني شاملة لحماية أعمالك من التهديدات والثغرات الرقمية.",
    features: ["Security Audit", "Threat Detection", "Data Protection", "Compliance Management"],
    featuresAr: ["تدقيق الأمان", "كشف التهديدات", "حماية البيانات", "إدارة الامتثال"],
    category: "Security",
    categoryAr: "الأمان"
  },
  {
    id: 10,
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    titleAr: "تطوير البرمجيات المخصصة",
    description: "Tailored software solutions designed specifically for your business processes and requirements.",
    descriptionAr: "حلول برمجية مخصصة مصممة خصيصًا لعمليات أعمالك ومتطلباتك.",
    features: ["Custom Applications", "API Development", "Database Design", "System Integration"],
    featuresAr: ["تطبيقات مخصصة", "تطوير API", "تصميم قاعدة البيانات", "تكامل الأنظمة"],
    category: "Development",
    categoryAr: "التطوير"
  },
  {
    id: 11,
    icon: <Camera className="w-8 h-8" />,
    title: "Photography & Videography",
    titleAr: "التصوير الفوتوغرافي والفيديو",
    description: "Professional photography and videography services for marketing, events, and corporate needs.",
    descriptionAr: "خدمات تصوير فوتوغرافي وفيديو احترافية للتسويق والأحداث والاحتياجات المؤسسية.",
    features: ["Product Photography", "Corporate Videos", "Event Coverage", "Post-Production"],
    featuresAr: ["تصوير المنتجات", "فيديوهات الشركات", "تغطية الأحداث", "ما بعد الإنتاج"],
    category: "Creative",
    categoryAr: "الإبداع"
  },
  {
    id: 12,
    icon: <Users className="w-8 h-8" />,
    title: "Social Media Management",
    titleAr: "إدارة وسائل التواصل الاجتماعي",
    description: "Complete social media management including content creation, scheduling, and community engagement.",
    descriptionAr: "إدارة شاملة لوسائل التواصل الاجتماعي تشمل إنشاء المحتوى والجدولة ومشاركة المجتمع.",
    features: ["Content Creation", "Social Scheduling", "Community Management", "Performance Analytics"],
    featuresAr: ["إنشاء المحتوى", "جدولة التواصل الاجتماعي", "إدارة المجتمع", "تحليل الأداء"],
    category: "Marketing",
    categoryAr: "التسويق"
  },
  {
    id: 13,
    icon: <Zap className="w-8 h-8" />,
    title: "UI/UX Design",
    titleAr: "تصميم UI/UX",
    description: "User-centered design solutions that create intuitive and engaging digital experiences.",
    descriptionAr: "حلول تصميم محورها المستخدم تخلق تجارب رقمية بديهية وجذابة.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    featuresAr: ["بحث المستخدم", "الإطارات الشبكية", "النماذج الأولية", "اختبار سهولة الاستخدام"],
    category: "Design",
    categoryAr: "التصميم"
  },
  {
    id: 14,
    icon: <Database className="w-8 h-8" />,
    title: "Database Management",
    titleAr: "إدارة قواعد البيانات",
    description: "Database design, optimization, and management services for efficient data storage and retrieval.",
    descriptionAr: "خدمات تصميم وتحسين وإدارة قواعد البيانات لتخزين واسترجاع البيانات بكفاءة.",
    features: ["Database Design", "Performance Optimization", "Backup Solutions", "Data Migration"],
    featuresAr: ["تصميم قاعدة البيانات", "تحسين الأداء", "حلول النسخ الاحتياطي", "هجرة البيانات"],
    category: "Infrastructure",
    categoryAr: "البنية التحتية"
  },
  {
    id: 15,
    icon: <Headphones className="w-8 h-8" />,
    title: "Technical Support",
    titleAr: "الدعم الفني",
    description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
    descriptionAr: "خدمات الدعم الفني والصيانة على مدار الساعة للحفاظ على تشغيل أنظمتك بسلاسة.",
    features: ["24/7 Support", "System Maintenance", "Bug Fixes", "Performance Monitoring"],
    featuresAr: ["دعم 24/7", "صيانة النظام", "إصلاح الأخطاء", "مراقبة الأداء"],
    category: "Support",
    categoryAr: "الدعم"
  },
  {
    id: 16,
    icon: <Trophy className="w-8 h-8" />,
    title: "Digital Transformation Consulting",
    titleAr: "استشارات التحول الرقمي",
    description: "Strategic consulting to help businesses navigate their digital transformation journey successfully.",
    descriptionAr: "استشارات استراتيجية لمساعدة الشركات على التنقل في رحلة التحول الرقمي بنجاح.",
    features: ["Strategy Development", "Technology Assessment", "Implementation Planning", "Change Management"],
    featuresAr: ["تطوير الاستراتيجية", "تقييم التكنولوجيا", "تخطيط التنفيذ", "إدارة التغيير"],
    category: "Consulting",
    categoryAr: "الاستشارات"
  }
];

const categories = [
  { en: "All", ar: "الكل" },
  { en: "Development", ar: "التطوير" },
  { en: "Marketing", ar: "التسويق" },
  { en: "Design", ar: "التصميم" },
  { en: "Infrastructure", ar: "البنية التحتية" },
  { en: "Security", ar: "الأمان" },
  { en: "Analytics", ar: "التحليلات" },
  { en: "Creative", ar: "الإبداع" },
  { en: "Support", ar: "الدعم" },
  { en: "Consulting", ar: "الاستشارات" }
];

export default function AllServices() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'جميع خدماتنا' : 'All Our Services'}
            </h1>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات الرقمية لتلبية جميع احتياجات أعمالك'
                : 'We offer a comprehensive range of digital services to meet all your business needs'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className={`flex flex-wrap justify-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {categories.map((category) => (
              <button
                key={category.en}
                onClick={() => setActiveCategory(category.en)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.en
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                } ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {language === 'ar' ? category.ar : category.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {language === 'ar' ? service.titleAr : service.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${language === 'ar' ? 'font-arabic text-right leading-relaxed' : ''}`}>
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-2 text-primary ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                      {language === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}
                    </h4>
                    <ul className={`space-y-1 ${language === 'ar' ? 'text-right' : ''}`}>
                      {(language === 'ar' ? service.featuresAr : service.features).map((feature, index) => (
                        <li key={index} className={`text-sm text-gray-600 dark:text-gray-300 flex items-center ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                          <span className={`w-1.5 h-1.5 bg-primary rounded-full ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'طلب المزيد من المعلومات' : 'Request More Info'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'لا تجد الخدمة التي تبحث عنها؟' : 'Don\'t See the Service You\'re Looking For?'}
            </h2>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'نحن نقدم حلولًا مخصصة لتلبية احتياجاتك الخاصة. تواصل معنا لمناقشة مشروعك'
                : 'We offer custom solutions to meet your specific needs. Contact us to discuss your project'
              }
            </p>
            <Button className={`btn-primary text-lg px-8 py-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
