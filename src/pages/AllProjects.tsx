
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

interface Project {
  id: number;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  industry: string;
  industryAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  technologies: string[];
  year: string;
  client: string;
  clientAr: string;
  link?: string;
  achievements: string[];
  achievementsAr: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Fashion Platform",
    titleAr: "منصة التجارة الإلكترونية للأزياء",
    category: "E-commerce",
    categoryAr: "التجارة الإلكترونية",
    industry: "Fashion",
    industryAr: "الأزياء",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "A comprehensive e-commerce platform with advanced filtering, payment integration, and inventory management.",
    descriptionAr: "منصة تجارة إلكترونية شاملة مع فلترة متقدمة وتكامل الدفع وإدارة المخزون.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    year: "2024",
    client: "Style Boutique",
    clientAr: "بوتيك الأناقة",
    link: "#",
    achievements: ["50% increase in sales", "Reduced cart abandonment by 30%", "Mobile-first design"],
    achievementsAr: ["زيادة المبيعات بنسبة 50%", "تقليل هجر السلة بنسبة 30%", "تصميم الهاتف أولاً"]
  },
  {
    id: 2,
    title: "Healthcare Management System",
    titleAr: "نظام إدارة الرعاية الصحية",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    industry: "Healthcare",
    industryAr: "الرعاية الصحية",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive patient management system with appointment scheduling and medical records.",
    descriptionAr: "نظام شامل لإدارة المرضى مع جدولة المواعيد والسجلات الطبية.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
    year: "2024",
    client: "HealthCare Plus",
    clientAr: "هيلث كير بلس",
    link: "#",
    achievements: ["Improved efficiency by 40%", "HIPAA compliant", "Real-time notifications"],
    achievementsAr: ["تحسين الكفاءة بنسبة 40%", "متوافق مع HIPAA", "إشعارات فورية"]
  },
  {
    id: 3,
    title: "Food Delivery Mobile App",
    titleAr: "تطبيق توصيل الطعام المحمول",
    category: "Mobile App",
    categoryAr: "تطبيق محمول",
    industry: "Food & Beverage",
    industryAr: "الطعام والشراب",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Native mobile app for food delivery with real-time tracking and payment integration.",
    descriptionAr: "تطبيق محمول أصلي لتوصيل الطعام مع تتبع فوري وتكامل الدفع.",
    technologies: ["React Native", "Express.js", "PostgreSQL", "Firebase"],
    year: "2023",
    client: "Gourmet Delights",
    clientAr: "لذائذ الذواقة",
    link: "#",
    achievements: ["10k+ downloads", "4.8-star rating", "30-minute delivery guarantee"],
    achievementsAr: ["أكثر من 10 آلاف تحميل", "تقييم 4.8 نجوم", "ضمان التسليم خلال 30 دقيقة"]
  },
  {
    id: 4,
    title: "Educational Learning Platform",
    titleAr: "منصة التعلم التعليمية",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    industry: "Education",
    industryAr: "التعليم",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Interactive online learning platform with video courses, quizzes, and progress tracking.",
    descriptionAr: "منصة تعلم تفاعلية عبر الإنترنت مع دورات فيديو واختبارات وتتبع التقدم.",
    technologies: ["Angular", "Spring Boot", "MySQL", "AWS"],
    year: "2023",
    client: "Future Academy",
    clientAr: "أكاديمية المستقبل",
    link: "#",
    achievements: ["5000+ active students", "95% completion rate", "Multi-language support"],
    achievementsAr: ["أكثر من 5000 طالب نشط", "معدل إكمال 95%", "دعم متعدد اللغات"]
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    titleAr: "إعادة تصميم موقع الشركة",
    category: "Web Design",
    categoryAr: "تصميم الويب",
    industry: "Technology",
    industryAr: "التكنولوجيا",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Modern, responsive corporate website with improved UX and SEO optimization.",
    descriptionAr: "موقع شركة حديث ومتجاوب مع تحسين UX وتحسين محركات البحث.",
    technologies: ["Next.js", "TailwindCSS", "Contentful", "Vercel"],
    year: "2023",
    client: "TechMart",
    clientAr: "تك مارت",
    link: "#",
    achievements: ["300% increase in organic traffic", "Page load time under 2s", "Accessibility compliant"],
    achievementsAr: ["زيادة حركة المرور العضوية بنسبة 300%", "وقت تحميل الصفحة أقل من ثانيتين", "متوافق مع إمكانية الوصول"]
  },
  {
    id: 6,
    title: "Fitness Tracking Mobile App",
    titleAr: "تطبيق تتبع اللياقة البدنية",
    category: "Mobile App",
    categoryAr: "تطبيق محمول",
    industry: "Health & Fitness",
    industryAr: "الصحة واللياقة البدنية",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive fitness app with workout tracking, nutrition plans, and social features.",
    descriptionAr: "تطبيق لياقة شامل مع تتبع التمارين وخطط التغذية والميزات الاجتماعية.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    year: "2024",
    client: "FitLife",
    clientAr: "فيت لايف",
    link: "#",
    achievements: ["50k+ active users", "4.7-star rating", "Featured on app stores"],
    achievementsAr: ["أكثر من 50 ألف مستخدم نشط", "تقييم 4.7 نجوم", "مميز في متاجر التطبيقات"]
  },
  {
    id: 7,
    title: "Real Estate Portal",
    titleAr: "بوابة العقارات",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    industry: "Real Estate",
    industryAr: "العقارات",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Advanced property listing platform with virtual tours and mortgage calculator.",
    descriptionAr: "منصة متقدمة لإدراج العقارات مع جولات افتراضية وحاسبة الرهن العقاري.",
    technologies: ["React", "Django", "PostgreSQL", "Mapbox"],
    year: "2023",
    client: "Prime Properties",
    clientAr: "العقارات الراقية",
    link: "#",
    achievements: ["1000+ property listings", "Virtual tour integration", "Advanced search filters"],
    achievementsAr: ["أكثر من 1000 إعلان عقاري", "تكامل الجولة الافتراضية", "مرشحات بحث متقدمة"]
  },
  {
    id: 8,
    title: "Inventory Management System",
    titleAr: "نظام إدارة المخزون",
    category: "Enterprise Software",
    categoryAr: "برمجيات المؤسسات",
    industry: "Retail",
    industryAr: "التجارة",
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive inventory management with barcode scanning and automated reordering.",
    descriptionAr: "إدارة مخزون شاملة مع مسح الباركود وإعادة الطلب التلقائي.",
    technologies: ["Vue.js", "ASP.NET Core", "SQL Server", "Azure"],
    year: "2024",
    client: "Smart Retail",
    clientAr: "التجارة الذكية",
    link: "#",
    achievements: ["Reduced stockouts by 80%", "Automated reporting", "Multi-location support"],
    achievementsAr: ["تقليل نفاد المخزون بنسبة 80%", "التقارير التلقائية", "دعم المواقع المتعددة"]
  }
];

