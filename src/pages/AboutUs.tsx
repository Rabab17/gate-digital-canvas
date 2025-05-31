
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    title: "CEO & Founder",
    titleAr: "المؤسس والرئيس التنفيذي",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Leading digital transformation with 15+ years of experience in tech innovation.",
    bioAr: "يقود التحول الرقمي بخبرة تزيد عن 15 عامًا في الابتكار التقني.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ahmed@ebusinessgate.com"
    }
  },
  {
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    title: "Creative Director",
    titleAr: "مديرة الإبداع",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Passionate about creating visually stunning and user-friendly designs that drive engagement.",
    bioAr: "شغوفة بإنشاء تصاميم مذهلة بصريًا وسهلة الاستخدام تحفز التفاعل.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@ebusinessgate.com"
    }
  },
  {
    name: "Mohammed Hassan",
    nameAr: "محمد حسان",
    title: "Lead Developer",
    titleAr: "مطور رئيسي",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Full-stack developer specializing in modern web technologies and scalable solutions.",
    bioAr: "مطور متكامل متخصص في تقنيات الويب الحديثة والحلول القابلة للتطوير.",
    social: {
      linkedin: "#",
      github: "#",
      email: "mohammed@ebusinessgate.com"
    }
  },
  {
    name: "Emily Chen",
    nameAr: "إيميلي تشن",
    title: "Digital Marketing Manager",
    titleAr: "مديرة التسويق الرقمي",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Expert in digital marketing strategies that boost brand visibility and drive conversions.",
    bioAr: "خبيرة في استراتيجيات التسويق الرقمي التي تعزز رؤية العلامة التجارية وتحقق التحويلات.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@ebusinessgate.com"
    }
  }
];

export default function AboutUs() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-4xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'تعرف علينا أكثر' : 'Learn More About Us'}
            </h1>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar' 
                ? 'نحن فريق من المبدعين والمبتكرين المتحمسين لتحويل أفكارك إلى حلول رقمية ناجحة'
                : 'We are a team of creative innovators passionate about transforming your ideas into successful digital solutions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className={language === 'ar' ? 'text-right' : ''}>
              <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'رؤيتنا المفصلة' : 'Our Detailed Vision'}
              </h2>
              <p className={`mb-6 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                {language === 'ar'
                  ? 'منذ تأسيسنا في عام 2010، نسعى لأن نكون الشريك الرقمي الأول للشركات في منطقة الشرق الأوسط. نحن نؤمن بقوة التكنولوجيا في تحويل الأعمال وتحسين حياة الناس.'
                  : 'Since our founding in 2010, we strive to be the premier digital partner for businesses in the Middle East. We believe in the power of technology to transform businesses and improve people\'s lives.'
                }
              </p>
              <p className={`mb-6 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                {language === 'ar'
                  ? 'فريقنا المتنوع من المطورين والمصممين والمسوقين الرقميين يعمل بشغف لتقديم حلول مبتكرة ومخصصة لكل عميل. نحن نفخر بالجودة العالية والخدمة المتميزة التي نقدمها.'
                  : 'Our diverse team of developers, designers, and digital marketers work passionately to deliver innovative and customized solutions for each client. We take pride in the high quality and exceptional service we provide.'
                }
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our Creative Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'الهدف' : 'Purpose'}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                {language === 'ar'
                  ? 'نهدف إلى تمكين الشركات من النجاح في العالم الرقمي من خلال حلول مبتكرة ومؤثرة'
                  : 'We aim to empower businesses to succeed in the digital world through innovative and impactful solutions'
                }
              </p>
            </div>
            <div className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'الابتكار' : 'Innovation'}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                {language === 'ar'
                  ? 'نبقى في المقدمة من خلال تبني أحدث التقنيات والأساليب المبتكرة في جميع مشاريعنا'
                  : 'We stay ahead by embracing the latest technologies and innovative approaches in all our projects'
                }
              </p>
            </div>
            <div className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg ${language === 'ar' ? 'text-right' : ''}`}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'الشراكة' : 'Partnership'}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                {language === 'ar'
                  ? 'نبني علاقات طويلة الأمد مع عملائنا، ونعمل معهم كشركاء حقيقيين في رحلة نجاحهم'
                  : 'We build long-term relationships with our clients, working with them as true partners in their success journey'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'فريقنا الإبداعي' : 'Our Creative Team'}
            </h2>
            <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'تعرف على الأشخاص المبدعين الذين يقفون وراء نجاح مشاريعنا'
                : 'Meet the creative minds behind our successful projects'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={language === 'ar' ? member.nameAr : member.name}
                  className="w-full h-64 object-cover"
                />
                <div className={`p-6 ${language === 'ar' ? 'text-right' : ''}`}>
                  <h3 className={`text-xl font-bold mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? member.nameAr : member.name}
                  </h3>
                  <p className={`text-primary font-medium mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? member.titleAr : member.title}
                  </p>
                  <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
                    {language === 'ar' ? member.bioAr : member.bio}
                  </p>
                  <div className={`flex gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className={`text-center max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
            <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className={`text-xl mb-8 text-gray-600 dark:text-gray-300 ${language === 'ar' ? 'font-arabic leading-relaxed' : ''}`}>
              {language === 'ar'
                ? 'دعنا نساعدك في تحويل فكرتك إلى حقيقة رقمية ناجحة'
                : 'Let us help you transform your idea into a successful digital reality'
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
