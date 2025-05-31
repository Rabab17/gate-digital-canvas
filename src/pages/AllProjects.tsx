
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

export default function AllProjects() {
  const { language } = useLanguage();
  const [selectedServiceFilter, setSelectedServiceFilter] = useState('all');
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState('all');

  const serviceTypes = [
    { id: 'all', name: language === 'ar' ? 'جميع الخدمات' : 'All Services' },
    { id: 'ecommerce', name: language === 'ar' ? 'التجارة الإلكترونية' : 'E-commerce' },
    { id: 'corporate', name: language === 'ar' ? 'مواقع الشركات' : 'Corporate' },
    { id: 'mobile', name: language === 'ar' ? 'تطبيقات محمولة' : 'Mobile Apps' },
    { id: 'branding', name: language === 'ar' ? 'هوية بصرية' : 'Branding' }
  ];

  const industries = [
    { id: 'all', name: language === 'ar' ? 'جميع الصناعات' : 'All Industries' },
    { id: 'healthcare', name: language === 'ar' ? 'الرعاية الصحية' : 'Healthcare' },
    { id: 'education', name: language === 'ar' ? 'التعليم' : 'Education' },
    { id: 'food', name: language === 'ar' ? 'الطعام والمشروبات' : 'Food & Beverage' },
    { id: 'technology', name: language === 'ar' ? 'التكنولوجيا' : 'Technology' },
    { id: 'fashion', name: language === 'ar' ? 'الأزياء' : 'Fashion' }
  ];

  const projects = [
    {
      id: 1,
      title: language === 'ar' ? 'منصة التجارة الإلكترونية الطبية' : 'MedStore E-commerce Platform',
      description: language === 'ar' ? 'متجر إلكتروني متكامل للمنتجات الطبية مع نظام إدارة متقدم' : 'Complete e-commerce platform for medical products with advanced management system',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      serviceType: 'ecommerce',
      industry: 'healthcare',
      client: 'MedCare Solutions',
      completionDate: '2024-01-15',
      teamSize: 8,
      duration: language === 'ar' ? '6 أشهر' : '6 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        language === 'ar' ? 'نظام دفع متقدم' : 'Advanced payment system',
        language === 'ar' ? 'إدارة المخزون' : 'Inventory management',
        language === 'ar' ? 'تطبيق محمول' : 'Mobile app'
      ],
      results: {
        sales: language === 'ar' ? '+250% في المبيعات' : '+250% in sales',
        users: language === 'ar' ? '10,000+ مستخدم' : '10,000+ users',
        satisfaction: language === 'ar' ? '98% رضا العملاء' : '98% customer satisfaction'
      }
    },
    {
      id: 2,
      title: language === 'ar' ? 'منصة التعليم الذكية' : 'SmartLearn Educational Platform',
      description: language === 'ar' ? 'منصة تعليمية تفاعلية مع نظام إدارة التعلم المتقدم' : 'Interactive educational platform with advanced learning management system',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      serviceType: 'corporate',
      industry: 'education',
      client: 'Future Academy',
      completionDate: '2023-11-20',
      teamSize: 6,
      duration: language === 'ar' ? '4 أشهر' : '4 months',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'WebRTC'],
      features: [
        language === 'ar' ? 'فصول افتراضية' : 'Virtual classrooms',
        language === 'ar' ? 'تتبع التقدم' : 'Progress tracking',
        language === 'ar' ? 'اختبارات تفاعلية' : 'Interactive quizzes'
      ],
      results: {
        students: language === 'ar' ? '5,000+ طالب' : '5,000+ students',
        completion: language === 'ar' ? '+85% معدل الإنجاز' : '+85% completion rate',
        engagement: language === 'ar' ? '+60% مشاركة' : '+60% engagement'
      }
    },
    {
      id: 3,
      title: language === 'ar' ? 'تطبيق توصيل الطعام' : 'FoodieExpress Delivery App',
      description: language === 'ar' ? 'تطبيق توصيل طعام شامل مع تتبع مباشر ونظام دفع متكامل' : 'Comprehensive food delivery app with real-time tracking and integrated payment',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      serviceType: 'mobile',
      industry: 'food',
      client: 'Gourmet Delights',
      completionDate: '2024-02-28',
      teamSize: 10,
      duration: language === 'ar' ? '8 أشهر' : '8 months',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'PayPal'],
      features: [
        language === 'ar' ? 'تتبع مباشر' : 'Real-time tracking',
        language === 'ar' ? 'دفع متعدد الطرق' : 'Multiple payment methods',
        language === 'ar' ? 'تقييم المطاعم' : 'Restaurant ratings'
      ],
      results: {
        downloads: language === 'ar' ? '50,000+ تحميل' : '50,000+ downloads',
        orders: language === 'ar' ? '25,000+ طلب' : '25,000+ orders',
        rating: language === 'ar' ? '4.8/5 تقييم' : '4.8/5 rating'
      }
    },
    {
      id: 4,
      title: language === 'ar' ? 'هوية بصرية لشركة التقنية' : 'TechCorp Brand Identity',
      description: language === 'ar' ? 'تصميم هوية بصرية شاملة وموقع إلكتروني متطور' : 'Comprehensive brand identity design and advanced website',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      serviceType: 'branding',
      industry: 'technology',
      client: 'TechCorp Solutions',
      completionDate: '2023-12-10',
      teamSize: 5,
      duration: language === 'ar' ? '3 أشهر' : '3 months',
      technologies: ['Adobe Creative Suite', 'Figma', 'React', 'Tailwind CSS'],
      features: [
        language === 'ar' ? 'شعار متجاوب' : 'Responsive logo',
        language === 'ar' ? 'دليل العلامة التجارية' : 'Brand guidelines',
        language === 'ar' ? 'موقع تفاعلي' : 'Interactive website'
      ],
      results: {
        recognition: language === 'ar' ? '+300% تميز العلامة' : '+300% brand recognition',
        leads: language === 'ar' ? '+180% عملاء محتملين' : '+180% leads',
        conversion: language === 'ar' ? '+120% تحويل' : '+120% conversion'
      }
    },
    {
      id: 5,
      title: language === 'ar' ? 'متجر الأزياء الراقية' : 'LuxeFashion Online Store',
      description: language === 'ar' ? 'متجر إلكتروني فاخر للأزياء مع تجربة تسوق استثنائية' : 'Luxury fashion e-store with exceptional shopping experience',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      serviceType: 'ecommerce',
      industry: 'fashion',
      client: 'Style Studio',
      completionDate: '2024-03-15',
      teamSize: 7,
      duration: language === 'ar' ? '5 أشهر' : '5 months',
      technologies: ['Shopify Plus', 'React', 'Node.js', 'Stripe'],
      features: [
        language === 'ar' ? 'كتالوج تفاعلي' : 'Interactive catalog',
        language === 'ar' ? 'واقع معزز' : 'AR try-on',
        language === 'ar' ? 'برنامج ولاء' : 'Loyalty program'
      ],
      results: {
        revenue: language === 'ar' ? '+400% الإيرادات' : '+400% revenue',
        customers: language === 'ar' ? '15,000+ عميل' : '15,000+ customers',
        retention: language === 'ar' ? '92% معدل العودة' : '92% retention rate'
      }
    },
    {
      id: 6,
      title: language === 'ar' ? 'تطبيق إدارة المستشفى' : 'Hospital Management App',
      description: language === 'ar' ? 'نظام إدارة شامل للمستشفيات مع تطبيق محمول للمرضى' : 'Comprehensive hospital management system with patient mobile app',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      serviceType: 'mobile',
      industry: 'healthcare',
      client: 'HealthCare Plus',
      completionDate: '2024-01-30',
      teamSize: 12,
      duration: language === 'ar' ? '10 أشهر' : '10 months',
      technologies: ['Flutter', 'Django', 'PostgreSQL', 'AWS'],
      features: [
        language === 'ar' ? 'حجز المواعيد' : 'Appointment booking',
        language === 'ar' ? 'السجلات الطبية' : 'Medical records',
        language === 'ar' ? 'استشارات عن بعد' : 'Telemedicine'
      ],
      results: {
        efficiency: language === 'ar' ? '+70% كفاءة' : '+70% efficiency',
        patients: language === 'ar' ? '20,000+ مريض' : '20,000+ patients',
        satisfaction: language === 'ar' ? '96% رضا' : '96% satisfaction'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const serviceMatch = selectedServiceFilter === 'all' || project.serviceType === selectedServiceFilter;
    const industryMatch = selectedIndustryFilter === 'all' || project.industry === selectedIndustryFilter;
    return serviceMatch && industryMatch;
  });

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
                {language === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio'}
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar' 
                  ? 'استكشف مجموعة من مشاريعنا الناجحة التي حققت نتائج استثنائية لعملائنا'
                  : 'Explore our collection of successful projects that achieved exceptional results for our clients'
                }
              </p>
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="slideUp" delay={200}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="mb-12 space-y-6">
              {/* Service Type Filter */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? 'تصفية حسب نوع الخدمة:' : 'Filter by Service Type:'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {serviceTypes.map((type) => (
                    <Button
                      key={type.id}
                      onClick={() => setSelectedServiceFilter(type.id)}
                      variant={selectedServiceFilter === type.id ? "default" : "outline"}
                      className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                        language === 'ar' ? 'font-arabic' : ''
                      } ${
                        selectedServiceFilter === type.id 
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                          : 'hover:bg-primary/10'
                      }`}
                    >
                      {type.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {language === 'ar' ? 'تصفية حسب الصناعة:' : 'Filter by Industry:'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <Button
                      key={industry.id}
                      onClick={() => setSelectedIndustryFilter(industry.id)}
                      variant={selectedIndustryFilter === industry.id ? "default" : "outline"}
                      className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                        language === 'ar' ? 'font-arabic' : ''
                      } ${
                        selectedIndustryFilter === industry.id 
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                          : 'hover:bg-primary/10'
                      }`}
                    >
                      {industry.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <AnimationEffect key={`${project.id}-${selectedServiceFilter}-${selectedIndustryFilter}`} animationType="scale" delay={index * 150}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {serviceTypes.find(type => type.id === project.serviceType)?.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-6 ${
                        language === 'ar' ? 'font-arabic text-right leading-relaxed' : ''
                      }`}>
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <Calendar className={`w-4 h-4 text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                          <span className={language === 'ar' ? 'font-arabic' : ''}>{project.duration}</span>
                        </div>
                        <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <Users className={`w-4 h-4 text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                          <span>{project.teamSize} {language === 'ar' ? 'أعضاء' : 'members'}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className={`font-semibold mb-2 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {language === 'ar' ? 'التقنيات المستخدمة:' : 'Technologies:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className={`font-semibold mb-3 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                          {language === 'ar' ? 'الميزات الرئيسية:' : 'Key Features:'}
                        </h4>
                        <div className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
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
                      </div>

                      {/* Results */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
                        <h4 className={`font-semibold mb-3 flex items-center ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                          <Award className={`w-4 h-4 text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                          {language === 'ar' ? 'النتائج المحققة:' : 'Achieved Results:'}
                        </h4>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          {Object.values(project.results).map((result, resultIndex) => (
                            <div key={resultIndex} className={`text-gray-600 dark:text-gray-300 ${
                              language === 'ar' ? 'font-arabic text-right' : ''
                            }`}>
                              • {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className={`w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium transition-all duration-300 group-hover:scale-105 ${
                          language === 'ar' ? 'font-arabic' : ''
                        }`}
                      >
                        <ExternalLink className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                        {language === 'ar' ? 'عرض تفاصيل المشروع' : 'View Project Details'}
                      </Button>
                    </div>
                  </div>
                </AnimationEffect>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className={`text-gray-500 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'لا توجد مشاريع تطابق الفلاتر المحددة' : 'No projects match the selected filters'}
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimationEffect>

      <Footer />
    </div>
  );
}