const categories = [
  { en: "All", ar: "الكل" },
  { en: "E-commerce", ar: "التجارة الإلكترونية" },
  { en: "Web Development", ar: "تطوير الويب" },
  { en: "Mobile App", ar: "تطبيق محمول" },
  { en: "Web Design", ar: "تصميم الويب" },
  { en: "Enterprise Software", ar: "برمجيات المؤسسات" }
];

const industries = [
  { en: "All", ar: "الكل" },
  { en: "Fashion", ar: "الأزياء" },
  { en: "Healthcare", ar: "الرعاية الصحية" },
  { en: "Food & Beverage", ar: "الطعام والشراب" },
  { en: "Education", ar: "التعليم" },
  { en: "Technology", ar: "التكنولوجيا" },
  { en: "Health & Fitness", ar: "الصحة واللياقة البدنية" },
  { en: "Real Estate", ar: "العقارات" },
  { en: "Retail", ar: "التجارة" }
];

export default function AllProjects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    const industryMatch = activeIndustry === "All" || project.industry === activeIndustry;
    return categoryMatch && industryMatch;
  });

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'جميع مشاريعنا' : 'All Our Projects'}
            </h1>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'استكشف معرض أعمالنا المتنوع عبر مختلف الصناعات والتقنيات'
                : 'Explore our diverse portfolio of work across various industries and technologies'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-3 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {language === 'ar' ? 'الفئة:' : 'Category:'}
            </h3>
            <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
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

          {/* Industry Filter */}
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {language === 'ar' ? 'الصناعة:' : 'Industry:'}
            </h3>
            <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {industries.map((industry) => (
                <button
                  key={industry.en}
                  onClick={() => setActiveIndustry(industry.en)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeIndustry === industry.en
                      ? "bg-accent text-gray-800 shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } ${language === 'ar' ? 'font-arabic' : ''}`}
                >
                  {language === 'ar' ? industry.ar : industry.en}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={language === 'ar' ? project.titleAr : project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className={language === 'ar' ? 'font-arabic' : ''}>
                          {language === 'ar' ? 'عرض المشروع' : 'View Project'}
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <div className={`p-6 ${language === 'ar' ? 'text-right' : ''}`}>
                  <div className={`flex items-center gap-4 mb-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className={`px-3 py-1 bg-primary/10 text-primary text-sm rounded-full ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? project.categoryAr : project.category}
                    </span>
                    <span className={`px-3 py-1 bg-accent/10 text-accent text-sm rounded-full ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? project.industryAr : project.industry}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? project.titleAr : project.title}
                  </h3>

                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                    {language === 'ar' ? project.descriptionAr : project.description}
                  </p>

                  <div className={`flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Calendar size={16} />
                      <span className={language === 'ar' ? 'font-arabic' : ''}>{project.year}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <Users size={16} />
                      <span className={language === 'ar' ? 'font-arabic' : ''}>
                        {language === 'ar' ? project.clientAr : project.client}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies Used:'}
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 text-primary flex items-center gap-2 ${language === 'ar' ? 'font-arabic flex-row-reverse' : ''}`}>
                      <Award size={16} />
                      {language === 'ar' ? 'الإنجازات الرئيسية:' : 'Key Achievements:'}
                    </h4>
                    <ul className={`space-y-1 ${language === 'ar' ? 'text-right' : ''}`}>
                      {(language === 'ar' ? project.achievementsAr : project.achievements).map((achievement, index) => (
                        <li key={index} className={`text-sm text-gray-600 dark:text-gray-300 flex items-center ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                          <span className={`w-1.5 h-1.5 bg-accent rounded-full ${language === 'ar' ? 'ml-2' : 'mr-2'}`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={`text-center py-12 ${language === 'ar' ? 'text-right' : ''}`}>
              <p className={`text-gray-500 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'لا توجد مشاريع تطابق الفلاتر المحددة' : 'No projects match the selected filters'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مستعد لبدء مشروعك القادم؟' : 'Ready to Start Your Next Project?'}
            </h2>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'دعنا نساعدك في تحويل فكرتك إلى مشروع ناجح مثل المشاريع التي رأيتها'
                : 'Let us help you transform your idea into a successful project like the ones you\'ve seen'
              }
            </p>
            <Button className={`btn-primary text-lg px-8 py-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
