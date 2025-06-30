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
      name: language === 'ar' ? 'م. محمد المهدي' : 'Mohamed El-Mahdi',
      position: language === 'ar' ? 'المدير التنفيذي' : 'CEO',
      bio: language === 'ar'
        ? 'يقود شركتنا برؤية استراتيجية وخبرة واسعة في إدارة الأعمال وتطوير المشاريع الرقمية.'
        : 'Leads our company with strategic vision and extensive experience in business management and digital project development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mohamed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. أحمد المهدي' : 'Ahmed El-Mahdi',
      position: language === 'ar' ? 'مؤسس مشارك' : 'Co-Founder',
      bio: language === 'ar'
        ? 'مؤسس مشارك يساهم في نمو الشركة وتطويرها من خلال خبرته العميقة في السوق.'
        : 'A co-founder contributing to the company\'s growth and development with his deep market expertise.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ahmed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. ممدوح الناجي' : 'Mamdouh El-Nagy',
      position: language === 'ar' ? 'مدير العمليات' : 'Operations Manager',
      bio: language === 'ar'
        ? 'يتولى إدارة العمليات اليومية لضمان سلاسة سير العمل وتحقيق الكفاءة القصوى.'
        : 'Manages daily operations to ensure smooth workflow and maximum efficiency.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mamdouh@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. ناهد الطلاوي' : 'Nahed El-Tallawy',
      position: language === 'ar' ? 'مديرة التسويق' : 'Marketing Manager',
      bio: language === 'ar'
        ? 'خبيرة في استراتيجيات التسويق الرقمي وتطوير العلامات التجارية.'
        : 'An expert in digital marketing strategies and brand development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nahed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'ا. محمود أبو الليل' : 'Mahmoud Aboul-Leil',
      position: language === 'ar' ? 'مدير التعاقدات' : 'Contracting Manager',
      bio: language === 'ar'
        ? 'يدير جميع جوانب التعاقدات لضمان أفضل الشراكات والاتفاقيات.'
        : 'Manages all aspects of contracting to ensure the best partnerships and agreements.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mahmoud@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. سعد المصري' : 'Saad El-Masry',
      position: language === 'ar' ? 'مدير قسم التصوير' : 'Director of Photography Department',
      bio: language === 'ar'
        ? 'يقود فريق التصوير لتقديم محتوى بصري عالي الجودة لعملائنا.'
        : 'Leads the photography team to deliver high-quality visual content for our clients.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'saad@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. أحمد محمود' : 'Ahmed Mahmoud',
      position: language === 'ar' ? 'مدير التطوير' : 'Development Manager',
      bio: language === 'ar'
        ? 'يشرف على فريق التطوير لتقديم حلول تقنية متقدمة ومبتكرة.'
        : 'Oversees the development team to deliver advanced and innovative technical solutions.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ahmed.m@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. عبدالرحمن وليد' : 'Abdelrahman Walid',
      position: language === 'ar' ? 'مدير فني ورئيس فريق الجرافيك' : 'Art Director and Graphic Team Lead',
      bio: language === 'ar'
        ? 'يقود الرؤية الإبداعية ويشرف على تصميماتنا البصرية لضمان أعلى مستوى من الجودة.'
        : 'Leads the creative vision and oversees our visual designs to ensure the highest quality.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'abdelrahman@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'ا. حنان صفوت' : 'Hanan Safwat',
      position: language === 'ar' ? 'مساعدة المدير' : 'Assistant Manager',
      bio: language === 'ar'
        ? 'تقدم الدعم الإداري اللازم لضمان كفاءة العمليات اليومية.'
        : 'Provides essential administrative support to ensure the efficiency of daily operations.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'hanan@ebusinessgate.com'
      }
    },
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
                  ? 'تعرف على قصتنا ورؤيتنا وفريقنا المتميز الذي يجعل التحول الرقمي ممكنًا.'
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
  {/* التميز / Excellence */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.excellence')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.excellence')}
        </span>
      </>
    )}
  </li>

  {/* الابتكار / Innovation */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.innovation')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.innovation')}
        </span>
      </>
    )}
  </li>

  {/* النزاهة / Integrity */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.integrity')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.integrity')}
        </span>
      </>
    )}
  </li>

  {/* التعاون / Collaboration */}
  <li className={`flex items-center ${language === 'ar' ? 'justify-end font-arabic' : ''}`}>
    {language === 'ar' ? (
      <>
        <span className="text-right leading-relaxed">
          {t('about.values.collaboration')}
        </span>
        <span className="text-primary mr-2">✓</span>
      </>
    ) : (
      <>
        <span className="text-primary mr-2">✓</span>
        <span>
          {t('about.values.collaboration')}
        </span>
      </>
    )}
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
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${language === 'ar' ? 'justify-end items-end text-right' : 'justify-center text-center'}`}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              {[
                { title: language === 'ar' ? 'التميز' : 'Excellence', description: t('about.values.excellence'), icon: '🏆' },
                { title: language === 'ar' ? 'الابتكار' : 'Innovation', description: t('about.values.innovation'), icon: '💡' },
                { title: language === 'ar' ? 'النزاهة' : 'Integrity', description: t('about.values.integrity'), icon: '🤝' },
                { title: language === 'ar' ? 'التعاون' : 'Collaboration', description: t('about.values.collaboration'), icon: '👥' }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`animate-stagger bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${language === 'ar' ? 'text-right' : 'text-center'}`}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
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
                  ? 'تعرف على الخبراء الذين يقفون وراء نجاح مشاريعنا.'
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
                    {/* Placeholder for team member image */}
                    <div className="w-24 h-24 rounded-full mx-auto bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-lg">
                      {/* You can add initials or a generic icon here */}
                      {member.name.charAt(0)}
                    </div> 
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
                ? 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي.'
                : 'Let us help you transform your ideas into digital reality'
              }
            </p>
            <Link to="/ContactUs">
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