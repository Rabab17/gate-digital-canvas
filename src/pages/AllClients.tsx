
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Button } from "@/components/ui/button";

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
    // Medical
    { name: "MedCare Hospital", logo: "https://via.placeholder.com/200x100?text=MedCare", category: "medical", description: language === 'ar' ? 'مستشفى رائد في الرعاية الصحية' : 'Leading healthcare provider' },
    { name: "HealthTech Solutions", logo: "https://via.placeholder.com/200x100?text=HealthTech", category: "medical", description: language === 'ar' ? 'حلول تقنية طبية متطورة' : 'Advanced medical technology solutions' },
    { name: "CarePlus Clinic", logo: "https://via.placeholder.com/200x100?text=CarePlus", category: "medical", description: language === 'ar' ? 'عيادة طبية متخصصة' : 'Specialized medical clinic' },
    
    // Educational
    { name: "Future Academy", logo: "https://via.placeholder.com/200x100?text=Future+Academy", category: "educational", description: language === 'ar' ? 'أكاديمية تعليمية رائدة' : 'Leading educational academy' },
    { name: "Smart Learning", logo: "https://via.placeholder.com/200x100?text=Smart+Learning", category: "educational", description: language === 'ar' ? 'منصة تعليم ذكية' : 'Smart learning platform' },
    { name: "EduTech Institute", logo: "https://via.placeholder.com/200x100?text=EduTech", category: "educational", description: language === 'ar' ? 'معهد تقني تعليمي' : 'Educational technology institute' },
    
    // Restaurants
    { name: "Gourmet Delights", logo: "https://via.placeholder.com/200x100?text=Gourmet", category: "restaurants", description: language === 'ar' ? 'مطعم راقي للأطباق الشهية' : 'Fine dining restaurant' },
    { name: "Coffee Corner", logo: "https://via.placeholder.com/200x100?text=Coffee+Corner", category: "restaurants", description: language === 'ar' ? 'مقهى مميز' : 'Premium coffee shop' },
    { name: "Fresh Bites", logo: "https://via.placeholder.com/200x100?text=Fresh+Bites", category: "restaurants", description: language === 'ar' ? 'مطعم طعام صحي' : 'Healthy food restaurant' },
    
    // Fashion
    { name: "Style Studio", logo: "https://via.placeholder.com/200x100?text=Style+Studio", category: "fashion", description: language === 'ar' ? 'استوديو أزياء عصري' : 'Modern fashion studio' },
    { name: "Trendy Wear", logo: "https://via.placeholder.com/200x100?text=Trendy+Wear", category: "fashion", description: language === 'ar' ? 'ملابس عصرية' : 'Trendy clothing brand' },
    { name: "Fashion Forward", logo: "https://via.placeholder.com/200x100?text=Fashion+Forward", category: "fashion", description: language === 'ar' ? 'علامة تجارية أزياء متقدمة' : 'Forward-thinking fashion brand' },
    
    // Cosmetics
    { name: "Beauty Essence", logo: "https://via.placeholder.com/200x100?text=Beauty+Essence", category: "cosmetics", description: language === 'ar' ? 'منتجات تجميل طبيعية' : 'Natural beauty products' },
    { name: "Fragrance World", logo: "https://via.placeholder.com/200x100?text=Fragrance+World", category: "cosmetics", description: language === 'ar' ? 'عالم العطور الفاخرة' : 'Luxury fragrance world' },
    { name: "Glam Cosmetics", logo: "https://via.placeholder.com/200x100?text=Glam+Cosmetics", category: "cosmetics", description: language === 'ar' ? 'مستحضرات تجميل فاخرة' : 'Premium cosmetics brand' },
    
    // Electronics
    { name: "TechGiant", logo: "https://via.placeholder.com/200x100?text=TechGiant", category: "electronics", description: language === 'ar' ? 'عملاق التكنولوجيا' : 'Technology giant' },
    { name: "Digital Solutions", logo: "https://via.placeholder.com/200x100?text=Digital+Solutions", category: "electronics", description: language === 'ar' ? 'حلول رقمية متطورة' : 'Advanced digital solutions' },
    { name: "Smart Devices", logo: "https://via.placeholder.com/200x100?text=Smart+Devices", category: "electronics", description: language === 'ar' ? 'أجهزة ذكية' : 'Smart devices manufacturer' },
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
            <div className="text-center mb-16">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ${
                language === 'ar' ? 'font-arabic' : ''
              }`}>
                {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
              </h1>
              <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${
                language === 'ar' ? 'font-arabic text-right' : ''
              }`}>
                {language === 'ar' 
                  ? 'موثوق بنا من قبل الشركات الرائدة في مختلف الصناعات حول العالم'
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
                  {language === 'ar' ? 'لا توجد عملاء في هذه الفئة' : 'No clients found in this category'}
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
