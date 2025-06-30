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

  // Modified serviceTypes to match categories from PortfolioSection.tsx
  const serviceTypes = [
    { id: 'all', name: language === 'ar' ? 'جميع الخدمات' : 'All Services' },
    { id: 'digital_marketing', name: language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing' },
    { id: 'web_development', name: language === 'ar' ? 'تطوير الويب' : 'Web Development' },
    { id: 'branding', name: language === 'ar' ? 'هوية بصرية' : 'Branding' },
    { id: 'graphic_design', name: language === 'ar' ? 'التصميم الجرافيكي' : 'Graphic Design' }
  ];

  // Industries are generalized based on the new projects
  const industries = [
    { id: 'all', name: language === 'ar' ? 'جميع الصناعات' : 'All Industries' },
    { id: 'retail', name: language === 'ar' ? 'التجزئة' : 'Retail' },
    { id: 'food_beverage', name: language === 'ar' ? 'الطعام والمشروبات' : 'Food & Beverage' },
    { id: 'healthcare', name: language === 'ar' ? 'الرعاية الصحية' : 'Healthcare' },
    { id: 'beauty', name: language === 'ar' ? 'الجمال' : 'Beauty' },
  ];

  // Projects array populated solely from the provided PortfolioSection.tsx data
  const projects = [
    {
      id: 1,
      title: "Zoom Optics - Social Media Designs",
      description: language === 'ar' ? 'تصميمات وسائل التواصل الاجتماعي لـ Zoom Optics تهدف لزيادة التفاعل والوعي بالعلامة التجارية.' : 'Social media designs for Zoom Optics aiming to increase engagement and brand awareness.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/85a804226492613.682f30950fc36.jpg",
      serviceType: "digital_marketing",
      industry: "retail", // Categorized as retail
      client: "Zoom Optics",
      completionDate: '2023-10-01',
      teamSize: 3,
      duration: language === 'ar' ? '2 شهر' : '2 months',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Social Media Strategy'],
      features: [
        language === 'ar' ? 'تصميمات جذابة بصريًا' : 'Visually appealing designs',
        language === 'ar' ? 'محتوى متفاعل' : 'Engaging content creation',
        language === 'ar' ? 'تحسين الوعي بالعلامة التجارية' : 'Enhanced brand recognition'
      ],
      results: {
        engagement_rate: language === 'ar' ? '+50% في معدل التفاعل' : '+50% in engagement rate',
        reach_increase: language === 'ar' ? '+100% في الوصول' : '+100% in reach',
      },
      link: "https://www.behance.net/gallery/226492613/Zoom-Social-Media-Glasses",
    },
    {
      id: 2,
      title: "Abu Aya Grills - Social Media",
      description: language === 'ar' ? 'تطوير هوية بصرية كاملة وإدارة حملات وسائل التواصل الاجتماعي لمطعم أبو آية جريلز.' : 'Full brand identity development and social media campaign management for Abu Aya Grills restaurant.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/fd0db0226481611.682f10c120687.jpg",
      serviceType: "branding",
      industry: "food_beverage",
      client: "Abu Aya Grills",
      completionDate: '2023-09-15',
      teamSize: 4,
      duration: language === 'ar' ? '3 أشهر' : '3 months',
      technologies: ['Adobe Creative Suite', 'Content Strategy', 'Social Media Management'],
      features: [
        language === 'ar' ? 'تصميم شعار فريد' : 'Unique logo design',
        language === 'ar' ? 'إرشادات العلامة التجارية' : 'Comprehensive brand guidelines',
        language === 'ar' ? 'إنشاء محتوى عالي الجودة' : 'High-quality content creation'
      ],
      results: {
        brand_awareness: language === 'ar' ? '+200% في الوعي بالعلامة التجارية' : '+200% in brand awareness',
        customer_acquisition: language === 'ar' ? '+30% زيادة في قاعدة العملاء' : '+30% increase in customer base',
      },
      link: "https://www.behance.net/gallery/226481611/Abu-Aya-Grills-Social-Media",
    },
    {
      id: 3,
      title: "Bab Rizq Restaurant - Social Media",
      description: language === 'ar' ? 'تصميم رسوميات جذابة لوسائل التواصل الاجتماعي لمطعم باب رزق لتعزيز التفاعل مع الجمهور.' : 'Designing engaging social media graphics for Bab Rizq Restaurant to boost audience interaction.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/58abbf226485675.682f1cb83c268.jpg",
      serviceType: "graphic_design",
      industry: "food_beverage",
      client: "Bab Rizq Restaurant",
      completionDate: '2023-08-20',
      teamSize: 2,
      duration: language === 'ar' ? '1 شهر' : '1 month',
      technologies: ['Adobe Photoshop', 'Canva', 'Social Media Content'],
      features: [
        language === 'ar' ? 'تصميمات إعلانية إبداعية' : 'Creative ad designs',
        language === 'ar' ? 'رسوميات ترويجية' : 'Promotional graphics',
        language === 'ar' ? 'توافق مع هوية العلامة التجارية' : 'Brand identity consistency'
      ],
      results: {
        likes_increase: language === 'ar' ? '+150% في عدد الإعجابات' : '+150% in likes',
        comments_increase: language === 'ar' ? '+80% في التعليقات' : '+80% in comments',
      },
      link: "https://www.behance.net/gallery/226485675/Bab-Rizq-Restaurant-Social-Media",
    },
    {
      id: 4,
      title: "Elie Clinic - Social Media",
      description: language === 'ar' ? 'تطوير وتنفيذ استراتيجية تسويق رقمي شاملة لعيادة إيلي على مختلف منصات التواصل الاجتماعي.' : 'Developing and executing a comprehensive digital marketing strategy for Elie Clinic across various social media platforms.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/bc189c226486471.682f1edd786ec.jpg",
      serviceType: "digital_marketing",
      industry: "healthcare",
      client: "Elie Clinic",
      completionDate: '2024-04-01',
      teamSize: 3,
      duration: language === 'ar' ? '4 أشهر' : '4 months',
      technologies: ['Facebook Ads Manager', 'Instagram Marketing', 'Content Calendar'],
      features: [
        language === 'ar' ? 'حملات إعلانية مستهدفة' : 'Targeted ad campaigns',
        language === 'ar' ? 'تحليل بيانات الأداء' : 'Performance data analysis',
        language === 'ar' ? 'زيادة الوعي بالخدمات الطبية' : 'Increased awareness of medical services'
      ],
      results: {
        patient_inquiries: language === 'ar' ? '+200% في استفسارات المرضى' : '+200% in patient inquiries',
        website_traffic: language === 'ar' ? '+100% في زيارات الموقع' : '+100% in website traffic',
      },
      link: "https://www.behance.net/gallery/226486471/Elie-Clinic-Social-Media",
    },
    {
      id: 5,
      title: "Intense Perfume House - Social Media",
      description: language === 'ar' ? 'إنشاء هوية بصرية مميزة وإدارة محتوى وسائل التواصل الاجتماعي لـ Intense Perfume House.' : 'Creating a distinctive brand identity and managing social media content for Intense Perfume House.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/64ef35225762787.682328dd627be.jpg",
      serviceType: "branding",
      industry: "beauty",
      client: "Intense Perfume House",
      completionDate: '2023-11-05',
      teamSize: 4,
      duration: language === 'ar' ? '2 أشهر' : '2 months',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Instagram Strategy'],
      features: [
        language === 'ar' ? 'تصميم شعار أيقوني' : 'Iconic logo design',
        language === 'ar' ? 'لوحة مزاج العلامة التجارية' : 'Brand mood board',
        language === 'ar' ? 'محتوى مرئي جذاب' : 'Visually appealing content'
      ],
      results: {
        brand_recognition: language === 'ar' ? '+180% في تميز العلامة التجارية' : '+180% in brand recognition',
        online_presence: language === 'ar' ? 'تحسين كبير في التواجد الرقمي' : 'Significant improvement in digital presence',
      },
      link: "https://www.behance.net/gallery/225762787/Social-media-intense",
    },
    {
      id: 6,
      title: "Al Tazaj Restaurant - Social Media",
      description: language === 'ar' ? 'تصميم رسوميات وحملات لوسائل التواصل الاجتماعي لمطعم الطازج، لتعزيز العروض الخاصة.' : 'Designing graphics and social media campaigns for Al Tazaj Restaurant to promote special offers.',
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/a986a8226487763.682f22ad5e735.jpg",
      serviceType: "graphic_design",
      industry: "food_beverage",
      client: "Al Tazaj Restaurant",
      completionDate: '2023-07-10',
      teamSize: 2,
      duration: language === 'ar' ? '1 شهر' : '1 month',
      technologies: ['Adobe Photoshop', 'Illustrator', 'Marketing Collateral'],
      features: [
        language === 'ar' ? 'تصميمات ترويجية للمنتجات' : 'Promotional product designs',
        language === 'ar' ? 'إعلانات بصرية فعالة' : 'Effective visual advertisements',
        language === 'ar' ? 'زيادة التفاعل مع العروض' : 'Increased engagement with offers'
      ],
      results: {
        promotion_effectiveness: language === 'ar' ? '+90% في فعالية العروض الترويجية' : '+90% in promotion effectiveness',
        customer_engagement: language === 'ar' ? 'زيادة ملحوظة في تفاعل العملاء' : 'Notable increase in customer engagement',
      },
      link: "https://www.behance.net/gallery/226487763/Al-Tazaj-Restaurant-Social-Media",
    },
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

      {/* <AnimationEffect animationType="slideUp" delay={200}> */}
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
                        onClick={() => window.open(project.link, '_blank')}
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
      {/* </AnimationEffect> */}

      <Footer />
    </div>
  );
}