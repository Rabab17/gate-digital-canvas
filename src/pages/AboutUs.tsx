
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function AboutUs() {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      position: language === 'ar' ? 'مدير عام' : 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: language === 'ar' 
        ? 'خبير في التقنيات الرقمية مع أكثر من 15 عامًا من الخبرة في قيادة المشاريع التقنية المعقدة.'
        : 'Digital technology expert with over 15 years of experience leading complex tech projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ahmed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'سارة أحمد' : 'Sarah Ahmed',
      position: language === 'ar' ? 'مديرة التطوير' : 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face',
      bio: language === 'ar'
        ? 'مهندسة برمجيات متخصصة في تطوير التطبيقات المتطورة والحلول السحابية.'
        : 'Software engineer specializing in advanced application development and cloud solutions.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'sarah@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'محمد علي' : 'Mohamed Ali',
      position: language === 'ar' ? 'مدير التسويق' : 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: language === 'ar'
        ? 'خبير في استراتيجيات التسويق الرقمي وإدارة العلامات التجارية.'
        : 'Expert in digital marketing strategies and brand management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mohamed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'فاطمة حسن' : 'Fatima Hassan',
      position: language === 'ar' ? 'مديرة التصميم' : 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: language === 'ar'
        ? 'مصممة مبدعة متخصصة في تجربة المستخدم والهوية البصرية.'
        : 'Creative designer specializing in user experience and visual identity.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'fatima@ebusinessgate.com'
      }
    }
  ];

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
                {t('about.title')}
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar' 
                  ? 'تعرف على قصتنا ورؤيتنا وفريقنا المتميز الذي يجعل التحول الرقمي ممكناً'
                  : 'Learn about our story, vision, and the exceptional team that makes digital transformation possible'
                }
              </p>
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="slideUp" delay={200}>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className={language === 'ar' ? 'text-right' : ''}>
                <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('about.vision.title')}
                </h2>
                <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {t('about.vision.description')}
                </p>
                
                <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('about.mission.title')}
                </h2>
                <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}>
                  {t('about.mission.description')}
                </p>
                 <p className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.values.title')}
            </p>
            <ul className="mb-8 space-y-2">
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>✓</span>
                <span className={language === 'ar' ? 'font-arabic text-right' : ''}>
                  {t('about.values.excellence')}
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>✓</span>
                <span className={language === 'ar' ? 'font-arabic text-right' : ''}>
                  {t('about.values.innovation')}
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>✓</span>
                <span className={language === 'ar' ? 'font-arabic text-right' : ''}>
                  {t('about.values.integrity')}
                </span>
              </li>
              <li className={`flex items-start ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <span className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>✓</span>
                <span className={language === 'ar' ? 'font-arabic text-right' : ''}>
                  {t('about.values.collaboration')}
                </span>
              </li>
            </ul>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Our Team"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="stagger" delay={300}>
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('about.values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: language === 'ar' ? 'التميز' : 'Excellence', description: t('about.values.excellence'), icon: '🏆' },
                { title: language === 'ar' ? 'الابتكار' : 'Innovation', description: t('about.values.innovation'), icon: '💡' },
                { title: language === 'ar' ? 'النزاهة' : 'Integrity', description: t('about.values.integrity'), icon: '🤝' },
                { title: language === 'ar' ? 'التعاون' : 'Collaboration', description: t('about.values.collaboration'), icon: '👥' }
              ].map((value, index) => (
                <div key={index} className="animate-stagger bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{value.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 text-center ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="slideUp" delay={400}>
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'فريقنا الإبداعي' : 'Our Creative Team'}
              </h2>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar' 
                  ? 'تعرف على الخبراء الذين يقفون وراء نجاح مشاريعنا'
                  : 'Meet the experts behind our successful projects'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className={`text-center ${language === 'ar' ? 'text-right' : ''}`}>
                    <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {member.name}
                    </h3>
                    <p className={`text-primary font-medium mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {member.position}
                    </p>
                    <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {member.bio}
                    </p>
                    
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="fadeIn" delay={500}>
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className={`text-xl mb-8 opacity-90 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي'
                : 'Let us help you transform your ideas into digital reality'
              }
            </p>
            <Link to="/#contact">
              <Button 
                className={`bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
              </Button>
            </Link>
          </div>
        </section>
      </AnimationEffect>

      <Footer />
    </div>
  );
}
