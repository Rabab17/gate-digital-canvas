import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Button } from "@/components/ui/button";

// استيراد الصور الفعلية
import logo1 from "../assets/الامراء-للسجاد.png"; // تأكد من المسار الصحيح
import logo2 from "../assets/لوجو الحرمين.png";   // تأكد من المسار الصحيح
import logo3 from "../assets/لوجو روزي كاربت.jpg"; // تأكد من المسار الصحيح
import logo4 from "../assets/Hardees-Logo-2006.png"; // تأكد من المسار الصحيح
import logo5 from "../assets/Americana.png";     // تأكد من المسار الصحيح
import logo6 from "../assets/dc.png";       // تأكد من المسار الصحيح
import logo7 from "../assets/masar logo - 2 (2).png"; // تأكد من المسار الصحيح
import logo8 from "../assets/لوجو ميرميد.png";   // تأكد من المسار الصحيح

export default function AllClients() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All' },
    { id: 'medical', name: language === 'ar' ? 'طبي' : 'Medical' },
    { id: 'educational', name: language === 'ar' ? 'تعليمي' : 'Educational' },
    { id: 'restaurants', name: language === 'ar' ? 'مطاعم ومقاهي' : 'Restaurants & Cafes' },
    { id: 'fashion', name: language === 'ar' ? 'أزياء وملابس' : 'Fashion & Apparel' },
    { id: 'cosmetics', name: language === 'ar' ? 'عطور ومستحضرات تجميل' : 'Perfume & Cosmetics' },
    { id: 'electronics', name: language === 'ar' ? 'إلكترونيات وأجهزة' : 'Electronics & Appliances' },
  ];

  const clients = [
    // تم إضافة الصور الفعلية هنا
    { name: "الأمراء للسجاد", logo: logo1, category: "fashion", description: language === 'ar' ? 'شركة رائدة في صناعة السجاد والمفروشات.' : 'Leading company in carpets and furnishings.' },
    { name: "الحرمين", logo: logo2, category: "restaurants", description: language === 'ar' ? 'مطاعم متخصصة في المأكولات الشرقية.' : 'Restaurants specializing in oriental cuisine.' },
    { name: "روزي كاربت", logo: logo3, category: "fashion", description: language === 'ar' ? 'علامة تجارية للسجاد الفاخر والتصميمات الحديثة.' : 'Luxury carpet brand with modern designs.' },
    { name: "Hardees", logo: logo4, category: "restaurants", description: language === 'ar' ? 'سلسلة مطاعم وجبات سريعة عالمية.' : 'Global fast-food restaurant chain.' },
    { name: "Americana", logo: logo5, category: "restaurants", description: language === 'ar' ? 'مجموعة شركات رائدة في قطاع الأغذية والمشروبات.' : 'Leading group of companies in the food and beverage sector.' },
    { name: "DC Comics", logo: logo6, category: "educational", description: language === 'ar' ? 'دار نشر قصص مصورة وترفيه.' : 'Comic book publisher and entertainment.' },
    { name: "Masar Logo", logo: logo7, category: "educational", description: language === 'ar' ? 'منصة تعليمية متطورة لتقديم الدورات والتدريب.' : 'Advanced educational platform for courses and training.' },
    { name: "ميرميد", logo: logo8, category: "cosmetics", description: language === 'ar' ? 'منتجات تجميل وعناية بالبشرة.' : 'Beauty and skincare products.' },

    // يمكنك إضافة المزيد من العملاء هنا مع صورهم الفعلية وتصنيفاتهم الصحيحة
    // إذا كان لديك عملاء آخرون، تأكد من استيراد صورهم أولاً ثم إضافتهم هنا
  ];

  const filteredClients = selectedCategory === 'all'
    ? clients
    : clients.filter(client => client.category === selectedCategory);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <Header />

      <AnimationEffect animationType="fadeIn" delay={100}>
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center ">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar'
                  ? 'موثوق بنا من قبل الشركات الرائدة في مختلف الصناعات حول العالم.'
                  : 'Trusted by leading companies across various industries worldwide'
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
           <div className={`flex flex-wrap justify-center gap-4 mb-12 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
  {(language === 'ar' ? [...categories].reverse() : categories).map((category) => (
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


            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClients.map((client, index) => (
                <AnimationEffect key={`${client.name}-${selectedCategory}`} animationType="scale" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center justify-center mb-6 h-24">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className={`text-xl font-bold text-center mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {client.name}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-300 text-center ${
                      language === 'ar' ? 'font-arabic text-right' : ''
                    }`}>
                      {client.description}
                    </p>
                    <div className="mt-6 text-center">
                      <span className={`inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium ${
                        language === 'ar' ? 'font-arabic' : ''
                      }`}>
                        {categories.find(cat => cat.id === client.category)?.name}
                      </span>
                    </div>
                  </div>
                </AnimationEffect>
              ))}
            </div>

            {filteredClients.length === 0 && (
              <div className="text-center py-16">
                <p className={`text-gray-500 text-lg ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'لا يوجد عملاء في هذه الفئة.' : 'No clients found in this category'}
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